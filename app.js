/**
 * PASTAS CASERAS LA YAYA - Interactive Script
 * Emprendimiento de Lucas & Daniela
 * WhatsApp: +54 9 3549 443269
 */

// Catálogo de Productos Oficiales
const PRODUCTS = [
  // Sorrentinos (Principal especialidad)
  {
    id: 'sorr-dubai',
    name: 'Sorrentinos Dubai (Pistacho)',
    category: 'sorrentinos',
    tag: '🌟 Exclusivo Gourmet',
    tagClass: 'bg-amber-100 text-amber-900 border-amber-300',
    description: 'Inspiración gourmet de la casa: relleno cremoso con pistachos tostados seleccionados y un blend suave de quesos.',
    unit: 'caja (12 unid.)',
    icon: 'fa-star'
  },
  {
    id: 'sorr-jamon-muzza',
    name: 'Sorrentinos Jamón y Muzzarella',
    category: 'sorrentinos',
    tag: '🧀 El Clásico Favorito',
    tagClass: 'bg-red-100 text-red-900 border-red-300',
    description: 'El favorito de toda la familia: jamón cocido de primera calidad y abundante muzzarella fundente.',
    unit: 'caja (12 unid.)',
    icon: 'fa-cheese'
  },
  {
    id: 'sorr-cabutia-roquefort-nuez',
    name: 'Sorrentinos Zapallo Cabutiá, Roquefort y Nuez',
    category: 'sorrentinos',
    tag: '🎃 Especialidad de Autor',
    tagClass: 'bg-orange-100 text-orange-900 border-orange-300',
    description: 'Dulzor natural de calabaza cabutiá asada, el toque picante y sedoso del roquefort y el crujiente de nueces picadas.',
    unit: 'caja (12 unid.)',
    icon: 'fa-leaf'
  },
  {
    id: 'sorr-vacio-pizza',
    name: 'Sorrentinos Vacío a la Pizza',
    category: 'sorrentinos',
    tag: '🍕 Puro Sabor Argentino',
    tagClass: 'bg-rose-100 text-rose-900 border-rose-300',
    description: 'Carne vacuna de vacío desmechada a fuego lento, con pomodoro casero, orégano campestre y muzzarella.',
    unit: 'caja (12 unid.)',
    icon: 'fa-pizza-slice'
  },
  {
    id: 'sorr-vacio-roquefort',
    name: 'Sorrentinos Vacío al Roquefort',
    category: 'sorrentinos',
    tag: '🥩 Intenso & Sabroso',
    tagClass: 'bg-stone-200 text-stone-900 border-stone-400',
    description: 'Corte de vacío braseado suave y jugoso, fundido con la personalidad y cremosidad inconfundible del queso azul.',
    unit: 'caja (12 unid.)',
    icon: 'fa-drumstick-bite'
  },
  {
    id: 'sorr-bondiola-cerveza',
    name: 'Sorrentinos Bondiola a la Cerveza Negra',
    category: 'sorrentinos',
    tag: '🍺 Braseado Lento',
    tagClass: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    description: 'Bondiola de cerdo cocida pacientemente en reducción de cerveza negra artesanal con cebollas dulces y especias.',
    unit: 'caja (12 unid.)',
    icon: 'fa-beer-mug-empty'
  },
  {
    id: 'sorr-osobuco-malbec',
    name: 'Sorrentinos Osobuco al Malbec',
    category: 'sorrentinos',
    tag: '🍷 Reducción al Vino',
    tagClass: 'bg-purple-100 text-purple-900 border-purple-300',
    description: 'Osobuco tierno desmechado que se deshace en la boca, cocinado al vino tinto Malbec con hierbas aromáticas.',
    unit: 'caja (12 unid.)',
    icon: 'fa-wine-glass'
  },

  // Pastas Tradicionales
  {
    id: 'pasta-noquis',
    name: 'Ñoquis Caseros de Papa',
    category: 'pastas',
    tag: '🥔 Tradición Casera',
    tagClass: 'bg-amber-100 text-amber-900 border-amber-300',
    description: 'Suaves, livianos y esponjosos. Elaborados con papas seleccionadas y harina de trigo. ¡Ideales con cualquier salsa!',
    unit: 'porción / bandeja',
    icon: 'fa-bowl-food'
  },
  {
    id: 'pasta-tallarines',
    name: 'Tallarines / Espaguetis al Huevo',
    category: 'pastas',
    tag: '🍝 Masa Fresca',
    tagClass: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    description: 'Cintas amasadas al huevo con el punto justo de elasticidad al dente para abrazar salsas caseras.',
    unit: 'porción / bandeja',
    icon: 'fa-utensils'
  },
  {
    id: 'pasta-ravioles',
    name: 'Ravioles Artesanales',
    category: 'pastas',
    tag: '🥟 Receta de la Yaya',
    tagClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    description: 'Masa finita y tierna con abundante relleno tradicional de la abuela.',
    unit: 'plancha',
    icon: 'fa-cookie'
  },

  // Salsas Caseras
  {
    id: 'salsa-pollo',
    name: 'Salsa Casera de Pollo',
    category: 'salsas',
    tag: '🍗 Sabor de Hogar',
    tagClass: 'bg-orange-100 text-orange-900 border-orange-300',
    description: 'Elaborada con presas de pollo tiernas y desmenuzadas, pimientos morrones, cebollitas dulces y pomodoro casero.',
    unit: 'pote / porción',
    icon: 'fa-fire-burner'
  },
  {
    id: 'salsa-bolonesa',
    name: 'Salsa Boloñesa Tradicional',
    category: 'salsas',
    tag: '🍅 Clásica & Abundante',
    tagClass: 'bg-red-100 text-red-900 border-red-300',
    description: 'Carne picada de primera calidad cocinada lentamente en salsa de tomate natural con hierbas, laurel y especias.',
    unit: 'pote / porción',
    icon: 'fa-pepper-hot'
  }
];

// Estado de la canasta (Almacenamiento local)
let cart = {};
try {
  const savedCart = localStorage.getItem('la_yaya_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  cart = {};
}

// Guardar en Storage
function saveCart() {
  try {
    localStorage.setItem('la_yaya_cart', JSON.stringify(cart));
  } catch (e) {}
  updateCartCounters();
  renderCartUI();
}

// Notificación Toast
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;

  if (type === 'success') {
    toastIcon.className = 'fa-solid fa-circle-check text-green-500 text-lg';
  } else if (type === 'error') {
    toastIcon.className = 'fa-solid fa-circle-exclamation text-red-500 text-lg';
  } else {
    toastIcon.className = 'fa-solid fa-circle-info text-amber-500 text-lg';
  }

  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Agregar al Carrito
function addToCart(productId, quantity = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  if (!cart[productId]) {
    cart[productId] = 0;
  }
  cart[productId] += quantity;
  if (cart[productId] <= 0) {
    delete cart[productId];
  }
  saveCart();
  showToast(`¡Se agregó ${quantity}x "${prod.name}" a tu pedido!`, 'success');
}

// Modificar cantidad en carrito
function changeCartQty(productId, delta) {
  if (!cart[productId]) return;
  cart[productId] += delta;
  if (cart[productId] <= 0) {
    delete cart[productId];
  }
  saveCart();
}

// Eliminar ítem completo
function removeFromCart(productId) {
  if (cart[productId]) {
    const prod = PRODUCTS.find(p => p.id === productId);
    delete cart[productId];
    saveCart();
    if (prod) {
      showToast(`Se eliminó "${prod.name}" del pedido`, 'info');
    }
  }
}

// Vaciar carrito
function clearCart() {
  if (Object.keys(cart).length === 0) return;
  if (confirm('¿Deseas vaciar todos los productos del pedido?')) {
    cart = {};
    saveCart();
    showToast('Canasta vaciada', 'info');
  }
}

// Calcular total de ítems
function getCartSummary() {
  let totalItems = 0;
  let totalSorrentinos = 0;
  let totalPastas = 0;
  let totalSalsas = 0;

  for (const [id, qty] of Object.entries(cart)) {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) continue;
    totalItems += qty;
    if (prod.category === 'sorrentinos') totalSorrentinos += qty;
    else if (prod.category === 'pastas') totalPastas += qty;
    else if (prod.category === 'salsas') totalSalsas += qty;
  }

  return { totalItems, totalSorrentinos, totalPastas, totalSalsas };
}

// Actualizar contadores visuales
function updateCartCounters() {
  const { totalItems } = getCartSummary();
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.textContent = totalItems;
    if (totalItems > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });

  const floatingBar = document.getElementById('mobile-cart-bar');
  const floatingCount = document.getElementById('mobile-cart-count');
  if (floatingBar && floatingCount) {
    if (totalItems > 0) {
      floatingCount.textContent = totalItems;
      floatingBar.classList.remove('translate-y-full');
    } else {
      floatingBar.classList.add('translate-y-full');
    }
  }
}

// Renderizar la lista del Carrito
function renderCartUI() {
  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const summaryBox = document.getElementById('cart-summary-box');
  const summaryText = document.getElementById('cart-summary-breakdown');

  if (!container) return;

  const entries = Object.entries(cart);

  if (entries.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (summaryBox) summaryBox.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (summaryBox) summaryBox.classList.remove('hidden');

  let html = '';
  entries.forEach(([id, qty]) => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;

    html += `
      <div class="flex items-center justify-between p-3.5 bg-amber-50/50 rounded-xl border border-amber-200/70 hover:bg-amber-50 transition">
        <div class="flex-1 pr-3">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-amber-800 uppercase tracking-wide">${prod.category === 'sorrentinos' ? 'Sorrentinos' : (prod.category === 'salsas' ? 'Salsa' : 'Pasta')}</span>
          </div>
          <h4 class="font-bold text-stone-900 text-sm md:text-base leading-tight mt-0.5">${prod.name}</h4>
          <p class="text-xs text-stone-500">${prod.unit}</p>
        </div>
        
        <div class="flex items-center gap-2.5">
          <div class="flex items-center bg-white border border-stone-200 rounded-lg p-0.5 shadow-sm">
            <button type="button" onclick="changeCartQty('${prod.id}', -1)" class="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-red-700 hover:bg-stone-100 rounded text-sm font-bold transition">
              <i class="fa-solid fa-minus text-xs"></i>
            </button>
            <span class="w-8 text-center font-bold text-stone-900 text-sm">${qty}</span>
            <button type="button" onclick="changeCartQty('${prod.id}', 1)" class="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-green-700 hover:bg-stone-100 rounded text-sm font-bold transition">
              <i class="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
          <button type="button" onclick="removeFromCart('${prod.id}')" title="Eliminar ítem" class="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
            <i class="fa-regular fa-trash-can text-sm"></i>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Actualizar resumen
  if (summaryText) {
    const { totalItems, totalSorrentinos, totalPastas, totalSalsas } = getCartSummary();
    const parts = [];
    if (totalSorrentinos > 0) parts.push(`<strong>${totalSorrentinos}</strong> caja(s) de sorrentinos`);
    if (totalPastas > 0) parts.push(`<strong>${totalPastas}</strong> porción(es) de pasta`);
    if (totalSalsas > 0) parts.push(`<strong>${totalSalsas}</strong> pote(s) de salsa casera`);
    summaryText.innerHTML = `Total seleccionado: <strong>${totalItems} productos</strong> (${parts.join(', ')})`;
  }
}

// Renderizar Catálogo con Filtro
function renderCatalog(filter = 'all') {
  const catalogGrid = document.getElementById('catalog-grid');
  if (!catalogGrid) return;

  const filtered = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  let html = '';
  filtered.forEach(item => {
    html += `
      <div class="card-artisan p-6 flex flex-col justify-between relative overflow-hidden group">
        <!-- Decoración de esquina -->
        <div class="absolute -top-10 -right-10 w-24 h-24 bg-amber-50 rounded-full group-hover:scale-125 transition-transform duration-500 ease-out -z-0 pointer-events-none"></div>

        <div class="relative z-10">
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-block px-2.5 py-1 text-xs font-bold rounded-full border ${item.tagClass}">
              ${item.tag}
            </span>
            <span class="text-xs font-semibold text-stone-500 flex items-center gap-1 bg-stone-100 px-2 py-0.5 rounded-md">
              <i class="fa-solid fa-box text-[10px] text-amber-700"></i> ${item.unit}
            </span>
          </div>

          <h3 class="font-serif-display text-xl font-bold text-stone-900 group-hover:text-red-800 transition-colors mb-2 leading-snug">
            ${item.name}
          </h3>

          <p class="text-stone-600 text-sm leading-relaxed mb-5">
            ${item.description}
          </p>
        </div>

        <div class="relative z-10 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="adjustProductCardQty('${item.id}', -1)" class="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm transition">
              <i class="fa-solid fa-minus text-[10px]"></i>
            </button>
            <input type="number" id="qty-input-${item.id}" value="1" min="1" max="99" class="w-10 text-center font-bold text-stone-900 bg-transparent text-sm border-none focus:outline-none" readonly />
            <button type="button" onclick="adjustProductCardQty('${item.id}', 1)" class="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm transition">
              <i class="fa-solid fa-plus text-[10px]"></i>
            </button>
          </div>

          <button type="button" onclick="handleCardAdd('${item.id}')" class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-red-800 hover:bg-red-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm hover:shadow transition transform active:scale-95">
            <i class="fa-solid fa-cart-plus text-xs"></i>
            <span>Agregar</span>
          </button>
        </div>
      </div>
    `;
  });

  catalogGrid.innerHTML = html;
}

// Incrementar/decrementar input de la tarjeta
function adjustProductCardQty(productId, delta) {
  const input = document.getElementById(`qty-input-${productId}`);
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(99, val + delta));
  input.value = val;
}

// Manejar agregado desde la tarjeta
function handleCardAdd(productId) {
  const input = document.getElementById(`qty-input-${productId}`);
  const qty = input ? parseInt(input.value) || 1 : 1;
  addToCart(productId, qty);
  if (input) input.value = 1; // reset a 1
}

// Selector de localidad
let selectedLocation = 'Villa de Soto';

function selectLocation(loc) {
  selectedLocation = loc;
  const btnSoto = document.getElementById('loc-soto');
  const btnFalda = document.getElementById('loc-falda');

  if (btnSoto && btnFalda) {
    if (loc === 'Villa de Soto') {
      btnSoto.classList.add('selected');
      btnFalda.classList.remove('selected');
    } else {
      btnFalda.classList.add('selected');
      btnSoto.classList.remove('selected');
    }
  }
}

// Construir mensaje de texto estructurado para WhatsApp
function generateOrderMessage() {
  const name = document.getElementById('client-name')?.value.trim() || '';
  const phone = document.getElementById('client-phone')?.value.trim() || '';
  const address = document.getElementById('client-address')?.value.trim() || '';
  const deliveryType = document.getElementById('client-delivery-type')?.value || 'Envío a Domicilio';
  const preferredDate = document.getElementById('client-date')?.value.trim() || '';
  const notes = document.getElementById('client-notes')?.value.trim() || '';

  const entries = Object.entries(cart);
  if (entries.length === 0) {
    return { error: 'Por favor agrega al menos un producto a tu pedido.' };
  }
  if (!name) {
    return { error: 'Por favor ingresa tu nombre y apellido para el pedido.' };
  }

  const { totalItems, totalSorrentinos, totalPastas, totalSalsas } = getCartSummary();

  let lines = [];
  lines.push('🍝 *NUEVO PEDIDO - PASTAS CASERAS LA YAYA* 🍝');
  lines.push('──────────────────────────────');
  lines.push(`👤 *Cliente:* ${name}`);
  lines.push(`📍 *Localidad:* ${selectedLocation}`);
  lines.push(`🚚 *Modalidad:* ${deliveryType}`);
  if (address) {
    lines.push(`🏠 *Dirección:* ${address}`);
  }
  if (phone) {
    lines.push(`📱 *Teléfono:* ${phone}`);
  }
  if (preferredDate) {
    lines.push(`📅 *Fecha / Día preferido:* ${preferredDate}`);
  }
  lines.push('──────────────────────────────');
  lines.push('📦 *DETALLE DE PASTAS Y SALSAS:*');

  entries.forEach(([id, qty]) => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (prod) {
      lines.push(`  • *${qty}x* ${prod.name} (${prod.unit})`);
    }
  });

  lines.push('──────────────────────────────');
  let summaryParts = [];
  if (totalSorrentinos > 0) summaryParts.push(`${totalSorrentinos} caja(s) de sorrentinos`);
  if (totalPastas > 0) summaryParts.push(`${totalPastas} porción(es) de pasta`);
  if (totalSalsas > 0) summaryParts.push(`${totalSalsas} pote(s) de salsa`);
  lines.push(`📊 *Total:* ${totalItems} productos (${summaryParts.join(' + ')})`);

  if (notes) {
    lines.push('──────────────────────────────');
    lines.push(`📝 *Aclaraciones / Observaciones:* ${notes}`);
  }

  lines.push('──────────────────────────────');
  lines.push('¡Hola Lucas! Te paso este pedido armado desde la web para coordinar disponibilidad y entrega. ¡Muchas gracias! 🙌');

  return { text: lines.join('\n') };
}

// Enviar a WhatsApp
function sendWhatsAppOrder() {
  const order = generateOrderMessage();
  if (order.error) {
    showToast(order.error, 'error');
    // Scroll al formulario
    document.getElementById('pedido-seccion')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const encoded = encodeURIComponent(order.text);
  // Número de Lucas para Villa de Soto y La Falda: +54 9 3549 443269
  const whatsappUrl = `https://wa.me/5493549443269?text=${encoded}`;

  showToast('Abriendo WhatsApp con Lucas...', 'success');
  window.open(whatsappUrl, '_blank');
}

// Copiar pedido al portapapeles
function copyOrderText() {
  const order = generateOrderMessage();
  if (order.error) {
    showToast(order.error, 'error');
    document.getElementById('pedido-seccion')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(order.text)
      .then(() => {
        showToast('¡Texto del pedido copiado con éxito! Ya podés pegarlo en WhatsApp.', 'success');
      })
      .catch(() => {
        fallbackCopyText(order.text);
      });
  } else {
    fallbackCopyText(order.text);
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast('¡Texto copiado al portapapeles!', 'success');
  } catch (err) {
    showToast('No se pudo copiar automáticamente. Por favor envíalo por el botón directo de WhatsApp.', 'error');
  }
  document.body.removeChild(textArea);
}

// Inicialización en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // 0. Asegurar favicon en la pestaña del navegador
  try {
    let fav = document.querySelector("link[rel*='icon']");
    if (!fav) {
      fav = document.createElement('link');
      document.head.appendChild(fav);
    }
    fav.type = 'image/png';
    fav.rel = 'shortcut icon';
    fav.href = 'assets/favicon.png?v=' + Date.now();
  } catch (e) {}

  // 1. Renderizar catálogo inicial
  renderCatalog('all');

  // 2. Renderizar carrito inicial
  updateCartCounters();
  renderCartUI();

  // 3. Filtros del Catálogo
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category') || 'all';
      renderCatalog(cat);
    });
  });

  // 4. Selector de Localidad
  const btnSoto = document.getElementById('loc-soto');
  const btnFalda = document.getElementById('loc-falda');
  if (btnSoto) {
    btnSoto.addEventListener('click', () => selectLocation('Villa de Soto'));
  }
  if (btnFalda) {
    btnFalda.addEventListener('click', () => selectLocation('La Falda'));
  }

  // 5. Botones de Acción de Pedido
  const btnSendWhatsapp = document.getElementById('btn-send-whatsapp');
  if (btnSendWhatsapp) {
    btnSendWhatsapp.addEventListener('click', sendWhatsAppOrder);
  }

  const btnCopyOrder = document.getElementById('btn-copy-order');
  if (btnCopyOrder) {
    btnCopyOrder.addEventListener('click', copyOrderText);
  }

  const btnClearCart = document.getElementById('btn-clear-cart');
  if (btnClearCart) {
    btnClearCart.addEventListener('click', clearCart);
  }

  // 6. Menú móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuIcon) menuIcon.className = 'fa-solid fa-xmark text-xl';
      } else {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-xl';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-xl';
      });
    });
  }

  // 7. Scroll Reveal Animation
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-init').forEach(el => observer.observe(el));

  // 8. Sticky Header Shadow
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader?.classList.add('shadow-md', 'bg-white/95');
      mainHeader?.classList.remove('bg-white/80');
    } else {
      mainHeader?.classList.remove('shadow-md', 'bg-white/95');
      mainHeader?.classList.add('bg-white/80');
    }
  });
});
