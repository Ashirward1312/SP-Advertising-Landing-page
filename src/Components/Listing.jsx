"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Factory as FactoryIcon,
  Hospital as HospitalIcon,
  GraduationCap as GraduationCapIcon,
  Building as BuildingIcon,
  Gem as GemIcon,
  ShoppingBag as ShoppingBagIcon,
  Trees as TreesIcon,
  Hotel as HotelIcon,
  Boxes as BoxesIcon,
  FerrisWheel as FerrisWheelIcon,
  LineChart as LineChartIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MapPin as MapPinIcon, // Land on Lease
  Home as HomeIcon, // Premium Farm House
} from "lucide-react";

const CATS = [
  { id: "bestbuy", label: "Best Buy", icon: FactoryIcon },

  // ✅ ID fixed: "jointventures" (no space)
  { id: "jointventures", label: "Joint Ventures", icon: FactoryIcon },

  { id: "hospital", label: "Hospital", icon: HospitalIcon },
  { id: "education", label: "Education", icon: GraduationCapIcon },

  // Real estate alag-alag
  { id: "residential", label: "Residential Real Estate", icon: BuildingIcon },
  { id: "commercial", label: "Commercial Real Estate", icon: BuildingIcon },

  { id: "luxuryplots", label: "Premium Luxury Plots", icon: GemIcon },

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

  // Investment bhi alag-alag
  // { id: "invest-realestate", label: "Real Estate Investment", icon: LineChartIcon },
  { id: "invest-land", label: "Land / Plot Investment", icon: LineChartIcon },

  { id: "landplot", label: "Land/Plot", icon: LineChartIcon },

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
      navigate("/bestbuy");
      return;
    }

    // ✅ Joint Ventures – ID updated
    if (id === "jointventures") {
      navigate("/jointventures");
      return;
    }

    if (id === "hospital") {
      navigate("/hospital");
      return;
    }

    if (id === "education") {
      navigate("/education");
      return;
    }

    // Real Estate pages
    if (id === "residential") {
      navigate("/residential");
      return;
    }

    if (id === "commercial") {
      navigate("/commercial");
      return;
    }

    // Premium plots / land (normal listing page)
    if (id === "landplot" || id === "luxuryplots") {
      navigate("/land");
      return;
    }

    // Malls
    if (id === "malls") {
      navigate("/malls");
      return;
    }

    // Resorts + Wedding Lawns
    if (id === "resortswedding") {
      navigate("/resorts-wedding");
      return;
    }

    // Premium Farm House
    if (id === "farmhouse") {
      navigate("/farmhouse");
      return;
    }

    // Warehouse
    if (id === "warehouse") {
      navigate("/warehouse");
      return;
    }

    // ✅ Investment – alag-alag
    if (id === "invest-realestate") {
      navigate("/commercial"); // ya dedicated investment-realestate route
      return;
    }

    if (id === "invest-land") {
      navigate("/land-investment"); // ✅ naya LandInvestment page
      return;
    }

    // Others
    if (id === "others") {
      navigate("/others");
      return;
    }

    // Baaki (lease etc.) abhi sirf highlight / toggle
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
      </div>
    </section>
  );
}