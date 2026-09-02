/* ============================================
   BIANCOLOR - Catálogo de productos
   ============================================ */

let allProducts = [];
let allCategories = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function () {
  initCatalogo();
});

async function initCatalogo() {
  const catalogContainer = document.getElementById('catalogo-grid');
  const filtersContainer = document.getElementById('catalogo-filters');

  if (!catalogContainer) return;

  try {
    const response = await fetch('data/catalogo.json');
    const data = await response.json();

    allCategories = data.categorias || [];
    allProducts = [];

    allCategories.forEach((cat) => {
      cat.productos.forEach((prod) => {
        allProducts.push({
          ...prod,
          categoria: cat.id,
          categoriaNombre: cat.nombre,
        });
      });
    });

    renderFilters(filtersContainer);
    renderProducts(catalogContainer, allProducts);
  } catch (error) {
    console.error('Error cargando catálogo:', error);
    renderEmptyState(catalogContainer, 'No se pudo cargar el catálogo');
  }
}

/* ---------- Renderizar filtros ---------- */
function renderFilters(container) {
  if (!container) return;

  let html = '<button class="filter-btn active" data-filter="all">Todos</button>';

  allCategories.forEach((cat) => {
    html += `<button class="filter-btn" data-filter="${cat.id}">${cat.nombre}</button>`;
  });

  container.innerHTML = html;

  container.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
      container.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      currentFilter = this.dataset.filter;
      const filtered =
        currentFilter === 'all'
          ? allProducts
          : allProducts.filter((p) => p.categoria === currentFilter);

      renderProducts(document.getElementById('catalogo-grid'), filtered);
    });
  });
}

/* ---------- Renderizar productos ---------- */
function renderProducts(container, products) {
  if (!container) return;

  if (products.length === 0) {
    renderEmptyState(container, 'No hay productos en esta categoría');
    return;
  }

  let html = '';

  products.forEach((prod, index) => {
    html += `
      <div class="col-lg-4 col-md-6 mb-4 animate-on-scroll delay-${(index % 4) + 1}">
        <div class="product-card">
          <div class="product-image">
            <img src="${prod.imagen}" 
                 alt="${prod.nombre}" 
                 loading="lazy"
                 onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='images/placeholder-product.png';}">
            <span class="product-badge">${prod.categoriaNombre}</span>
          </div>
          <div class="product-body">
            <span class="product-ref">${prod.ref}</span>
            <h5 class="product-name">${prod.nombre}</h5>
            <span class="product-brand">${prod.marca}</span>
            <p class="product-description">${prod.descripcion}</p>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  initScrollReveal();
}

/* ---------- Empty State ---------- */
function renderEmptyState(container, message) {
  if (!container) return;

  container.innerHTML = `
    <div class="col-12">
      <div class="empty-state">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          <path d="M12 11l8-4M12 11L4 7"/>
        </svg>
        <h3>${message}</h3>
        <p>Próximamente tendrás nuevos productos disponibles aquí.</p>
      </div>
    </div>
  `;
}
