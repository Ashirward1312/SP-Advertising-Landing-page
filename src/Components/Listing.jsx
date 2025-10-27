import { useEffect, useMemo, useRef, useState } from "react";

/* ----------------------------- Sample Data (Raipur) ----------------------------- */
const PROPERTIES = [
  { id: "RPR-1001", title: "3BHK near Marine Drive", type: "Apartment", city: "Telibandha", location: "Marine Drive, Telibandha, Raipur", price: 7500000, area: 1280, beds: 3, baths: 2, featured: true, listedAt: new Date("2025-02-05").getTime(), images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1002", title: "Independent House in Shankar Nagar", type: "House", city: "Shankar Nagar", location: "Shankar Nagar, Raipur", price: 13500000, area: 1800, beds: 4, baths: 4, featured: true, listedAt: new Date("2025-01-25").getTime(), images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1003", title: "Residential Plot in Atal Nagar", type: "Land", city: "Naya Raipur (Atal Nagar)", location: "Sector 19, Atal Nagar", price: 2200000, area: 1200, beds: null, baths: null, featured: false, listedAt: new Date("2024-12-28").getTime(), images: ["https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1004", title: "2BHK in Avanti Vihar", type: "Apartment", city: "Avanti Vihar", location: "Avanti Vihar, Raipur", price: 5800000, area: 1050, beds: 2, baths: 2, featured: false, listedAt: new Date("2025-02-01").getTime(), images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1005", title: "Premium Villa on VIP Road", type: "Villa", city: "VIP Road", location: "VIP Road, Raipur", price: 21000000, area: 3200, beds: 5, baths: 5, featured: true, listedAt: new Date("2025-01-12").getTime(), images: ["https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1006", title: "Plot in Kamal Vihar Sector 4", type: "Land", city: "Kamal Vihar", location: "Kamal Vihar, Sector 4, Raipur", price: 3000000, area: 1500, beds: null, baths: null, featured: false, listedAt: new Date("2025-01-08").getTime(), images: ["https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1007", title: "3BHK House in Kota", type: "House", city: "Kota", location: "Kota, Raipur", price: 9500000, area: 1650, beds: 3, baths: 3, featured: false, listedAt: new Date("2025-02-07").getTime(), images: ["https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1008", title: "3BHK in New Rajendra Nagar", type: "Apartment", city: "New Rajendra Nagar", location: "New Rajendra Nagar, Raipur", price: 6800000, area: 1200, beds: 3, baths: 2, featured: false, listedAt: new Date("2025-01-30").getTime(), images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1009", title: "Open Plot on Vidhan Sabha Road", type: "Land", city: "Saddu", location: "Saddu, Vidhan Sabha Road, Raipur", price: 2750000, area: 1800, beds: null, baths: null, featured: false, listedAt: new Date("2024-12-22").getTime(), images: ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80"] },
  { id: "RPR-1010", title: "2BHK in Mowa (Ring Road 1)", type: "Apartment", city: "Mowa", location: "Mowa, Ring Road No.1, Raipur", price: 5200000, area: 950, beds: 2, baths: 2, featured: false, listedAt: new Date("2025-02-10").getTime(), images: ["https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80"] },
];

/* ------------------------------ Utilities ------------------------------ */
const TYPE_OPTIONS = [
  { label: "Any type", value: "" },
  { label: "Flat / Apartment", value: "Apartment" },
  { label: "House", value: "House" },
  { label: "Villa", value: "Villa" },
  { label: "Land / Plot", value: "Land" },
];

// Hinglish: Locality suggestions ke liye unique list
const LOCALITY_OPTIONS = Array.from(new Set(PROPERTIES.map((p) => p.city)))
  .filter(Boolean)
  .sort();

function formatINRShort(n) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(n % 1e7 === 0 ? 0 : 1)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(n % 1e5 === 0 ? 0 : 1)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}
function withCommas(n) {
  return n.toLocaleString("en-IN");
}
function clampRange(min, max) {
  const lo = Number.isFinite(min) ? min : -Infinity;
  const hi = Number.isFinite(max) ? max : Infinity;
  return lo <= hi ? [lo, hi] : [hi, lo];
}
function includesCI(hay, needle) {
  return hay.toLowerCase().includes(needle.trim().toLowerCase());
}

/* ------------------------------ Components ----------------------------- */
function Badge({ children, color = "emerald" }) {
  const colors = {
    emerald: "bg-emerald-500/90 text-white",
    sky: "bg-sky-500/90 text-white",
    violet: "bg-violet-500/90 text-white",
    amber: "bg-amber-500/90 text-white",
    slate: "bg-slate-900/70 text-white",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  );
}

function PropertyCard({ p }) {
  const typeColor =
    p.type === "Apartment" ? "emerald" : p.type === "House" ? "sky" : p.type === "Villa" ? "violet" : "amber";
  const img0 = p.images?.[0];
  const img1 = p.images?.[1] || img0;

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition-all">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img0}
          alt={p.title}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          loading="lazy"
        />
        <img
          src={img1}
          alt={p.title}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          {p.featured && <Badge color="slate">Featured</Badge>}
          <Badge color={typeColor}>{p.type}</Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-white text-lg sm:text-xl font-semibold drop-shadow">{formatINRShort(p.price)}</span>
            <span className="text-white/85 text-xs sm:text-sm">{p.title}</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 text-slate-600">
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-500">
            <path d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="11" r="2" fill="currentColor" />
          </svg>
          <span className="text-sm">{p.location}</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-slate-700">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-500">
              <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span className="text-sm">{withCommas(p.area)} sq ft</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-500">
              <path d="M4 10h16M8 10V7a3 3 0 0 1 6 0v3" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span className="text-sm">{p.beds != null ? `${p.beds} Beds` : "—"}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-500">
              <path d="M7 10h10l2 6H5l2-6zM9 16v2m6-2v2" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span className="text-sm">{p.baths != null ? `${p.baths} Baths` : "—"}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">Listed {new Date(p.listedAt).toLocaleDateString()}</span>
          <button className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 text-sm font-medium">
            View details
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------- Main Component --------------------------- */
export default function PropertySearch() {
  // Shared field classes (height/spacing same rakhe)
  const fieldBase = "h-11 w-full rounded-lg border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100";

  // Filters state
  const [q, setQ] = useState("");      // Hinglish: Keyword ya Locality dono yahi
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Keyword+Locality combobox ke liye dropdown state
  const [openSuggest, setOpenSuggest] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const kwRef = useRef(null);

  // Bahar click pe dropdown band
  useEffect(() => {
    const onDown = (e) => {
      if (kwRef.current && !kwRef.current.contains(e.target)) setOpenSuggest(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Suggestions
  const suggestions = useMemo(() => {
    const list = LOCALITY_OPTIONS.filter((c) => (q ? includesCI(c, q) : true));
    return list.slice(0, 8);
  }, [q]);

  const selectSuggestion = (val) => {
    setQ(val);
    setOpenSuggest(false);
    setActiveIndex(-1);
  };

  const onKeyDown = (e) => {
    if (!openSuggest && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpenSuggest(true);
      setActiveIndex(0);
      return;
    }
    if (!openSuggest) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (suggestions.length ? (i + 1) % suggestions.length : -1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (suggestions.length ? (i - 1 + suggestions.length) % suggestions.length : -1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        e.preventDefault();
        selectSuggestion(suggestions[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setOpenSuggest(false);
      setActiveIndex(-1);
    }
  };

  const filtered = useMemo(() => {
    const [pMin, pMax] = clampRange(minPrice === "" ? NaN : Number(minPrice), maxPrice === "" ? NaN : Number(maxPrice));
    const [aMin, aMax] = clampRange(minArea === "" ? NaN : Number(minArea), maxArea === "" ? NaN : Number(maxArea));

    let arr = PROPERTIES.filter((p) => {
      const matchesQuery = !q || includesCI(p.title, q) || includesCI(p.location, q) || includesCI(p.city, q);
      const matchesType = !type || p.type === type;
      const matchesPrice = (pMin === -Infinity || p.price >= pMin) && (pMax === Infinity || p.price <= pMax);
      const matchesArea = (aMin === -Infinity || p.area >= aMin) && (aMax === Infinity || p.area <= aMax);
      return matchesQuery && matchesType && matchesPrice && matchesArea;
    });

    arr.sort((a, b) => {
      switch (sortBy) {
        case "priceAsc": return a.price - b.price;
        case "priceDesc": return b.price - a.price;
        case "areaAsc": return a.area - b.area;
        case "areaDesc": return b.area - a.area;
        case "newest":
        default: return b.listedAt - a.listedAt;
      }
    });

    return arr;
  }, [q, type, minPrice, maxPrice, minArea, maxArea, sortBy]);

  const clearAll = () => {
    setQ(""); setType(""); setMinPrice(""); setMaxPrice(""); setMinArea(""); setMaxArea(""); setSortBy("newest");
    setOpenSuggest(false); setActiveIndex(-1);
  };

  return (
    <section className="relative z-0 w-full bg-slate-50 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Search Properties in Raipur, Chhattisgarh</h2>
            <p className="text-slate-600">Filter by price, locality, size and type. Fully responsive and fast.</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Sort</label>
            <div className="relative">
              {/* Hinglish: select ko bhi same height banane ke liye appearance-none + chevron */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`${fieldBase} appearance-none pr-9 pl-3`}
              >
                <option value="newest">Newest</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="areaDesc">Area: Large to Small</option>
                <option value="areaAsc">Area: Small to Large</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </div>
        </div>

        {/* Filters */}
        {/* Hinglish: z-40 + overflow-visible to keep dropdown above cards */}
        <div className="mt-4 relative z-40 overflow-visible rounded-2xl bg-white/90 backdrop-blur ring-1 ring-slate-200 shadow-sm p-4 sm:p-5 lg:p-6">
          {/* Hinglish: 6 equal columns on large -> sab equal width */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {/* Combined Keyword + Locality Combobox */}
            <div className="relative" ref={kwRef}>
              <label className="sr-only" htmlFor="q">Keyword or Locality</label>
              <div className="relative">
                {/* Left search icon */}
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>

                {/* Input as combobox - same height/spacing as others */}
                <input
                  id="q"
                  type="text"
                  value={q}
                  onChange={(e) => { setQ(e.target.value); setOpenSuggest(true); setActiveIndex(-1); }}
                  onFocus={() => setOpenSuggest(true)}
                  onKeyDown={onKeyDown}
                  role="combobox"
                  aria-expanded={openSuggest}
                  aria-controls="kw-listbox"
                  aria-autocomplete="list"
                  aria-activedescendant={activeIndex >= 0 ? `kw-option-${activeIndex}` : undefined}
                  placeholder="Location"
                  className={`${fieldBase} pl-10 pr-9`}
                />

                {/* Right dropdown toggle button */}
                <button
                  type="button"
                  onClick={() => setOpenSuggest((v) => !v)}
                  aria-label="Toggle locality suggestions"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" className={`transition-transform ${openSuggest ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Suggestions dropdown */}
                {openSuggest && suggestions.length > 0 && (
                  <ul
                    id="kw-listbox"
                    role="listbox"
                    className="absolute z-50 left-0 right-0 top-full mt-1 max-h-60 overflow-auto rounded-lg border border-slate-200 bg-white shadow-2xl"
                  >
                    {/* Hinglish: Localities suggestions - click/enter to select */}
                    {suggestions.map((s, idx) => (
                      <li
                        key={s}
                        id={`kw-option-${idx}`}
                        role="option"
                        aria-selected={activeIndex === idx}
                        onMouseDown={(e) => { e.preventDefault(); selectSuggestion(s); }}
                        className={`cursor-pointer px-3 py-2 text-sm ${activeIndex === idx ? "bg-orange-50 text-orange-700" : "hover:bg-slate-50"}`}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Type - same height + custom chevron for consistency */}
            <div className="relative">
              <label className="sr-only" htmlFor="type">Type</label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`${fieldBase} appearance-none pr-9 pl-3`}
              >
                {TYPE_OPTIONS.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>

            {/* Min Price */}
            <div>
              <label className="sr-only" htmlFor="minPrice">Min Price</label>
              <input
                id="minPrice"
                type="number"
                min={0}
                step={50000}
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min price (₹)"
                className={`${fieldBase} px-3`}
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="sr-only" htmlFor="maxPrice">Max Price</label>
              <input
                id="maxPrice"
                type="number"
                min={0}
                step={50000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max price (₹)"
                className={`${fieldBase} px-3`}
              />
            </div>

            {/* Min Area */}
            <div>
              <label className="sr-only" htmlFor="minArea">Min Area</label>
              <input
                id="minArea"
                type="number"
                min={0}
                step={50}
                value={minArea}
                onChange={(e) => setMinArea(e.target.value)}
                placeholder="Min area (sq ft)"
                className={`${fieldBase} px-3`}
              />
            </div>

            {/* Max Area */}
            <div>
              <label className="sr-only" htmlFor="maxArea">Max Area</label>
              <input
                id="maxArea"
                type="number"
                min={0}
                step={50}
                value={maxArea}
                onChange={(e) => setMaxArea(e.target.value)}
                placeholder="Max area (sq ft)"
                className={`${fieldBase} px-3`}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-slate-600">
              Showing <span className="font-semibold text-slate-800">{filtered.length}</span> of{" "}
              <span className="font-semibold text-slate-800">{PROPERTIES.length}</span> results
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearAll}
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Reset
              </button>
              <a
                href="#results"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                View results
              </a>
            </div>
          </div>
        </div>

        {/* Results */}
        <div id="results" className="mt-6">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-slate-700 font-medium">No results found</p>
              <p className="text-slate-500 text-sm mt-1">Try adjusting filters or clearing them.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}