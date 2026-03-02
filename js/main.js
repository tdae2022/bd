// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('automatech_cart') || '[]');

function saveCart() {
    localStorage.setItem('automatech_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    // Check if the item already exists in the cart array
    const existing = cart.find(i => i.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: product.id, qty: 1 });
    }
    saveCart();
    const btn = document.querySelector(`[data-product-id="${productId}"]`);
    if (btn) {
        btn.classList.add('added');
        btn.innerHTML = '<i class="fas fa-check"></i> Added!';
        setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
        }, 1500);
    }
    // Show cart sidebar briefly
    showCartNotification();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== productId);
    saveCart();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    document.getElementById('cart-count').textContent = totalItems;

    const cartItemsEl = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    const cartTotalEl = document.getElementById('cart-total-price');

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-box-open"></i>
                <p>Your cart is empty</p>
            </div>`;
        cartFooter.style.display = 'none';
        return;
    }

    let html = '';
    cart.forEach(item => {
        const p = productsData.find(pr => pr.id === item.id);
        if (!p) return;
        html += `
        <div class="cart-item">
            <div class="cart-item-icon">${p.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${p.name}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateQty(${p.id}, -1)">−</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${p.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${p.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
    });
    cartItemsEl.innerHTML = html;
    cartFooter.style.display = 'block';
    cartTotalEl.textContent = 'Price on Request';
}

function getWhatsAppLink(productName) {
    const text = encodeURIComponent(`Hello, I would like to know the price for: ${productName}`);
    return `https://wa.me/8801680686424?text=${text}`;
}

function getEmailLink(productName) {
    const subject = encodeURIComponent(`Price Inquiry: ${productName}`);
    const body = encodeURIComponent(`Hello Think Different Automation,\n\nPlease provide me with a price quotation and availability for:\n\n- ${productName}\n\nThank you.`);
    return `mailto:tda.engineering2022@gmail.com?subject=${subject}&body=${body}`;
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function showCartNotification() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (!sidebar.classList.contains('open')) {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        setTimeout(() => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }, 2500);
    }
}

// ===== MOBILE MENU =====
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('menu-toggle');
    navbar.classList.toggle('open');
    toggle.innerHTML = navbar.classList.contains('open')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
}

// Mobile dropdown
document.querySelectorAll('.dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            link.closest('.dropdown').classList.toggle('open');
        }
    });
});

// ===== PRODUCT CARDS RENDER =====
function renderProductCard(product) {
    const badge = product.badge
        ? `<div class="product-badge ${product.badge === 'new' ? 'new' : product.badge === 'sale' ? 'sale' : ''}">${product.badge === 'popular' ? '🔥 Popular' :
            product.badge === 'new' ? '✨ New' :
                product.badge === 'sale' ? '💰 Sale' : product.badge
        }</div>` : '';

    // Prices removed from product cards as per request
    const oldPrice = '';

    const stockBadge = !product.inStock
        ? '<span class="product-tag" style="color:#ef4444;background:#fee2e2">Out of Stock</span>' : '';

    const tags = product.tags.map(t => `<span class="product-tag">${t}</span>`).join('');

    const addBtn = product.inStock
        ? `<div style="display:flex;gap:8px;flex-direction:column;width:100%;">
             <button class="btn-add-cart" data-product-id="${product.id}" onclick="addToCart(${product.id})" style="width:100%;justify-content:center;">
                 <i class="fas fa-cart-plus"></i> Add to Cart
             </button>
             <div style="display:flex;gap:8px;width:100%;">
                 <a href="${getWhatsAppLink(product.name)}" target="_blank" class="btn-add-cart" style="flex:1;background:#25d366;justify-content:center;padding:8px 5px;">
                     <i class="fab fa-whatsapp"></i> WhatsApp
                 </a>
                 <a href="${getEmailLink(product.name)}" class="btn-add-cart" style="flex:1;background:#f59e0b;justify-content:center;padding:8px 5px;">
                     <i class="fas fa-envelope"></i> Email
                 </a>
             </div>
           </div>`
        : `<button class="btn-add-cart" style="background:#9ca3af;cursor:not-allowed;width:100%;justify-content:center;">
                <i class="fas fa-bell"></i> Out of Stock
           </button>`;

    return `
    <div class="product-card" data-category="${product.category}">
        <div class="product-img">
            <span style="font-size:4rem">${product.icon}</span>
            ${badge}
        </div>
        <div class="product-body">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-desc">${product.desc}</div>
            <div class="product-meta">${tags} ${stockBadge}</div>
                <div style="width:100%;">
                    ${addBtn}
                </div>
        </div>
    </div>`;
}

// ===== FILTER & RENDER =====
function renderProducts(filter = 'all') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    const filtered = filter === 'all'
        ? productsData.slice(0, 12)
        : productsData.filter(p => p.category === filter).slice(0, 8);
    grid.innerHTML = filtered.length
        ? filtered.map(renderProductCard).join('')
        : '<p style="text-align:center;color:#9ca3af;grid-column:1/-1;padding:40px">No products found.</p>';
}

// Filter tab buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

// ===== SCROLL EFFECTS =====
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollTop = document.getElementById('scroll-top');
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 400);
    animateNumbers();
});

// ===== COUNTER ANIMATION =====
let countersAnimated = false;
function animateNumbers() {
    if (countersAnimated) return;
    const elements = document.querySelectorAll('.about-stat-num[data-target]');
    if (!elements.length) return;
    const firstEl = elements[0];
    const rect = firstEl.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        countersAnimated = true;
        elements.forEach(el => {
            const target = parseInt(el.dataset.target);
            let current = 0;
            const step = target / 60;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current) + '+';
                }
            }, 25);
        });
    }
}

// ===== MODAL =====
function requestQuote() {
    if (cart.length === 0) return;
    const modal = document.getElementById('modal-overlay');
    const listEl = document.getElementById('modal-cart-list');
    let listHTML = '';
    cart.forEach(item => {
        const p = productsData.find(pr => pr.id === item.id);
        if (p) listHTML += `<div>• ${p.name} × ${item.qty}</div>`;
    });
    listEl.innerHTML = listHTML;
    modal.classList.add('active');
    toggleCart();
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
});

document.getElementById('quote-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');

    // Gather form data
    const name = e.target.querySelector('input[type="text"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const company = e.target.querySelectorAll('input[type="text"]')[1].value;
    const notes = e.target.querySelector('textarea').value;

    // Gather cart items
    let cartText = '';
    cart.forEach(item => {
        const p = productsData.find(pr => pr.id === item.id);
        if (p) {
            cartText += `- ${p.name} (Qty: ${item.qty})\n`;
        }
    });

    // Construct Email Body
    const subject = encodeURIComponent(`New Quote Request from ${name}`);
    const body = encodeURIComponent(`
Hello Think Different Automation,

I would like to request a quote for the following items:

${cartText}

Customer Details:
Name: ${name}
Phone/WhatsApp: ${phone}
Email: ${email || 'N/A'}
Company: ${company || 'N/A'}

Additional Notes:
${notes || 'N/A'}

Thank you.
    `.trim());

    // Open mail client
    window.location.href = `mailto:tda.engineering2022@gmail.com?subject=${subject}&body=${body}`;

    // Show Success UI
    btn.innerHTML = '<i class="fas fa-check-circle"></i> Quote Prepared!';
    btn.style.background = '#10b981';

    setTimeout(() => {
        closeModal();
        cart = []; // Clear Cart
        saveCart();
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Quote Request';
        btn.style.background = '';
        e.target.reset();
    }, 2000);
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    updateCartUI();
    animateNumbers();
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
