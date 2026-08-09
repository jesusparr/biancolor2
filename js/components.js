(function () {
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  var navLinks = [
    { href: 'index.html', label: 'Inicio' },
    { href: 'quienes-somos.html', label: 'Quiénes somos' },
    { href: 'marcas.html', label: 'Marcas' },
    { href: 'catalogo.html', label: 'Catálogo' },
    { href: 'servicios.html', label: 'Servicios' },
    { href: 'contacto.html', label: 'Contacto' }
  ];

  var navItems = navLinks.map(function (link) {
    var active = link.href === currentPage ? ' active' : '';
    return '<li class="nav-item"><a class="nav-link' + active + '" href="' + link.href + '">' + link.label + '</a></li>';
  }).join('\n            ');

  var navbarHTML = [
    '<nav class="navbar navbar-expand-lg sticky-top">',
    '  <div class="container">',
    '    <a class="navbar-brand d-flex align-items-center" href="index.html">',
    '      <img src="images/logo.jpg" alt="Biancolor Logo">',
    '      <span class="brand-text">Biancolor</span>',
    '    </a>',
    '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">',
    '      <span class="navbar-toggler-icon"></span>',
    '    </button>',
    '    <div class="collapse navbar-collapse" id="navbarNav">',
    '      <ul class="navbar-nav ms-auto">',
    '        ' + navItems,
    '      </ul>',
    '    </div>',
    '  </div>',
    '</nav>'
  ].join('\n');

  var footerHTML = [
    '<footer class="footer">',
    '  <div class="container">',
    '    <div class="row g-5">',
    '      <div class="col-lg-4">',
    '        <h5>Biancolor</h5>',
    '        <p>Tu tienda de pintura de confianza.</p>',
    '        <div class="social-links">',
    '          <a href="https://www.instagram.com/tuusuario" target="_blank" aria-label="Instagram">',
    '            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">',
    '              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>',
    '              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>',
    '              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    '            </svg>',
    '          </a>',
    '        </div>',
    '      </div>',
    '      <div class="col-lg-2 col-md-4">',
    '        <h5>Navegación</h5>',
    '        <ul class="footer-links">',
    '          <li><a href="index.html">Inicio</a></li>',
    '          <li><a href="quienes-somos.html">Quiénes somos</a></li>',
    '          <li><a href="marcas.html">Marcas</a></li>',
    '          <li><a href="catalogo.html">Catálogo</a></li>',
    '          <li><a href="servicios.html">Servicios</a></li>',
    '          <li><a href="contacto.html">Contacto</a></li>',
    '        </ul>',
    '      </div>',
    '      <div class="col-lg-3 col-md-4">',
    '        <h5>Categorías</h5>',
    '        <ul class="footer-links">',
    '          <li><a href="catalogo.html?cat=pintura-interior">Pintura Interior</a></li>',
    '          <li><a href="catalogo.html?cat=pintura-exterior">Pintura Exterior</a></li>',
    '          <li><a href="catalogo.html?cat=esmaltes">Esmaltes</a></li>',
    '          <li><a href="catalogo.html?cat=barnices">Barnices</a></li>',
    '          <li><a href="catalogo.html?cat=herramientas">Herramientas</a></li>',
    '          <li><a href="catalogo.html?cat=decoracion">Decoración</a></li>',
    '        </ul>',
    '      </div>',
    '      <div class="col-lg-3 col-md-4">',
    '        <h5>Contacto</h5>',
    '        <ul class="footer-links">',
    '          <li>',
    '            <a href="https://maps.google.com" target="_blank">',
    '              Calle Principal, 123',
    '            </a>',
    '          </li>',
    '          <li>',
    '            <a href="tel:+34XXXXXXXXX">',
    '              XXXXXXXXX',
    '            </a>',
    '          </li>',
    '          <li>',
    '            <a href="mailto:info@biancolor.com">',
    '              info@biancolor.com',
    '            </a>',
    '          </li>',
    '        </ul>',
    '      </div>',
    '    </div>',
    '    <div class="footer-bottom">',
    '      <p>&copy; 2024 Biancolor. Todos los derechos reservados.</p>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  var whatsappHTML = [
    '<a href="https://wa.me/34614802116?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20productos"',
    '   class="whatsapp-float d-md-none"',
    '   aria-label="Contactar por WhatsApp"',
    '   target="_blank">',
    '  <svg viewBox="0 0 24 24" fill="currentColor">',
    '    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
    '  </svg>',
    '</a>'
  ].join('\n');

  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    inject('site-navbar', navbarHTML);
    inject('site-footer', footerHTML);
    inject('site-whatsapp', whatsappHTML);
  });
})();
