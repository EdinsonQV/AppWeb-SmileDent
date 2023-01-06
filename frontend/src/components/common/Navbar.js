import '../common/styles/navbar.css';
export const Navbar = () => {
    return (
    <div class="container_navbar">
      {/* d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom */}
    <header class="header_navbar">
    {/* d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none */}
      <a href="/" class="">
      {/* bi me-2 */}
        <svg class="" ><use xlinkhref=""/></svg>
        <span class="fs-4">SmileDent</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/home" class="nav-link active" aria-current="page">Inicio</a></li>
        <li class="nav-item"><a href="/servicios" class="nav-link">Servicios</a></li>
        <li class="nav-item"><a href="/about" class="nav-link">Quienes Somos</a></li>
        <li class="nav-item"><a href="/home" class="nav-link">Contacto</a></li>
        <li class="nav-item"><a href="/ingresar" class="nav-link">Ingresar</a></li>
        <li class="nav-item"><a href="/registro" class="nav-link">Registrar</a></li>
      </ul>
    </header>
  </div>
    );
};