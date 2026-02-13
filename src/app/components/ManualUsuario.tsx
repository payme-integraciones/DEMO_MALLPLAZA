import { ArrowLeft } from 'lucide-react';
import logoMallPlaza from '../assets/images/logo_mallplaza.png';
import shot01 from '../../../docs/capturas/01-home.png';
import shot02 from '../../../docs/capturas/02-login.png';
import shot03 from '../../../docs/capturas/03-dashboard.png';
import shot04 from '../../../docs/capturas/04-pago-metodo.png';
import shot05 from '../../../docs/capturas/05-pago-billing.png';
import shot06 from '../../../docs/capturas/06-pago-checkout.png';
import shot07 from '../../../docs/capturas/07-pago-exito.png';
import shot08 from '../../../docs/capturas/08-cliente-busqueda.png';
import shot09 from '../../../docs/capturas/09-cliente-resultados.png';
import shot10 from '../../../docs/capturas/10-backoffice-locales.png';
import shot11 from '../../../docs/capturas/11-backoffice-alquileres.png';
import shot12 from '../../../docs/capturas/12-backoffice-generar.png';

interface ManualUsuarioProps {
  onBack: () => void;
}

export function ManualUsuario({ onBack }: ManualUsuarioProps) {
  return (
    <div className="manual-page">
      <style>{`
        .manual-page {
          --brand: #E91E63;
          --brand-dark: #C2185B;
          --text: #1f2937;
          --muted: #6b7280;
          --line: #e5e7eb;
          --bg: #f8fafc;
          --card: #ffffff;
          min-height: 100vh;
          color: var(--text);
          background:
            radial-gradient(circle at top right, #ffe4ef 0%, rgba(255, 228, 239, 0) 42%),
            var(--bg);
          line-height: 1.6;
        }
        .manual-page * { box-sizing: border-box; }
        .manual-page .manual-header {
          position: sticky;
          top: 0;
          z-index: 20;
          background: #fff;
          border-bottom: 1px solid #dfe3e8;
          backdrop-filter: blur(6px);
        }
        .manual-page .manual-header-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .manual-page .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .manual-page .brand img {
          height: 34px;
          width: auto;
          display: block;
        }
        .manual-page .brand span {
          font-size: 14px;
          color: var(--muted);
        }
        .manual-page .top-nav {
          display: flex;
          gap: 22px;
        }
        .manual-page .top-nav a {
          color: #4b5563;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .manual-page .top-nav a:hover { color: var(--brand); }
        .manual-page .doc {
          max-width: 980px;
          margin: 28px auto 64px;
          padding: 0 24px;
        }
        .manual-page .paper {
          background: var(--card);
          border: 1px solid #e8ebef;
          border-radius: 18px;
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }
        .manual-page .hero {
          padding: 28px 30px;
          background: linear-gradient(135deg, #fff, #fff6fa 60%, #ffe5f0 100%);
          border-bottom: 1px solid #f2d6e2;
        }
        .manual-page h1 {
          margin: 0 0 8px;
          font-size: clamp(26px, 3vw, 34px);
          line-height: 1.2;
          letter-spacing: 0.2px;
        }
        .manual-page .hero p { margin: 0; color: #4b5563; }
        .manual-page .content { padding: 24px 30px 36px; }
        .manual-page h2 {
          margin: 28px 0 10px;
          font-size: 24px;
          line-height: 1.3;
          padding-left: 12px;
          border-left: 4px solid var(--brand);
        }
        .manual-page h3 {
          margin: 20px 0 8px;
          font-size: 19px;
          line-height: 1.35;
        }
        .manual-page h4 {
          margin: 18px 0 8px;
          font-size: 16px;
          color: #111827;
        }
        .manual-page p { margin: 8px 0; }
        .manual-page ul, .manual-page ol {
          margin: 8px 0 14px;
          padding-left: 24px;
        }
        .manual-page li { margin: 5px 0; }
        .manual-page code {
          background: #f4f5f7;
          border: 1px solid #e5e7eb;
          padding: 1px 6px;
          border-radius: 6px;
          font-family: Consolas, "Courier New", monospace;
          font-size: 0.94em;
        }
        .manual-page figure {
          margin: 16px 0 22px;
          background: #fff;
          border: 1px solid #edf0f3;
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 8px 16px rgba(15, 23, 42, 0.05);
        }
        .manual-page img.shot {
          width: 100%;
          height: auto;
          border: 1px solid var(--line);
          border-radius: 10px;
          display: block;
        }
        .manual-page figcaption {
          font-size: 12px;
          color: var(--muted);
          margin-top: 8px;
        }
        .manual-page .section-divider {
          height: 1px;
          border: 0;
          background: linear-gradient(90deg, transparent, #e5e7eb 15%, #e5e7eb 85%, transparent);
          margin: 24px 0;
        }
        .manual-page .note {
          padding: 10px 12px;
          border: 1px solid #f2cfdd;
          border-radius: 10px;
          background: #fff5fa;
        }
        .manual-page .back-btn {
          margin: 18px 0 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 0;
          background: transparent;
          color: #4b5563;
          cursor: pointer;
          font-size: 14px;
        }
        .manual-page .back-btn:hover { color: var(--brand); }
        @media (max-width: 900px) {
          .manual-page .manual-header-inner { padding: 12px 16px; }
          .manual-page .top-nav { display: none; }
          .manual-page .doc {
            padding: 0 14px;
            margin-top: 18px;
          }
          .manual-page .hero,
          .manual-page .content {
            padding-left: 16px;
            padding-right: 16px;
          }
          .manual-page h2 { font-size: 21px; }
          .manual-page h3 { font-size: 18px; }
        }
      `}</style>

      <header className="manual-header">
        <div className="manual-header-inner">
          <a className="brand" href="#top">
            <img src={logoMallPlaza} alt="MallPlaza" />
            <span>Manual de usuario</span>
          </a>
          <nav className="top-nav" aria-label="Navegacion del manual">
            <a href="#portal-arrendatarios">Portal Arrendatarios</a>
            <a href="#consulta-cliente">Consulta Cliente</a>
            <a href="#back-office">Back-office</a>
            <a href="#troubleshooting">Soporte</a>
          </nav>
        </div>
      </header>

      <main className="doc" id="top">
        <button type="button" onClick={onBack} className="back-btn">
          <ArrowLeft size={16} />
          Volver al inicio
        </button>
        <article className="paper">
          <section className="hero">
            <h1>Guia de Uso - Demo Tienda Arriendos (MallPlaza)</h1>
            <p>Referencia operativa para login, pagos, consulta de cliente y flujos de back-office.</p>
          </section>

          <section className="content">
            <h2>1. Proposito del documento</h2>
            <p>Esta guia explica, paso a paso, como usar la web de la demo para completar los flujos principales: login de arrendatario, pago de alquileres, consulta por codigo de comercio y operaciones de back-office.</p>

            <h2>2. Antes de empezar</h2>
            <ol>
              <li>Abre la URL publicada de la demo.</li>
              <li>Selecciona el portal que deseas usar: Arrendatarios, Consulta de Cliente o Back-office.</li>
              <li>Usa codigos de prueba y datos de demo para ejecutar los flujos de pago.</li>
            </ol>
            <p className="note">Nota: la demo consume recursos remotos de la pasarela Pay-me. Necesitas acceso a internet.</p>

            <h2>3. Navegacion general</h2>
            <p>Al abrir la web veras tres accesos:</p>
            <ul>
              <li>Portal de Arrendatarios.</li>
              <li>Consulta de Cliente.</li>
              <li>Back-office.</li>
            </ul>
            <p>El logo de MallPlaza (arriba) siempre devuelve al inicio.</p>
            <figure>
              <img className="shot" src={shot01} alt="Home - Seleccion de portales" />
              <figcaption>Home - Seleccion de portales</figcaption>
            </figure>

            <hr className="section-divider" />

            <h2 id="portal-arrendatarios">4. Portal de Arrendatarios</h2>
            <h3>4.1 Ingresar al portal</h3>
            <ol>
              <li>En el inicio, haz clic en <code>Portal de Arrendatarios</code>.</li>
              <li>En la pantalla de login, ingresa cualquier correo y contrasena.</li>
              <li>Haz clic en <code>Ingresar</code>.</li>
            </ol>
            <figure>
              <img className="shot" src={shot02} alt="Portal Arrendatarios - Login" />
              <figcaption>Portal Arrendatarios - Login</figcaption>
            </figure>

            <h3>4.2 Entender el dashboard</h3>
            <p>En la parte superior veras:</p>
            <ul>
              <li>Total pendiente (incluye comision 2%).</li>
              <li>Proximo vencimiento.</li>
              <li>Cantidad de alquileres pagados.</li>
            </ul>
            <p>En la tabla veras:</p>
            <ul>
              <li>Local, Periodo, Vencimiento, Monto y Estado.</li>
              <li>El boton <code>Pagar</code> aparece solo si hay saldo pendiente.</li>
            </ul>
            <figure>
              <img className="shot" src={shot03} alt="Portal Arrendatarios - Dashboard" />
              <figcaption>Portal Arrendatarios - Dashboard</figcaption>
            </figure>

            <h3>4.3 Pagar un alquiler</h3>
            <ol>
              <li>En la tabla, elige un alquiler con estado <code>Pendiente</code> o <code>Vencido</code>.</li>
              <li>Haz clic en <code>Pagar</code>.</li>
              <li>Selecciona el monto a pagar:</li>
            </ol>
            <ul>
              <li><code>Total</code> (monto + comision 2%).</li>
              <li><code>Monto</code> (solo alquiler).</li>
              <li><code>Comision</code> (solo comision).</li>
            </ul>
            <ol start={4}>
              <li>Selecciona el metodo:</li>
            </ol>
            <ul>
              <li>Tarjeta.</li>
              <li>Yape.</li>
              <li>Transferencia bancaria.</li>
            </ul>
            <figure>
              <img className="shot" src={shot04} alt="Pago - Seleccion de metodo" />
              <figcaption>Pago - Seleccion de metodo</figcaption>
            </figure>
            <ol start={5}>
              <li>Completa los datos de facturacion y pulsa <code>Continuar</code>.</li>
              <li>Se carga el checkout de Pay-me. Completa el pago.</li>
              <li>Al finalizar, veras la pantalla de exito con el ID de transaccion (si aplica) y el saldo restante.</li>
            </ol>
            <figure>
              <img className="shot" src={shot05} alt="Pago - Datos de facturacion" />
              <figcaption>Pago - Datos de facturacion</figcaption>
            </figure>
            <figure>
              <img className="shot" src={shot06} alt="Pago - Checkout Pay-me" />
              <figcaption>Pago - Checkout Pay-me</figcaption>
            </figure>
            <figure>
              <img className="shot" src={shot07} alt="Pago - Exito" />
              <figcaption>Pago - Exito</figcaption>
            </figure>

            <h3>4.4 Que cambia despues del pago</h3>
            <ul>
              <li>El estado del alquiler se actualiza a <code>Pagado</code> o queda <code>Pendiente</code> si fue un pago parcial.</li>
              <li>Los estados se recalculan automaticamente segun la fecha de vencimiento (Pendiente/Vencido).</li>
              <li>Se guarda en <code>localStorage</code> en la clave compartida <code>mallplaza_backoffice_payments_v1</code>.</li>
            </ul>

            <hr className="section-divider" />

            <h2 id="consulta-cliente">5. Consulta de Cliente</h2>
            <h3>5.1 Buscar por codigo de comercio</h3>
            <ol>
              <li>En el inicio, haz clic en <code>Consulta de Cliente</code>.</li>
              <li>Ingresa un codigo de comercio y pulsa <code>Buscar</code>.</li>
            </ol>
            <p>Codigos de prueba:</p>
            <ul>
              <li><code>COM-001</code></li>
              <li><code>COM-002</code></li>
              <li><code>COM-003</code></li>
            </ul>
            <figure>
              <img className="shot" src={shot08} alt="Consulta de cliente - Busqueda" />
              <figcaption>Consulta de cliente - Busqueda</figcaption>
            </figure>

            <h3>5.2 Ver resultados y pagar</h3>
            <ol>
              <li>Se muestra el negocio y el total pendiente.</li>
              <li>Revisa el historial de alquileres.</li>
              <li>Si hay saldo, haz clic en <code>Pagar</code> y sigue el mismo flujo de pago del Portal de Arrendatarios.</li>
            </ol>
            <figure>
              <img className="shot" src={shot09} alt="Consulta de cliente - Resultados" />
              <figcaption>Consulta de cliente - Resultados</figcaption>
            </figure>

            <h3>5.3 Persistencia</h3>
            <p>Los datos se guardan en <code>localStorage</code> y se comparten con Back-office:</p>
            <ul>
              <li><code>mallplaza_backoffice_payments_v1</code> (alquileres y pagos)</li>
              <li><code>mallplaza_backoffice_locals_v1</code> (locales)</li>
            </ul>

            <hr className="section-divider" />

            <h2 id="back-office">6. Back-office</h2>
            <h3>6.1 Gestion de Locales</h3>
            <ol>
              <li>En el inicio, haz clic en <code>Back-office</code>.</li>
              <li>En la pestana <code>Gestion de Locales</code> puedes:</li>
            </ol>
            <ul>
              <li>Buscar por codigo, negocio o comercio.</li>
              <li>Filtrar por estado (Activo/Inactivo).</li>
              <li>Agregar un local con <code>Agregar Local</code>.</li>
              <li>Eliminar un local (con confirmacion).</li>
            </ul>
            <p>Campos al agregar local:</p>
            <ul>
              <li>Codigo del local.</li>
              <li>Codigo de comercio.</li>
              <li>Nombre del negocio.</li>
              <li>Area (m2).</li>
              <li>Alquiler mensual.</li>
              <li>Estado.</li>
            </ul>
            <p className="note">Nota: el boton <code>Editar</code> esta visible, pero no tiene logica implementada.</p>
            <figure>
              <img className="shot" src={shot10} alt="Back-office - Gestion de locales" />
              <figcaption>Back-office - Gestion de locales</figcaption>
            </figure>

            <h3>6.2 Gestion de Alquileres</h3>
            <ol>
              <li>Cambia a la pestana <code>Gestion de Alquileres</code>.</li>
              <li>Usa el buscador y filtros por estado, periodo y monto.</li>
              <li>Para crear cobros, haz clic en <code>Generar Cobros</code>.</li>
            </ol>
            <figure>
              <img className="shot" src={shot11} alt="Back-office - Gestion de alquileres" />
              <figcaption>Back-office - Gestion de alquileres</figcaption>
            </figure>

            <h4>Generar Cobros</h4>
            <ol>
              <li>Ingresa Periodo y Fecha de vencimiento.</li>
              <li>Selecciona uno o varios locales activos.</li>
              <li>Confirma con <code>Generar Cobros</code>.</li>
            </ol>
            <p>Si ya existe un cobro para el mismo local y periodo, se omite automaticamente.</p>
            <figure>
              <img className="shot" src={shot12} alt="Back-office - Generar cobros" />
              <figcaption>Back-office - Generar cobros</figcaption>
            </figure>

            <h4>Validar Pago Manual</h4>
            <ol>
              <li>En un alquiler pendiente, haz clic en <code>Validar Pago</code>.</li>
              <li>Completa los campos requeridos:</li>
            </ol>
            <ul>
              <li>Codigo de comercio (demo).</li>
              <li>Operation Number.</li>
              <li>Transaction ID.</li>
              <li>Token (Bearer).</li>
              <li>ALG-API-VERSION.</li>
              <li>Metodo de pago.</li>
              <li>Fecha de pago.</li>
              <li>Referencia.</li>
            </ul>
            <ol start={3}>
              <li>Haz clic en <code>Validar Pago</code>.</li>
              <li>El alquiler pasa a <code>Pagado</code> y se registra historial.</li>
            </ol>

            <h4>Ver Historial de Pago</h4>
            <ol>
              <li>En un alquiler pagado, haz clic en el icono de historial.</li>
              <li>Se muestran los registros con los datos de validacion.</li>
            </ol>

            <h3>6.3 Persistencia Back-office</h3>
            <ul>
              <li>Locales en <code>localStorage</code>: <code>mallplaza_backoffice_locals_v1</code>.</li>
              <li>Pagos en <code>localStorage</code>: <code>mallplaza_backoffice_payments_v1</code>.</li>
            </ul>

            <hr className="section-divider" />

            <h2>7. Reiniciar la demo</h2>
            <p>Para limpiar los datos:</p>
            <ol>
              <li>Abre DevTools del navegador.</li>
              <li>Application &gt; Local Storage &gt; elimina las claves <code>mallplaza_backoffice_*</code>.</li>
              <li>Alternativa rapida: ejecuta <code>localStorage.clear()</code> en la consola.</li>
            </ol>

            <h2 id="troubleshooting">8. Solucion de problemas</h2>
            <ul>
              <li>Si la pasarela no carga, verifica tu conexion a internet.</li>
              <li>Si el pago no avanza, recarga la pagina y repite el flujo.</li>
              <li>Si ves datos antiguos, limpia <code>localStorage</code>.</li>
            </ul>

            <h2>9. Limitaciones conocidas</h2>
            <ul>
              <li>Login sin autenticacion real.</li>
              <li>Sin backend; toda la data es local.</li>
              <li>Edicion de locales no implementada.</li>
              <li>Pagos dependen de red y sandbox de Pay-me.</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
