/**
 * S.K. Fitness Equipments — Interactive WebGL & GSAP Animation Suite
 */

// Disable browser automatic scroll restoration to prevent GSAP ScrollTrigger miscalculations on page refresh
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

// --- Local Products Database (17 Migrated IndiaMART Catalog items) ---
const PRODUCTS_DB = [
  {
    id: "gym-smith-machine",
    name: "Heavy Duty Smith Machine",
    category: "strength",
    image: "assets/gym-smith-machine.png",
    tag: "Premium MS",
    description: "Self-aligning linear bearings guide the bar along a vertical path. Includes 10 lockouts, adjustable safety catches, and built-in weight storage pegs.",
    specs: {
      material: "12-Gauge Mild Steel",
      footprint: "84\" H x 76\" W x 60\" D",
      weight: "180 kg",
      pulleys: "Nylon-fiberglass sealed bearings",
      cables: "6mm core aviation-grade steel wire",
      capacity: "300 kg Max Load"
    }
  },
  {
    id: "multi-functional-trainer-machine",
    name: "Elite Multi-Functional Trainer",
    category: "trainer",
    image: "assets/multi-functional-trainer-machine.png",
    tag: "Elite Dual Stack",
    description: "Multi-functional strength gym system with built-in pullup, low row, and crossover pulley loops. Dynamic rotation pulleys, integrated multi-grip pull-up crossbar, and 200kg total stack.",
    specs: {
      material: "Heavy 3\"x2\" MS Square Tubing",
      footprint: "92\" H x 144\" W x 40\" D",
      weight: "380 kg",
      weightStack: "100 kg x 2 double selector stacks",
      pulleys: "90mm glass-reinforced nylon",
      cables: "5mm core aviation-grade"
    }
  },
  {
    id: "functional-trainer-gym-machine",
    name: "Compact Functional Trainer",
    category: "trainer",
    image: "assets/functional-trainer-gym-machine.png",
    tag: "Compact Design",
    description: "Dual weight stack compact trainer with fully adjustable height pulley positions for space-efficient commercial settings.",
    specs: {
      material: "12-Gauge structural channels",
      weightStack: "80 kg x 2 double selector stacks",
      pulleys: "90mm glass-reinforced nylon",
      cables: "5mm core aviation-grade"
    }
  },
  {
    id: "adjustable-weight-bench",
    name: "Adjustable Weight Bench",
    category: "bench",
    image: "assets/adjustable-weight-bench.png",
    tag: "Multi Angle",
    description: "Commercial grade adjustable bench with multi-angle seat and backrest positions. Steel-reinforced pin selector.",
    specs: {
      material: "11-Gauge Mild Steel",
      footprint: "52\" L x 24\" W x 18\" H",
      weight: "42 kg",
      maxCapacity: "350 kg",
      adjustments: "7 Incline/Decline levels"
    }
  },
  {
    id: "decline-weight-bench",
    name: "Olympic Decline Bench",
    category: "bench",
    image: "assets/decline-weight-bench.png",
    tag: "Heavy Press",
    description: "Heavy-duty decline Olympic bench with integrated plate storage horns and roller leg locks.",
    specs: {
      material: "12-Gauge Heavy Steel",
      footprint: "68\" L x 60\" W x 48\" H",
      weight: "55 kg",
      plateStorage: "4 Integrated Horns",
      locks: "High-density foam leg locks"
    }
  },
  {
    id: "olympic-flat-bench",
    name: "Olympic Flat Bench",
    category: "bench",
    image: "assets/olympic-flat-bench.png",
    tag: "Flat Bench",
    description: "Solid flat bench with dual-tier bar catches, designed for heavy powerlifting and press work.",
    specs: {
      material: "3\" x 3\" Steel Frame",
      footprint: "58\" L x 48\" W x 45\" H",
      weight: "48 kg",
      maxBarWeight: "400 kg"
    }
  },
  {
    id: "multi-adjustable-bench-machine",
    name: "Multi-Adjustable Exercise Bench",
    category: "bench",
    image: "assets/multi-adjustable-bench-machine.png",
    tag: "Easy Move",
    description: "Versatile training bench with front handle and transit wheels for easy studio rearrangement.",
    specs: {
      material: "11-Gauge MS Tubing",
      footprint: "50\" L x 22\" W x 18\" H",
      weight: "38 kg",
      portability: "Rear wheels & front drag handle"
    }
  },
  {
    id: "hack-squat-machines",
    name: "45-Degree Hack Squat Machine",
    category: "strength",
    image: "assets/hack-squat-machines.png",
    tag: "Leg Power",
    description: "Ergonomically angled hack squat slide on solid steel rails with extra wide footplate.",
    specs: {
      material: "Heavy MS Box Tube",
      footprint: "62\" H x 64\" W x 90\" D",
      weight: "285 kg",
      sledWeight: "45 kg",
      maxSledLoad: "450 kg"
    }
  },
  {
    id: "abdominal-exercises-machines",
    name: "Abdominal Crunch Machine",
    category: "strength",
    image: "assets/abdominal-exercises-machines.png",
    tag: "Core Isolation",
    description: "Pin-selected abdominal crunch machine offering correct biomechanical movement and back support.",
    specs: {
      material: "Dual coat steel profile",
      weightStack: "80 kg selector stack",
      pulleys: "90mm Glass-filled nylon",
      cables: "5.5mm Steel Core"
    }
  },
  {
    id: "leg-curl-machine",
    name: "Seated Leg Curl Machine",
    category: "strength",
    image: "assets/leg-curl-machine.png",
    tag: "Hamstrings",
    description: "Isolates hamstring muscles. Precision joint bearing axis with adjustable thigh compression pad.",
    specs: {
      material: "Steel box tubing",
      weightStack: "90 kg stack",
      cables: "Aviation-grade 6mm steel",
      footprint: "64\" L x 42\" W x 58\" H"
    }
  },
  {
    id: "pec-deck-machine",
    name: "Pec Deck / Rear Delt Machine",
    category: "strength",
    image: "assets/pec-deck-machine.png",
    tag: "Chest & Delt",
    description: "Dual pectoral fly and rear deltoid machine with independent rotating arms.",
    specs: {
      material: "12-Gauge structural steel",
      weightStack: "100 kg stack",
      bearings: "Sealed pillow-block bearings"
    }
  },
  {
    id: "inclined-t-bar-machine",
    name: "Inclined T-Bar Row Machine",
    category: "strength",
    image: "assets/inclined-t-bar-machine.png",
    tag: "Back Row",
    description: "Chest-supported row machine with multi-grip handles for mid-back thickness training.",
    specs: {
      material: "Plate-loaded MS structure",
      footprint: "75\" L x 38\" W x 42\" H",
      weight: "65 kg",
      handles: "4 Grip positions"
    }
  },
  {
    id: "shoulder-press-free-weight",
    name: "Shoulder Press Free Weight Bench",
    category: "strength",
    image: "assets/shoulder-press-free-weight.png",
    tag: "Shoulder Press",
    description: "Seated utility bench with optimal upright angle and rubberized spotter platform.",
    specs: {
      material: "3\" x 2\" steel profile",
      footprint: "38\" L x 36\" W x 42\" H",
      weight: "35 kg",
      spotterPlatform: "Anti-slip tread plate"
    }
  },
  {
    id: "free-squat-rack",
    name: "Commercial Power Squat Rack",
    category: "rack",
    image: "assets/free-squat-rack.png",
    tag: "Heavy Rack",
    description: "Walk-in power squat rack with adjustable safety spotter bars and chin-up attachment.",
    specs: {
      material: "3\" x 3\" 11-Gauge steel",
      footprint: "90\" H x 48\" W x 50\" D",
      weight: "110 kg",
      jCups: "2 Urethane-lined catches"
    }
  },
  {
    id: "gym-dumbbell-stand",
    name: "3-Tier Dumbbell Stand",
    category: "rack",
    image: "assets/gym-dumbbell-stand.png",
    tag: "3-Tier Storage",
    description: "Space-saving 3-tier dumbbell stand with custom heavy angle steel support frames.",
    specs: {
      material: "10-Gauge structural angles",
      footprint: "36\" H x 60\" W x 24\" D",
      weight: "55 kg",
      tiers: "3 heavy layers"
    }
  },
  {
    id: "horizontal-dumbbell-rack",
    name: "Heavy Horizontal Dumbbell Rack",
    category: "rack",
    image: "assets/horizontal-dumbbell-rack.png",
    tag: "2-Tier Frame",
    description: "Angled forward tiers designed for commercial gym hexagonal and round dumbbells.",
    specs: {
      material: "10-Gauge steel tubing",
      footprint: "32\" H x 96\" W x 22\" D",
      weight: "65 kg",
      protection: "Urethane shelf protective saddles"
    }
  },
  {
    id: "curl-bar-stand",
    name: "EZ Curl Bar Stand",
    category: "rack",
    image: "assets/curl-bar-stand.jpg",
    tag: "A-Frame Stand",
    description: "Vertical A-frame EZ barbell storage rack with protective sleeves to prevent scratch.",
    specs: {
      material: "Heavy-duty steel layout",
      capacity: "Holds 6 EZ curl bars",
      footprint: "42\" H x 24\" W x 24\" D"
    }
  }
];

// Utility function to initialize components securely
function runSafely(fn) {
  try {
    fn();
  } catch (e) {
    console.error("Initialization error in " + fn.name + ": ", e);
  }
}

// --- 1. Dynamic Preloader & Initial Page Animation ---
document.addEventListener("DOMContentLoaded", () => {
  runSafely(setupPreloader);
  runSafely(setupMobileDrawer);
  runSafely(setupProductCatalog);
  runSafely(setupInstagramFeedAutoplay);
  runSafely(setupThreeJSBarbell);
  runSafely(setupScrollAnimations);
  runSafely(initRouter);
});

// Preloader progress count-up
function setupPreloader() {
  let progress = 0;
  const progressEl = document.getElementById('loaderProgress');
  const preloader = document.getElementById('preloader');

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 5) + 2;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      // Smooth fade out using GSAP
      gsap.to(preloader, {
        opacity: 0,
        yPercent: -100,
        duration: 1.0,
        ease: "power3.inOut",
        onComplete: () => {
          preloader.style.display = 'none';
          triggerEntranceAnimations();
          // Force ScrollTrigger to recalculate after layout settles
          setTimeout(() => {
            if (window.ScrollTrigger) {
              ScrollTrigger.refresh();
            }
          }, 300);
        }
      });
    }
    progressEl.textContent = `${progress}%`;
  }, 35);
}

// Initial entry transition for page load
function triggerEntranceAnimations() {
  // Reveal Navbar
  gsap.from("#navbar", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Hero layout staggered entrance
  gsap.from("#hero h1, #hero p, #hero .flex.flex-wrap, #hero .grid", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });

  // WebGL container scale focus entrance
  gsap.from("#heroWebGLContainer", {
    scale: 0.9,
    opacity: 0,
    duration: 1.0,
    ease: "power3.out",
    delay: 0.3
  });
}

// --- 2. Mobile Responsive Nav Drawer & Scrolling Locks ---
function setupMobileDrawer() {
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    mobileDrawer.classList.remove("translate-x-full");
    mobileDrawer.classList.add("translate-x-0");
    drawerBackdrop.classList.remove("opacity-0", "pointer-events-none");
    drawerBackdrop.classList.add("opacity-100", "pointer-events-auto");
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("translate-x-0");
    mobileDrawer.classList.add("translate-x-full");
    drawerBackdrop.classList.remove("opacity-100", "pointer-events-auto");
    drawerBackdrop.classList.add("opacity-0", "pointer-events-none");
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");
  }

  menuToggle.addEventListener("click", openDrawer);
  menuClose.addEventListener("click", closeDrawer);
  drawerBackdrop.addEventListener("click", closeDrawer);

  // Auto-close when clicking any drawer nav link
  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// --- 3. Dynamic Catalog Populator & Categorized Filtering ---
function setupProductCatalog() {
  // Populate the featured homepage grid dynamically
  renderHomepageCatalog();

  // Homepage filter tabs setup
  const filterTabs = document.querySelectorAll(".filter-tab");
  
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");
      const productCards = document.querySelectorAll("#productsCatalogGrid .product-card");
      const toHide = [];
      const toShow = [];

      productCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          toShow.push(card);
        } else {
          toHide.push(card);
        }
      });

      // Staggered GSAP transition for filtering homepage items
      gsap.to(toHide, {
        opacity: 0,
        scale: 0.9,
        duration: 0.25,
        stagger: 0.05,
        onComplete: () => {
          toHide.forEach(c => c.style.display = "none");
          toShow.forEach(c => {
            c.style.display = "flex";
            gsap.set(c, { opacity: 0, scale: 0.9 });
          });
          gsap.to(toShow, {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            stagger: 0.05,
            ease: "back.out(1.2)"
          });
        }
      });
    });
  });
}

// Renders the first 6 products as featured on the home page view
function renderHomepageCatalog() {
  const grid = document.getElementById("productsCatalogGrid");
  if (!grid) return;

  const featured = PRODUCTS_DB.slice(0, 6);
  grid.innerHTML = featured.map(product => `
    <div class="neu-panel product-card flex flex-col justify-between" data-category="${product.category}">
      <div>
        <div class="product-img-container">
          <span class="product-overlay-tag px-3 py-1 rounded text-[9px] uppercase tracking-wider font-semibold font-industrial">${product.tag || 'Heavy Duty'}</span>
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        </div>
        <div class="p-6">
          <h3 class="font-serif text-white text-lg font-bold uppercase tracking-wider mb-2">${product.name}</h3>
          <p class="text-studioGray-400 text-xs font-light leading-relaxed">${product.description}</p>
        </div>
      </div>
      <div class="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
        <span class="font-serif text-forgedOrange font-bold text-sm font-industrial">Premium MS</span>
        <a href="#/product/${product.id}" class="px-4 py-2 rounded-full font-serif text-[10px] uppercase tracking-wider font-bold neu-btn border border-white/5">
          View Specs
        </a>
      </div>
    </div>
  `).join("");
}

// --- 4. Dynamic Single Page Application (SPA) Hash Router ---
function initRouter() {
  const handleRoute = () => {
    const hash = window.location.hash || "#/";

    // Scroll back to top on transitions
    if (!hash.startsWith("#/") && hash.length > 2) {
      // It is a target scroll anchor on Home view (e.g. #about, #journey)
      // Switch view first to home view, then scroll to element
      const homeView = document.getElementById("home-view");
      const plpView = document.getElementById("plp-view");
      const pdpView = document.getElementById("pdp-view");

      if (homeView) homeView.classList.remove("hidden");
      if (plpView) plpView.classList.add("hidden");
      if (pdpView) pdpView.classList.add("hidden");

      // Refresh ScrollTrigger when returning to Home view
      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }

      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return;
    }

    // Toggle main view elements based on routing hashes
    const homeView = document.getElementById("home-view");
    const plpView = document.getElementById("plp-view");
    const pdpView = document.getElementById("pdp-view");

    if (hash === "#/" || hash === "") {
      if (homeView) homeView.classList.remove("hidden");
      if (plpView) plpView.classList.add("hidden");
      if (pdpView) pdpView.classList.add("hidden");
      window.scrollTo(0, 0);

      // Refresh ScrollTrigger when returning to Home view
      setTimeout(() => {
        if (window.ScrollTrigger) {
          ScrollTrigger.refresh();
        }
      }, 100);
    } else if (hash === "#/products") {
      if (homeView) homeView.classList.add("hidden");
      if (plpView) plpView.classList.remove("hidden");
      if (pdpView) pdpView.classList.add("hidden");
      renderPLP();
      window.scrollTo(0, 0);
    } else if (hash.startsWith("#/product/")) {
      const productId = hash.replace("#/product/", "");
      if (homeView) homeView.classList.add("hidden");
      if (plpView) plpView.classList.add("hidden");
      if (pdpView) pdpView.classList.remove("hidden");
      renderPDP(productId);
      window.scrollTo(0, 0);
    } else {
      // Fallback
      if (homeView) homeView.classList.remove("hidden");
      if (plpView) plpView.classList.add("hidden");
      if (pdpView) pdpView.classList.add("hidden");
      window.scrollTo(0, 0);

      // Refresh ScrollTrigger
      setTimeout(() => {
        if (window.ScrollTrigger) {
          ScrollTrigger.refresh();
        }
      }, 100);
    }
  };

  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("load", handleRoute);
  handleRoute();
}

// Renders the Product Listing Page (PLP) dynamically
function renderPLP() {
  const grid = document.getElementById("plpProductsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("plpSearchInput");
  const filterTabs = document.querySelectorAll(".plp-filter-tab");
  let activeFilter = "all";
  let searchQuery = "";

  const draw = () => {
    const filtered = PRODUCTS_DB.filter(product => {
      const matchesFilter = activeFilter === "all" || product.category === activeFilter;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-12 py-16 text-center text-studioGray-500 font-serif">
          No matching machinery found. Try another search.
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(product => `
      <div class="neu-panel product-card flex flex-col justify-between" data-id="${product.id}">
        <div>
          <div class="product-img-container">
            <span class="product-overlay-tag px-3 py-1 rounded text-[9px] uppercase tracking-wider font-semibold font-industrial">${product.tag || 'Heavy Duty'}</span>
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          </div>
          <div class="p-6">
            <h3 class="font-serif text-white text-lg font-bold uppercase tracking-wider mb-2">${product.name}</h3>
            <p class="text-studioGray-400 text-xs font-light leading-relaxed">${product.description}</p>
          </div>
        </div>
        <div class="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
          <span class="font-serif text-forgedOrange font-bold text-sm font-industrial">Premium MS</span>
          <a href="#/product/${product.id}" class="px-4 py-2 rounded-full font-serif text-[10px] uppercase tracking-wider font-bold neu-btn border border-white/5">
            View Specs
          </a>
        </div>
      </div>
    `).join("");

    // Staggered GSAP reveal for PLP grid cards
    gsap.from(grid.children, {
      opacity: 0,
      scale: 0.9,
      y: 25,
      duration: 0.4,
      stagger: 0.04,
      ease: "power2.out"
    });
  };

  // Bind input and filter events once
  if (!searchInput.dataset.listened) {
    searchInput.dataset.listened = "true";
    searchInput.value = ""; // clear inputs
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      draw();
    });

    filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        filterTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        activeFilter = tab.getAttribute("data-filter");
        draw();
      });
    });
  }

  draw();
}

// Renders the Product Detail Page (PDP) dynamically
function renderPDP(productId) {
  const container = document.getElementById("pdpProductDetailsContainer");
  if (!container) return;

  const product = PRODUCTS_DB.find(p => p.id === productId);
  if (!product) {
    container.innerHTML = `
      <div class="col-span-12 py-20 text-center">
        <h2 class="font-serif text-2xl text-white">Machinery Not Found</h2>
        <a href="#/products" class="mt-4 inline-block text-forgedOrange hover:underline font-bold">Return to Directory</a>
      </div>
    `;
    return;
  }

  // Update breadcrumbs
  const breadcrumbCurrent = document.getElementById("pdpBreadcrumbCurrent");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

  // Build spec rows
  const specsHtml = Object.entries(product.specs).map(([key, val]) => `
    <div class="p-4 rounded-xl bg-obsidianDarker border border-white/5 neu-inset-panel flex flex-col gap-1">
      <span class="text-[9px] uppercase tracking-widest text-studioGray-500 font-semibold font-industrial">
        ${key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
      </span>
      <span class="text-xs text-white font-medium">${val}</span>
    </div>
  `).join("");

  // Select 3 related products under same category
  const related = PRODUCTS_DB.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const relatedHtml = related.map(p => `
    <div class="neu-panel product-card flex flex-col justify-between">
      <div>
        <div class="product-img-container">
          <span class="product-overlay-tag px-3 py-1 rounded text-[9px] uppercase tracking-wider font-semibold font-industrial">${p.tag || 'Heavy Duty'}</span>
          <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy">
        </div>
        <div class="p-6">
          <h3 class="font-serif text-white text-sm font-bold uppercase tracking-wider mb-2">${p.name}</h3>
          <p class="text-studioGray-400 text-[10px] font-light leading-relaxed">${p.description.substring(0, 75)}...</p>
        </div>
      </div>
      <div class="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
        <span class="font-serif text-forgedOrange font-bold text-xs font-industrial">Premium MS</span>
        <a href="#/product/${p.id}" class="px-3 py-1.5 rounded-full font-serif text-[9px] uppercase tracking-wider font-bold neu-btn border border-white/5">
          View Specs
        </a>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <!-- Left Column: Tactical Media Showcase -->
    <div class="flex flex-col gap-6">
      <div class="neu-panel p-4 overflow-hidden rounded-[32px] w-full">
        <div class="w-full aspect-[4/3] rounded-[20px] overflow-hidden border border-white/5 relative shadow-inner">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover filter brightness-[0.88] contrast-[1.03]">
        </div>
      </div>
      <div class="p-6 rounded-2xl bg-obsidianCard border border-white/5 box-shadow">
        <span class="font-serif text-[10px] tracking-[0.4em] uppercase text-forgedOrange mb-2 block font-bold">${product.category.toUpperCase()} CATEGORY</span>
        <h2 class="font-serif text-2xl font-extrabold text-white uppercase mb-3">${product.name}</h2>
        <p class="text-studioGray-400 text-xs font-light leading-relaxed">${product.description}</p>
      </div>
    </div>

    <!-- Right Column: Specs Sheet & Factory Custom Order Form -->
    <div class="flex flex-col gap-8">
      <div class="p-6 rounded-[24px] neu-panel flex flex-col gap-4">
        <h3 class="font-serif text-white text-xs uppercase tracking-wider font-bold border-b border-white/5 pb-2">Technical Specifications</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${specsHtml}
        </div>
      </div>

      <!-- Dedicated Call / WhatsApp Direct Connect -->
      <div class="p-6 rounded-[24px] neu-panel bg-obsidianCard border border-white/5 box-shadow flex flex-col gap-4">
        <h4 class="font-serif text-white text-xs uppercase tracking-wider font-bold border-b border-white/5 pb-2">Direct Factory Sourcing</h4>
        <p class="text-studioGray-400 text-xs font-light leading-relaxed">
          Connect directly with S. Khan to discuss custom tubing gauge, powder coat frame color, and bundle discount pricing for this machine.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-2">
          <a href="tel:+919082652405" class="flex-1 py-3.5 rounded-xl font-serif text-[10px] sm:text-xs uppercase tracking-widest font-bold neu-btn border border-white/5 hover:border-forgedOrange text-center justify-center flex items-center gap-2">
            📞 Call Factory
          </a>
          <a href="https://wa.me/919082652405?text=Hello%20S.K.%20Fitness,%20I'm%20interested%20in%20inquiring%20about%20the%20${encodeURIComponent(product.name)}." target="_blank" class="flex-1 py-3.5 rounded-xl font-serif text-[10px] sm:text-xs uppercase tracking-widest font-bold neu-btn neu-btn-primary text-center justify-center flex items-center gap-2">
            💬 WhatsApp Inquiry
          </a>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    ${related.length > 0 ? `
      <div class="col-span-1 lg:col-span-2 mt-12">
        <h3 class="font-serif text-white text-base font-bold uppercase tracking-wider mb-6 border-b border-white/5 pb-2">Related Machinery</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${relatedHtml}
        </div>
      </div>
    ` : ""}
  `;
}

// --- 5. Custom Hover-Autoplay for Simulated Instagram Feed ---
function setupInstagramFeedAutoplay() {
  const cards = document.querySelectorAll(".instagram-feed-card");
  
  cards.forEach(card => {
    const video = card.querySelector(".instagram-video");
    const targetUrl = card.getAttribute("data-instagram-url");
    if (!video) return;

    // Desktop hover state
    card.addEventListener("mouseenter", () => {
      video.play().catch(err => console.log("Instagram autoplay blocked:", err));
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    // Handle click to go to Instagram (or play toggle on mobile)
    card.addEventListener("click", (e) => {
      // If click was on view profile link, let it navigate
      if (e.target.closest("a")) return;

      if (window.innerWidth <= 768) {
        e.preventDefault();
        if (video.paused) {
          // Pause all other instagram videos first
          document.querySelectorAll(".instagram-video").forEach(v => {
            v.pause();
          });
          video.play().catch(err => console.log("Instagram touch play blocked:", err));
        } else {
          video.pause();
        }
      } else {
        // On desktop, click opens the real Instagram URL in new tab
        if (targetUrl) {
          window.open(targetUrl, "_blank");
        }
      }
    });
  });
}

// Custom floating neomorphic success toast alerts
function showNotification(title, message) {
  const existing = document.querySelectorAll(".neu-toast-alert");
  existing.forEach(t => t.remove());

  const toast = document.createElement("div");
  toast.className = "neu-toast-alert fixed top-6 right-6 z-[99999] p-6 rounded-2xl bg-obsidianCard border border-forgedOrange/30 shadow-2xl flex flex-col gap-1 max-w-sm transform translate-x-12 opacity-0 transition-all duration-500 select-none";
  toast.style.boxShadow = "var(--neu-flat)";
  toast.innerHTML = `
    <div class="flex items-center gap-2 text-forgedOrange font-industrial text-xs tracking-wider font-bold">
      <span class="text-sm">🔥</span>
      <span>${title.toUpperCase()}</span>
    </div>
    <p class="text-studioGray-400 text-xs font-light leading-relaxed mt-1">${message}</p>
  `;
  document.body.appendChild(toast);

  // Force reflow
  toast.offsetHeight;

  // Slide in
  toast.style.transform = "translateX(0)";
  toast.style.opacity = "1";

  // Auto remove
  setTimeout(() => {
    toast.style.transform = "translateX(12px)";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

// --- 6. Interactive Three.js 3D Barbell setup ---
function setupThreeJSBarbell() {
  const container = document.getElementById("heroWebGLContainer");
  const canvas = document.getElementById("heroWebGLCanvas");
  if (!container || !canvas) return;

  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 5.8);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Barbell Master Group
  const barbellGroup = new THREE.Group();
  scene.add(barbellGroup);

  // Materials
  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xdddddd,
    metalness: 0.9,
    roughness: 0.15,
  });

  const ironMat = new THREE.MeshStandardMaterial({
    color: 0x18191d,
    metalness: 0.7,
    roughness: 0.45,
  });

  const orangeMat = new THREE.MeshStandardMaterial({
    color: 0xFF5E00,
    metalness: 0.5,
    roughness: 0.25,
    emissive: 0xFF5E00,
    emissiveIntensity: 0.1,
  });

  const darkSteelMat = new THREE.MeshStandardMaterial({
    color: 0x111215,
    metalness: 0.85,
    roughness: 0.35,
  });

  // Construct Barbell (lies horizontally along X-axis, cylinders rotated on Z)
  
  // 1. Shaft (Middle Bar)
  const shaftGeom = new THREE.CylinderGeometry(0.045, 0.045, 4.2, 32);
  const shaft = new THREE.Mesh(shaftGeom, chromeMat);
  shaft.rotation.z = Math.PI / 2;
  barbellGroup.add(shaft);

  // 2. Sleeves (Thicker ends)
  const sleeveGeom = new THREE.CylinderGeometry(0.07, 0.07, 1.3, 32);
  
  const sleeveR = new THREE.Mesh(sleeveGeom, chromeMat);
  sleeveR.rotation.z = Math.PI / 2;
  sleeveR.position.x = 2.5;
  barbellGroup.add(sleeveR);

  const sleeveL = new THREE.Mesh(sleeveGeom, chromeMat);
  sleeveL.rotation.z = Math.PI / 2;
  sleeveL.position.x = -2.5;
  barbellGroup.add(sleeveL);

  // 3. Inner Stopper Collars
  const stopperGeom = new THREE.CylinderGeometry(0.095, 0.095, 0.08, 32);
  
  const stopperR = new THREE.Mesh(stopperGeom, darkSteelMat);
  stopperR.rotation.z = Math.PI / 2;
  stopperR.position.x = 1.81;
  barbellGroup.add(stopperR);

  const stopperL = new THREE.Mesh(stopperGeom, darkSteelMat);
  stopperL.rotation.z = Math.PI / 2;
  stopperL.position.x = -1.81;
  barbellGroup.add(stopperL);

  // 4. Weight Hub Sleeves
  const hubGeom = new THREE.CylinderGeometry(0.075, 0.075, 0.60, 32);

  const hubR = new THREE.Mesh(hubGeom, chromeMat);
  hubR.rotation.z = Math.PI / 2;
  hubR.position.x = 2.15;
  barbellGroup.add(hubR);

  const hubL = new THREE.Mesh(hubGeom, chromeMat);
  hubL.rotation.z = Math.PI / 2;
  hubL.position.x = -2.15;
  barbellGroup.add(hubL);

  // 5. Loaded Weight Plates (Beefed up with 6 heavy plates)
  const plates = [
    { r: 0.50, d: 0.09, offset: 0.06, mat: ironMat },       // Plate 1 (25kg - black)
    { r: 0.50, d: 0.09, offset: 0.16, mat: ironMat },       // Plate 2 (25kg - black)
    { r: 0.50, d: 0.09, offset: 0.26, mat: ironMat },       // Plate 3 (25kg - black)
    { r: 0.43, d: 0.08, offset: 0.35, mat: ironMat },       // Plate 4 (20kg - black)
    { r: 0.36, d: 0.07, offset: 0.43, mat: ironMat },       // Plate 5 (15kg - black)
    { r: 0.28, d: 0.05, offset: 0.50, mat: orangeMat }      // Plate 6 (10kg - Forged Orange)
  ];

  plates.forEach(p => {
    const plateGeom = new THREE.CylinderGeometry(p.r, p.r, p.d, 32);

    // Right plate stack
    const pR = new THREE.Mesh(plateGeom, p.mat);
    pR.rotation.z = Math.PI / 2;
    pR.position.x = 1.85 + p.offset;
    barbellGroup.add(pR);

    // Left plate stack
    const pL = new THREE.Mesh(plateGeom, p.mat);
    pL.rotation.z = Math.PI / 2;
    pL.position.x = -1.85 - p.offset;
    barbellGroup.add(pL);
  });

  // 6. Outer Lock Collars
  const lockGeom = new THREE.CylinderGeometry(0.082, 0.082, 0.06, 32);
  
  const lockR = new THREE.Mesh(lockGeom, orangeMat);
  lockR.rotation.z = Math.PI / 2;
  lockR.position.x = 1.85 + 0.57;
  barbellGroup.add(lockR);

  const lockL = new THREE.Mesh(lockGeom, orangeMat);
  lockL.rotation.z = Math.PI / 2;
  lockL.position.x = -1.85 - 0.57;
  barbellGroup.add(lockL);

  // Lighting Configuration
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
  keyLight.position.set(5, 5, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
  fillLight.position.set(-5, 2, 2);
  scene.add(fillLight);

  const pointLightOrange = new THREE.PointLight(0xff5e00, 2.5, 10);
  pointLightOrange.position.set(0, -2, -3);
  scene.add(pointLightOrange);

  // Rotation parameters
  let rotX = 0.2;
  let rotY = -0.4;
  let targetRotX = 0.2;
  let targetRotY = -0.4;

  let isDragging = false;
  let prevMousePos = { x: 0, y: 0 };
  let autoRotate = true;
  let autoRotateSpeed = 0.003;

  // Scale adjustment based on viewport (scaled up to make the barbell look larger and more imposing)
  function adjustScale() {
    const width = container.clientWidth;
    let scaleVal = 0.68; // Boost scale value on desktop

    if (width < 320) scaleVal = 0.34;
    else if (width < 400) scaleVal = 0.42;
    else if (width < 480) scaleVal = 0.48;
    else if (width < 768) scaleVal = 0.55;
    else if (width < 1024) scaleVal = 0.60;

    barbellGroup.scale.set(scaleVal, scaleVal, scaleVal);
  }
  adjustScale();

  // Drag interaction event handlers
  function onStart(x, y) {
    isDragging = true;
    autoRotate = false;
    prevMousePos = { x, y };
  }

  function onMove(x, y) {
    if (!isDragging) return;
    const deltaX = x - prevMousePos.x;
    const deltaY = y - prevMousePos.y;

    targetRotY += deltaX * 0.008;
    targetRotX += deltaY * 0.008;

    // Constrain X rotation to avoid complete upside-down flip
    targetRotX = Math.max(-0.8, Math.min(0.8, targetRotX));

    prevMousePos = { x, y };
  }

  function onEnd() {
    isDragging = false;
    // Resume auto-rotation after 4 seconds of inactivity
    setTimeout(() => {
      if (!isDragging) autoRotate = true;
    }, 4000);
  }

  // Mouse Listeners
  canvas.addEventListener("mousedown", (e) => onStart(e.clientX, e.clientY));
  window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
  window.addEventListener("mouseup", onEnd);

  // Touch Listeners
  canvas.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    onStart(touch.clientX, touch.clientY);
  }, { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    onMove(touch.clientX, touch.clientY);
  }, { passive: true });
  window.addEventListener("touchend", onEnd);

  // Window Resize
  window.addEventListener("resize", () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    adjustScale();
  });

  // Animation Loop
  let time = 0;
  function animate() {
    requestAnimationFrame(animate);

    time += 0.01;

    // Gentle float effect when idle
    if (!isDragging) {
      barbellGroup.position.y = Math.sin(time * 0.8) * 0.06;
      if (autoRotate) {
        targetRotY += autoRotateSpeed;
      }
    }

    // Smooth damping (lerp)
    rotX += (targetRotX - rotX) * 0.08;
    rotY += (targetRotY - rotY) * 0.08;

    barbellGroup.rotation.x = rotX;
    barbellGroup.rotation.y = rotY;

    renderer.render(scene, camera);
  }
  animate();

  // Refresh ScrollTrigger after ThreeJS canvas has settled
  setTimeout(() => {
    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  }, 500);
}

// --- 7. GSAP Scrolling Animators & Autoplay Showreel Video Triggers ---
function setupScrollAnimations() {
  // Sticky navbar background scroll class toggle
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Stagger entry for journey steps
  gsap.from("#journey [id^='step']", {
    scrollTrigger: {
      trigger: "#journey",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // About Section entrance animations
  gsap.from("#aboutImgWrapper", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: -50,
    opacity: 0,
    duration: 1.0,
    ease: "power2.out"
  });

  gsap.from("#aboutTextWrapper", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: 50,
    opacity: 0,
    duration: 1.0,
    ease: "power2.out"
  });

  // Catalog Section stagger entrance
  gsap.from("#productsCatalogGrid .product-card", {
    scrollTrigger: {
      trigger: "#products",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  });

  // Testimonials Section stagger entrance
  gsap.from("#reviewsGrid .neu-panel", {
    scrollTrigger: {
      trigger: "#reviews",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Social Feeds stagger entrance
  gsap.from("#feeds .neu-panel", {
    scrollTrigger: {
      trigger: "#feeds",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  });

  // Pinned Horizontal Showcase scrolling track (Active on all viewports, including mobile)
  const reelsTrack = document.getElementById("reels-track");
  const videoShowcase = document.getElementById("video-showcase");
  const reelsContainer = document.getElementById("reels-scroll-container");

  if (reelsTrack && videoShowcase) {
    // Ensure native horizontal overflow scrolling is disabled to let ScrollTrigger handle translation
    reelsContainer.classList.remove("overflow-x-auto", "hide-scrollbar");
    
    gsap.to(reelsTrack, {
      x: () => -(reelsTrack.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: videoShowcase,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${reelsTrack.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true
      }
    });
  }

  // Load and play vertical workout reels on hover
  setupAutoplayReels();

  // Force ScrollTrigger to refresh after all images and resources load
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
    // Additional deferred refreshes to handle late-rendering WebGL or media
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 800);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1800);
  });
}

function setupAutoplayReels() {
  const videoSources = [
    "assets/famous_reel_1.mp4",
    "assets/famous_reel_2.mp4",
    "assets/famous_reel_3.mp4",
    "assets/famous_reel_4.mp4",
    "assets/famous_reel_5.mp4",
    "assets/famous_reel_6.mp4",
    "assets/famous_reel_7.mp4",
    "assets/famous_reel_8.mp4",
    "assets/video_dip_chin.mp4",
    "assets/video_chest_press.mp4",
    "assets/video_preacher_curl.mp4",
    "assets/video_iron_plates.mp4",
    "assets/video_gym_setup.mp4"
  ];

  const videoCards = document.querySelectorAll(".video-card-link");

  videoCards.forEach((card, index) => {
    // Inject HTML5 Video
    const video = document.createElement("video");
    video.className = "video-element";
    video.src = videoSources[index % videoSources.length];
    video.loop = true;
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.style.pointerEvents = "none"; 

    // Handle poster preview if no static poster image is in the DOM
    const hasPoster = card.querySelector(".video-poster") !== null;
    if (!hasPoster) {
      video.style.opacity = "1";
      video.style.zIndex = "10";
      video.setAttribute("preload", "metadata");
    } else {
      video.setAttribute("preload", "none");
    }

    card.appendChild(video);

    // Desktop hover state
    card.addEventListener("mouseenter", () => {
      card.classList.add("video-playing");
      video.play().catch(err => console.log("Autoplay blocked/failed:", err));
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("video-playing");
      video.pause();
      video.currentTime = 0;
    });

    // Mobile touch state toggle
    card.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        if (!card.classList.contains("video-playing")) {
          e.preventDefault(); 
          
          // Stop all other playing videos
          videoCards.forEach(c => {
            c.classList.remove("video-playing");
            const v = c.querySelector("video");
            if (v) v.pause();
          });

          card.classList.add("video-playing");
          video.play().catch(err => console.log("Touch autoplay blocked:", err));
        }
      }
    });
  });
}
