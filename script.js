// ========================================
// BASE DE DATOS DE PRODUCTOS
// ========================================
const productos = {
    gorros: [
        {
            id: 'gorro-ajustable',
            nombre: 'Gorro de Satín - Cinta Ajustable',
            descripcion: 'Gorro de satín con cinta ajustable, ideal para dormir',
            colores: ['Rosado', 'Negro', 'Azul'],
            tallas: [
                { talla: 'M', precio: 14000 },
                { talla: 'L', precio: 15000 }
            ],
            imagen: '🌸',
            imagenes: {
                'Rosado': './assets/images/productos/gorrosatinajustablerosado.png',
                'Negro': './assets/images/productos/gorrosatinajustablenegro.jpg',
                'Azul': './assets/images/productos/gorrosatinajustableazul.png'
            }
        },
        {
            id: 'gorro-satin',
            nombre: 'Gorro de Satín',
            descripcion: 'Gorro de satín clásico para proteger tu cabello',
            colores: ['Azul', 'Rosado', 'Negro'],
            tallas: [
                { talla: 'M', precio: 13000 },
                { talla: 'L', precio: 14000 }
            ],
            imagen: '🌸',
            imagenes: {
                'Rosado': './assets/images/productos/gorrodesatinrosado.jpg',
                'Negro': './assets/images/productos/gorrosatinnegro.png',
                'Azul': './assets/images/productos/gorrosatinazul.png'
            }
        }
    ],
    monas: [
        {
            id: 'mona-tulipan',
            nombre: 'Moña Tulipán',
            descripcion: 'Moña decorativa con diseño de tulipán',
            colores: ['Amarillo', 'Azul', 'Rosado', 'Vinotinto'],
            tallas: [
                { talla: 'Única', precio: 5500 }
            ],
            imagen: '🌷',
            imagenes: {
                'Amarillo': './assets/images/productos/moñatulipanamarrillo.png',
                'Azul': './assets/images/productos/moñatulipanazulceleste.png',
                'Rosado': './assets/images/productos/moñatulipanrosado.png',
                'Vinotinto': './assets/images/productos/moñatulipanrojo.png'
            }
        },
        {
            id: 'mona-mini-tulipan',
            nombre: 'Moña Mini Tulipán',
            descripcion: 'Moña tulipán versión mini',
            colores: ['Amarillo', 'Azul', 'Rosado', 'Vinotinto'],
            tallas: [
                { talla: 'Única', precio: 3500 }
            ],
            imagen: '🌸',
            imagenes: {
                'Amarillo': './assets/images/productos/minitulipanamarrillo.png',
                'Azul': './assets/images/productos/minitulipanazul.png',
                'Rosado': './assets/images/productos/minitulipanesrosado.png',
                'Vinotinto': './assets/images/productos/minitulipanvinotinto.png'
            }
        },
        {
            id: 'mona-cherry',
            nombre: 'Moña Cherry',
            descripcion: 'Moña decorativa con diseño de cerezas',
            colores: ['Rojo'],
            tallas: [
                { talla: 'Única', precio: 5500 }
            ],
            imagen: '🍒',
            imagenes: {
                'Rojo': './assets/images/productos/Moñascherrys.jpg'
            }
        }
    ],
    scrunchies: [
        {
            id: 'scrunchie-normal',
            nombre: 'Moñas Scrunchies',
            descripcion: 'Moña scrunchie clásica en varios tamaños',
            colores: ['Azul', 'Morado', 'Beige', 'Rojo'],
            tallas: [
                { talla: 'S', precio: 3000 },
                { talla: 'M', precio: 4000 },
                { talla: 'L', precio: 5000 }
            ],
            imagen: '🎀',
            imagenes: {
                'Azul': './assets/images/productos/moña scrunchie azul.png',
                'Morado': './assets/images/productos/moña scrunchie morada.png',
                'Beige': './assets/images/productos/moña scrunchie beige.png',
                'Rojo': './assets/images/productos/moña scrunchie roja.png'
            }
        },
        {
            id: 'mini-monas',
            nombre: 'Mini Moñas Scrunchies',
            descripcion: 'Moñas scrunchies en tamaño mini',
            colores: ['Azul', 'Morado'],
            tallas: [
                { talla: 'Unidad', precio: 2000 },
                { talla: 'Par (2x)', precio: 3000 }
            ],
            imagen: '🎀',
            imagenes: {
                'Azul': './assets/images/productos/minimoñasscrunchiesazules.png',
                'Morado': './assets/images/productos/minimoñasscrunchiesmoradas.png'
            }
        }
    ],
    rizadores: [
        {
            id: 'rizador-largo',
            nombre: 'Rizador Sin Calor - Largo',
            descripcion: 'Rizador largo para cabello largo, ondas perfectas',
            colores: ['Rosado', 'Celeste'],
            tallas: [
                { talla: 'Único', precio: 16000 }
            ],
            imagen: '✨',
            imagenes: {
                'Rosado': './assets/images/productos/rizador rosado.png',
                'Celeste': './assets/images/productos/rizadorceleste.jpeg'
            }
        },
        {
            id: 'rizador-corto',
            nombre: 'Kit Rizador Sin Calor + Mini Gorrito',
            descripcion: 'Rizador corto + mini gorrito de satín de regalo',
            colores: ['Beige', 'Celeste'],
            tallas: [
                { talla: 'Único', precio: 10000 }
            ],
            imagen: '💫',
            imagenes: {
                'Beige': './assets/images/productos/kit beige rizador.png',
                'Celeste': './assets/images/productos/kit rizador celeste.png'
            }
        }
    ],
    cuidado: [
        {
            id: 'toalla-microfibra',
            nombre: 'Toalla de Microfibra',
            descripcion: 'Toalla de microfibra para cabello, súper absorbente',
            colores: ['Rosa'],
            tallas: [
                { talla: 'Única', precio: 10000 }
            ],
            imagen: '🧖‍♀️',
            imagenes: {
                'Rosa': './assets/images/productos/toalla.jpg'
            }
        }
    ],
    pijamas: [
        {
            id: 'pijama-azul',
            nombre: 'Pijama Azul',
            descripcion: 'Pijama cómoda + moña + diadema para maquillarse',
            colores: ['Azul'],
            tallas: [
                { talla: 'Única', precio: 30000 }
            ],
            imagen: '👚',
            imagenes: {
                'Azul': './assets/images/productos/pijamaazul.jpg'
            },
            imagenesModelo: {
                'Azul': './assets/images/productos/modelopijamaazul.jpg'
            }
        },
        {
            id: 'pijama-cafe',
            nombre: 'Pijama Café',
            descripcion: 'Pijama cómoda + moña + diadema para maquillarse',
            colores: ['Café'],
            tallas: [
                { talla: 'Única', precio: 30000 }
            ],
            imagen: '👚',
            imagenes: {
                'Café': './assets/images/productos/pijamacafe.jpg'
            },
            imagenesModelo: {
                'Café': './assets/images/productos/modelopijamacafe.jpg'
            }
        },
        {
            id: 'pijama-corazones',
            nombre: 'Pijama Corazones',
            descripcion: 'Pijama cómoda + moña + diadema para maquillarse',
            colores: ['Corazones'],
            tallas: [
                { talla: 'Única', precio: 30000 }
            ],
            imagen: '👚',
            imagenes: {
                'Corazones': './assets/images/productos/pijamacorazones.jpg'
            },
            imagenesModelo: {
                'Corazones': './assets/images/productos/modelopijamacorazones.jpg'
            }
        },
        {
            id: 'pijama-roja',
            nombre: 'Pijama Roja',
            descripcion: 'Pijama cómoda + moña + diadema para maquillarse',
            colores: ['Rojo'],
            tallas: [
                { talla: 'Única', precio: 30000 }
            ],
            imagen: '👚',
            imagenes: {
                'Rojo': './assets/images/productos/pijamaroja.jpg'
            },
            imagenesModelo: {
                'Rojo': './assets/images/productos/modelopijamarojo.jpg'
            }
        },
        {
            id: 'pijama-rosada',
            nombre: 'Pijama Rosada',
            descripcion: 'Pijama cómoda + moña + diadema para maquillarse',
            colores: ['Rosado'],
            tallas: [
                { talla: 'Única', precio: 30000 }
            ],
            imagen: '👚',
            imagenes: {
                'Rosado': './assets/images/productos/pijamarosada.jpg'
            },
            imagenesModelo: {
                'Rosado': './assets/images/productos/modelopijamarosado.jpg'
            }
        }
    ],
    maquillaje: [
        {
            id: 'labial-liquido',
            nombre: 'Labial Líquido Mate',
            descripcion: 'Labial de larga duración con acabado mate',
            colores: ['Rojo', 'Rosado', 'Nude', 'Coral'],
            tallas: [
                { talla: 'Única', precio: 8000 }
            ],
            imagen: '💄',
            imagenes: {}
        },
        {
            id: 'paleta-sombras',
            nombre: 'Paleta de Sombras',
            descripcion: 'Paleta con 12 tonos para ojos',
            colores: ['Nude', 'Colorida'],
            tallas: [
                { talla: 'Única', precio: 25000 }
            ],
            imagen: '🎨',
            imagenes: {}
        },
        {
            id: 'rubor',
            nombre: 'Rubor en Polvo',
            descripcion: 'Rubor con acabado natural y suave',
            colores: ['Rosado', 'Durazno', 'Coral'],
            tallas: [
                { talla: 'Única', precio: 12000 }
            ],
            imagen: '🪷',
            imagenes: {}
        },
        {
            id: 'gloss',
            nombre: 'Gloss Labial',
            descripcion: 'Brillo labial con efecto espejo',
            colores: ['Transparente', 'Rosado', 'Rojo'],
            tallas: [
                { talla: 'Única', precio: 6000 }
            ],
            imagen: '✨',
            imagenes: {}
        }
    ]
};

// ========================================
// CARRITO DE COMPRAS
// ========================================
let carrito = [];

// ========================================
// ABRIR CATEGORÍA
// ========================================
function openCategory(categoria) {
    const modal = document.getElementById('catalog-modal');
    const title = document.getElementById('category-title');
    const productsList = document.getElementById('products-list');
    
    const titulos = {
        gorros: '🌸 Gorros de Satín',
        monas: '🎀 Moñas Decorativas',
        scrunchies: '💫 Moñas Scrunchies',
        rizadores: '✨ Rizadores Sin Calor',
        cuidado: '🧴 Cuidado Personal',
        pijamas: '👚 Pijamas',
        maquillaje: '💄 Maquillaje'
    };
    
    title.textContent = titulos[categoria];
    productsList.innerHTML = '';
    
    // Verificar si hay productos
    if (!productos[categoria] || productos[categoria].length === 0) {
        productsList.innerHTML = '<p style="text-align: center; color: #666;">No hay productos disponibles en esta categoría.</p>';
        modal.style.display = 'block';
        return;
    }
    
    // Agregar nota sobre disponibilidad de colores
    const notaColores = document.createElement('div');
    notaColores.className = 'color-note';
    notaColores.innerHTML = '💡 <strong>Nota:</strong> Los colores mostrados son de referencia. Si no encuentras el que buscas, ¡pregúntanos! Tenemos más variedad disponible.';
    productsList.appendChild(notaColores);
    
    // Cargar productos de la categoría
    productos[categoria].forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-item';
        
        // Mostrar rango de precios
        const precios = producto.tallas.map(t => t.precio);
        const precioMin = Math.min(...precios);
        const precioMax = Math.max(...precios);
        const precioTexto = precioMin === precioMax 
            ? `$${precioMin.toLocaleString()}`
            : `$${precioMin.toLocaleString()} - $${precioMax.toLocaleString()}`;
        
        // Determinar imagen a mostrar (primera imagen disponible o emoji)
        const primerColor = producto.colores[0];
        const tieneImagen = producto.imagenes && producto.imagenes[primerColor];
        const tieneImagenModelo = producto.imagenesModelo && producto.imagenesModelo[primerColor];
        
        let imagenHTML;
        if (tieneImagen && tieneImagenModelo) {
            // Para pijamas: carousel con imagen producto y modelo
            imagenHTML = `
                <div class="product-carousel" data-producto="${producto.imagenes[primerColor]}" data-modelo="${producto.imagenesModelo[primerColor]}">
                    <img src="${producto.imagenes[primerColor]}" alt="${producto.nombre}" class="product-card-img carousel-img">
                </div>
            `;
        } else if (tieneImagen) {
            imagenHTML = `<img src="${producto.imagenes[primerColor]}" alt="${producto.nombre}" class="product-card-img">`;
        } else {
            imagenHTML = producto.imagen;
        }
        
        productCard.innerHTML = `
            <div class="product-image">${imagenHTML}</div>
            <div class="product-info">
                <div class="product-name">${producto.nombre}</div>
                <div class="product-description">${producto.descripcion}</div>
                <div class="product-price">${precioTexto}</div>
                <button class="add-to-cart-btn" onclick='showProductOptions(${JSON.stringify(producto).replace(/'/g, "&apos;")})'>
                    Ver Opciones 🛒
                </button>
            </div>
        `;
        productsList.appendChild(productCard);
    });
    
    // Iniciar rotación de imágenes para pijamas
    initCarousels();
    
    modal.style.display = 'block';
}

// ========================================
// MOSTRAR OPCIONES DEL PRODUCTO (TALLA Y COLOR)
// ========================================
function showProductOptions(producto) {
    const modal = document.getElementById('catalog-modal');
    const title = document.getElementById('category-title');
    const productsList = document.getElementById('products-list');
    
    title.innerHTML = `← <span onclick="history.back()" style="cursor: pointer;">Volver</span>`;
    productsList.innerHTML = '';
    
    const optionsCard = document.createElement('div');
    optionsCard.className = 'product-options-card';
    
    let tallasHTML = '';
    producto.tallas.forEach((t, index) => {
        tallasHTML += `
            <label class="option-label">
                <input type="radio" name="talla" value="${index}" ${index === 0 ? 'checked' : ''}>
                <span class="option-text">
                    <strong>Talla ${t.talla}</strong> - $${t.precio.toLocaleString()}
                </span>
            </label>
        `;
    });
    
    let coloresHTML = '';
    // Guardar imágenes en variable global para acceder desde el evento
    window.currentProductImages = producto.imagenes || {};
    
    producto.colores.forEach((color, index) => {
        coloresHTML += `
            <label class="color-option">
                <input type="radio" name="color" value="${color}" ${index === 0 ? 'checked' : ''} onchange="updateProductImage('${color}')">
                <span class="color-box" style="background: ${getColorCode(color)}"></span>
                <span>${color}</span>
            </label>
        `;
    });
    
    // Determinar imagen inicial
    const primerColor = producto.colores[0];
    const imagenInicial = (producto.imagenes && producto.imagenes[primerColor]) 
        ? `<img src="${producto.imagenes[primerColor]}" alt="${producto.nombre}" class="product-detail-img" id="product-image">`
        : `<div class="product-detail-image" id="product-image">${producto.imagen}</div>`;
    
    optionsCard.innerHTML = `
        <div class="product-detail">
            ${imagenInicial}
            <h3>${producto.nombre}</h3>
            <p class="product-detail-description">${producto.descripcion}</p>
            
            <div class="options-section">
                <h4>Selecciona la talla:</h4>
                <div class="tallas-options">
                    ${tallasHTML}
                </div>
            </div>
            
            <div class="options-section">
                <h4>Selecciona el color:</h4>
                <div class="colores-options">
                    ${coloresHTML}
                </div>
            </div>
            
            <button class="add-to-cart-btn-large" onclick='addToCartWithOptions(${JSON.stringify(producto).replace(/'/g, "&apos;")})'>
                Agregar al Carrito 🛒
            </button>
        </div>
    `;
    
    productsList.appendChild(optionsCard);
}

// ========================================
// ACTUALIZAR IMAGEN DEL PRODUCTO SEGÚN COLOR
// ========================================
function updateProductImage(color) {
    const productImage = document.getElementById('product-image');
    const imagenes = window.currentProductImages;
    
    if (productImage && imagenes && imagenes[color]) {
        // Si es una imagen, actualizar src; si es emoji, reemplazar con imagen
        if (productImage.tagName === 'IMG') {
            productImage.src = imagenes[color];
            productImage.alt = `Producto en ${color}`;
        } else {
            productImage.outerHTML = `<img src="${imagenes[color]}" alt="Producto en ${color}" class="product-detail-img" id="product-image">`;
        }
    }
}

// ========================================
// OBTENER CÓDIGO DE COLOR
// ========================================
function getColorCode(color) {
    const colores = {
        'Rosa': '#FFB6D9',
        'Rosado': '#FFB6D9',
        'Lila': '#D4C5E8',
        'Morado': '#9B7EBD',
        'Negro': '#2C2C2C',
        'Blanco': '#FFFFFF',
        'Azul': '#87CEEB',
        'Celeste': '#87CEEB',
        'Rojo': '#FF6B9D',
        'Vinotinto': '#722F37',
        'Amarillo': '#FFE66D',
        'Beige': '#F5DEB3',
        'Café': '#8B4513',
        'Corazones': 'linear-gradient(135deg, #FFB6D9, #FF6B9D)',
        'Multicolor': 'linear-gradient(135deg, #FFB6D9, #D4C5E8, #87CEEB)',
        'Mix': 'linear-gradient(135deg, #FFB6D9, #D4C5E8)'
    };
    return colores[color] || '#D4C5E8';
}

// ========================================
// AGREGAR AL CARRITO CON OPCIONES
// ========================================
function addToCartWithOptions(producto) {
    const tallaIndex = document.querySelector('input[name="talla"]:checked').value;
    const color = document.querySelector('input[name="color"]:checked').value;
    
    const tallaSeleccionada = producto.tallas[tallaIndex];
    
    const productoConOpciones = {
        id:  `${producto.id}-${tallaSeleccionada.talla}-${color}`,
        nombre: producto.nombre,
        talla: tallaSeleccionada.talla,
        color: color,
        precio: tallaSeleccionada.precio,
        cantidad: 1
    };
    
    const existente = carrito.find(item => item.id === productoConOpciones.id);
    
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push(productoConOpciones);
    }
    
    updateCartUI();
    showNotification('✅ Producto agregado al carrito');
    closeModal();
}

// ========================================
// CERRAR MODAL
// ========================================
function closeModal() {
    document.getElementById('catalog-modal').style.display = 'none';
}

// ========================================
// ACTUALIZAR UI DEL CARRITO
// ========================================
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;
    
    const cartButton = document.querySelector('.cart-button');
    cartButton.style.transform = 'scale(1. 2)';
    setTimeout(() => {
        cartButton. style.transform = 'scale(1)';
    }, 200);
}

// ========================================
// MOSTRAR/OCULTAR CARRITO
// ========================================
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (modal.style.display === 'block') {
        modal.style. display = 'none';
        return;
    }
    
    cartItems.innerHTML = '';
    
    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Tu carrito está vacío</p>
                <p style="font-size: 0.9rem; color: #999;">Agrega productos para empezar</p>
            </div>
        `;
        cartTotal.textContent = '0';
        modal.style.display = 'block';
        return;
    }
    
    let total = 0;
    
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nombre}</div>
                <div class="cart-item-details">Talla: ${item.talla} • Color: ${item.color}</div>
                <div class="cart-item-details">$${item.precio.toLocaleString()} c/u • Subtotal: $${subtotal.toLocaleString()}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="changeQuantity(${index}, -1)">−</button>
                <span style="font-weight: bold; min-width: 25px; text-align: center;">${item.cantidad}</span>
                <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeItem(${index})">🗑️</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toLocaleString();
    modal.style.display = 'block';
}

// ========================================
// CAMBIAR CANTIDAD
// ========================================
function changeQuantity(index, change) {
    carrito[index].cantidad += change;
    
    if (carrito[index]. cantidad <= 0) {
        carrito.splice(index, 1);
    }
    
    updateCartUI();
    toggleCart();
    toggleCart();
}

// ========================================
// ELIMINAR ITEM
// ========================================
function removeItem(index) {
    carrito.splice(index, 1);
    updateCartUI();
    toggleCart();
    toggleCart();
}

// ========================================
// VACIAR CARRITO
// ========================================
function clearCart() {
    if (confirm('¿Estás segura de vaciar el carrito?')) {
        carrito = [];
        updateCartUI();
        toggleCart();
    }
}

// ========================================
// CHECKOUT (ENVIAR A WHATSAPP)
// ========================================
function checkout() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    let mensaje = '¡Hola Eve!   💜 Me gustaría comprar:%0A%0A';
    let total = 0;
    
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `• ${item.cantidad}x ${item.nombre}%0A`;
        mensaje += `  Talla: ${item.talla} | Color: ${item.color}%0A`;
        mensaje += `  Precio: $${item.precio.toLocaleString()} c/u%0A`;
        mensaje += `  Subtotal: $${subtotal.toLocaleString()}%0A%0A`;
    });
    
    mensaje += `✨ *TOTAL: $${total.toLocaleString()}*%0A%0A`;
    mensaje += '¿Cuál es el método de pago y envío?  🌸';
    
    const whatsappURL = `https://wa.me/573143924269?text=${mensaje}`;
    window.open(whatsappURL, '_blank');
    
    if (confirm('¿Deseas vaciar el carrito? ')) {
        carrito = [];
        updateCartUI();
        toggleCart();
    }
}

// ========================================
// NOTIFICACIÓN
// ========================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #9B7EBD 0%, #D4AF37 100%);
        color: white;
        padding: 15px 25px;
        border-radius:  50px;
        box-shadow: 0 4px 20px rgba(155, 126, 189, 0.4);
        z-index: 3000;
        font-weight: 600;
        animation: slideInRight 0.5s ease;
    `;
    notification.textContent = message;
    document. body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ========================================
// CERRAR MODAL AL HACER CLIC FUERA
// ========================================
window.onclick = function(event) {
    const catalogModal = document.getElementById('catalog-modal');
    const cartModal = document.getElementById('cart-modal');
    
    if (event.target === catalogModal) {
        catalogModal.style.display = 'none';
        stopCarousels();
    }
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
}

// ========================================
// CAROUSEL DE IMÁGENES PARA PIJAMAS
// ========================================
let carouselIntervals = [];

function initCarousels() {
    // Limpiar intervalos anteriores
    stopCarousels();
    
    const carousels = document.querySelectorAll('.product-carousel');
    
    carousels.forEach(carousel => {
        const img = carousel.querySelector('.carousel-img');
        const productoSrc = carousel.dataset.producto;
        const modeloSrc = carousel.dataset.modelo;
        let showingProducto = true;
        
        const interval = setInterval(() => {
            img.style.opacity = '0';
            setTimeout(() => {
                if (showingProducto) {
                    img.src = modeloSrc;
                } else {
                    img.src = productoSrc;
                }
                showingProducto = !showingProducto;
                img.style.opacity = '1';
            }, 300);
        }, 3000);
        
        carouselIntervals.push(interval);
    });
}

function stopCarousels() {
    carouselIntervals.forEach(interval => clearInterval(interval));
    carouselIntervals = [];
}