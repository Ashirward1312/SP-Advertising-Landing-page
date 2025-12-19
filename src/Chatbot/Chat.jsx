import React, { useEffect, useRef, useState } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";

// Web3Forms endpoint (yahin submit hoga)
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function ChatBot({
  accessKey = "363556af-2a82-49cc-84f0-1f8851f273ab", // NEW Web3Forms access key
  subject = "Chatbot Lead",                             // email subject
  brand = "Assistant",                                  // bot ka naam
  startOpen = false,                                    // true karoge to pehle se open hoga
  bottomOffset = 96,                                    // PX me offset: chat/launcher ko niche se itna upar rakhega (default 96px ~ 6rem)
}) {
  /* ------------------ UI State (open, input, typing, sending) ------------------
     - open: chat window dikhana/ छुपाना
     - input: user ka current text
     - botTyping: "typing..." indicator
     - sending: API call chal rahi ho to true
  ----------------------------------------------------------------------------- */
  const [open, setOpen] = useState(startOpen);
  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const [sending, setSending] = useState(false);

  /* ---------------- Conversation State (step, lead, messages) -----------------
     - step: flow ka current step (name -> address -> email -> confirm ...)
     - lead: collect ki gayi details
     - messages: chat bubbles ka data (bot/user)
  ----------------------------------------------------------------------------- */
  const [step, setStep] = useState("idle"); // idle | askName | askAddress | askEmail | confirm | done | error
  const [lead, setLead] = useState({ name: "", address: "", email: "" });
  const [messages, setMessages] = useState([]);

  // Scroll helpers (naye message par bottom tak scroll)
  const bottomRef = useRef(null);

  /* -------------------------- Auto-scroll on update -------------------------- */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping, open]);

  /* ----------------------- First open par conversation start ------------------ */
  useEffect(() => {
    if (open && step === "idle") {
      startConversation();
    }
  }, [open, step]);

  /* ----------------------------- Bot/User helpers ---------------------------- */
  // Bot ka message bhejna (typing delay ke saath)
  const botSay = async (text) => {
    setBotTyping(true);
    await new Promise((r) => setTimeout(r, 450)); // chota typing delay
    setMessages((m) => [...m, { role: "bot", text }]);
    setBotTyping(false);
  };

  // User message add karna
  const userSay = (text) => setMessages((m) => [...m, { role: "user", text }]);

  // Conversation start
  const startConversation = async () => {
    await botSay(`Hi! I’m your ${brand}.`);
    await botSay("May I know your name?");
    setStep("askName");
  };

  /* ------------------------------- Validations ------------------------------- */
  const isValidName = (s) => s.trim().length >= 2;
  const isValidEmail = (s) => /^\S+@\S+\.\S+$/.test(s.trim());
  const isValidAddress = (s) => s.trim().length >= 6;

  /* ------------------------------- Submit Lead --------------------------------
     - Ab Web3Forms ko FormData ke through submit kar rahe
  ----------------------------------------------------------------------------- */
  const submitLead = async () => {
    setSending(true);
    try {
      const message = [
        "Lead from Chatbot",
        `Name: ${lead.name}`,
        `Address: ${lead.address}`,
        `Email: ${lead.email}`,
        typeof document !== "undefined" ? `Page: ${document.title}` : "",
        typeof window !== "undefined" ? `URL: ${window.location.href}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      // Web3Forms example jaisa FormData use kar rahe
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("subject", subject);
      formData.append("name", lead.name);
      formData.append("email", lead.email);
      formData.append("message", message);
      // extra fields
      if (lead.address) formData.append("address", lead.address);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data?.success) {
        const err = data?.message || `HTTP ${res.status}: ${res.statusText}`;
        console.error("Web3Forms error:", err);
        await botSay(
          `Submission failed: ${err}. Type "retry" to try again or "edit" to restart.`
        );
        setStep("error");
      } else {
        await botSay("Perfect! I’ve submitted your details successfully.");
        await botSay("Our team will reach out soon. Have a great day!");
        setStep("done");
      }
    } catch (e) {
      console.error(e);
      await botSay("There was a network error. Please try again in a moment.");
      setStep("error");
    }
    setSending(false);
  };

  /* ------------------------------ Input Handling ----------------------------- */
  // Enter dabate hi send
  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // User input process karna + state transitions
  const handleSend = async () => {
    const text = input.trim();
    if (!text || botTyping || sending) return;
    setInput("");
    userSay(text);

    if (step === "askName") {
      if (!isValidName(text)) {
        await botSay("Please enter your full name.");
        return;
      }
      setLead((l) => ({ ...l, name: text }));
      await botSay(`Nice to meet you, ${text}! What's your address?`);
      setStep("askAddress");
      return;
    }

    if (step === "askAddress") {
      if (!isValidAddress(text)) {
        await botSay("Please enter a complete address.");
        return;
      }
      setLead((l) => ({ ...l, address: text }));
      await botSay("Thanks! Finally, your email address?");
      setStep("askEmail");
      return;
    }

    if (step === "askEmail") {
      if (!isValidEmail(text)) {
        await botSay(
          "That doesn’t look like a valid email. Please try again (e.g., you@example.com)."
        );
        return;
      }
      setLead((l) => ({ ...l, email: text }));
      await botSay(
        `Please confirm:\n• Name: ${lead.name || "(updating...)"}\n• Address: ${
          lead.address || "(updating...)"
        }\n• Email: ${text}\n\nType "yes" to confirm or "edit" to start over.`
      );
      setStep("confirm");
      return;
    }

    if (step === "confirm") {
      const t = text.toLowerCase();
      if (["yes", "y", "confirm", "ok"].includes(t)) {
        await botSay("Submitting your details...");
        await submitLead();
        return;
      }
      if (["edit", "restart", "no"].includes(t)) {
        await botSay("No problem. Let’s start again. What’s your name?");
        setLead({ name: "", address: "", email: "" });
        setStep("askName");
        return;
      }
      await botSay('Please type "yes" to confirm or "edit" to start over.');
      return;
    }

    if (step === "error") {
      const t = text.toLowerCase();
      if (["retry", "yes", "y"].includes(t)) {
        await botSay("Retrying submission...");
        await submitLead();
      } else {
        await botSay("Okay, we can try later. Type anything to start again.");
        setStep("askName");
      }
      return;
    }

    if (step === "done") {
      await botSay("If you need anything else, just type your query.");
      return;
    }

    // Agar aise hi kuch bhej diya aur bot idle me ho
    if (step === "idle") {
      await startConversation();
    }
  };

  /* ------------------------------- UI Rendering ------------------------------ */

  return (
    <>
      {/* Launcher button (bottom-right, upar shift via bottomOffset) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{ bottom: bottomOffset }} // yahan se vertical position control karo
          className="fixed right-4 z-50 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-white shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
          aria-label="Open chat"
        >
          <FaComments />
          <span className="hidden sm:inline">Chat</span>
        </button>
      )}

      {/* Chat window (yahin bhi same offset laga diya) */}
      {open && (
        <div
          style={{ bottom: bottomOffset }} // chat box ko niche se itna upar rakhe
          className="fixed right-4 z-50 w-[92vw] max-w-sm sm:max-w-md"
        >
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-2xl flex flex-col h-[70vh] max-h-[560px]">
            {/* Header */}
            <div className="relative bg-slate-900 text-white px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm tracking-wide text-white/80">
                    Chat with us
                  </div>
                  <div className="text-lg font-semibold">
                    Property Assistant
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>
              {/* हल्का orange glow */}
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(500px 200px at 80% -20%, rgba(251,146,60,0.18), transparent 60%)",
                }}
              />
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto bg-slate-50 px-3 py-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`mb-2 flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3 py-2 text-sm shadow-sm ${
                      m.role === "user"
                        ? "bg-orange-500 text-white"
                        : "bg-white text-slate-800 ring-1 ring-slate-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {botTyping && (
                <div className="mb-2 flex justify-start">
                  <div className="rounded-2xl px-3 py-2 text-sm shadow-sm bg-white ring-1 ring-slate-200">
                    <span className="inline-flex gap-1">
                      <span className="h-2 w-2 animate-bounce bg-slate-400 rounded-full"></span>
                      <span className="h-2 w-2 animate-bounce [animation-delay:0.1s] bg-slate-400 rounded-full"></span>
                      <span className="h-2 w-2 animate-bounce [animation-delay:0.2s] bg-slate-400 rounded-full"></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Confirm / Retry quick actions */}
            {(step === "confirm" || step === "error") && (
              <div className="px-3 pb-2">
                {step === "confirm" ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        userSay("Yes");
                        botSay("Submitting your details...").then(submitLead);
                      }}
                      className="rounded-full px-3 py-1.5 text-sm ring-1 shadow-sm hover:bg-orange-100 transition-colors bg-orange-50 text-orange-700 ring-orange-100"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => {
                        userSay("Edit");
                        setLead({ name: "", address: "", email: "" });
                        botSay(
                          "No problem. Let’s start again. What’s your name?"
                        );
                        setStep("askName");
                      }}
                      className="rounded-full px-3 py-1.5 text-sm ring-1 shadow-sm hover:bg-slate-100 transition-colors bg-white text-slate-700 ring-slate-200"
                    >
                      Edit details
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        userSay("Retry");
                        botSay("Retrying submission...").then(submitLead);
                      }}
                      className="rounded-full px-3 py-1.5 text-sm ring-1 shadow-sm hover:bg-orange-100 transition-colors bg-orange-50 text-orange-700 ring-orange-100"
                    >
                      Retry
                    </button>
                    <button
                      onClick={() => {
                        userSay("Start over");
                        setLead({ name: "", address: "", email: "" });
                        botSay("Okay, starting over. What’s your name?");
                        setStep("askName");
                      }}
                      className="rounded-full px-3 py-1.5 text-sm ring-1 shadow-sm hover:bg-slate-100 transition-colors bg-white text-slate-700 ring-slate-200"
                    >
                      Start over
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Input area */}
            <div className="border-t border-slate-200 bg-white px-3 py-2">
              <div className="flex items-end gap-2">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Type your message..."
                  className="min-h-[42px] max-h-24 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || botTyping || sending}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 text-white shadow-md disabled:opacity-60"
                  aria-label="Send"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
              <div className="mt-1 text-[11px] text-slate-400 font-poppins">
                Press Enter to send • Shift+Enter for new line
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}