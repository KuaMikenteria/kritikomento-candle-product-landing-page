/* ==========================================================
   KRITIKOMENTO CANDLE CO. — Main JavaScript
   Dark/Light Theme · Cart · Newsletter · Dynamic Pages
   ========================================================== */

/* ---------- PRODUCT DATA ---------- */
const PRODUCTS = [
  {
    id: 1,
    name: "Apple Spice",
    desc: "Warm apple cider with a hint of cinnamon and clove.",
    price: 699,
    badge: "Bestseller",
    featured: true,
    imageDay: "img/candles/apple_day.png",
    imageDark: "img/candles/apple_dark.png",
  },
  {
    id: 2,
    name: "Lavender Fields",
    desc: "Calming lavender infused with a hint of floral sweetness.",
    price: 699,
    featured: false,
    imageDay: "img/candles/lavender_day.png",
    imageDark: "img/candles/lavender_dark.png",
  },
  {
    id: 3,
    name: "Citrus Bliss",
    desc: "Uplifting blend of sun-drenched lemon and subtle herbs.",
    price: 699,
    featured: false,
    imageDay: "img/candles/lemon_day.png",
    imageDark: "img/candles/lemon_dark.png",
  },
  {
    id: 4,
    name: "Vanilla & Cinnamon",
    desc: "Sweet Madagascar vanilla with a creamy, spicy touch.",
    price: 699,
    featured: false,
    imageDay: "img/candles/cinnamon_day.png",
    imageDark: "img/candles/cinnamon_dark.png",
  },
  {
    id: 5,
    name: "Banana Bread",
    desc: "Freshly baked banana bread with a warm, comforting aroma.",
    price: 699,
    featured: false,
    imageDay: "img/candles/banana_day.png",
    imageDark: "img/candles/banana_dark.png",
  },
  {
    id: 6,
    name: "Mint Refresh",
    desc: "Cooling peppermint and eucalyptus for a spa-like feel.",
    price: 699,
    featured: false,
    imageDay: "img/candles/mint_day.png",
    imageDark: "img/candles/mint_dark.png",
  },
  {
    id: 7,
    name: "Rose Garden",
    desc: "Romantic blooming rose petals with a soft powdery finish.",
    price: 699,
    featured: false,
    imageDay: "img/candles/rose_day.png",
    imageDark: "img/candles/rose_dark.png",
  },
  {
    id: 8,
    name: "Soursop Serenity",
    desc: "Tropical soursop with creamy coconut and a hint of lime.",
    price: 699,
    featured: false,
    imageDay: "img/candles/soursop_day.png",
    imageDark: "img/candles/soursop_dark.png",
  },
];

/* ---------- CART STATE ---------- */
let cart = [
  { id: 1, name: "Apple Spice", price: 699, qty: 1 },
  { id: 2, name: "Lavender Fields", price: 699, qty: 1 },
];

let showAllProducts = false;

/* ==========================================================
   DYNAMIC PAGE CONTENT (FOOTER LINKS)
   ========================================================== */
const PAGE_CONTENT = {
  // SHOP
  "all-candles": {
    title: "All Candles",
    content: `<p>Explore our complete collection of hand-poured, 100% natural soy candles. From warm and spicy to fresh and floral, each candle is crafted to elevate your everyday moments.</p>
              <p>Our signature 11.5 oz jars offer a burn time of 40-50 hours, ensuring your favorite scents last longer.</p>
              <p><em>Browse the collection above to find your perfect match.</em></p>`,
  },
  "best-sellers": {
    title: "Best Sellers",
    content: `<p>Discover the scents our customers can't stop talking about. These top-rated candles have become staples in homes everywhere.</p>
              <ul>
                <li><strong>Apple Spice:</strong> Warm apple cider with cinnamon and clove.</li>
                <li><strong>Lavender Fields:</strong> Calming lavender with floral sweetness.</li>
                <li><strong>Sandalwood & Amber:</strong> Our signature evening ritual.</li>
              </ul>`,
  },
  "bundle-packs": {
    title: "Bundle Packs",
    content: `<p>Save more when you bundle your favorite scents. Our curated packs are designed to give you the best value while helping you discover new aromas.</p>
              <p>Choose from our 2-pack or 3-pack options, perfect for stocking up or sharing the warmth with friends and family.</p>`,
  },
  "gift-sets": {
    title: "Gift Sets",
    content: `<p>Beautifully packaged and ready to give. Our gift sets are curated for birthdays, weddings, housewarmings, and special occasions.</p>
              <p>Each set includes our best-selling scents, a wick trimmer, and a handwritten gift note, all presented in an eco-friendly gift box.</p>`,
  },
  accessories: {
    title: "Accessories",
    content: `<p>Elevate your candle experience with our thoughtfully designed accessories.</p>
              <ul>
                <li><strong>Wick Trimmers:</strong> Keep your wick at the perfect length for a clean burn.</li>
                <li><strong>Candle Snuffers:</strong> Extinguish flames without smoke or soot.</li>
                <li><strong>Matchsticks:</strong> Long, elegant matches for safe lighting.</li>
              </ul>`,
  },
  "new-arrivals": {
    title: "New Arrivals",
    content: `<p>Be the first to experience our latest seasonal blends and limited-edition scents. We release new collections quarterly, inspired by the changing seasons and nature's finest aromas.</p>
              <p>Subscribe to our newsletter to stay updated on our next launch.</p>`,
  },
  "wax-melts": {
    title: "Wax Melts",
    content: `<p>Enjoy your favorite KRITIKOMENTO scents without a flame. Our soy wax melts are perfect for electric warmers, offering a safe and flameless way to fill your space with fragrance.</p>
              <p>Each pack contains six melts, providing approximately 30 hours of burn time.</p>`,
  },
  "gift-cards": {
    title: "Gift Cards",
    content: `<p>Not sure which scent they'll love? Give them the gift of choice with a KRITIKOMENTO Digital Gift Card.</p>
              <p>Available in denominations of ₱500, ₱1,000, and ₱2,000. Delivered instantly via email with a personalized message.</p>`,
  },

  // COMPANY
  "about-us": {
    title: "About Us",
    content: `<p>KRITIKOMENTO Candle Co. was born from a simple desire: to create clean, beautifully scented candles that elevate the everyday.</p>
              <p>Every candle is hand-poured in small batches in our studio, using 100% natural soy wax and lead-free wicks. We believe that the flicker of a flame and the warmth of a scent have the power to transform a space.</p>
              <p>Thank you for letting us be a part of your home.</p>`,
  },
  "our-ingredients": {
    title: "Our Ingredients",
    content: `<p>We are committed to transparency and quality. Here is what goes into every KRITIKOMENTO candle:</p>
              <ul>
                <li><strong>100% Natural Soy Wax:</strong> Renewable, biodegradable, and burns cleaner than paraffin.</li>
                <li><strong>Lead-Free Cotton Wicks:</strong> For a steady, even flame.</li>
                <li><strong>Phthalate-Free Fragrances:</strong> Infused with pure essential oils.</li>
              </ul>
              <p>We never use parabens, sulfates, or synthetic dyes.</p>`,
  },
  sustainability: {
    title: "Sustainability",
    content: `<p>We believe in leaving the planet better than we found it. Our sustainability practices include:</p>
              <ul>
                <li>Eco-friendly, recyclable glass jars and packaging.</li>
                <li>Carbon-neutral shipping on all orders.</li>
                <li>Small-batch production to minimize waste.</li>
                <li>Refill program coming soon.</li>
              </ul>`,
  },
  blog: {
    title: "Blog",
    content: `<p>Welcome to The Wick, our journal for mindful living, home decor, and candle care.</p>
              <p>Explore our latest articles:</p>
              <ul>
                <li>5 Ways to Style Your Candles for Fall</li>
                <li>The Ultimate Guide to Candle Care</li>
                <li>Behind the Scenes: How We Pour Our Candles</li>
              </ul>`,
  },
  "contact-us": {
    title: "Contact Us",
    content: `<p>We'd love to hear from you! Whether you have a question about an order, a wholesale inquiry, or just want to say hello, our team is here to help.</p>
              <p><strong>Email:</strong> hello@kritikomento.com</p>
              <p><strong>Phone:</strong> +63 (2) 8123-4567</p>
              <p><strong>Studio Hours:</strong> Mon-Fri, 9am - 5pm PST</p>`,
  },
  careers: {
    title: "Careers",
    content: `<p>Join our team of passionate artisans and creatives. We are always looking for individuals who share our love for craftsmanship and sustainability.</p>
              <p>Current Openings:</p>
              <ul>
                <li>Production Assistant (Part-Time)</li>
                <li>Social Media Manager (Remote)</li>
              </ul>
              <p>Send your resume to careers@kritikomento.com.</p>`,
  },
  wholesale: {
    title: "Wholesale",
    content: `<p>Interested in carrying KRITIKOMENTO candles in your boutique, spa, or hotel? We offer competitive wholesale pricing and dedicated support for our retail partners.</p>
              <p>Please fill out our wholesale inquiry form, and our team will get back to you within 2-3 business days.</p>`,
  },
  "affiliate-program": {
    title: "Affiliate Program",
    content: `<p>Earn commission by sharing your love for KRITIKOMENTO. Our affiliate program is perfect for content creators, influencers, and bloggers.</p>
              <p>Benefits include:</p>
              <ul>
                <li>15% commission on all sales</li>
                <li>Exclusive discount codes for your audience</li>
                <li>Early access to new product launches</li>
              </ul>`,
  },

  // SUPPORT
  faq: {
    title: "Frequently Asked Questions",
    content: `<p><strong>How long do your candles burn?</strong><br>Our 11.5 oz candles burn for approximately 40-50 hours when properly cared for.</p>
              <p><strong>Are your candles safe for pets?</strong><br>Yes! We use 100% natural soy wax and phthalate-free fragrances. However, we always recommend burning candles in a well-ventilated area and keeping them out of reach of curious paws.</p>
              <p><strong>What kind of wax do you use?</strong><br>We exclusively use 100% natural, renewable soy wax sourced from US farms.</p>`,
  },
  "shipping-returns": {
    title: "Shipping & Returns",
    content: `<p><strong>Shipping Policy:</strong><br>We offer free standard shipping on all orders over ₱999. Orders are processed within 1-2 business days and typically arrive within 3-5 business days.</p>
              <p><strong>Return Policy:</strong><br>We accept returns within 30 days of delivery for unused, unlit candles in their original packaging. Please contact support@kritikomento.com to initiate a return.</p>`,
  },
  "candle-care": {
    title: "Candle Care Guide",
    content: `<p><strong>1. First Burn Ritual:</strong> Allow the wax to melt all the way to the edges of the jar before blowing it out. This usually takes 2-3 hours and prevents "tunneling."</p>
              <p><strong>2. Trim the Wick:</strong> Keep your wick trimmed to 1/4 inch before every burn. This ensures a clean, even flame and prevents soot.</p>
              <p><strong>3. Safety First:</strong> Never leave a burning candle unattended. Keep away from drafts, children, pets, and flammable objects.</p>
              <p><strong>4. Reuse &amp; Recycle:</strong> Once only 1/2 inch of wax remains, clean out the jar with warm soapy water and repurpose it as a planter or storage container.</p>`,
  },
  "track-order": {
    title: "Track Your Order",
    content: `<p>Enter your order number and email address below to see the current status of your delivery.</p>
              <div style="background:var(--bg-alt); padding:20px; border-radius:8px; margin-top:20px; border:1px solid var(--border);">
                <input type="text" placeholder="Order Number (e.g., #KRI-12345)" style="width:100%; padding:10px; margin-bottom:10px; border:1px solid var(--border); border-radius:4px; background:var(--surface); color:var(--text);">
                <input type="email" placeholder="Email Address" style="width:100%; padding:10px; margin-bottom:10px; border:1px solid var(--border); border-radius:4px; background:var(--surface); color:var(--text);">
                <button class="btn btn-primary" style="width:100%; padding:10px;" onclick="showToast('Tracking functionality is for demo purposes.')">Track Order</button>
              </div>`,
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content: `<p>Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information when you visit our website or make a purchase.</p>
              <p>We use industry-standard encryption to protect your data. We do not sell or share your personal information with third parties for marketing purposes.</p>
              <p>Last updated: January 2026.</p>`,
  },
  "terms-of-service": {
    title: "Terms of Service",
    content: `<p>By accessing and using this website, you agree to be bound by these Terms of Service. All content, images, and designs are the intellectual property of KRITIKOMENTO Candle Co.</p>
              <p>You may not reproduce, distribute, or use our content without express written permission. Prices and availability are subject to change without notice.</p>`,
  },
  "cookie-policy": {
    title: "Cookie Policy",
    content: `<p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies.</p>
              <p>You can manage your cookie preferences through your browser settings at any time.</p>`,
  },
  "help-center": {
    title: "Help Center",
    content: `<p>Welcome to the KRITIKOMENTO Help Center. Browse our detailed guides and tutorials for all your candle needs.</p>
              <ul>
                <li><a href="#" style="color:var(--amber); text-decoration:underline;">Getting Started with Soy Candles</a></li>
                <li><a href="#" style="color:var(--amber); text-decoration:underline;">How to Prevent Candle Tunneling</a></li>
                <li><a href="#" style="color:var(--amber); text-decoration:underline;">Safety Tips for Burning Candles at Home</a></li>
                <li><a href="#" style="color:var(--amber); text-decoration:underline;">Recycling Your Candle Jars</a></li>
              </ul>`,
  },
};

/* ==========================================================
   THEME TOGGLE & IMAGE SWAPPING
   ========================================================== */
function getTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

function updateThemeAssets(theme) {
  const images = document.querySelectorAll(".theme-img");
  images.forEach((img) => {
    if (theme === "dark") {
      const darkSrc = img.getAttribute("data-dark-src");
      if (darkSrc) img.src = darkSrc;
    } else {
      const daySrc = img.getAttribute("data-day-src");
      if (daySrc) img.src = daySrc;
    }
  });

  const heroSection = document.getElementById("hero");
  if (heroSection) {
    heroSection.style.backgroundImage =
      theme === "dark"
        ? "url('img/banners/banner_night.jpg')"
        : "url('img/banners/banner_day.jpg')";
  }

  const newsletterSection = document.getElementById("newsletterSection");
  if (newsletterSection) {
    newsletterSection.style.backgroundImage =
      "url('img/banners/banner_footer.png')";
  }
}

function initTheme() {
  const stored = localStorage.getItem("KRITIKOMENTO-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", theme);
  updateThemeAssets(theme);
}

function toggleTheme() {
  const current = getTheme();
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("KRITIKOMENTO-theme", next);
  updateThemeAssets(next);

  showToast(next === "dark" ? "🌙 Dark mode enabled" : "☀️ Light mode enabled");
}

/* ==========================================================
   DYNAMIC PAGE VIEWER LOGIC
   ========================================================== */
function openPage(pageKey) {
  const pageData = PAGE_CONTENT[pageKey];
  if (!pageData) return;

  const viewer = document.getElementById("pageViewer");
  const titleEl = document.getElementById("pageTitle");
  const contentEl = document.getElementById("pageContent");

  if (viewer && titleEl && contentEl) {
    titleEl.textContent = pageData.title;
    contentEl.innerHTML = pageData.content;

    viewer.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    viewer.scrollTop = 0; // Reset scroll to top
  }
}

function closePage() {
  const viewer = document.getElementById("pageViewer");
  if (viewer) {
    viewer.classList.remove("open");
    document.body.style.overflow = "";
  }
}

/* ==========================================================
   SCROLL REVEAL ANIMATION
   ========================================================== */
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(
    ".scroll-reveal:not(.visible)",
  );
  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================
   PRODUCT GRID RENDER
   ========================================================== */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const viewAllBtn = document.querySelector(".view-all-wrap .btn");
  if (!grid) return;

  const currentTheme = getTheme();
  const productsToRender = showAllProducts ? PRODUCTS : PRODUCTS.slice(0, 4);

  grid.innerHTML = productsToRender
    .map((p) => {
      const imgSrc = currentTheme === "dark" ? p.imageDark : p.imageDay;

      return `
      <article class="product-card scroll-reveal">
        <div class="product-media">
          <img src="${imgSrc}" 
               data-day-src="${p.imageDay}" 
               data-dark-src="${p.imageDark}" 
               alt="${p.name} Candle" 
               class="theme-img" 
               loading="lazy">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p class="desc">${p.desc}</p>
          <p class="price">₱${p.price}</p>
          <button class="btn ${p.featured ? "featured" : ""} add-to-cart"
                  data-name="${p.name}"
                  data-price="${p.price}">
            Add to Cart
          </button>
        </div>
      </article>
    `;
    })
    .join("");

  if (viewAllBtn) {
    if (PRODUCTS.length <= 4) {
      viewAllBtn.style.display = "none";
    } else {
      viewAllBtn.textContent = showAllProducts
        ? "Show Less"
        : "View All Candles";
    }
  }

  initScrollReveal();
}

/* ==========================================================
   CART RENDER
   ========================================================== */
function renderCart() {
  const container = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("cartSubtotal");
  const countEl = document.getElementById("cartCount");

  if (!container) return;

  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    container.innerHTML = `
      <p style="text-align:center; color:var(--text-muted); font-size:0.85rem; padding:40px 0;">
        Your cart is currently empty.
      </p>`;
  } else {
    container.innerHTML = cart
      .map((item) => {
        total += item.price * item.qty;
        count += item.qty;
        return `
        <div class="cart-item">
          <div class="cart-item-thumb"><i class="fa-solid fa-fire-flame-curved"></i></div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span class="price">₱${item.price}</span>
            <div class="cart-qty">
              <button onclick="updateQty(${item.id}, -1)" aria-label="Decrease">−</button>
              <span>${item.qty}</span>
              <button onclick="updateQty(${item.id}, 1)" aria-label="Increase">+</button>
            </div>
          </div>
          <span class="cart-item-total">₱${(item.price * item.qty).toLocaleString()}</span>
        </div>
      `;
      })
      .join("");
  }

  if (subtotalEl) subtotalEl.textContent = `₱${total.toLocaleString()}`;
  if (countEl) countEl.textContent = count;
}

function updateQty(id, change) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  renderCart();
}

function addToCart(name, price) {
  const existing = cart.find((i) => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: Date.now(), name, price, qty: 1 });
  }
  renderCart();
  showToast(`Added "${name}" to cart`);
}

/* ==========================================================
   CART DRAWER
   ========================================================== */
function openCart() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.body.style.overflow = "";
}

/* ==========================================================
   CANDLE CARE GUIDE MODAL (Legacy, kept for Learn More button)
   ========================================================== */
function openCareGuide() {
  document.getElementById("careGuideModal")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCareGuide() {
  document.getElementById("careGuideModal")?.classList.remove("open");
  document.body.style.overflow = "";
}

/* ==========================================================
   TOAST NOTIFICATION
   ========================================================== */
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ==========================================================
   INITIALISE
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProducts();
  renderCart();
  initScrollReveal();

  // Theme toggle
  document
    .getElementById("themeToggle")
    ?.addEventListener("click", toggleTheme);

  // View All / Show Less Toggle
  const viewAllBtn = document.querySelector(".view-all-wrap .btn");
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showAllProducts = !showAllProducts;
      renderProducts();
    });
  }

  // Add to cart (delegation)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    const name = btn.dataset.name;
    const price = parseInt(btn.dataset.price, 10);
    if (name && price) addToCart(name, price);
  });

  // Cart open/close
  document.getElementById("cartToggle")?.addEventListener("click", openCart);
  document.getElementById("cartClose")?.addEventListener("click", closeCart);
  document.getElementById("cartOverlay")?.addEventListener("click", closeCart);

  // Checkout
  document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Your cart is empty");
      return;
    }
    showToast("Redirecting to secure checkout…");
  });

  // Newsletter
  document.getElementById("newsletterForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("newsletterEmail");
    if (input && input.value) {
      showToast("Subscribed! Check your inbox for 15% off.");
      input.value = "";
    }
  });

  // Learn More Button with Loading State and Modal
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      const originalText = learnMoreBtn.innerHTML;
      learnMoreBtn.innerHTML = '<span class="spinner"></span> Loading Guide...';
      learnMoreBtn.classList.add("btn-loading");
      learnMoreBtn.disabled = true;

      setTimeout(() => {
        learnMoreBtn.innerHTML = originalText;
        learnMoreBtn.classList.remove("btn-loading");
        learnMoreBtn.disabled = false;
        openCareGuide();
      }, 1500); // Reduced time slightly for better UX
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  });

  // ---- DYNAMIC PAGE VIEWER EVENT LISTENERS ----
  // Attach click event to all footer links with data-page attribute
  document.querySelectorAll(".footer-col a[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pageKey = link.getAttribute("data-page");

      // If it's the Candle Care link, open the dedicated modal
      if (pageKey === "candle-care") {
        openCareGuide();
      } else {
        // Otherwise open the full page viewer
        openPage(pageKey);
      }
    });
  });

  // Close page viewer button
  document.getElementById("pageBackBtn")?.addEventListener("click", closePage);

  // Escape key closes cart, modals, and page viewer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeCareGuide();
      closePage();
    }
  });
});
