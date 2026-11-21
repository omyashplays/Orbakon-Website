/**
 * ============================================================================
 * ORBAKON PORTFOLIO WEBSITE - JAVASCRIPT
 * ============================================================================
 * 
 * TABLE OF CONTENTS:
 * 1. CONFIGURATION & CONTACT SETTINGS (Change your phone, email, etc. here)
 * 2. SERVICES & EXAMPLES DATA STORE (Change service text, images, videos, links here)
 * 3. MODAL CONTROLLER (Service details & gallery popups)
 * 4. MOBILE NAVIGATION DRAWER
 * 5. SCROLL ANIMATIONS (IntersectionObserver)
 * 6. UTILITY & ACCESSIBILITY HANDLERS
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CONFIGURATION & CONTACT SETTINGS
     * Update your phone number or default message here.
     ========================================================================== */
  const CONTACT_CONFIG = {
    businessName: "Orbakon",
    whatsappNumber: "917903947219", // Format: country code + number without plus or spaces
    defaultWhatsappText: "Hi Orbakon, I want to get my business online.",
    email: "orbakonstudio@gmail.com",
    location: "Piska Nagri, Ranchi, Jharkhand, India"
  };

  /**
   * Helper: Generate a direct WhatsApp chat link with custom prefilled message
   * @param {string} messageText 
   * @returns {string} wa.me URL
   */
  function createWhatsAppUrl(messageText) {
    const encoded = encodeURIComponent(messageText || CONTACT_CONFIG.defaultWhatsappText);
    return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encoded}`;
  }


  /* ==========================================================================
     2. SERVICES & EXAMPLES DATA STORE
     * 
     * HOW TO REPLACE PLACEHOLDER EXAMPLES WITH REAL MEDIA LATER:
     * - type: "image", "video", or "link"
     * - source: For images/videos, set file path (e.g., "assets/portfolio/my-shop.jpg")
     *           For links, set live URL (e.g., "https://shopdemo.com")
     * - title: Headline for the example
     * - caption: Short note explaining what was achieved
     ========================================================================== */
  const SERVICES_DATA = [
    {
      id: "social-media",
      name: "Social Media Account Setup",
      category: "Social Media",
      tileClass: "tile-lavender",
      iconSvg: `
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="36" height="36" rx="10" stroke="#4C1D95" stroke-width="3" fill="#EDE9FE"/>
          <circle cx="24" cy="24" r="7" stroke="#4C1D95" stroke-width="3"/>
          <circle cx="33" cy="15" r="2.5" fill="#4C1D95"/>
          <path d="M12 40C12 34 17 31 24 31C31 31 36 34 36 40" stroke="#5B21B6" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `,
      description: "We create and set up your Instagram and Facebook business pages with a proper profile, bio, contact action buttons and consistent local branding so your shop looks official, active and trustworthy.",
      features: [
        "Professional Instagram & Facebook business page setup",
        "Custom bio copy, business category & operating hours",
        "Direct WhatsApp & Call action buttons linked to your phone",
        "Profile picture and highlight covers aligned to your brand"
      ],
      whatsappPrefill: "Hi Orbakon, I'm interested in your Social Media Account Setup service. Please tell me more.",
      examples: [
        {
          type: "image",
          title: "Example 1 - coming soon",
          source: "", // e.g. "assets/examples/social-profile-1.jpg"
          caption: "Instagram profile makeover for a local clothing boutique"
        },
        {
          type: "image",
          title: "Example 2 - coming soon",
          source: "", // e.g. "assets/examples/social-profile-2.jpg"
          caption: "Facebook shop page & highlight covers for a sweet shop"
        },
        {
          type: "link",
          title: "Example 3 - coming soon",
          source: "", // e.g. "https://instagram.com/your-demo"
          caption: "Full social media launch template for local food eatery"
        }
      ]
    },

    {
      id: "google-business",
      name: "Google Business Profile Setup & Optimization",
      category: "Google Maps & Local SEO",
      tileClass: "tile-blue",
      iconSvg: `
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6C16.268 6 10 12.268 10 20C10 30.5 24 44 24 44C24 44 38 30.5 38 20C38 12.268 31.732 6 24 6Z" fill="#0284C7"/>
          <circle cx="24" cy="19" r="5" fill="#F0F9FF"/>
        </svg>
      `,
      description: "Show up on Google Maps and local search when people in Ranchi search for what you sell. We claim, verify, configure, and optimize your Google profile with photos, services, hours, and direction pins.",
      features: [
        "Accurate Google Maps pin location and verification support",
        "Categories, business hours, and phone number setup",
        "Photo gallery setup (shop front, interior, products)",
        "Review link generation so happy customers can leave 5 stars easily"
      ],
      whatsappPrefill: "Hi Orbakon, I'm interested in your Google Business Profile Setup & Optimization service. Please tell me how to get started.",
      examples: [
        {
          type: "image",
          title: "Example 1 - coming soon",
          source: "", // e.g. "assets/examples/gmb-preview-1.jpg"
          caption: "Google Maps search ranking result for local hardware store"
        },
        {
          type: "image",
          title: "Example 2 - coming soon",
          source: "", // e.g. "assets/examples/gmb-preview-2.jpg"
          caption: "Optimized profile overview with catalog and call buttons"
        },
        {
          type: "link",
          title: "Example 3 - coming soon",
          source: "", // e.g. "https://maps.google.com/..."
          caption: "Live Google Maps listing example for a clinic/service"
        }
      ]
    },

    {
      id: "ugc-video",
      name: "UGC Video",
      category: "Short-Form Video",
      tileClass: "tile-yellow",
      iconSvg: `
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="8" width="24" height="32" rx="6" stroke="#854D0E" stroke-width="3" fill="#FEF9C3"/>
          <polygon points="21,20 30,24 21,28" fill="#854D0E"/>
          <circle cx="24" cy="12" r="1" fill="#854D0E"/>
        </svg>
      `,
      description: "Short, authentic videos for your product, food items or shop that look real and get attention on Instagram Reels and YouTube Shorts. We showcase your products in an honest, engaging style that resonates with local customers.",
      features: [
        "Vertical 9:16 format optimized for Instagram Reels & WhatsApp Status",
        "Authentic showcase of products, storefront or services",
        "Clean subtitles, captions, and trending background audio",
        "Ready to post directly to your social pages"
      ],
      whatsappPrefill: "Hi Orbakon, I'm interested in your UGC Video service for my shop. Please share details and pricing.",
      examples: [
        {
          type: "video",
          title: "Example 1 - coming soon",
          source: "", // e.g. "assets/examples/ugc-reel-1.mp4"
          caption: "30-second product walkthrough reel for a local retail shop"
        },
        {
          type: "video",
          title: "Example 2 - coming soon",
          source: "", // e.g. "assets/examples/ugc-reel-2.mp4"
          caption: "Shop tour & owner introduction video for local bakery"
        },
        {
          type: "image",
          title: "Example 3 - coming soon",
          source: "", // e.g. "assets/examples/ugc-reel-3.jpg"
          caption: "Customer review snippet & reel storyboard preview"
        }
      ]
    },

    {
      id: "banner-poster",
      name: "Banner & Poster for Social Media",
      category: "Graphic Design",
      tileClass: "tile-pink",
      iconSvg: `
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="6" stroke="#9F1239" stroke-width="3" fill="#FFF1F2"/>
          <path d="M12 30L19 22L28 32L32 27L36 33H12V30Z" fill="#FB7185"/>
          <circle cx="18" cy="18" r="2.5" fill="#9F1239"/>
        </svg>
      `,
      description: "Eye-catching posters, banners and story graphics for your shop offers, festival discounts (Diwali, Chhath, Eid, New Year) and everyday announcements. Sized for WhatsApp Status, Instagram feed and Facebook.",
      features: [
        "High-resolution social media post graphics (1:1 square & 9:16 story)",
        "Festival offer posters & seasonal discount banners",
        "Clear pricing, contact details, and shop address on every design",
        "Fast 24-48 hour turnaround for urgent shop offers"
      ],
      whatsappPrefill: "Hi Orbakon, I'm interested in Banner & Poster designs for my business. Please tell me more.",
      examples: [
        {
          type: "image",
          title: "Example 1 - coming soon",
          source: "", // e.g. "assets/examples/poster-festival.jpg"
          caption: "Festival discount promotional banner for footwear shop"
        },
        {
          type: "image",
          title: "Example 2 - coming soon",
          source: "", // e.g. "assets/examples/poster-offer.jpg"
          caption: "Weekend special offer announcement for cafe / restaurant"
        },
        {
          type: "image",
          title: "Example 3 - coming soon",
          source: "", // e.g. "assets/examples/poster-launch.jpg"
          caption: "Grand opening / new arrival banner for local electronics shop"
        }
      ]
    },

    {
      id: "shop-website",
      name: "Website for Shop",
      category: "Web Design",
      tileClass: "tile-mint",
      iconSvg: `
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="10" width="36" height="28" rx="6" stroke="#065F46" stroke-width="3" fill="#ECFDF5"/>
          <line x1="6" y1="18" x2="42" y2="18" stroke="#065F46" stroke-width="2"/>
          <circle cx="12" cy="14" r="1.5" fill="#065F46"/>
          <circle cx="17" cy="14" r="1.5" fill="#065F46"/>
          <rect x="11" y="23" width="12" height="10" rx="2" fill="#34D399" fill-opacity="0.7"/>
          <line x1="27" y1="24" x2="36" y2="24" stroke="#065F46" stroke-width="2" stroke-linecap="round"/>
          <line x1="27" y1="28" x2="34" y2="28" stroke="#065F46" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `,
      description: "A clean, modern, ultra-fast website for your shop that loads in less than a second on mobile phones. Visitors can see your catalog, location map, photos and tap one button to order or chat on WhatsApp.",
      features: [
        "Mobile-first, lightning-fast design (no complicated loading)",
        "Product/service showcase with photos and descriptions",
        "Direct 1-tap WhatsApp chat and Call buttons",
        "Integrated Google Maps location and shop timings"
      ],
      whatsappPrefill: "Hi Orbakon, I'm interested in getting a Website for my Shop. Please let me know the process and timeline.",
      examples: [
        {
          type: "link",
          title: "Example 1 - coming soon",
          source: "", // e.g. "https://example-shop.com"
          caption: "One-page catalog website for a local apparel store"
        },
        {
          type: "image",
          title: "Example 2 - coming soon",
          source: "", // e.g. "assets/examples/website-mobile.jpg"
          caption: "Mobile screenshot showing 1-tap WhatsApp ordering"
        },
        {
          type: "image",
          title: "Example 3 - coming soon",
          source: "", // e.g. "assets/examples/website-desktop.jpg"
          caption: "Clean product showcase layout with location map"
        }
      ]
    }
  ];


  /* ==========================================================================
     3. SERVICE MODAL CONTROLLER
     ========================================================================== */
  const modalBackdrop = document.getElementById("service-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalTileIcon = document.getElementById("modal-tile-icon");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalFeatures = document.getElementById("modal-features");
  const modalExamplesGrid = document.getElementById("modal-examples-grid");
  const modalWhatsappCta = document.getElementById("modal-whatsapp-cta");
  const modalCtaText = document.getElementById("modal-cta-text");

  let activeTriggerElement = null;

  /**
   * Render example work box inside modal gallery
   * Handles Images, Videos, or Links gracefully with placeholder fallback
   */
  function renderExampleCard(example, index) {
    const isImage = example.type === "image";
    const isVideo = example.type === "video";
    const isLink = example.type === "link";

    let previewContent = "";

    if (example.source && example.source.trim() !== "") {
      if (isImage) {
        previewContent = `<img src="${example.source}" alt="${example.title}" loading="lazy">`;
      } else if (isVideo) {
        previewContent = `
          <video controls preload="metadata" playsinline poster="">
            <source src="${example.source}" type="video/mp4">
            Your browser does not support the video tag.
          </video>`;
      } else if (isLink) {
        previewContent = `
          <div style="padding: 12px; text-align: center;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 6px auto;">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span style="font-size: 0.8rem; font-weight: 600;">Visit Live Preview</span>
          </div>`;
      }
    } else {
      // Neutral placeholder box
      let placeholderIcon = "";
      if (isImage) {
        placeholderIcon = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>`;
      } else if (isVideo) {
        placeholderIcon = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>`;
      } else {
        placeholderIcon = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>`;
      }

      previewContent = `
        ${placeholderIcon}
        <span style="font-size: 0.775rem; letter-spacing: 0.02em;">Preview coming soon</span>
      `;
    }

    const typeLabel = example.type.toUpperCase();

    return `
      <div class="example-card">
        <div class="example-top-bar">
          <span class="example-type-badge">${typeLabel}</span>
          <span style="font-size: 0.75rem; color: var(--text-subtle);">Item #${index + 1}</span>
        </div>
        <div class="example-preview-placeholder">
          ${previewContent}
        </div>
        <div class="example-title">${example.title}</div>
        <p style="font-size: 0.825rem; color: var(--text-muted); line-height: 1.4;">${example.caption}</p>
        ${
          example.source && isLink
            ? `<a href="${example.source}" target="_blank" rel="noopener noreferrer" class="example-link-cta">Open preview &rarr;</a>`
            : ''
        }
      </div>
    `;
  }

  /**
   * Open modal with service data by ID
   * @param {string} serviceId 
   * @param {HTMLElement} triggerEl 
   */
  function openServiceModal(serviceId, triggerEl) {
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (!service) return;

    activeTriggerElement = triggerEl;

    // 1. Populate Header
    modalTitle.textContent = service.name;
    modalCategory.textContent = service.category;
    modalTileIcon.className = `modal-tile-badge ${service.tileClass}`;
    modalTileIcon.innerHTML = service.iconSvg;

    // 2. Populate Description & Features
    modalDescription.textContent = service.description;
    modalFeatures.innerHTML = service.features.map(f => `<li>${f}</li>`).join("");

    // 3. Populate Examples Gallery (3 items)
    modalExamplesGrid.innerHTML = service.examples.map((ex, idx) => renderExampleCard(ex, idx)).join("");

    // 4. Update WhatsApp CTA button
    const whatsappUrl = createWhatsAppUrl(service.whatsappPrefill);
    modalWhatsappCta.href = whatsappUrl;
    modalCtaText.textContent = `Get this service on WhatsApp`;

    // 5. Display Modal
    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scroll

    // Focus close button for accessibility
    setTimeout(() => {
      modalCloseBtn.focus();
    }, 100);
  }

  /**
   * Close the active modal
   */
  function closeServiceModal() {
    if (!modalBackdrop.classList.contains("is-open")) return;

    modalBackdrop.classList.remove("is-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Restore background scroll

    // Restore focus to triggering card
    if (activeTriggerElement) {
      activeTriggerElement.focus();
      activeTriggerElement = null;
    }
  }

  // Bind close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeServiceModal);
  }

  // Click outside to close (Backdrop click)
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeServiceModal();
      }
    });
  }

  // Keyboard support: Escape key to close modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("is-open")) {
      closeServiceModal();
    }
  });


  /* ==========================================================================
     4. SERVICE, STEP & CONTACT CARDS 3D TILT & SPOTLIGHT HANDLERS
     ========================================================================== */
  const interactiveCards = document.querySelectorAll(".service-card, .contact-card, .step-card");

  interactiveCards.forEach(card => {
    const serviceId = card.getAttribute("data-service-id");

    // Click handler for service cards
    if (serviceId) {
      card.addEventListener("click", () => {
        openServiceModal(serviceId, card);
      });

      // Keyboard accessibility: Enter or Space opens the modal
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openServiceModal(serviceId, card);
        }
      });
    }

    // 3D Perspective Tilt & Cursor Spotlight Movement
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle high-end 3D tilt (-6deg to +6deg)
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });


  /* ==========================================================================
     5. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link, .mobile-nav-btn");

  function toggleMobileMenu() {
    const isOpen = mobileNav.classList.contains("is-open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileNav.classList.add("is-open");
    mobileNav.setAttribute("aria-hidden", "false");
    mobileToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    mobileNav.classList.remove("is-open");
    mobileNav.setAttribute("aria-hidden", "true");
    mobileToggle.setAttribute("aria-expanded", "false");
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMobileMenu);
  }

  // Close mobile nav when clicking any link
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close mobile nav when resizing to desktop width
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900 && mobileNav.classList.contains("is-open")) {
      closeMobileMenu();
    }
  });


  /* ==========================================================================
     6. SCROLL ANIMATIONS (IntersectionObserver)
     ========================================================================== */
  const animatedElements = document.querySelectorAll(".fade-in, .service-card, .step-card, .contact-card");

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.1
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      if (!el.classList.contains("fade-in")) {
        el.classList.add("fade-in");
      }
      appearanceObserver.observe(el);
    });
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    animatedElements.forEach(el => el.classList.add("is-visible"));
  }


  /* ==========================================================================
     7. DYNAMIC FOOTER YEAR
     ========================================================================== */
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ==========================================================================
     8. KINETIC HEADLINE WORD ROTATOR
     ========================================================================== */
  const rotatorTrack = document.getElementById("rotator-track");
  if (rotatorTrack) {
    const words = rotatorTrack.querySelectorAll(".rotator-item");
    let currentIdx = 0;
    const totalWords = words.length;

    setInterval(() => {
      currentIdx = (currentIdx + 1) % totalWords;
      rotatorTrack.style.transform = `translateY(-${currentIdx * 1.22}em)`;
    }, 2400);
  }


  /* ==========================================================================
     9. HERO FLOATING CARDS PARALLAX
     ========================================================================== */
  const heroSection = document.getElementById("hero");
  const floatCards = document.querySelectorAll(".hero-float-card");

  if (heroSection && floatCards.length > 0) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      floatCards.forEach(card => {
        const speed = parseFloat(card.getAttribute("data-speed") || "1.5");
        const moveX = x * speed * 12;
        const moveY = y * speed * 12;
        card.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 0)`;
      });
    });

    heroSection.addEventListener("mouseleave", () => {
      floatCards.forEach(card => {
        card.style.transform = "";
      });
    });
  }


  /* ==========================================================================
     10. GLOBAL CONSTELLATION PARTICLE CANVAS (Whole Page Interactive Mesh)
     * Lightweight 60fps canvas fixed across the entire viewport
     ========================================================================== */
  const canvas = document.getElementById("global-particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId = null;
    let width = 0;
    let height = 0;

    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.2 + 1;
        this.vx = (Math.random() - 0.5) * 0.65;
        this.vy = (Math.random() - 0.5) * 0.65;
        
        // Colors: Coral Pink, Lavender, Sky Blue
        const colors = [
          "rgba(255, 77, 109, 0.75)", 
          "rgba(196, 181, 253, 0.75)", 
          "rgba(186, 230, 253, 0.65)"
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Smooth drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around viewport edges seamlessly
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Cursor interaction (repel gently)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const dirX = dx / dist;
            const dirY = dy / dist;
            this.x -= dirX * force * 2.5;
            this.y -= dirY * force * 2.5;
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      // Adjust particle count for crisp look across all screens
      const count = Math.min(Math.floor((width * height) / 18000), 75);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      const maxDist = 115;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.24;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 77, 109, ${opacity})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor globally
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const opacity = (1 - dist / mouse.radius) * 0.38;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    // Global mouse tracking across the entire website
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Resize handling
    window.addEventListener("resize", () => {
      resizeCanvas();
    });

    resizeCanvas();
    animate();
  }

})();
