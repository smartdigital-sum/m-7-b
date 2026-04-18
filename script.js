/* ============================================================
   SMARTZONE ELECTRONICS - Simple Version
   Basic functionality with animations
   ============================================================ */

/* ── PRODUCT DATA ─────────────────────────────────────────── */
const products = [
  {
    emoji: '📱', brand: 'Samsung', cat: 'phones',
    name: 'Galaxy S25 Ultra',
    spec: '12GB RAM • 256GB • 6.8" AMOLED',
    price: 124999, old: 134999, badge: 'new',
    stock: 'in-stock'
  },
  {
    emoji: '📱', brand: 'Apple', cat: 'phones',
    name: 'iPhone 16 Pro',
    spec: 'A18 Pro Chip • 256GB • Titanium',
    price: 119900, old: null, badge: 'hot',
    stock: 'in-stock'
  },
  {
    emoji: '📱', brand: 'OnePlus', cat: 'phones',
    name: 'OnePlus 13',
    spec: '12GB RAM • 256GB • 50MP Camera',
    price: 69999, old: 74999, badge: 'sale',
    stock: 'low-stock'
  },
  {
    emoji: '📱', brand: 'Realme', cat: 'phones',
    name: 'Realme 14 Pro+',
    spec: '8GB RAM • 256GB • 120Hz AMOLED',
    price: 29999, old: 34999, badge: 'sale',
    stock: 'in-stock'
  },
  {
    emoji: '📱', brand: 'Xiaomi', cat: 'phones',
    name: 'Xiaomi 14 Ultra',
    spec: '16GB RAM • 512GB • Leica Camera',
    price: 99999, old: 129999, badge: 'sale',
    stock: 'low-stock'
  },
  {
    emoji: '💻', brand: 'ASUS', cat: 'laptops',
    name: 'ROG Zephyrus G14',
    spec: 'Ryzen 9 • RTX 4060 • 16GB RAM',
    price: 104990, old: 119990, badge: 'sale',
    stock: 'in-stock'
  },
  {
    emoji: '💻', brand: 'HP', cat: 'laptops',
    name: 'Spectre x360 14',
    spec: 'Intel i7 • 16GB RAM • 1TB SSD',
    price: 89990, old: null, badge: 'new',
    stock: 'in-stock'
  },
  {
    emoji: '💻', brand: 'Lenovo', cat: 'laptops',
    name: 'IdeaPad Slim 5',
    spec: 'Ryzen 5 • 8GB RAM • 512GB SSD',
    price: 44990, old: 52990, badge: 'sale',
    stock: 'in-stock'
  },
  {
    emoji: '💻', brand: 'Dell', cat: 'laptops',
    name: 'Inspiron 15 3520',
    spec: 'Intel i5 • 8GB RAM • 512GB SSD',
    price: 38990, old: null, badge: 'new',
    stock: 'in-stock'
  },
  {
    emoji: '💻', brand: 'Apple', cat: 'laptops',
    name: 'MacBook Air M3',
    spec: 'M3 Chip • 8GB RAM • 256GB SSD',
    price: 99900, old: 109900, badge: 'sale',
    stock: 'low-stock'
  },
  {
    emoji: '🎧', brand: 'Sony', cat: 'audio',
    name: 'WH-1000XM5',
    spec: 'ANC • 30hr Battery • Hi-Res Audio',
    price: 24990, old: 29990, badge: 'sale',
    stock: 'in-stock'
  },
  {
    emoji: '🎧', brand: 'Nothing', cat: 'audio',
    name: 'Nothing Ear (3)',
    spec: 'ANC • ChatGPT • LHDC Codec',
    price: 6499, old: 7499, badge: 'hot',
    stock: 'in-stock'
  },
  {
    emoji: '🎧', brand: 'boAt', cat: 'audio',
    name: 'Rockerz 550 Pro',
    spec: 'ANC • 60hr Battery • BT 5.3',
    price: 2499, old: 4999, badge: 'sale',
    stock: 'in-stock'
  },
  {
    emoji: '🎧', brand: 'JBL', cat: 'audio',
    name: 'JBL Tune 770NC',
    spec: 'ANC • 70hr Battery • Foldable',
    price: 5999, old: 7499, badge: 'new',
    stock: 'in-stock'
  },
  {
    emoji: '🎧', brand: 'Apple', cat: 'audio',
    name: 'AirPods Pro 3',
    spec: 'USB-C • ANC • Spatial Audio',
    price: 24900, old: null, badge: 'new',
    stock: 'in-stock'
  },
  {
    emoji: '⌚', brand: 'Apple', cat: 'wearables',
    name: 'Apple Watch Series 10',
    spec: '45mm • GPS + Cellular • Always-On',
    price: 44900, old: null, badge: 'new',
    stock: 'in-stock'
  },
  {
    emoji: '⌚', brand: 'Samsung', cat: 'wearables',
    name: 'Galaxy Watch 7',
    spec: '44mm • BioActive Sensor • BT',
    price: 29999, old: 34999, badge: 'hot',
    stock: 'in-stock'
  },
  {
    emoji: '⌚', brand: 'Noise', cat: 'wearables',
    name: 'Noise ColorFit Ultra 3',
    spec: 'AMOLED • IP68 • BT Calling',
    price: 3499, old: 5999, badge: 'sale',
    stock: 'in-stock'
  },
  {
    emoji: '⌚', brand: 'Fire-Boltt', cat: 'wearables',
    name: 'Fire-Boltt Ninja Fit Pro',
    spec: 'Heart Rate • SPO2 • 7-day Battery',
    price: 1799, old: 3999, badge: 'sale',
    stock: 'in-stock'
  },
  {
    emoji: '⌚', brand: 'OnePlus', cat: 'wearables',
    name: 'OnePlus Watch 2',
    spec: '100hr Battery • Wear OS',
    price: 14999, old: 17999, badge: 'sale',
    stock: 'low-stock'
  }
];

let currentFilter = 'all';
let currentSort = 'default';

// Format price to Indian Rupees
function formatPrice(price) {
  return 'Rs. ' + price.toLocaleString('en-IN');
}

/* ── DARK MODE ────────────────────────────────────────────── */
(function initDarkMode() {
  const saved = localStorage.getItem('sz-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('darkModeBtn');
    if (!btn) return;
    btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('sz-theme', next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  });
})();

/* ── FAQ TOGGLE ───────────────────────────────────────────── */
function toggleFaq(questionEl) {
  const answer = questionEl.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

  if (!isOpen) {
    answer.classList.add('open');
    questionEl.classList.add('active');
  }
}

/* ── QUICK VIEW ───────────────────────────────────────────── */
let currentQuickViewProduct = null;

function openQuickView(productIndex) {
  const p = products[productIndex];
  if (!p) return;
  currentQuickViewProduct = p;

  document.getElementById('modalImg').textContent = p.emoji;
  document.getElementById('modalBrand').textContent = p.brand;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalSpec').textContent = p.spec;
  document.getElementById('modalPrice').textContent = formatPrice(p.price);

  const oldEl = document.getElementById('modalOldPrice');
  oldEl.textContent = p.old ? formatPrice(p.old) : '';

  const stockLabels = { 'in-stock': '✓ In Stock', 'low-stock': '⚠ Low Stock', 'out-of-stock': '✗ Out of Stock' };
  const stockColors = { 'in-stock': '#2e7d32', 'low-stock': '#f57c00', 'out-of-stock': '#c62828' };
  const stockEl = document.getElementById('modalStock');
  stockEl.textContent = stockLabels[p.stock];
  stockEl.style.color = stockColors[p.stock];

  document.getElementById('modalOverlay').classList.add('show');
  document.getElementById('quickViewModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('modalOverlay').classList.remove('show');
  document.getElementById('quickViewModal').classList.remove('show');
  document.body.style.overflow = '';
}

function enquireProduct() {
  const name = currentQuickViewProduct ? currentQuickViewProduct.name : 'this product';
  closeQuickView();
  showToast(`"${name}" — Visit our store or WhatsApp us!`);
}

/* ── RENDER PRODUCTS ──────────────────────────────────────── */
function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  let list = filter === 'all' ? [...products] : products.filter(p => p.cat === filter);

  // Apply sort
  if (currentSort === 'price-low') list.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-high') list.sort((a, b) => b.price - a.price);
  else if (currentSort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

  const badgeClass = { new: 'badge-new', hot: 'badge-hot', sale: 'badge-sale' };
  const badgeLabel = { new: 'New Arrival', hot: 'Hot', sale: 'Sale' };
  const stockLabel = { 'in-stock': 'In Stock', 'low-stock': 'Low Stock', 'out-of-stock': 'Out of Stock' };
  const stockClass = { 'in-stock': 'in-stock', 'low-stock': 'low-stock', 'out-of-stock': 'out-of-stock' };

  // Get original product indices for quick view
  const originalIndices = list.map(p => products.indexOf(p));

  grid.innerHTML = list.map((p, i) => `
    <div class="prod-card reveal" style="--delay:${(i % 4) * 0.07}s">
      <div class="prod-img" onclick="openQuickView(${originalIndices[i]})" style="cursor:pointer" title="Quick View">
        <span class="prod-badge ${badgeClass[p.badge]}">${badgeLabel[p.badge]}</span>
        ${p.emoji}
      </div>
      <div class="prod-body">
        <div class="prod-brand">${p.brand}</div>
        <div class="prod-name" onclick="openQuickView(${originalIndices[i]})" style="cursor:pointer">${p.name}</div>
        <div class="prod-spec">${p.spec}</div>
        <span class="stock-badge ${stockClass[p.stock]}">${stockLabel[p.stock]}</span>
        <div class="prod-footer">
          <div>
            <span class="prod-price">${formatPrice(p.price)}</span>
            ${p.old ? `<span class="prod-old">${formatPrice(p.old)}</span>` : ''}
          </div>
          <button class="prod-btn" onclick="openQuickView(${originalIndices[i]})">Quick View</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe new cards
  document.querySelectorAll('#productsGrid .reveal').forEach(el => revealObserver.observe(el));
}

function showEnquiry(name) {
  showToast(`"${name}" - Visit our store for pricing!`);
}

/* ── FILTER TABS & SORT ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');

  // Filter tabs
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts(currentFilter);
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      renderProducts(currentFilter);
    });
  }
});

/* ── SCROLL REVEAL ────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

window.addEventListener('DOMContentLoaded', observeReveal);

/* ── STAT COUNTER ─────────────────────────────────────────── */
function animateCounter(el, target) {
  const duration = 1600;
  const step = 16;
  const increment = Math.ceil(target / (duration / step));
  let current = 0;

  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = current.toLocaleString('en-IN') + '+';
    if (current >= target) clearInterval(timer);
  }, step);
}

const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num[data-target]').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target));
      });
      statObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

window.addEventListener('DOMContentLoaded', () => {
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statObserver.observe(statsBar);
});

/* ── COUNTDOWN TIMER ──────────────────────────────────────── */
function startCountdown() {
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  function tick() {
    const now  = new Date();
    const diff = endOfDay - now;

    if (diff <= 0) {
      ['cdH', 'cdM', 'cdS'].forEach(id => {
        document.getElementById(id).textContent = '00';
      });
      return;
    }

    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1_000);

    document.getElementById('cdH').textContent = String(h).padStart(2, '0');
    document.getElementById('cdM').textContent = String(m).padStart(2, '0');
    document.getElementById('cdS').textContent = String(s).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

window.addEventListener('DOMContentLoaded', startCountdown);

/* ── NAVBAR SCROLL ────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top
  const btn = document.getElementById('backToTop');
  btn.classList.toggle('show', window.scrollY > 400);
});

/* ── MOBILE MENU ──────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('mobileOverlay');

  function openMenu() {
    navLinks.classList.add('open');
    hamburger.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  // Close on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

/* ── BACK TO TOP ──────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* ── ENQUIRY FORM ─────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = document.getElementById('fname');
    const phone = document.getElementById('fphone');

    // Basic validation
    if (name.value.trim().length < 2) {
      showToast('Please enter your name');
      return;
    }

    if (phone.value.trim().length < 8) {
      showToast('Please enter a valid phone number');
      return;
    }

    // Success
    form.reset();
    showToast('Enquiry sent! We will call you back shortly.');
  });
});

/* ── TOAST ────────────────────────────────────────────────── */
let toastTimer;

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ──────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = document.getElementById('navbar').offsetHeight;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});

/* ── CATEGORY CARD CLICK ──────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  const catMap = {
    'Smartphones': 'phones',
    'Laptops': 'laptops',
    'Earbuds & Audio': 'audio',
    'Smart Watches': 'wearables'
  };

  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const name   = card.querySelector('.cat-name').textContent.trim();
      const filter = catMap[name] || 'all';

      // Scroll to products
      const productsSection = document.getElementById('products');
      if (productsSection) {
        const navH = document.getElementById('navbar').offsetHeight;
        const top  = productsSection.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      // Apply filter
      setTimeout(() => {
        document.querySelectorAll('.tab').forEach(t => {
          t.classList.toggle('active', t.dataset.filter === filter);
        });
        currentFilter = filter;
        renderProducts(filter);
      }, 400);
    });
  });
});
