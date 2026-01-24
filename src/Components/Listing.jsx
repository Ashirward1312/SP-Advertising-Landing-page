import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Factory as FactoryIcon,
  Hospital as HospitalIcon,
  GraduationCap as GraduationCapIcon,
  Building as BuildingIcon,
  Building2 as OfficeIcon, // ✅ Office icon
  Gem as GemIcon,
  ShoppingBag as ShoppingBagIcon,
  Trees as TreesIcon,
  Hotel as HotelIcon,
  Boxes as BoxesIcon,
  FerrisWheel as FerrisWheelIcon,
  LineChart as LineChartIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MapPin as MapPinIcon, // Land on Lease / Project Lands
  Home as HomeIcon, // Premium Farm House
} from "lucide-react";

const CATS = [
  { id: "bestbuy", label: "Best Buy", icon: FactoryIcon },

  // ✅ Joint Ventures
  { id: "jointventures", label: "Joint Ventures", icon: FactoryIcon },

  { id: "hospital", label: "Hospital", icon: HospitalIcon },
  { id: "education", label: "Education", icon: GraduationCapIcon },

  // Real estate alag-alag
  { id: "residential", label: "Residential Real Estate", icon: BuildingIcon },
  { id: "commercial", label: "Commercial Real Estate", icon: BuildingIcon },

  // ✅ Office section
  { id: "office", label: "Office Space", icon: OfficeIcon },

  { id: "luxuryplots", label: "Premium Luxury Plots", icon: GemIcon },

  // ✅ Project Lands (NEW) — path will be /projects
  { id: "projectlands", label: "Project Lands", icon: MapPinIcon },

  // Premium Farm House
  { id: "farmhouse", label: "Premium Farm House", icon: HomeIcon },

  { id: "malls", label: "Malls", icon: ShoppingBagIcon },

  // Resorts + Wedding lawns ek hi category
  {
    id: "resortswedding",
    label: "Resorts / Wedding Lawns",
    icon: TreesIcon,
  },

  { id: "warehouse", label: "Ware House", icon: BoxesIcon },

  // Land on Lease
  { id: "lease", label: "Land on Lease", icon: MapPinIcon },

  // Investment
  { id: "invest-land", label: "Land / Plot Investment", icon: LineChartIcon },

  // 🔹 Stand Alone
  { id: "standalone", label: "Stand Alone", icon: LineChartIcon },

  { id: "others", label: "Others", icon: MoreHorizontalIcon },
];

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
  ring: "rgba(245,73,0,0.65)",
  glow: "rgba(245,73,0,0.50)",
};

export default function CategoriesSection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleCategoryClick = (id) => {
    // BEST BUY
    if (id === "bestbuy") {
      navigate("/best-property-buy-offices-plots-raipur");
      return;
    }

    // ✅ Joint Ventures
    if (id === "jointventures") {
      navigate("/joint-ventures-property-in-raipur");
      return;
    }

    if (id === "hospital") {
      navigate("/hospital-lands-in-raipur");
      return;
    }

    if (id === "education") {
      navigate("/education-&-institution-lands-raipur");
      return;
    }

    // Real Estate pages
    if (id === "residential") {
      navigate("/residential-property-in-raipur");
      return;
    }

    if (id === "commercial") {
      navigate("/commercial-property-raipur");
      return;
    }

    // ✅ Office section route
    if (id === "office") {
      navigate("/office-space-in-raipur");
      return;
    }

    // Premium plots / land (normal listing page)
    if (id === "luxuryplots") {
      navigate("/luxury-plots-in-raipur");
      return;
    }

    // ✅ Project Lands route — FIXED PATH to /projects
    if (id === "projectlands") {
      navigate("/key-project-lands-raipur"); // ✅ Changed from /projectlands to /projects
      return;
    }

    // 🔹 Stand Alone
    if (id === "standalone") {
      navigate("/stand-alone-property-raipur");
      return;
    }

    // Malls
    if (id === "malls") {
      navigate("/malls-jv-opportunity-raipur");
      return;
    }

    // Resorts + Wedding Lawns
    if (id === "resortswedding") {
      navigate("/resorts-&-wedding-lawn-lands");
      return;
    }

    // Premium Farm House
    if (id === "farmhouse") {
      navigate("/farmhouse-plots-raipur");
      return;
    }

    // Warehouse
    if (id === "warehouse") {
      navigate("/warehouse-in-raipur");
      return;
    }

    // ✅ Investment – land
    if (id === "invest-land") {
      navigate("/land-plot-investment-raipur");
      return;
    }

    if (id === "lease") {
      navigate("/land-on-lease-in-raipur");
      return;
    }

    // Others
    if (id === "others") {
      navigate("/others");
      return;
    }

    // Baaki (toggle highlight)
    setSelected((s) => (s === id ? null : id));
  };

  return (
    <section
      id="categories"
      className="relative bg-slate-950 text-slate-100 py-12 sm:py-16"
    >
      {/* soft orange glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-56 max-w-4xl bg-gradient-to-b from-[#f54900]/22 via-transparent to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="mb-8 text-center">
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
            Browse by{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
              }}
            >
              Category
            </span>
          </h2>

          <div
            className="mx-auto mt-3 h-[3px] w-24 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
            }}
          />
        </header>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 justify-center">
          {CATS.map(({ id, label, icon: Icon }) => {
            const isActive = selected === id;
            return (
              <button
                type="button"
                key={id}
                onClick={() => handleCategoryClick(id)}
                className="group relative flex items-center gap-3 rounded-xl bg-slate-900/90 px-4 py-3 ring-1 ring-slate-800/80 transition hover:bg-slate-900 hover:ring-slate-300/50 cursor-pointer"
                style={
                  isActive
                    ? {
                        boxShadow: `0 0 0 1px ${BRAND.ring}, 0 10px 30px -12px ${BRAND.glow}`,
                      }
                    : undefined
                }
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg ring-1 bg-white/5 ring-slate-700/70"
                  style={
                    isActive
                      ? {
                          boxShadow: `0 0 0 1px ${BRAND.ring}`,
                          background:
                            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.16), transparent 60%)",
                        }
                      : undefined
                  }
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: isActive ? BRAND.soft : "#d1d5db" }}
                  />
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: isActive ? "#fff" : "#e5e7eb" }}
                >
                  {label}
                </span>
                <span
                  className="ml-auto h-6 w-6 grid place-items-center rounded-md text-xs ring-1 ring-slate-700/70 bg-slate-950/90"
                  style={{
                    boxShadow: isActive
                      ? `0 0 0 1px ${BRAND.ring}`
                      : undefined,
                    color: isActive ? "#fff" : "#9ca3af",
                  }}
                >
                  {isActive ? "−" : "+"}
                </span>
              </button>
            );
          })}
        </div>

       {/* Promotional block under categories */}
<div className="mt-10 flex justify-center">
  <a
    href="https://www.landbazar.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center gap-3 rounded-2xl border px-5 py-3 text-sm font-medium shadow-lg max-w-xl w-full sm:w-auto"
    style={{
      borderColor: BRAND.soft,
      background:
        "radial-gradient(circle at top left, rgba(245,73,0,0.28), transparent 55%), rgba(15,23,42,0.96)",
      boxShadow: `0 14px 40px -18px ${BRAND.glow}`,
    }}
  >
    {/* Icon circle */}
    <span
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/90 ring-1 ring-slate-700/80"
      style={{ color: BRAND.soft }}
    >
      <MapPinIcon className="h-4 w-4" />
    </span>

    {/* Text */}
    <span className="text-left">
      <span className="block text-[11px] uppercase tracking-[0.16em] text-slate-400">
        LOOKING FOR LAND / PLOT OPPORTUNITIES?
      </span>
      <span className="block text-[13px] text-slate-100">
        EXPLORE CURATED RESIDENTIAL, COMMERCIAL & INVESTMENT PROPERTIES ON{" "}
        <span
          className="font-semibold group-hover:underline"
          style={{ color: BRAND.soft }}
        >
          LANDBAZAR
        </span>
        .
      </span>
    </span>

    

    {/* subtle glow on hover */}
    <span
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      style={{
        boxShadow: `0 0 30px -20px ${BRAND.glow}`,
      }}
    />
  </a>
</div>
      </div>
    </section>
  );
}