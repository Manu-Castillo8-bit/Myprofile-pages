/* ============================================================
   MyProfile · Documentación — Datos del árbol y contenido
   ============================================================ */

/* Estructura del "Explorador de soluciones"
   tipo: folder | file | cs | xaml | sql | iss | pkg | info       */
const ARBOL = [
  { id: "resumen", etiqueta: "Resumen general", ico: "🏠", tipo: "info", clases: 0 },
  { id: "conceptos", etiqueta: "Conceptos clave", ico: "🎓", tipo: "info", clases: 0 },
  { id: "deps", etiqueta: "Dependencias (Paquetes NuGet)", ico: "📦", tipo: "folder", clases: 0, hijos: [
    { id: "pkg-maui", etiqueta: "Microsoft.Maui.Controls", ico: "⚙️", tipo: "pkg", clases: 0 },
    { id: "pkg-logging", etiqueta: "Microsoft.Extensions.Logging.Debug", ico: "🪵", tipo: "pkg", clases: 0 },
    { id: "pkg-notification", etiqueta: "Plugin.LocalNotification", ico: "🔔", tipo: "pkg", clases: 0 },
    { id: "pkg-sqlite", etiqueta: "sqlite-net-pcl", ico: "🗄️", tipo: "pkg", clases: 0 },
    { id: "pkg-sqliteraw", etiqueta: "SQLitePCLRaw.bundle_green", ico: "🗄️", tipo: "pkg", clases: 0 },
    { id: "pkg-supabase", etiqueta: "Supabase", ico: "☁️", tipo: "pkg", clases: 0 },
    { id: "pkg-notifyicon", etiqueta: "H.NotifyIcon.WinUI (solo Windows)", ico: "🖥️", tipo: "pkg", clases: 0 }
  ]},
  { id: "slnx", etiqueta: "Proyecto.slnx", ico: "🧩", tipo: "file", clases: 0 },
  { id: "proyecto", etiqueta: "Proyecto", ico: "📁", tipo: "folder", clases: 0, hijos: [
    { id: "csproj", etiqueta: "Proyecto.csproj", ico: "🗂️", tipo: "file", clases: 0 },

    { id: "app", etiqueta: "App.xaml + App.xaml.cs", ico: "🚀", tipo: "cs", clases: 1 },
    { id: "appshell", etiqueta: "AppShell.xaml + AppShell.xaml.cs", ico: "🧭", tipo: "cs", clases: 1 },
    { id: "mauiprogram", etiqueta: "MauiProgram.cs", ico: "⚙️", tipo: "cs", clases: 1 },
    { id: "login", etiqueta: "LoginPage.xaml + LoginPage.xaml.cs", ico: "🔐", tipo: "cs", clases: 1 },
    { id: "registrarse", etiqueta: "Registrarse.xaml + Registrarse.xaml.cs", ico: "✍️", tipo: "cs", clases: 1 },
    { id: "cargando", etiqueta: "CargandoPage.xaml + CargandoPage.xaml.cs", ico: "⏳", tipo: "cs", clases: 1 },
    { id: "dashboard", etiqueta: "DashboardPage.xaml + DashboardPage.xaml.cs", ico: "📊", tipo: "cs", clases: 1 },
    { id: "mainpage", etiqueta: "MainPage.xaml + MainPage.xaml.cs (Tareas)", ico: "📝", tipo: "cs", clases: 1 },
    { id: "salud", etiqueta: "Salud.xaml + Salud.xaml.cs", ico: "💧", tipo: "cs", clases: 1 },
    { id: "ahorro", etiqueta: "Ahorro.xaml + Ahorro.xaml.cs", ico: "💰", tipo: "cs", clases: 1 },
    { id: "password", etiqueta: "Password.xaml + Password.xaml.cs", ico: "🔑", tipo: "cs", clases: 1 },
    { id: "proposito", etiqueta: "proposito.xaml + proposito.xaml.cs", ico: "🎯", tipo: "cs", clases: 1 },
    { id: "bottomnav", etiqueta: "BottomNavBar.xaml + BottomNavBar.xaml.cs", ico: "🧱", tipo: "cs", clases: 1 },

    { id: "models", etiqueta: "Models", ico: "📂", tipo: "folder", clases: 0, hijos: [
      { id: "modelo-usuario", etiqueta: "Usuario.cs", ico: "👤", tipo: "cs", clases: 1 }
    ]},

    { id: "platforms", etiqueta: "Platforms", ico: "📂", tipo: "folder", clases: 0, hijos: [
      { id: "android", etiqueta: "Android", ico: "🤖", tipo: "folder", clases: 0, hijos: [
        { id: "mainactivity", etiqueta: "MainActivity.cs", ico: "▶️", tipo: "cs", clases: 1 },
        { id: "mainapplication", etiqueta: "MainApplication.cs", ico: "🗃️", tipo: "cs", clases: 1 },
        { id: "screenoff", etiqueta: "ScreenOffAdminReceiver.cs", ico: "📴", tipo: "cs", clases: 1 },
        { id: "androidmanifest", etiqueta: "AndroidManifest.xml", ico: "📜", tipo: "xml", clases: 0 },
        { id: "androidres", etiqueta: "Resources", ico: "📂", tipo: "folder", clases: 0, hijos: [
          { id: "deviceadminxml", etiqueta: "device_admin.xml", ico: "🇪", tipo: "xml", clases: 0 },
          { id: "colorsxml", etiqueta: "colors.xml", ico: "🎨", tipo: "xml", clases: 0 }
        ]}
      ]},
      { id: "windows", etiqueta: "Windows", ico: "🪟", tipo: "folder", clases: 0, hijos: [
        { id: "winapp", etiqueta: "App.xaml + App.xaml.cs", ico: "🪟", tipo: "cs", clases: 1 },
        { id: "bandeja", etiqueta: "BandejaSistema.cs", ico: "🖥️", tipo: "cs", clases: 1 }
      ]},
      { id: "ios", etiqueta: "iOS", ico: "🍎", tipo: "folder", clases: 0, hijos: [
        { id: "iosappdelegate", etiqueta: "AppDelegate.cs", ico: "🍏", tipo: "cs", clases: 1 },
        { id: "iosprogram", etiqueta: "Program.cs", ico: "▶️", tipo: "cs", clases: 1 }
      ]},
      { id: "mac", etiqueta: "MacCatalyst", ico: "🖥️", tipo: "folder", clases: 0, hijos: [
        { id: "macappdelegate", etiqueta: "AppDelegate.cs", ico: "🍏", tipo: "cs", clases: 1 },
        { id: "macprogram", etiqueta: "Program.cs", ico: "▶️", tipo: "cs", clases: 1 }
      ]}
    ]},

    { id: "resources", etiqueta: "Resources", ico: "📂", tipo: "folder", clases: 0, hijos: [
      { id: "resourcesinfo", etiqueta: "Recursos visuales (AppIcon, Fonts, Images, Splash, Styles)", ico: "🖼️", tipo: "info", clases: 0 }
    ]},

    { id: "services", etiqueta: "Services", ico: "📂", tipo: "folder", clases: 20, hijos: [
      { id: "localdb", etiqueta: "LocalDatabase.cs", ico: "🗄️", tipo: "cs", clases: 7 },
      { id: "supabaseservice", etiqueta: "SupabaseService.cs", ico: "☁️", tipo: "cs", clases: 9 },
      { id: "syncservice", etiqueta: "SyncService.cs", ico: "🔄", tipo: "cs", clases: 1 },
      { id: "recordatorioscheduler", etiqueta: "RecordatorioScheduler.cs", ico: "⏰", tipo: "cs", clases: 1 },
      { id: "progresosalud", etiqueta: "ProgresoSalud.cs", ico: "📈", tipo: "cs", clases: 1 }
    ]}
  ]},
  { id: "database", etiqueta: "Database", ico: "📁", tipo: "folder", clases: 0, hijos: [
    { id: "fixrls", etiqueta: "fix_rls_registro.sql", ico: "🛡️", tipo: "sql", clases: 0 },
    { id: "migracion", etiqueta: "migracion_sesiones.sql", ico: "🔗", tipo: "sql", clases: 0 },
    { id: "saludsql", etiqueta: "recordatorio_salud.sql", ico: "💧", tipo: "sql", clases: 0 }
  ]},
  { id: "installer", etiqueta: "installer", ico: "📁", tipo: "folder", clases: 0, hijos: [
    { id: "iss", etiqueta: "Proyecto.iss", ico: "📄", tipo: "iss", clases: 0 },
    { id: "exe", etiqueta: "Proyecto-Setup.exe", ico: "💿", tipo: "info", clases: 0 }
  ]},
  { id: "publish", etiqueta: "publish", ico: "📦", tipo: "folder", clases: 0, hijos: [
    { id: "publishinfo", etiqueta: "Contenido publicado", ico: "📦", tipo: "info", clases: 0 }
  ]}
];

/* ================= CONTENIDO POR NODO ================= */
const CONTENIDO = {

/* ────────────────────────────────────────────────────────
   RESUMEN GENERAL
   ──────────────────────────────────────────────────────── */
resumen: `
<h2 class="titulo-nodo">🏠 Resumen general del proyecto</h2>
<p class="subtitulo-nodo">«Exploración del proyecto MyProfile» · lectura recomendada primero</p>

<p>Esta página te explica <b>todo el programa</b> como lo haría el <b>Explorador de soluciones de Visual Studio</b>: ves un árbol con todas las carpetas y archivos, y al hacer clic en cada uno se muestra <b>qué es, para qué sirve y cómo funciona</b> cada clase, método y función.</p>

<div class="destacado">
<h3>¿Qué es MyProfile?</h3>
<p>Es una <b>aplicación móvil y de escritorio</b> de <b>organización personal</b> que reúne en un solo lugar 4 cosas:</p>
<ul>
  <li>📝 <b>Tareas</b>: crea, organiza y marca como completadas tus pendientes.</li>
  <li>💰 <b>Ahorro</b>: registra ingresos y gastos para llevar tu saldo.</li>
  <li>💧 <b>Salud</b>: recordatorios de hidratación, descanso visual y tareas pendientes, con progreso diario.</li>
  <li>🔑 <b>Contraseñas</b>: guarda las credenciales de tus cuentas (cifradas) y búscalas al instante.</li>
</ul>
</div>

<h3>🧱 ¿Con qué tecnología está hecha?</h3>
<table>
<tr><th>Componente</th><th>Tecnología</th><th>¿Para qué?</th></tr>
<tr><td>Lenguaje</td><td><b>C#</b></td><td>Todo el código de la lógica (clases, métodos, datos).</td></tr>
<tr><td>Interfaz gráfica</td><td><b>XAML</b></td><td>Lenguaje de marcado para diseñar las pantallas.</td></tr>
<tr><td>Framework</td><td><b>.NET MAUI</b></td><td>Un solo código para Android, iOS, Windows y Mac.</td></tr>
<tr><td>Base de datos local</td><td><b>SQLite</b></td><td>Guarda los datos en el dispositivo (funciona sin internet).</td></tr>
<tr><td>Base de datos en la nube</td><td><b>Supabase</b> (PostgreSQL + Auth + API)</td><td>Autenticación e historial en línea para sincronizar.</td></tr>
<tr><td>Notificaciones</td><td><b>Plugin.LocalNotification</b></td><td>Avisos programados (tomar agua, descansar la vista…).</td></tr>
</table>

<h3>🔄 La idea principal: «offline-first» (primero lo local)</h3>
<p>Todas las escrituras se guardan <b>primero en la base local (SQLite)</b> y luego un <b>motor de sincronización</b> sube los cambios a Supabase cuando hay internet, y baja los datos que existen en la nube. Así la app funciona <b>incluso sin conexión</b>.</p>

<div class="flow">
  <div class="paso"><b>1. La interfaz</b><span>El usuario escribe/lee en la pantalla</span></div>
  <div class="paso"><b>2. LocalDatabase</b><span>Se guarda en SQLite (inmediato, sin internet)</span></div>
  <div class="paso"><b>3. SyncService</b><span>Detecta si hay conexión de internet</span></div>
  <div class="paso"><b>4. Supabase</b><span>Sube los cambios y baja los del servidor</span></div>
</div>

<h3>📦 Paquetes (bibliotecas) instaladas</h3>
<ul>
  <li><b>Microsoft.Maui.Controls</b> — el corazón del framework de interfaces.</li>
  <li><b>Plugin.LocalNotification 14.1.1</b> — notificaciones locales con botones.</li>
  <li><b>sqlite-net-pcl 1.9.172</b> — base de datos SQLite local fácil de usar.</li>
  <li><b>SQLitePCLRaw.bundle_green 2.1.11</b> — el motor SQLite nativo.</li>
  <li><b>Supabase 1.6.2</b> — conexión con la nube (login + base de datos).</li>
  <li><b>H.NotifyIcon.WinUI 2.4.1</b> — icono en la bandeja de Windows.</li>
  <li><b>Microsoft.Extensions.Logging.Debug</b> — registros de depuración.</li>
</ul>
<p class="caja idea"><span class="titulo-caja">💡 Para entender la lectura</span>
Cuando veas un nombre como <code>ObtenerSaldoAsync</code>, léelo como «lo que hace»: <b>Obtener</b> (verbo) + <b>Saldo</b> (qué) + <b>Async</b> (que trabaja en segundo plano). Todo el código está en <b>español</b>, lo que lo hace muy legible.</p>
`,

/* ────────────────────────────────────────────────────────
   CONCEPTOS CLAVE
   ──────────────────────────────────────────────────────── */
conceptos: `
<h2 class="titulo-nodo">🎓 Conceptos clave (para entender todo)</h2>
<p class="subtitulo-nodo">Mini diccionario para quien empieza en programación</p>

<p>Antes de abrir cada archivo, conviene dominar estas ideas. Están explicadas con sencillez.</p>

<h3>🧩 Clase</h3>
<p>Es como un <b>molde</b> o <b>receta</b>. Describe un tipo de «cosa» con sus datos (propiedades) y sus acciones (métodos). Ejemplo: la clase <code>Ahorro</code> representa la pantalla de ahorros; la clase <code>Usuario</code> representa una cuenta. Cuando el programa necesita una de esas cosas, crea una «copia» llamada <b>objeto</b> (instancia).</p>

<h3>⚙️ Método</h3>
<p>Es una <b>función que vive dentro de una clase</b>: un bloque de código con nombre que hace una tarea concreta y puede recibir datos (parámetros) y devolver un resultado. Ejemplo: <code>SumarVaso(1)</code> aumenta en 1 el contador de vasos de agua.</p>
<p>Los hay de dos tipos principales:</p>
<ul>
  <li><b>Estáticos</b> (<code>public static</code>): se llaman sin crear una copia, con el nombre de la clase. Ej: <code>LocalDatabase.GetConexionAsync()</code>.</li>
  <li><b>De instancia</b>: se llaman sobre un objeto creado. Ej: <code>label.ScaleTo(...)</code>.</li>
</ul>

<h3>🏷️ Propiedad</h3>
<p>Es un «dato» que guarda una clase, algo así como un casillero con nombre. Ejemplo: <code>Correo</code>, <code>Nombre</code>, <code>Monto</code>. Cada casillero tiene un tipo (texto <code>string</code>, número <code>int</code>/<code>decimal</code>, verdadero/falso <code>bool</code>, fecha <code>DateTime</code>).</p>

<h3>⏳ async / await (asincronía)</h3>
<p>Significa que el código <b>no bloquea la pantalla</b> mientras espera algo lento, como consultar internet o leer la base de datos. El método marca con <code>async</code> y usa <code>await</code> en cada operación lenta: el programa «espera» ahí pero sin congelarse, y el usuario puede seguir tocando la app.</p>

<h3>🔔 Evento</h3>
<p>Es una «aviso» que se dispara cuando algo sucede. El código se <b>suscribe</b> para reaccionar. Ejemplo: un botón tiene el evento <code>Clicked</code>; cuando el usuario lo toca, se ejecuta el método asignado en XAML (por ejemplo <code>OnGuardarClicked</code>).</p>

<h3>🗄️ Base de datos SQLite (local)</h3>
<p>Un archivo en el dispositivo que guarda datos en <b>tablas</b> (filas y columnas, como Excel). La librería <code>sqlite-net-pcl</code> convierte automáticamente cada clase C# en una tabla, sin escribir SQL a mano.</p>

<h3>☁️ Supabase (nube)</h3>
<p>Es un servicio en internet que ofrece: <b>Autenticación</b> (crear cuentas, iniciar sesión), <b>PostgreSQL</b> (la base de datos) y una <b>API</b> (PostgREST) para leer/escribir datos por internet. La app le habla con el paquete <code>Supabase</code>.</p>

<h3>🔀 Sincronización (sync)</h3>
<p>Proceso de <b>igualar la base local con la nube</b>: subir (push) lo nuevo y bajar (pull) lo que existe en el servidor. Cada fila local lleva una etiqueta <code>SyncState</code> que dice si está <code>synced</code> (en orden), <code>pending</code> (por subir) o <code>deleted</code> (borrada).</p>

<h3>🔒 Hash de contraseña</h3>
<p>Nunca se guarda la contraseña tal cual, sino un <b>resumen matemático</b> (hash) con «sal». Al iniciar sesión se recalcula y se compara. Así, aunque alguien vea la base de datos, no puede saber la contraseña.</p>

<h3>🧩 XAML</h3>
<p>Lenguaje parecido a XML que <b>describe la interfaz</b>: define etiquetas (<code>Label</code>), botones (<code>Button</code>), textos editables (<code>Entry</code>), etc. Los eventos se enlazan escribiendo el nombre del método (ej. <code>Clicked="OnGuardarClicked"</code>).</p>
`,

/* ────────────────────────────────────────────────────────
   PAQUETES NUGET
   ──────────────────────────────────────────────────────── */
deps: `
<h2 class="titulo-nodo">📦 Dependencias / Paquetes NuGet</h2>
<p class="subtitulo-nodo">Bibliotecas externas que se descargan e instalan con NuGet</p>
<p>NuGet es el <b>gestor de paquetes</b> de .NET: una especie de «tienda» de código reutilizable. Cada paquete es una biblioteca que alguien más construyó y que usamos para no reinventar la rueda. Se declaran en el archivo <b>Proyecto.csproj</b>. Haz clic en cada paquete del árbol para ver su explicación.</p>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>El Explorador de soluciones muestra estos paquetes dentro del nodo <b>Dependencias → Paquetes</b>. Aquí aparecen los 7 que usa este proyecto.</p>
`,
"pkg-maui": `
<h2 class="titulo-nodo">⚙️ Microsoft.Maui.Controls</h2>
<p class="subtitulo-nodo">Paquete NuGet · el framework de la interfaz</p>
<p>Este es <b>el corazón del proyecto</b>. .NET MAUI (Multi-platform App UI) es un framework que nos permite escribir <b>una sola vez</b> la interfaz y ejecutarla en Android, iOS, macOS y Windows. Este paquete aporta todos los controles visuales que se ven en las pantallas:</p>
<ul>
  <li><code>ContentPage</code> — una pantalla.</li>
  <li><code>Button</code>, <code>Entry</code>, <code>Label</code>, <code>Switch</code>, <code>Picker</code>, <code>DatePicker</code> — elementos de formulario.</li>
  <li><code>Grid</code>, <code>VerticalStackLayout</code>, <code>ScrollView</code>, <code>Frame</code> — para acomodar el diseño.</li>
  <li><code>Shell</code> — la navegación entre pantallas.</li>
</ul>
<p class="caja idea"><span class="titulo-caja">💡 Analogía</span>Si el proyecto fuera una casa, este paquete es el <b>hormigón y los ladrillos</b>: sin él no existiría ni una sola pantalla.</p>
`,
"pkg-logging": `
<h2 class="titulo-nodo">🪵 Microsoft.Extensions.Logging.Debug</h2>
<p class="subtitulo-nodo">Paquete NuGet · registros de depuración</p>
<p>Habilita el registro de mensajes en la <b>ventana de Depuración (Output)</b> de Visual Studio cuando la app corre en modo <code>Debug</code>. Se activa en <code>MauiProgram.cs</code> solo para compilaciones de desarrollo:</p>
<pre data-lang="C#"><code>#if DEBUG
    builder.Logging.AddDebug();
#endif</code></pre>
<p class="caja dato"><span class="titulo-caja">🔎 ¿Cuándo se usa?</span>Para ver mensajes internos mientras desarrollas, por ejemplo el error <code>[SyncService] fallo de sincronización: ...</code> que escribe <code>SyncService</code>. En la versión final (Release) este registro queda desactivado.</p>
`,
"pkg-notification": `
<h2 class="titulo-nodo">🔔 Plugin.LocalNotification (versión 14.1.1)</h2>
<p class="subtitulo-nodo">Paquete NuGet · notificaciones locales del sistema</p>
<p>Permite crear <b>notificaciones del sistema</b> (las que aparecen en la barra/bandeja del teléfono o de Windows). Este proyecto lo usa para los <b>recordatorios de salud</b>:</p>
<ul>
  <li>💧 Beber agua.</li>
  <li>👁️ Descanso visual.</li>
  <li>📝 Revisar tareas pendientes.</li>
</ul>
<p>Lo interesante es que también soporta <b>notificaciones con botones</b>: la notificación de «suspender pantalla» muestra dos botones (<b>Suspender ahora</b> / <b>Cancelar</b>) que funcionan incluso con la app cerrada. Eso se configura en <code>MauiProgram.cs</code> y se atiende en <code>RecordatorioScheduler</code>.</p>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>En Android la <b>repetición</b> de un aviso la gestiona el propio sistema con <code>RepeatType = TimeInterval</code>, así el recordatorio suena aunque el teléfono esté bloqueado.</p>
`,
"pkg-sqlite": `
<h2 class="titulo-nodo">🗄️ sqlite-net-pcl (versión 1.9.172)</h2>
<p class="subtitulo-nodo">Paquete NuGet · base de datos SQLite local</p>
<p>Un <b>ORM</b> (Object-Relational Mapper) para SQLite: nos permite usar la base de datos <b>sin escribir SQL</b>. Con solo poner atributos en nuestras clases, la librería crea las tablas automáticamente:</p>
<pre data-lang="C#"><code>[Table("tarea_offline")]
public class TareaOffline
{
    [PrimaryKey, AutoIncrement]
    public int IdLocal { get; set; }
    public int? ServerId { get; set; }
    public string Titulo { get; set; } = "";
    ...
}</code></pre>
<p>Cada operación importante es <b>asíncrona</b> (<code>async</code>) para no congelar la interfaz: <code>InsertAsync</code>, <code>UpdateAsync</code>, <code>DeleteAsync</code>, <code>Table&lt;T&gt;()</code> para consultar.</p>
<p class="caja idea"><span class="titulo-caja">💡 Analogía</span>Es como una hoja de cálculo por cada clase: la clase es el encabezado de la columna y cada objeto que guardes es una fila.</p>
`,
"pkg-sqliteraw": `
<h2 class="titulo-nodo">🗄️ SQLitePCLRaw.bundle_green (versión 2.1.11)</h2>
<p class="subtitulo-nodo">Paquete NuGet · el motor nativo de SQLite</p>
<p>Este paquete <b>acompaña</b> al anterior: trae el <b>motor SQLite real</b> compilado para cada plataforma (el archivo <code>.dll</code> o <code>.so</code> nativo según el dispositivo). Sin él, <code>sqlite-net-pcl</code> no tendría dónde ejecutar las consultas.</p>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>«bundle_green» es una de las variantes del paquete que decide qué motor nativo cargar. Por eso en <code>Proyecto.csproj</code> aparecen los dos juntos: la librería (<code>sqlite-net-pcl</code>) y el motor (<code>SQLitePCLRaw.bundle_green</code>).</p>
`,
"pkg-supabase": `
<h2 class="titulo-nodo">☁️ Supabase (versión 1.6.2)</h2>
<p class="subtitulo-nodo">Paquete NuGet · SDK para la nube</p>
<p>SDK oficial para hablar con <b>Supabase</b>, que es una plataforma que ofrece una base de datos PostgreSQL en la nube + sistema de autenticación + API automática (PostgREST). Con este paquete el proyecto puede:</p>
<ul>
  <li><b>Autenticarse</b>: <code>client.Auth.SignUp(...)</code> para registrar y <code>client.Auth.SignIn(...)</code> para iniciar sesión.</li>
  <li><b>Consultar tablas</b>: <code>client.From&lt;Usuario&gt;().Where(...).Get()</code> ejecuta consultas tipo «SELECT».</li>
  <li><b>Insertar / actualizar / borrar</b> registros en la nube.</li>
</ul>
<p>Los <b>modelos remotos</b> (Usuario, Tarea, MovimientoFinanciero, Contrasena, RecordatorioSalud) se definen con atributos como <code>[Table(...)]</code> y <code>[Column(...)]</code> en <code>SupabaseService.cs</code>.</p>
<p class="caja cuidado"><span class="titulo-caja">⚠️ Nota de seguridad</span>La URL y la clave «anon» están visibles en el código (constantes <code>SupabaseConfig</code>). Es normal en aplicaciones con Supabase, porque la seguridad real se aplica en la nube con las <b>políticas RLS</b> (Row Level Security) que verás en la carpeta <b>Database</b>.</p>
`,
"pkg-notifyicon": `
<h2 class="titulo-nodo">🖥️ H.NotifyIcon.WinUI (versión 2.4.1)</h2>
<p class="subtitulo-nodo">Paquete NuGet · solo para Windows</p>
<p>Se instala <b>únicamente cuando el destino es Windows</b> (lo declara una condición en <code>Proyecto.csproj</code>). Sirve para mostrar un <b>icono en la bandeja del sistema</b> (la zona de la esquina inferior derecha de Windows).</p>
<p>Con la clase <code>BandejaSistema</code> logramos que, al cerrar la ventana, la app <b>no se cierre del todo</b>: queda oculta en la bandeja para seguir mostrando los recordatorios, y permite abrirla de nuevo o salir de verdad con un menú.</p>
`,

/* ────────────────────────────────────────────────────────
   SOLUCIÓN Y PROYECTO
   ──────────────────────────────────────────────────────── */
slnx: `
<h2 class="titulo-nodo">🧩 Proyecto.slnx</h2>
<p class="subtitulo-nodo">Archivo de solución · el «contenedor» superior</p>
<p>En Visual Studio un <b>proyecto</b> es una aplicación; una <b>solución</b> es el contenedor que agrupa uno o varios proyectos para trabajarlos juntos. Este archivo dice: «la solución está formada por el proyecto <b>Proyecto</b>».</p>
<pre data-lang="XML"><code>&lt;Solution&gt;
  &lt;Project Path="Proyecto/Proyecto.csproj" /&gt;
&lt;/Solution&gt;</code></pre>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Es el formato moderno <code>.slnx</code> de Visual Studio 2022+ (antes se usaba <code>.sln</code>). Al abrir este archivo, Visual Studio carga todo el proyecto listo para compilar.</p>
`,
csproj: `
<h2 class="titulo-nodo">🗂️ Proyecto.csproj</h2>
<p class="subtitulo-nodo">Archivo de proyecto · la «receta» para construir la app</p>
<p>Este archivo XML es la <b>ficha técnica del proyecto</b>: le dice a Visual Studio <b>cómo compilar</b> la aplicación. Se divide en varias secciones:</p>

<h3>1. Plataformas de destino (TargetFrameworks)</h3>
<p>Con una sola base de código se compilan versiones para distintos sistemas:</p>
<pre data-lang="XML"><code>&lt;TargetFrameworks&gt;net10.0-android&lt;/TargetFrameworks&gt;
&lt;TargetFrameworks Condition="!$([MSBuild]::IsOSPlatform('linux'))"&gt;
  $(TargetFrameworks);net10.0-ios;net10.0-maccatalyst
&lt;/TargetFrameworks&gt;
&lt;TargetFrameworks Condition="$([MSBuild]::IsOSPlatform('windows'))"&gt;
  $(TargetFrameworks);net10.0-windows10.0.19041.0
&lt;/TargetFrameworks&gt;</code></pre>
<p>Android, iOS, macOS y Windows (10.0.19041 es la versión mínima del sistema). La etiqueta <code>Condition</code> hace que iOS/macOS solo se compilen si no estás en Linux, y Windows solo si estás en Windows.</p>

<h3>2. Datos de la aplicación</h3>
<ul>
  <li><code>&lt;ApplicationTitle&gt;Proyecto&lt;/ApplicationTitle&gt;</code> — el nombre visible.</li>
  <li><code>&lt;ApplicationId&gt;com.companyname.proyecto&lt;/ApplicationId&gt;</code> — identificador único.</li>
  <li><code>&lt;ApplicationDisplayVersion&gt;1.1&lt;/ApplicationDisplayVersion&gt;</code> y <code>&lt;ApplicationVersion&gt;2&lt;/ApplicationVersion&gt;</code> — versión.</li>
</ul>

<h3>3. Recursos</h3>
<p>Declara el icono de la app (<code>MauiIcon</code>), la pantalla de inicio (<code>MauiSplashScreen</code>), las imágenes (<code>MauiImage</code>), las tipografías (<code>MauiFont</code>) y archivos sin procesar (<code>MauiAsset</code>).</p>

<h3>4. Dependencias</h3>
<p>Los 7 paquetes NuGet vistos en el árbol (ampliables con un clic):</p>
<ul>
  <li><code>Microsoft.Maui.Controls</code> — interfaz.</li>
  <li><code>Microsoft.Extensions.Logging.Debug</code> — depuración.</li>
  <li><code>Plugin.LocalNotification</code> — notificaciones.</li>
  <li><code>sqlite-net-pcl</code> + <code>SQLitePCLRaw.bundle_green</code> — base local.</li>
  <li><code>Supabase</code> — nube.</li>
  <li><code>H.NotifyIcon.WinUI</code> — bandeja de Windows (solo Windows).</li>
</ul>
`,

/* ────────────────────────────────────────────────────────
   APP / APPSHELL / MAUI PROGRAM
   ──────────────────────────────────────────────────────── */
app: `
<h2 class="titulo-nodo">🚀 App.xaml + App.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>App</code> · arranque y ciclo de vida de la aplicación</p>
<p>Estas dos caras del mismo archivo definen la <b>aplicación en sí</b>. <code>App.xaml</code> solo declara los <b>recursos globales</b> (colores y estilos de <code>Resources/Styles</code>). La lógica vive en <code>App.xaml.cs</code>.</p>

<h3>Métodos principales</h3>
<div class="metodo"><span class="mt">Constructor</span><span class="mm">App()</span><div class="md">Inicializa los componentes de XAML y se <b>suscribe al evento de cambio de conexión</b> (<code>ConnectivityChanged</code>) para sincronizar cuando aparece internet.</div></div>

<div class="metodo"><span class="mt">Método sobrescrito</span><span class="mm">CreateWindow(IActivationState?)</span><div class="md">Cuando la app arranca, restaura la sesión guardada (<code>SupabaseService.RestaurarSesion()</code>) y crea la ventana principal con <code>AppShell</code>. Además enlaza los eventos del ciclo de vida de la ventana:
<ul>
  <li><b>Created</b> → marca que la app está en primer plano y arranca el reinicio diario de los contadores de salud.</li>
  <li><b>Activated / Resumed</b> → la app vuelve al frente: sincroniza.</li>
  <li><b>Deactivated / Stopped</b> → la app pasa a segundo plano: avisa al planificador de recordatorios.</li>
</ul>
Por último, si hay sesión activa, inicia el <b>planificador de recordatorios</b> y hace una primera sincronización.</div></div>

<div class="metodo"><span class="mt">Manejador de evento</span><span class="mm">OnResumed(object?, EventArgs)</span><div class="md">Al volver la app al frente, activa el primer plano y sincroniza.</div></div>

<div class="metodo"><span class="mt">Manejador de evento</span><span class="mm">OnConnectivityChanged(object?, ConnectivityChangedEventArgs)</span><div class="md">Cuando el dispositivo gana acceso a internet (<code>NetworkAccess.Internet</code>), dispara una sincronización automática.</div></div>

<p class="caja idea"><span class="titulo-caja">💡 Importancia</span>Aquí se decide que la app sea <b>reactiva a la red</b>: los datos pendientes se suben solos cuando hay señal, sin que el usuario haga nada.</p>
`,
appshell: `
<h2 class="titulo-nodo">🧭 AppShell.xaml + AppShell.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>AppShell</code> · mapa de navegación</p>
<p><code>Shell</code> es el sistema de navegación de MAUI. Este archivo define <b>todas las pantallas y cómo llegar a ellas</b>. Cada pantalla se declara con <code>ShellContent</code> y una <b>ruta</b> (<code>Route</code>).</p>

<h3>Estructura de la navegación</h3>
<table>
<tr><th>Sección</th><th>Pantallas</th><th>Rutas</th></tr>
<tr><td>Acceso (antes de iniciar sesión)</td><td>LoginPage, Registrarse</td><td><code>LoginPage</code>, <code>Registrarse</code></td></tr>
<tr><td>TabBar «Principal»</td><td>Dashboard, Tareas, Salud, Ahorro, Contraseñas</td><td><code>DashboardPage</code>, <code>MainPage</code>, <code>Salud</code>, <code>Ahorro</code>, <code>Password</code></td></tr>
<tr><td>Carga</td><td>CargandoPage (pantalla intermedia)</td><td><code>Cargando</code></td></tr>
</table>
<p>El <code>TabBar Route="Principal"</code> crea las <b>pestañas inferiores</b>. Por eso, para entrar a las pantallas principales la app navega con rutas como <code>//Principal/DashboardPage</code>.</p>
<p>En el código (code-behind) el constructor registra una ruta adicional para la pantalla «Propósito»:</p>
<pre data-lang="C#"><code>Routing.RegisterRoute("Proposito", typeof(Proposito));</code></pre>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Las rutas con <code>//</code> son «absolutas» (van directo a esa pantalla) y las rutas simples como <code>"Proposito"</code> son «relativas» (se apilan sobre la pantalla actual).</p>
`,
mauiprogram: `
<h2 class="titulo-nodo">⚙️ MauiProgram.cs</h2>
<p class="subtitulo-nodo">Clase estática <code>MauiProgram</code> · punto de montaje de la app</p>
<p>Es la <b>fábrica principal</b>: el método <code>CreateMauiApp()</code> construye y configura toda la aplicación antes de mostrar cualquier pantalla. Es el equivalente al «main» de un programa, pero declarativo.</p>

<div class="metodo"><span class="mt">Método estático principal</span><span class="mm">CreateMauiApp()</span><div class="md">Con <code>MauiApp.CreateBuilder()</code> se crea el «constructor». En cadena se le van agregando encendidos:
<ul>
  <li><b>UseMauiApp&lt;App&gt;()</b> — indica que la aplicación es la clase <code>App</code>.</li>
  <li><b>ConfigureFonts(...)</b> — registra las tipografías <code>OpenSans-Regular</code> y <code>OpenSans-Semibold</code>.</li>
  <li><b>UseLocalNotification(...)</b> — configura las notificaciones:
    <ul>
      <li>Crear un canal de Android llamado <code>"recordatorios"</code> (importante: sin canal, Android no muestra la notificación).</li>
      <li>Una <b>categoría</b> especial con los dos botones: «Suspender ahora» (<code>AccionSuspender</code>) y «Cancelar» (<code>AccionCancelar</code>).</li>
    </ul>
  </li>
  <li><b>builder.Logging.AddDebug()</b> — registros de depuración (solo Debug).</li>
</ul>
Después de <code>builder.Build()</code>:
<ul>
  <li>Se <b>suscribe a las acciones de las notificaciones</b> (<code>NotificationActionTapped</code>) para que los botones respondan aunque la app se haya abierto desde cero.</li>
  <li>Comprueba si la app fue lanzada tocando un botón de notificación y, si es así, ejecuta la acción correspondiente con <code>RecordatorioScheduler.EjecutarAccion(...)</code>.</li>
</ul></div></div>

<p class="caja cuidado"><span class="titulo-caja">⚠️ Detalle técnico</span>La <code>NotificationActionTapped</code> se registra aquí (y no en una página) a propósito: así la app atiende el botón «Suspender ahora» incluso en un <b>arranque en frío</b> desde la notificación.</p>
`,

/* ────────────────────────────────────────────────────────
   PANTALLAS (INTERFAZ)
   ──────────────────────────────────────────────────────── */
login: `
<h2 class="titulo-nodo">🔐 LoginPage.xaml + LoginPage.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>LoginPage</code> · pantalla de inicio de sesión</p>
<p>Es la primera pantalla que ve el usuario. La parte <code>.xaml</code> dibuja el <b>diseño</b>: logo, títulos, campos de correo y contraseña, botón «Iniciar sesión» e indicadores de carga. El <code>.xaml.cs</code> contiene la lógica.</p>

<h3>Métodos</h3>
<div class="metodo"><span class="mt">Ciclo de vida</span><span class="mm">OnAppearing()</span><div class="md">Si ya hay una sesión activa (<code>SupabaseService.UsuarioActual != null</code>), redirige automáticamente a la pantalla <code>Cargando</code> para no pedir credenciales dos veces.</div></div>
<div class="metodo"><span class="mt">Manejador de evento</span><span class="mm">OnTogglePasswordClicked(...)</span><div class="md">Intercambia la propiedad <code>IsPassword</code> del campo de contraseña para <b>mostrar u ocultar</b> los caracteres.</div></div>
<div class="metodo"><span class="mt">Manejador de evento</span><span class="mm">OnLoginClicked(...)</span><div class="md">El corazón de la pantalla:
<ol>
  <li>Lee correo y contraseña y valida que no estén vacíos.</li>
  <li>Desactiva el botón y muestra un indicador de carga.</li>
  <li>Llama a <code>SupabaseService.LoginAsync(correo, contrasena)</code> (que intenta en línea y, si falla, <b>funciona sin internet</b>).</li>
  <li>Si devuelve <code>null</code> muestra «Correo o contraseña incorrectos».</li>
  <li>Si hay usuario, llama a <code>EstablecerSesion(...)</code> y navega a <code>//Cargando</code>.</li>
</ol></div></div>
<div class="metodo"><span class="mt">Método estático de apoyo</span><span class="mm">IndicatorDetenido(indicador, botón, texto)</span><div class="md">Vuelve a la normalidad el botón y apaga el indicador (se usa en «try/finally» para que siempre se ejecute).</div></div>
<div class="metodo"><span class="mt">Manejadores de «taps»</span><span class="mm">OnRegisterTapped(...) · OnPropositoTapped(...)</span><div class="md">Navegan a la pantalla de registro (<code>///Registrarse</code>) o a la de Propósito, con una pequeña animación de escala sobre el texto tocado.</div></div>
<p class="caja dato"><span class="titulo-caja">🔎 Ver contraseña</span>Antes del campo de contraseña hay un botón de imagen (<code>ImageButton</code>) que llama a <code>OnTogglePasswordClicked</code>.</p>
`,
registrarse: `
<h2 class="titulo-nodo">✍️ Registrarse.xaml + Registrarse.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>Registrarse</code> · crear una cuenta nueva</p>
<p>Pantalla para <b>registrar un usuario nuevo</b>. Diseño muy parecido al login, con tres campos: nombre, correo y contraseña.</p>

<h3>Métodos</h3>
<div class="metodo"><span class="mt">Manejador de evento</span><span class="mm">OnLoginClicked(...)</span><div class="md">A pesar del nombre (es el botón «Registrarse»), hace el registro:
<ol>
  <li>Valida que nombre, correo y contraseña no estén vacíos.</li>
  <li>Desactiva el botón, muestra un indicador y hace una <b>animación de rebote</b> (Escala 0.93 → 1.0).</li>
  <li>Lanza <code>AnimarPulsosAsync(btn)</code> en segundo plano para que el botón «pulse» mientras trabaja.</li>
  <li>Llama a <code>SupabaseService.RegistrarAsync(nombre, correo, contrasena)</code>, que crea la cuenta en Supabase y la sesión local.</li>
  <li>Muestra «Usuario registrado correctamente».</li>
</ol></div></div>
<div class="metodo"><span class="mt">Método asíncrono</span><span class="mm">AnimarPulsosAsync(Button)</span><div class="md">Un bucle <code>while(_procesando)</code> que escala el botón entre 0.97 y 1.05 con suavizado (efecto visual de «cargando»).</div></div>
<div class="metodo"><span class="mt">Estáticos y manejadores</span><span class="mm">IndicatorDetenido(...) · OnRegisterTapped(...) · OnPropositoTapped(...) · OnTogglePasswordClicked(...)</span><div class="md">Los mismos patrones del login: apagar el indicador en <code>finally</code> y navegar entre pantallas.</div></div>
`,
cargando: `
<h2 class="titulo-nodo">⏳ CargandoPage.xaml + CargandoPage.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>CargandoPage</code> · pantalla de transición entre el login y el menú</p>
<p>Pantalla intermedia que se muestra <b>después de iniciar sesión</b>. Mientras tanto muestra consejos sobre la app para hacer la espera agradable.</p>

<h3>Cómo funciona</h3>
<div class="metodo"><span class="mt">Ciclo de vida</span><span class="mm">OnAppearing()</span><div class="md">
<ol>
  <li>Si no hay sesión, vuelve al login.</li>
  <li>Inicia un <b>cronómetro</b> (<code>Stopwatch</code>) de <b>15 segundos</b>.</li>
  <li>Cada <b>2.3 segundos</b> cambia el consejo con una animación de fundido (<code>FadeTo</code>).</li>
  <li>Cada instante actualiza la <code>ProgressBar</code> y el porcentaje.</li>
  <li>Al terminar, navega a <code>//Principal/DashboardPage</code>.</li>
</ol>
</div></div>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Los consejos son un arreglo de textos (<code>Consejos</code>) que gira con el operador módulo: <code>indice = (indice + 1) % Consejos.Length</code>, así nunca se sale del rango.</p>
`,
dashboard: `
<h2 class="titulo-nodo">📊 DashboardPage.xaml + DashboardPage.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>DashboardPage</code> · pantalla principal después de entrar</p>
<p>Es el «inicio» con un <b>resumen visual</b> del día: saludo al usuario, progreso de tareas, saldo de ahorro, contadores de salud y accesos rápidos a cada sección.</p>

<h3>Métodos</h3>
<div class="metodo"><span class="mt">Ciclo de vida</span><span class="mm">OnAppearing() / OnDisappearing()</span><div class="md">Se suscribe / desuscribe al evento <code>ProgresoSalud.DiaReiniciado</code> para refrescar los contadores si cambia el día, y carga los datos.</div></div>
<div class="metodo"><span class="mt">Carga de datos</span><span class="mm">CargarDatosAsync()</span><div class="md">
<ul>
  <li>Muestra «Hola, <b>Nombre</b>».</li>
  <li>Cuenta tareas totales y completadas y actualiza la <code>ProgressBar</code> con el porcentaje.</li>
  <li>Consultar el saldo de ahorro (<code>ObtenerSaldoAsync</code>) y lo muestra formateado con dos decimales.</li>
  <li>Refresca los contadores de vasos de agua y descansos visuales.</li>
</ul></div></div>
<div class="metodo"><span class="mt">Manejador de evento</span><span class="mm">OnDiaReiniciado(...) · RefrescarContadoresSalud()</span><div class="md">Al reiniciarse el día, actualiza los textos de hidratación y descanso.</div></div>
<div class="metodo"><span class="mt">Cerrar sesión</span><span class="mm">OnLogoutClicked(...)</span><div class="md">Pide confirmación, llama a <code>SupabaseService.CerrarSesion()</code> y regresa al login.</div></div>
<div class="metodo"><span class="mt">Accesos rápidos</span><span class="mm">OnAccesoTareasClicked / OnAccesoAhorroClicked / OnAccesoSaludClicked / OnAccesoPasswordClicked</span><div class="md">Navegan a cada pestaña con su ruta absoluta, por ejemplo <code>//Principal/Ahorro</code>.</div></div>
<div class="metodo"><span class="mt">Navegación</span><span class="mm">OnPropositoTapped(...)</span><div class="md">Va a la pantalla «Propósito».</div></div>
`,
mainpage: `
<h2 class="titulo-nodo">📝 MainPage.xaml + MainPage.xaml.cs (Tareas)</h2>
<p class="subtitulo-nodo">Clase <code>MainPage</code> · Gestor de tareas</p>
<p>Pantalla para <b>crear, ver, completar y eliminar tareas</b>, con dos pestañas: <b>Pendientes</b> y <b>Completadas</b>, y botón para sincronizar manualmente.</p>

<h3>Métodos principales</h3>
<div class="metodo"><span class="mt">Ciclo de vida</span><span class="mm">OnAppearing()</span><div class="md">Carga las tareas; si no hay sesión, limpia la vista y navega al login.</div></div>
<div class="metodo"><span class="mt">Carga</span><span class="mm">CargarTareasAsync()</span><div class="md">Llama a <code>SupabaseService.ObtenerTareasAsync()</code> y guarda el resultado en <code>_todasLasTareas</code>, después actualiza la vista.</div></div>
<div class="metodo"><span class="mt">Filtrado</span><span class="mm">RefrescarVista()</span><div class="md">Según la pestaña activa (<code>_mostrandoCompletadas</code>), filtra la lista con <code>EstadoTarea.EsCompletado(...)</code> y la pinta.</div></div>
<div class="metodo"><span class="mt">Dibujo dinámico</span><span class="mm">MostrarTareas(List&lt;Tarea&gt;)</span><div class="md">Construye cada fila en código C# (no en XAML): crea un <code>Frame</code> con título, descripción, fecha y dos botones (Completar/Reabrir y Eliminar). Si la lista está vacía muestra «No hay tareas.».</div></div>
<div class="metodo"><span class="mt">Acciones</span><span class="mm">OnCompletarClicked(Tarea) · OnEliminarClicked(Tarea)</span><div class="md">Cambian el estado a «Completado»/«Pendiente» o borran la tarea (con confirmación), usando <code>CambiarEstadoTareaAsync</code> y <code>EliminarTareaAsync</code>.</div></div>
<div class="metodo"><span class="mt">Pestañas</span><span class="mm">OnPendientesClicked / OnCompletadasClicked</span><div class="md">Alternan los colores de los botones de pestaña y refrescan la lista.</div></div>
<div class="metodo"><span class="mt">Modal</span><span class="mm">OnAgregarClicked / OnCancelarClicked / OnGuardarClicked</span><div class="md">Abre el formulario flotante para crear/editar una tarea (título obligatorio, descripción y fecha de vencimiento), validando y usando <code>CrearTareaAsync</code> o <code>ActualizarTareaAsync</code>.</div></div>
<div class="metodo"><span class="mt">Sincronización manual</span><span class="mm">OnSincronizarClicked(...)</span><div class="md">Comprueba conexión y sesión, desactiva el botón («Sincronizando...»), llama a <code>SyncService.SincronizarAsync()</code>, recarga y confirma con un mensaje.</div></div>
<p class="caja idea"><span class="titulo-caja">💡 Nota</span>El <code>LblDepuracion</code> es un texto amarillo en la esquina que muestra estado interno («esperando...», «tareas cargadas = N») muy útil mientras se desarrolla.</p>
`,
salud: `
<h2 class="titulo-nodo">💧 Salud.xaml + Salud.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>Salud</code> · hidratación, descanso visual y recordatorio de tareas</p>
<p>Pantalla con tres tarjetas. Cada una tiene su <b>switch</b> (encender/apagar recordatorio) y su <b>frecuencia</b> (cantidad + unidad: minutos/horas/días). Además registra el <b>progreso del día</b>: vasos de agua (meta 8) y descansos visuales.</p>

<h3>Constantes y métodos</h3>
<div class="metodo"><span class="mt">Constantes</span><span class="mm">MetaVasos = 8 · TipoAgua · TipoDescanso · TipoTareas</span><div class="md">La meta de 8 vasos al día y los tres tipos de recordatorios (coinciden con <code>RecordatorioScheduler</code>).</div></div>
<div class="metodo"><span class="mt">Ciclo de vida</span><span class="mm">OnAppearing() / OnDisappearing()</span><div class="md">Suscribe el evento de reinicio diario y carga los datos.</div></div>
<div class="metodo"><span class="mt">Carga</span><span class="mm">CargarDatosAsync()</span><div class="md">Trae los recordatorios (<code>ObtenerRecordatoriosAsync</code>) y rellena los switches y frecuencias de agua, descanso y tareas, además del switch «Suspender pantalla».</div></div>
<div class="metodo"><span class="mt">Ayudas de unidad</span><span class="mm">ConfigurarFrecuenciaUx(...) · IndiceUnidad(unidad) · UnidadDeIndice(indice) · LeyendaUnidad(indice, valor)</span><div class="md">Convierten entre la unidad elegida y su índice en el <code>Picker</code> (0=minutos, 1=horas, 2=días) y generan textos como «Cada 2 horas». Si el dato guardado era antiguo (solo minutos), se elige la unidad más natural automáticamente.</div></div>
<div class="metodo"><span class="mt">Vista</span><span class="mm">RefrescarVista()</span><div class="md">Actualiza la barra de progreso del agua (<code>vasosHoy / 8</code>), el porcentaje, los descansos del día y el estado del recordatorio de tareas.</div></div>
<div class="metodo"><span class="mt">Guardar</span><span class="mm">OnGuardarAguaClicked / OnGuardarDescansoClicked / OnGuardarTareasClicked → GuardarPreferencia(tipo, ...)</span><div class="md">
<ol>
  <li>Valida sesión y que la frecuencia sea un número mayor a 0.</li>
  <li>Guarda con <code>SupabaseService.GuardarRecordatorioAsync(...)</code>.</li>
  <li>Si se activó, pide permiso de notificaciones y (Android) permiso de alarmas exactas.</li>
  <li>Refresca el planificador (<code>RecordatorioScheduler.RefrescarAsync</code>) y recarga.</li>
</ol>
Para el descanso también se guarda el switch «Suspender pantalla» y, en Android, si la pantalla va a apagarse pide activar la app como <b>administrador del dispositivo</b>.</div></div>
<div class="metodo"><span class="mt">Contadores</span><span class="mm">OnMasVasoClicked / OnMenosVasoClicked / OnMasDescansoClicked / OnMenosDescansoClicked</span><div class="md">Suma o resta vasos y descansos sobre <code>ProgresoSalud</code> (nunca queda negativo gracias a <code>Math.Max(0, ...)</code>).</div></div>
<div class="metodo"><span class="mt">Switch</span><span class="mm">OnRecordatorioToggled(...)</span><div class="md">Al activar/desactivar un switch, actualiza la vista al instante.</div></div>
`,
ahorro: `
<h2 class="titulo-nodo">💰 Ahorro.xaml + Ahorro.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>Ahorro</code> · control de ingresos, gastos y saldo</p>
<p>Permite <b>registrar ingresos y gastos</b>, ver el saldo actual y el historial de movimientos (con opción de editar o eliminar). Incluye validación: <b>un gasto no puede superar el saldo actual</b>.</p>

<h3>Métodos</h3>
<div class="metodo"><span class="mt">Carga</span><span class="mm">CargarDatosAsync()</span><div class="md">Consulta saldo (<code>ObtenerSaldoAsync</code>) e historial (<code>ObtenerHistorialAsync</code>) y dibuja cada movimiento como una fila con color verde (+) o rojo (−), fecha, y botones Editar/Eliminar.</div></div>
<div class="metodo"><span class="mt">Registrar</span><span class="mm">OnIngresoClicked / OnGastoClicked → RegistrarAsync(tipo, ...)</span><div class="md">
<ol>
  <li>Valida sesión y que el monto sea un número mayor a 0.</li>
  <li>Normaliza el formato: quita los separadores de miles (<code>.Replace(",", "")</code>).</li>
  <li>Si es gasto, comprueba que <b>no supere el saldo</b> actual.</li>
  <li>Guarda con <code>SupabaseService.RegistrarMovimientoAsync(...)</code> y recarga.</li>
</ol></div></div>
<div class="metodo"><span class="mt">Editar</span><span class="mm">OnEditarMovimientoClicked(MovimientoFinanciero)</span><div class="md">Guía al usuario por 3 pasos con diálogos del sistema (<code>DisplayPromptAsync</code> / <code>DisplayActionSheet</code>): nuevo monto, nuevo tipo (Ingreso/Gasto) y descripción. Antes de guardar, <b>simula el saldo</b> resultante y bloquea el cambio si dejara el saldo negativo.</div></div>
<div class="metodo"><span class="mt">Eliminar</span><span class="mm">OnEliminarMovimientoClicked(MovimientoFinanciero)</span><div class="md">Pide confirmación y llama a <code>EliminarMovimientoAsync</code>. Importante: en este proyecto «eliminar» solo <b>oculta el movimiento del historial</b>; el saldo total no cambia.</div></div>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>El formato de moneda sigue la convención de El Salvador: punto para decimales (<code>1234.56</code>), y se muestran ceros así: <code>$1,234.56</code>.</p>
`,
password: `
<h2 class="titulo-nodo">🔑 Password.xaml + Password.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>Password</code> · gestor de contraseñas</p>
<p>Guarda las <b>credenciales de tus cuentas</b> (sitio web, usuario y clave). Ofrece lista, <b>búsqueda en vivo</b>, y un formulario para crear o editar credenciales. Las claves se <b>cifran</b> (hash) antes de guardarse.</p>

<h3>Métodos</h3>
<div class="metodo"><span class="mt">Carga</span><span class="mm">CargarContrasenasAsync()</span><div class="md">Trae las credenciales (<code>ObtenerContrasenasAsync</code>) y las dibuja con <code>MostrarContrasenas</code>: sitio, usuario y clave mostrada como <span>••••••••</span>, con botones Editar y Eliminar.</div></div>
<div class="metodo"><span class="mt">Búsqueda</span><span class="mm">OnBuscarChanged(object, TextChangedEventArgs)</span><div class="md">Cada vez que el usuario escribe en la barra, filtra en memoria por sitio web o usuario (comparación sin mayúsculas). Si se vacía, vuelve a mostrar todo.</div></div>
<div class="metodo"><span class="mt">Formulario</span><span class="mm">OnAgregarClicked · OnEditarClicked(Contrasena) · OnCancelarClicked · OnGuardarClicked</span><div class="md">Abren el modal para crear o editar. Al editar, deja la clave vacía y cambia la etiqueta a «Nueva clave (dejar vacío para mantener)»: si se guarda vacía, la clave no cambia.</div></div>
<div class="metodo"><span class="mt">Eliminar</span><span class="mm">OnEliminarClicked(Contrasena)</span><div class="md">Pide confirmación y usa <code>EliminarContrasenaAsync</code>.</div></div>
<p class="caja idea"><span class="titulo-caja">💡 Seguridad</span>Las claves se guardan con el <code>PasswordHasher</code> (PBKDF2 con sal): en la base de datos nunca se ve la contraseña real, solo su hash.</p>
`,
proposito: `
<h2 class="titulo-nodo">🎯 proposito.xaml + proposito.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>Proposito</code> · página informativa</p>
<p>Página estática que explica <b>qué es MyProfile y su propósito</b>. No tiene lógica más allá de botón para volver.</p>
<div class="metodo"><span class="mt">Manejador</span><span class="mm">OnVolverTapped(...)</span><div class="md">Navega hacia atrás con <code>Shell.Current.GoToAsync("..")</code>.</div></div>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Se define como una página normal y se registra su <b>ruta relativa</b> <code>"Proposito"</code> en <code>AppShell</code>.</p>
`,
bottomnav: `
<h2 class="titulo-nodo">🧱 BottomNavBar.xaml + BottomNavBar.xaml.cs</h2>
<p class="subtitulo-nodo">Componente <code>BottomNavBar</code> (ContentView) · barra de navegación inferior</p>
<p>Es un <b>componente reutilizable</b> (no una pantalla): una barra con 5 opciones (Dashboard, Tareas, Salud, Ahorro, Contraseñas). Su estado se controla con una <b>propiedad enlazable</b> (BindableProperty), una técnica que permite pasarle datos y recibe avisos cuando cambian.</p>

<h3>Métodos y propiedades</h3>
<div class="metodo"><span class="mt">Propiedad enlazable</span><span class="mm">SelectedTab (BindableProperty)</span><div class="md">Un número (0-4) que indica qué pestaña está activa. Cuando cambia, se ejecuta <code>UpdateSelectedTab()</code>.</div></div>
<div class="metodo"><span class="mt">Actualización visual</span><span class="mm">UpdateSelectedTab() · SetActive(Label, bool)</span><div class="md">Pinta en blanco la etiqueta de la pestaña activa y en gris las demás.</div></div>
<div class="metodo"><span class="mt">Navegación</span><span class="mm">OnTareasTapped · OnDashboardTapped · OnSaludTapped · OnAhorroTapped · OnPasswordTapped → NavigateTo(ruta)</span><div class="md"><code>NavigateTo</code> recorre el árbol de <code>Shell</code> buscando la ruta y cambia el <code>CurrentItem</code>, logrando cambiar de pestaña <b>sin recargar la navegación</b>.</div></div>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Este componente de momento no se usa dentro de las páginas (la navegación por pestañas la aporta el <code>TabBar</code> de <code>AppShell</code>), pero quedó listo como barra reutilizable.</p>
`,

/* ────────────────────────────────────────────────────────
   MODELS
   ──────────────────────────────────────────────────────── */
models: `
<h2 class="titulo-nodo">📂 Carpeta Models</h2>
<p class="subtitulo-nodo">Modelos de datos</p>
<p>Aquí viven las <b>clases que representan datos</b> (sin lógica de pantalla). Normalmente esas clases definen las tablas de la base de datos.</p>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>En este proyecto la mayor parte de modelos remotos (los que se sincronizan con Supabase) están definidos dentro de <code>SupabaseService.cs</code> usando atributos de <code>Supabase.Postgrest</code>. La carpeta <code>Models</code> contiene un modelo local de usuario.</p>
`,
"modelo-usuario": `
<h2 class="titulo-nodo">👤 Models/Usuario.cs</h2>
<p class="subtitulo-nodo">Clase <code>Usuario</code> · modelo de usuario (variante local)</p>
<p>Define el aspecto de la tabla <b>usuarios</b> tal y como la conoce la app. Los atributos (<code>[Table]</code>, <code>[Column]</code>) son <b>marcas</b> que le dicen a la librería cómo mapear la clase a la base de datos:</p>
<pre data-lang="C#"><code>[Table("usuarios")]
public class Usuario : BaseModel
{
    [PrimaryKey("id", false)]
    public int? Id { get; set; }

    [Column("correo")]
    public string Correo { get; set; } = "";

    [Column("contrasena")]
    public string Contrasena { get; set; } = "";

    [Column("created_at")]
    public DateTime? CreatedAt { get; set; }
}</code></pre>
<p class="caja cuidado"><span class="titulo-caja">⚠️ Para tu exposición</span><br/>Nota importante: este modelo se quedó en desuso. El que <b>sí se usa</b> en todo el programa es la clase <code>Usuario</code> declarada dentro de <code>SupabaseService.cs</code>, que apunta a la tabla <code>usuario</code> (con <code>id_usuario</code>, <code>nombre</code>, <code>correo</code>, <code>auth_user_id</code>). Es un detalle que demuestra que entiendes el código.</p>
<p>Haz clic en el nodo <b>Models</b> del árbol para ver más contexto.</p>
`,

/* ────────────────────────────────────────────────────────
   PLATAFORMAS
   ──────────────────────────────────────────────────────── */
platforms: `
<h2 class="titulo-nodo">📂 Carpeta Platforms</h2>
<p class="subtitulo-nodo">Código específico de cada sistema operativo</p>
<p>MAUI separa el código <b>multi-plataforma</b> (todo lo que está fuera de esta carpeta) del código <b>específico de cada sistema</b>. Aquí hay 4 subcarpetas: <b>Android</b>, <b>iOS</b>, <b>MacCatalyst</b> y <b>Windows</b>.</p>
<ul>
  <li><b>Android</b>: la actividad principal, la aplicación y el receptor que permite apagar la pantalla (admin de dispositivo).</li>
  <li><b>Windows</b>: registración de notificaciones y la <b>bandeja del sistema</b>.</li>
  <li><b>iOS / MacCatalyst</b>: el punto de entrada (<code>Program.cs</code>) y el delegado (<code>AppDelegate</code>), que conectan el arranque del sistema con <code>MauiProgram</code>.</li>
</ul>
<p class="caja idea"><span class="titulo-caja">💡 Ley</span>El proyecto compila un <b>único código</b> para todas las plataformas; las diferencias se resuelven con <b>compilación condicional</b> (<code>#if WINDOWS</code>, <code>#if ANDROID</code>) y archivos bajo <code>Platforms</code>.</p>
<p class="caja idea"><span class="titulo-caja">💡 Concepto</span>Las rutas de los contenedores <code>Windows</code>, <code>Android</code>, <code>iOS</code>… apuntan a <code>Platforms</code> porque el proyecto compila un <b>único código</b> para todas las plataformas: las diferencias se resuelven con <b>compilación condicional</b> (<code>#if WINDOWS</code>, <code>#if ANDROID</code>).</p>
`,
android: `
<h2 class="titulo-nodo">🤖 Carpeta Platforms/Android</h2>
<p class="subtitulo-nodo">Código específico de Android</p>
<p>Contiene los puntos de entrada de Android y la pieza clave para <b>apagar la pantalla</b> durante los descansos visuales.</p>
`,
mainactivity: `
<h2 class="titulo-nodo">▶️ MainActivity.cs</h2>
<p class="subtitulo-nodo">Clase <code>MainActivity</code> · la «ventana» de Android</p>
<p>Android necesita una <b>Activity</b> principal para arrancar una app. Esta clase hereda de <code>MauiAppCompatActivity</code> y se marca con atributos que indican que es el <b>punto de lanzamiento</b> (<code>MainLauncher = true</code>) y que la app maneja sola los cambios de pantalla/orientación (<code>ConfigurationChanges</code>).</p>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Está vacía de propósito: MAUI hace todo el trabajo; solo necesitamos que esta clase exista para que Android sepa por dónde empezar.</p>
`,
mainapplication: `
<h2 class="titulo-nodo">🗃️ MainApplication.cs</h2>
<p class="subtitulo-nodo">Clase <code>MainApplication</code> · la «aplicación» de Android</p>
<p>Hereda de <code>MauiApplication</code> y, en su método <code>CreateMauiApp()</code>, devuelve <code>MauiProgram.CreateMauiApp()</code>. Es el puente que le dice a Android: «todo lo que configuró MauiProgram es mi aplicación».</p>
`,
screenoff: `
<h2 class="titulo-nodo">📴 ScreenOffAdminReceiver.cs</h2>
<p class="subtitulo-nodo">Clase <code>ScreenOffAdminReceiver</code> · receptor de administrador de dispositivo</p>
<p>Para que la app pueda <b>apagar la pantalla</b> con <code>LockNow()</code>, Android exige que la app sea <b>administrador del dispositivo</b> (algo que el usuario aprueba en Ajustes). Esta clase registra un <b>BroadcastReceiver</b> especial (<code>DeviceAdminReceiver</code>) que habilita esa política:</p>
<pre data-lang="C#"><code>[BroadcastReceiver(Exported = true, Permission = "android.permission.BIND_DEVICE_ADMIN")]
[MetaData("android.app.device_admin", Resource = "@xml/device_admin")]
public class ScreenOffAdminReceiver : DeviceAdminReceiver { }</code></pre>
<p>El archivo <code>device_admin.xml</code> declara la política usada: <code>&lt;force-lock /&gt;</code> (forzar bloqueo de pantalla).</p>
<p class="caja idea"><span class="titulo-caja">💡 Cómo se usa</span><code>RecordatorioScheduler</code> comprueba <code>AdminDispositivoActivo</code> y <code>SolicitarActivarAdminDispositivo()</code> abre el panel de Android para activarlo; después puede llamar a <code>dpm.LockNow()</code>.</p>
`,
androidmanifest: `
<h2 class="titulo-nodo">📜 AndroidManifest.xml</h2>
<p class="subtitulo-nodo">Manifiesto de Android · permisos y declaración de la app</p>
<p>Este archivo declara qué <b>permisos</b> necesita la app en Android y cómo se ve (icono, nombre). Los permisos más relevantes:</p>
<ul>
  <li><code>INTERNET</code> y <code>ACCESS_NETWORK_STATE</code> — para hablar con Supabase y detectar conexión.</li>
  <li><code>POST_NOTIFICATIONS</code> — mostrar notificaciones.</li>
  <li><code>VIBRATE</code> — vibración en los avisos.</li>
  <li><code>WAKE_LOCK</code> — mantener despierto para los recordatorios.</li>
  <li><code>RECEIVE_BOOT_COMPLETED</code> — volver a programar recordatorios tras reiniciar el teléfono.</li>
  <li><code>SCHEDULE_EXACT_ALARM</code> y <code>USE_EXACT_ALARM</code> — alarmas exactas para avisos puntuales.</li>
</ul>
`,
androidres: `
<h2 class="titulo-nodo">📂 Resources (Android)</h2>
<p class="subtitulo-nodo">Recursos XML de Android</p>
<p></p>
`,
deviceadminxml: `
<h2 class="titulo-nodo">🇪 device_admin.xml</h2>
<p class="subtitulo-nodo">Políticas de administrador de dispositivo</p>
<p>Declara las capacidades que la app pide al convertirse en administrador del dispositivo:</p>
<pre data-lang="XML"><code>&lt;device-admin xmlns:android="http://schemas.android.com/apk/res/android"&gt;
    &lt;uses-policies&gt;
        &lt;force-lock /&gt;
    &lt;/uses-policies&gt;
&lt;/device-admin&gt;</code></pre>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span><code>force-lock</code> es la única política necesaria: permite bloquear/apagar la pantalla (el <code>DevicePolicyManager.LockNow()</code> de Android).</p>
`,
colorsxml: `
<h2 class="titulo-nodo">🎨 colors.xml</h2>
<p class="subtitulo-nodo">Colores base de Android</p>
<p>Define los colores morados del tema nativo de Android (<code>colorPrimary</code>, <code>colorPrimaryDark</code>, <code>colorAccent</code>). Se usan en barras del sistema y transiciones mientras arranca la app.</p>
`,
windows: `
<h2 class="titulo-nodo">🪟 Carpeta Platforms/Windows</h2>
<p class="subtitulo-nodo">Código específico de Windows</p>
<p>Dos piezas clave: el arranque WinUI (notificaciones) y la <b>bandeja del sistema</b>.</p>
`,
winapp: `
<h2 class="titulo-nodo">🪟 Windows/App.xaml + App.xaml.cs</h2>
<p class="subtitulo-nodo">Clase <code>App (Proyecto.WinUI)</code> · arranque de Windows</p>
<p>En Windows, MAUI corre sobre <b>WinUI 3</b>. Esta clase hereda de <code>MauiWinUIApplication</code> y hace dos cosas en su constructor:</p>
<ul>
  <li><code>AppNotificationManager.Default.Register()</code> — registra la app ante Windows para poder <b>mostrar toasts</b> (obligatorio en apps «unpackaged»).</li>
  <li>Se suscribe a <code>NotificationInvoked</code> — cuando el usuario pulsa un botón del toast («Suspender ahora» / «Cancelar»), se lee el argumento <code>"accion"</code> y se llama a <code>RecordatorioScheduler.EjecutarAccion(...)</code>.</li>
</ul>
<p>En <code>OnLaunched</code> configura la <b>bandeja del sistema</b> con <code>BandejaSistema.Configurar(...)</code>.</p>
`,
bandeja: `
<h2 class="titulo-nodo">🖥️ BandejaSistema.cs</h2>
<p class="subtitulo-nodo">Clase estática <code>BandejaSistema</code> · icono de bandeja de Windows</p>
<p>Una de las partes más «avanzadas» y vistosas para tu exposición. Logra que la app, al cerrar la ventana, <b>no se cierre</b>: queda oculta en la bandeja del sistema de Windows y sigue mostrando los recordatorios.</p>

<h3>Qué hace cada método</h3>
<div class="metodo"><span class="mt">Configuración</span><span class="mm">Configurar(Window ventana)</span><div class="md">Guarda la ventana, comprueba que no haya otra instancia (<code>EsPrimeraInstancia</code>), intercepta el botón Cerrar (la «X») con <code>AppWindow.Closing</code> para ocultar en vez de cerrar, crea el icono, registra el autoarranque y, si se abrió desde el inicio de Windows, empieza oculta.</div></div>
<div class="metodo"><span class="mt">Salir de verdad</span><span class="mm">Salir()</span><div class="md">Se usa desde el menú de la bandeja: marca <code>_saliendo = true</code>, libera el icono y llama a <code>Application.Current.Exit()</code>.</div></div>
<div class="metodo"><span class="mt">Visibilidad</span><span class="mm">Mostrar() · Ocultar()</span><div class="md">Muestran/ocultan la ventana con <code>AppWindow.Show()/Hide()</code> (más fiable que ocultar la Window). <code>Mostrar</code> también trae la ventana al frente con <code>SetForegroundWindow</code>.</div></div>
<div class="metodo"><span class="mt">Icono</span><span class="mm">CrearIcono() · ObtenerIcono()</span><div class="md">Crea el <code>TaskbarIcon</code> con un menú («Abrir Proyecto» / «Salir»), usando el icono del propio ejecutable y el paquete H.NotifyIcon. Desactiva el «Efficiency Mode» para no limitar la CPU.</div></div>
<div class="metodo"><span class="mt">Autoarranque</span><span class="mm">RegistrarAutoarranque() · EsArranqueAutomatico()</span><div class="md">Escribe en el registro de Windows (<code>HKCU\\...\\Run</code>) la entrada del programa con el argumento <code>--background</code>, para que empiece con el sistema y oculta en la bandeja.</div></div>
<div class="metodo"><span class="mt">Instancia única</span><span class="mm">EsPrimeraInstancia()</span><div class="md">Usa un <code>Mutex</code> con nombre: si otra copia de la app ya está abierta (oculta en bandeja), le avisa por un <code>EventWaitHandle</code> para que muestre su ventana y esta segunda se cierra.</div></div>
<div class="metodo"><span class="mt">Internos</span><span class="mm">MostrarAviso() · ComandoAccion (clase helper) · P/Invoke SetForegroundWindow</span><div class="md">Muestra un aviso la primera vez que la app se oculta; <code>ComandoAccion</code> convierte una acción en un <code>ICommand</code> (lo que necesita el icono); <code>SetForegroundWindow</code> es una llamada Windows importada con <code>DllImport</code>.</div></div>
<p class="caja idea"><span class="titulo-caja">💡 Para la exposición</span>Es un gran ejemplo de <b>cómo comunicarse con el sistema operativo</b>: registro de Windows, ventanas nativas y llamadas a funciones del sistema (P/Invoke).</p>
`,
ios: `
<h2 class="titulo-nodo">🍎 Carpeta Platforms/iOS</h2>
<p class="subtitulo-nodo">Código específico de iOS</p>
<p></p>
`,
iosappdelegate: `
<h2 class="titulo-nodo">🍏 iOS/AppDelegate.cs</h2>
<p class="subtitulo-nodo">Clase <code>AppDelegate</code> · delegado de iOS</p>
<p>iOS pide un <b>delegado de aplicación</b> (<code>MauiUIApplicationDelegate</code>) que conecta el arranque del sistema con MAUI. Su único trabajo: devolver la app construida por <code>MauiProgram.CreateMauiApp()</code>.</p>
`,
iosprogram: `
<h2 class="titulo-nodo">▶️ iOS/Program.cs</h2>
<p class="subtitulo-nodo">Clase <code>Program</code> · punto de entrada de iOS</p>
<p>El <code>Main</code> de iOS: <code>UIApplication.Main(args, null, typeof(AppDelegate))</code>. Entrega el control al ciclo de vida nativo de iOS con nuestro <code>AppDelegate</code>.</p>
`,
mac: `
<h2 class="titulo-nodo">🖥️ Carpeta Platforms/MacCatalyst</h2>
<p class="subtitulo-nodo">Código específico de macOS</p>
<p>Igual que iOS pero para macOS (la app se ejecuta como app de Mac).</p>
`,
macappdelegate: `
<h2 class="titulo-nodo">🍏 MacCatalyst/AppDelegate.cs</h2>
<p class="subtitulo-nodo">Clase <code>AppDelegate</code> · delegado de Mac</p>
<p>Equivalente al de iOS: hereda de <code>MauiUIApplicationDelegate</code> y devuelve <code>MauiProgram.CreateMauiApp()</code>.</p>
`,
macprogram: `
<h2 class="titulo-nodo">▶️ MacCatalyst/Program.cs</h2>
<p class="subtitulo-nodo">Clase <code>Program</code> · punto de entrada de Mac</p>
<p>Igual que en iOS: <code>UIApplication.Main(args, null, typeof(AppDelegate))</code>.</p>
`,

/* ────────────────────────────────────────────────────────
   RECURSOS
   ──────────────────────────────────────────────────────── */
resources: `
<h2 class="titulo-nodo">📂 Carpeta Resources</h2>
<p class="subtitulo-nodo">Recursos de la aplicación</p>
<p>Contiene los 6 subgrupos de recursos que usa la interfaz:</p>
<ul>
  <li><b>AppIcon</b> — el icono de la app (<code>logo.png</code>, <code>appicon.svg</code>).</li>
  <li><b>Fonts</b> — tipografías <code>OpenSans-Regular.ttf</code> y <code>OpenSans-Semibold.ttf</code>.</li>
  <li><b>Images</b> — imágenes y <b>SVG de iconos</b> (dashboard, tareas, salud, ahorro, contraseñas, logo).</li>
  <li><b>Splash</b> — la pantalla de bienvenida inicial.</li>
  <li><b>Styles</b> — colores y estilos globales (<code>Colors.xaml</code>, <code>Styles.xaml</code>).</li>
  <li><b>Raw</b> — archivos de contenido sin procesar.</li>
</ul>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>MAUI escala automáticamente los SVG de iconos para todas las densidades de pantalla gracias a la declaración <code>MauiImage</code> en <code>Proyecto.csproj</code>.</p>
`,
resourcesinfo: `
<h2 class="titulo-nodo">🖼️ Recursos visuales</h2>
<p class="subtitulo-nodo">Detalle de cada carpeta de recursos</p>
<table>
<tr><th>Carpeta</th><th>Archivos</th><th>Para qué se usa</th></tr>
<tr><td>AppIcon</td><td>appicon.svg, appiconfg.svg, logo.png, fondo.png</td><td>Icono de la aplicación en cada plataforma.</td></tr>
<tr><td>Fonts</td><td>OpenSans-Regular.ttf, OpenSans-Semibold.ttf</td><td>Tipografía global (registrada en MauiProgram).</td></tr>
<tr><td>Images</td><td>icon_*.svg, img_logo.png, ver_contra.png, dotnet_bot.png</td><td>Logos, iconos de pestañas y el ojito de «ver contraseña».</td></tr>
<tr><td>Splash</td><td>splash.png, splash.svg</td><td>Pantalla que se muestra mientras la app inicia.</td></tr>
<tr><td>Styles</td><td>Colors.xaml, Styles.xaml</td><td>Paleta de colores y estilos reutilizables de los controles.</td></tr>
<tr><td>Raw</td><td>AboutAssets.txt</td><td>Archivo de contenido sin procesar (serviría para datos embebidos).</td></tr>
</table>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Los iconos de pestañas llegan desde XAML con <code>Icon="icon_dashboard.png"</code> y MAUI encuentra el recurso porque se declaró en <code>MauiImage</code>.</p>
`,

/* ────────────────────────────────────────────────────────
   SERVICES — LÓGICA DE NEGOCIO
   ──────────────────────────────────────────────────────── */
services: `
<h2 class="titulo-nodo">📂 Carpeta Services</h2>
<p class="subtitulo-nodo">La lógica del programa (lo más importante)</p>
<p>Esta carpeta es el <b>cerebro</b> de la aplicación. Contiene 5 «servicios» (clases estáticas) que separan la lógica de la interfaz:</p>
<table>
<tr><th>Servicio</th><th>Responsabilidad</th></tr>
<tr><td><b>LocalDatabase.cs</b></td><td>Base de datos SQLite local (tablas, consultas, CRUD).</td></tr>
<tr><td><b>SupabaseService.cs</b></td><td>Conexión con la nube, login, registro, hash de contraseñas y operaciones de negocio.</td></tr>
<tr><td><b>SyncService.cs</b></td><td>Motor de sincronización local ↔ nube (push/pull).</td></tr>
<tr><td><b>RecordatorioScheduler.cs</b></td><td>Planificador de recordatorios (notificaciones + avisos en pantalla).</td></tr>
<tr><td><b>ProgresoSalud.cs</b></td><td>Contadores diarios (vasos y descansos) guardados en local.</td></tr>
</table>
<p class="caja idea"><span class="titulo-caja">💡 Patrón de diseño</span>Esto sigue la idea de separar <b>interfaz</b> (páginas XAML) de <b>lógica de negocio</b> (servicios): las páginas nunca escriben SQL; solo llaman métodos de los servicios. Así el código es ordenado y fácil de mantener.</p>
`,

localdb: `
<h2 class="titulo-nodo">🗄️ Services/LocalDatabase.cs</h2>
<p class="subtitulo-nodo">Base de datos SQLite local (offline-first)</p>
<p>Es la <b>fuente de verdad principal</b> de la app: <b>todas las lecturas</b> se resuelven aquí (funciona sin internet) y las escrituras se marcan como «pendientes» hasta que <code>SyncService</code> las sube a Supabase.</p>

<h3>Clases que contiene (7)</h3>
<table>
<tr><th>Clase</th><th>Qué es</th></tr>
<tr><td><code>SyncStatus</code></td><td>Constantes con los estados de sincronización: <code>Sincronizada = "synced"</code>, <code>Pendiente = "pending"</code>, <code>Eliminado = "deleted"</code>.</td></tr>
<tr><td><code>TareaOffline</code></td><td>Tabla <code>tarea_offline</code>: tareas con campos extra de sincronización.</td></tr>
<tr><td><code>MovimientoOffline</code></td><td>Tabla <code>movimiento_offline</code>: ingresos/gastos (incluye <code>Oculto</code>, para sacar del historial sin tocar el saldo).</td></tr>
<tr><td><code>ContrasenaOffline</code></td><td>Tabla <code>contrasena_offline</code>: credenciales con clave cifrada.</td></tr>
<tr><td><code>RecordatorioSaludOffline</code></td><td>Tabla <code>recordatorio_offline</code>: preferencias de recordatorios.</td></tr>
<tr><td><code>UsuarioOffline</code></td><td>Tabla <code>usuario_offline</code>: credenciales cacheadas para <b>iniciar sesión sin conexión</b>.</td></tr>
<tr><td><code>LocalDatabase</code></td><td>La clase de servicio estática con toda la lógica.</td></tr>
</table>
<p>Además hay una pequeña clase privada <code>ColumnaInfo</code> que sirve para leer las columnas de una tabla.</p>

<h3>Métodos principales de LocalDatabase</h3>
<div class="metodo"><span class="mt">Conexión</span><span class="mm">GetConexionAsync()</span><div class="md">Devuelve la conexión a SQLite. Como es <b>lenta de crear</b>, se guarda en una variable privada y se protege con un <code>SemaphoreSlim</code> para crear solo una vez (patrón «lazy singleton» con hilos seguros).</div></div>
<div class="metodo"><span class="mt">Creación y reparación</span><span class="mm">CrearConexionAsync() · RepararEsquemaAsync(conexion)</span><div class="md"><code>CrearConexionAsync</code> junta la ruta del archivo (<code>proyecto_offline.db3</code> dentro de los datos de la app), crea las 5 tablas y ejecuta «migraciones» (agrega columnas nuevas a bases antiguas con <code>ALTER TABLE</code>). <code>RepararEsquemaAsync</code> detecta tablas con el esquema desactualizado (por ej., columnas renombradas de instalaciones viejas) y las borra para que se recarguen.</div></div>
<div class="metodo"><span class="mt">Convención de IDs</span><span class="mm">IdInterfaz(serverId, idLocal) · EsIdLocal(id) · IdLocalDeInterfaz(id)</span><div class="md">Regla con la que la app distingue registros:
<ul>
  <li>Si el registro ya se sincronizó (<code>ServerId != null</code>), la interfaz ve el <b>id real de Supabase</b> (positivo).</li>
  <li>Si se creó sin internet (sin ServerId), se expone un <b>id local negativo</b> (-IdLocal) para poder editarlo/borrarlo sin depender del servidor.</li>
</ul></div></div>
<div class="metodo"><span class="mt">Sanación de datos</span><span class="mm">ReatribuirDuennoAsync(idAnterior, idNuevo)</span><div class="md">Cuando una sesión creada sin id de servidor («nominal») pasa a tener un id real tras un login en línea, mueve todas sus filas (<code>UPDATE ... SET IdUsuario = ?</code>) al dueño real para que no queden huérfanas.</div></div>
<div class="metodo"><span class="mt">Usuarios offline</span><span class="mm">ObtenerUsuarioPorCorreoAsync(correo) · GuardarCredencialesAsync(...)</span><div class="md">Buscan/guardan el usuario cacheado para poder iniciar sesión sin internet.</div></div>

<h4>CRUD de Tareas</h4>
<div class="metodo"><span class="mt">Consulta</span><span class="mm">ObtenerTareasAsync(idUsuario) · ObtenerTareaPorInterfazAsync(idUsuario, id)</span><div class="md">Devuelven las tareas de un usuario (las no eliminadas), ordenadas de la más nueva a la más vieja. La segunda resuelve el id por interfaz (negativo = local, positivo = de servidor).</div></div>
<div class="metodo"><span class="mt">Escritura</span><span class="mm">InsertarTareaPendienteAsync · ActualizarTareaPendienteAsync · MarcarTareaEliminadaAsync</span><div class="md">Crean/actualizan tareas marcándolas como <code>Pendiente</code> para que la sincronización las suba; marcan borradas sin eliminarlas físicamente (así <code>SyncService</code> puede borrarlas en la nube después).</div></div>
<div class="metodo"><span class="mt">Sincronización</span><span class="mm">TareasPorSyncStateAsync(idUsuario, estado) · MarcarTareaSincronizadaAsync(idLocal, serverId) · ActualizarTareaDesdeServidorAsync · BorrarTareaLocalAsync(idLocal)</span><div class="md">Filtran por estado, y una vez que la nube devolvió el id real, actualizan la fila local para «quedar al día» o la borran de plano.</div></div>

<h4>CRUD de Movimientos financieros</h4>
<div class="metodo"><span class="mt">Consulta</span><span class="mm">ObtenerMovimientosAsync · ObtenerHistorialAsync · ObtenerMovimientoPorInterfazAsync</span><div class="md"><code>ObtenerHistorialAsync</code> es igual al de movimientos pero además excluye los que tienen <code>Oculto == true</code>.</div></div>
<div class="metodo"><span class="mt">Ocultar</span><span class="mm">OcultarMovimientoAsync(movimiento)</span><div class="md">Pone <code>Oculto = true</code>: el movimiento sale del historial pero <b>el saldo calculado no cambia</b> (así se implementa «eliminar» en Ahorro).</div></div>
<div class="metodo"><span class="mt">Escritura y sync</span><span class="mm">InsertarMovimientoPendienteAsync · ActualizarMovimientoPendienteAsync · MovimientosPorSyncStateAsync · MarcarMovimientoSincronizadoAsync · ActualizarMovimientoDesdeServidorAsync · BorrarMovimientoLocalAsync</span><div class="md">Mismo patrón que las tareas, aplicado a movimientos.</div></div>

<h4>CRUD de Contraseñas</h4>
<div class="metodo"><span class="mt">Todo el CRUD</span><span class="mm">ObtenerContrasenasAsync · ObtenerContrasenaPorInterfazAsync · InsertarContrasenaPendienteAsync · ActualizarContrasenaPendienteAsync · MarcarContrasenaEliminadaAsync · ContrasenasPorSyncStateAsync · MarcarContrasenaSincronizadaAsync · ActualizarContrasenaDesdeServidorAsync · BorrarContrasenaLocalAsync</span><div class="md">El mismo esquema de tareas/movimientos: consultar, crear/editar (marcando pendiente) y eliminar (marcando eliminado) para la posterior sincronización.</div></div>

<h4>CRUD de Recordatorios de salud</h4>
<div class="metodo"><span class="mt">Consulta</span><span class="mm">ObtenerRecordatoriosAsync(idUsuario) · ObtenerRecordatorioPorTipoAsync(idUsuario, tipo)</span><div class="md">Devuelven los recordatorios del usuario o el de un tipo concreto (agua, descanso o tareas).</div></div>
<div class="metodo"><span class="mt">Guardar</span><span class="mm">GuardarRecordatorioPendienteAsync(recordatorio)</span><div class="md">Si ya existe un recordatorio de ese tipo, lo actualiza; si no, lo inserta.</div></div>
<div class="metodo"><span class="mt">Sync</span><span class="mm">RecordatoriosPorSyncStateAsync · MarcarRecordatorioSincronizadoAsync · ActualizarRecordatorioDesdeServidorAsync · MarcarRecordatorioEliminadoAsync · BorrarRecordatorioLocalAsync</span><div class="md">El mismo patrón de sincronización para los recordatorios.</div></div>
<p class="caja exito"><span class="titulo-caja">✅ Idea clave para tu exposición</span>«Offline-first» se demuestra aquí: la UI siempre escribe en SQLite y <b>nunca depende</b> de que haya internet para funcionar.</p>
`,

supabaseservice: `
<h2 class="titulo-nodo">☁️ Services/SupabaseService.cs</h2>
<p class="subtitulo-nodo">Conexión con la nube, autenticación y reglas de negocio</p>
<p>Este es el archivo más completo del proyecto. Contiene varias clases:</p>

<h3>Modelos remotos (los que viven en la nube)</h3>
<table>
<tr><th>Clase</th><th>Tabla</th><th>Campos principales</th></tr>
<tr><td><code>Usuario</code></td><td><code>usuario</code></td><td>id_usuario, nombre, correo, auth_user_id</td></tr>
<tr><td><code>MovimientoFinanciero</code></td><td><code>movimiento_financiero</code></td><td>id_movimiento, id_usuario, monto, tipo, descripcion, fecha</td></tr>
<tr><td><code>Contrasena</code></td><td><code>contrasenas</code></td><td>id_contrasena, id_usuario, sitio_web, usuario_cuenta, clave_cifrada</td></tr>
<tr><td><code>Tarea</code></td><td><code>tarea</code></td><td>id_tarea, id_usuario, titulo, descripcion, fecha_vencimiento, estado</td></tr>
<tr><td><code>RecordatorioSalud</code></td><td><code>recordatorio_salud</code></td><td>id_recordatorio, tipo, frecuencia_minutos/valor/unidad, activo</td></tr>
</table>

<h3>Clases de apoyo</h3>
<div class="metodo"><span class="mt">Estados de tarea</span><span class="mm">EstadoTarea.Normalizar(estado) · EstadoTarea.EsCompletado(estado)</span><div class="md">Normalizan el texto del estado: aceptan variantes («complet», «pend») y devuelven siempre «Completado» o «Pendiente».</div></div>
<div class="metodo"><span class="mt">Configuración</span><span class="mm">SupabaseConfig.Url · SupabaseConfig.AnonKey</span><div class="md">Constantes con la dirección del proyecto Supabase y la clave pública «anon».</div></div>
<div class="metodo"><span class="mt">Cifrado de contraseñas</span><span class="mm">PasswordHasher.Hash(contrasena) · PasswordHasher.Verify(contrasena, almacenada)</span><div class="md"><code>Hash</code> usa el algoritmo <b>PBKDF2</b> (<code>Rfc2898DeriveBytes</code>) con una <b>sal</b> aleatoria de 16 bytes y 100 000 iteraciones, y guarda <code>sal:hash</code> en Base64. <code>Verify</code> separa sal/hash, recalcula y compara en <b>tiempo constante</b> (<code>FixedTimeEquals</code>, evita ataques de temporización).</div></div>

<h3>La clase de servicio SupabaseService</h3>
<div class="metodo"><span class="mt">Sesión</span><span class="mm">UsuarioActual (propiedad) · EstablecerSesion(usuario) · CerrarSesion() · GuardarSesion() · RestaurarSesion()</span><div class="md"><code>UsuarioActual</code> guarda en memoria quién es el usuario logueado. Las credenciales de la sesión se guardan en <code>Preferences</code> (almacenamiento de clave-valor del dispositivo). <code>RestaurarSesion()</code> se llama al arrancar la app: si un id guardado es inválido, descarta la sesión.</div></div>
<div class="metodo"><span class="mt">Cliente</span><span class="mm">GetClientAsync() · CreateClientAsync()</span><div class="md">Crea (una sola vez) el objeto <code>Client</code> de Supabase con URL y clave, y lo inicializa. Se protege con <code>SemaphoreSlim</code> como la conexión de SQLite.</div></div>
<div class="metodo"><span class="mt">Inicio de sesión</span><span class="mm">LoginAsync(correo, contrasena)</span><div class="md">El flujo completo:
<ol>
  <li>Normaliza el correo (sin espacios, minúsculas).</li>
  <li><b>Intenta en línea</b> (<code>client.Auth.SignIn</code>) y resuelve la fila real del usuario.</li>
  <li>Si hubo sesión «nominal» sin id, sanea los datos (<code>RepararDatosLocalesAsync</code>) y cachea el hash para futuros logins offline.</li>
  <li>Si <b>la nube falla</b>, cae al modo offline: busca las credenciales cacheadas y verifica con <code>PasswordHasher.Verify</code>.</li>
  <li>Sin id de servidor, crea un <b>id nominal</b> derivado del correo (<code>ObtenerIdUsuarioNominal</code>).</li>
</ol></div></div>
<div class="metodo"><span class="mt">Login sin internet</span><span class="mm">ResolverUsuarioOnlineAsync(client, correo) · RepararDatosLocalesAsync(correo, idReal) · ObtenerIdUsuarioNominal(correo) · EsIdNominal(id)</span><div class="md">Resolver: primero busca por <code>auth_user_id</code>, luego por correo, y si la fila no existe ¡la crea! y la enlaza con el usuario de Auth. RepararDatos: mueve los datos del id nominal anterior (y de sesiones rotas con id 0) al id real. El id nominal es un hash del correo desplazado por un rango grande (1 000 000+) para no chocar con ids reales.</div></div>
<div class="metodo"><span class="mt">Registro</span><span class="mm">RegistrarAsync(nombre, correo, contrasena)</span><div class="md">Requiere conexión. Crea la cuenta en Supabase Auth (<code>client.Auth.SignUp</code>) pasando el nombre en los <i>metadata</i>. Si la librería no fijó la sesión automáticamente, hace un <code>SignIn</code> explícito con las credenciales nuevas. Resuelve la fila de usuario, repara datos, guarda el hash local y sincroniza. Traduce errores comunes a mensajes amigables («Ese correo ya está registrado», «El correo requiere confirmación»).</div></div>
<div class="metodo"><span class="mt">Ayuda</span><span class="mm">NormalizarCorreo(correo)</span><div class="md">Devuelve el correo recortado y en minúsculas.</div></div>

<h4>Operaciones de negocio</h4>
<div class="metodo"><span class="mt">Finanzas</span><span class="mm">ObtenerSaldoAsync() · ObtenerMovimientosAsync() · ObtenerHistorialAsync() · RegistrarMovimientoAsync(monto, tipo, descripcion) · EliminarMovimientoAsync(id) · ActualizarMovimientoAsync(id, monto, tipo, descripcion)</span><div class="md"><code>ObtenerSaldoAsync</code> suma los ingresos y resta los gastos del historial. El resto convierte las filas <b>locales</b> en objetos <code>MovimientoFinanciero</code> (remotos) usando <code>IdInterfaz</code>, o escribe en LocalDatabase marcando pendiente y dispara una sincronización si hay conexión. «Eliminar» solo oculta (ver LocalDatabase).</div></div>
<div class="metodo"><span class="mt">Contraseñas</span><span class="mm">ObtenerContrasenasAsync · CrearContrasenaAsync(sitio, usuario, clave) · ActualizarContrasenaAsync(...) · EliminarContrasenaAsync(id)</span><div class="md">CRUD completo. La clave se <b>cifra antes de guardar</b> con <code>PasswordHasher.Hash</code>.</div></div>
<div class="metodo"><span class="mt">Tareas</span><span class="mm">ObtenerTareasAsync · CrearTareaAsync(titulo, descripcion, fecha, estado) · ActualizarTareaAsync(...) · CambiarEstadoTareaAsync(id, estado) · EliminarTareaAsync(id)</span><div class="md">CRUD completo sobre LocalDatabase + sincronización. El estado se normaliza con <code>EstadoTarea</code>.</div></div>
<div class="metodo"><span class="mt">Recordatorios</span><span class="mm">ObtenerRecordatoriosAsync() · ResolverMinutos(valor, unidad) · GuardarRecordatorioAsync(tipo, valor, unidad, activo) · EliminarRecordatorioAsync(id)</span><div class="md"><code>ResolverMinutos</code> convierte «2 horas» → 120 minutos (o «1 día» → 1440). La unidad puede ser <code>min</code>, <code>h</code> u <code>hora</code>, <code>d</code> o <code>días</code>.</div></div>

<p class="caja exito"><span class="titulo-caja">✅ Para tu exposición</span>Este archivo demuestra: modelos con atributos, seguridad (hash), autenticación doble (online/offline), y el patrón de convertir datos locales en remotos.</p>
`,
syncservice: `
<h2 class="titulo-nodo">🔄 Services/SyncService.cs</h2>
<p class="subtitulo-nodo">Motor de sincronización local ↔ Supabase</p>
<p>Su única misión: <b>igualar la base local con la nube</b>. El algoritmo en cada tabla es el mismo y sigue dos fases:</p>
<div class="flow">
  <div class="paso"><b>PUSH</b><span>Sube filas pendientes y borradas a la nube</span></div>
  <div class="paso"><b>PULL</b><span>Baja los registros del servidor y los combina</span></div>
</div>

<h3>Métodos</h3>
<div class="metodo"><span class="mt">Conexión</span><span class="mm">Conectado (propiedad)</span><div class="md">Devuelve <code>true</code> si el dispositivo está conectado a internet (<code>Connectivity.Current.NetworkAccess == NetworkAccess.Internet</code>).</div></div>
<div class="metodo"><span class="mt">Sincronización general</span><span class="mm">SincronizarAsync()</span><div class="md">
<ol>
  <li>Si no hay conexión o no hay sesión con id real de servidor, se sale.</li>
  <li>Usa un <code>SemaphoreSlim</code> con tiempo de espera 0: si <b>ya hay una sincronización en curso</b>, no lanza otra (evita trabajo duplicado).</li>
  <li>Sincroniza cada tabla <b>por separado</b> con <code>EjecutarSeguroAsync</code>: si una falla, las demás siguen.</li>
</ol></div></div>
<div class="metodo"><span class="mt">Aislamiento de errores</span><span class="mm">EjecutarSeguroAsync(Func&lt;Task&gt;)</span><div class="md">Ejecuta la tarea y si lanza excepción la captura, la registra en la consola de depuración y <b>sigue con la siguiente tabla</b> (los cambios de esa tabla quedan pendientes para el próximo intento).</div></div>

<h4>El patrón para cada una de las 4 tablas</h4>
<div class="metodo"><span class="mt">Tareas</span><span class="mm">SincronizarTareasAsync(client, idUsuario) · TraerTareasAsync(client, idUsuario)</span><div class="md">
<b>PUSH</b>:
<ul>
  <li>Para cada tarea <code>pending</code>: si ya tiene <code>ServerId</code> hace un <code>UPDATE</code> (<code>Set(...).Update()</code>); si no, un <code>INSERT</code> y guarda el id devuelto con <code>MarcarTareaSincronizadaAsync</code>.</li>
  <li>Para cada tarea <code>deleted</code>: primero borra en la nube (si tenía ServerId) y luego la borra de la base local.</li>
</ul>
<b>PULL</b> (<code>TraerTareasAsync</code>):
<ul>
  <li>Descarga las tareas del servidor (<code>.Where(id_usuario).Get()</code>).</li>
  <li>Si el id remoto no existe localmente, la inserta; si existe, la actualiza con <code>ActualizarTareaDesdeServidorAsync</code>.</li>
  <li>Las locales sincronizadas que <b>ya no aparecen</b> en el servidor se borran.</li>
</ul></div></div>
<div class="metodo"><span class="mt">Movimientos</span><span class="mm">SincronizarMovimientosAsync · TraerMovimientosAsync</span><div class="md">Mismo patrón con <code>MovimientoFinanciero</code>/<code>MovimientoOffline</code>.</div></div>
<div class="metodo"><span class="mt">Contraseñas</span><span class="mm">SincronizarContrasenasAsync · TraerContrasenasAsync</span><div class="md">Mismo patrón con <code>Contrasena</code>/<code>ContrasenaOffline</code>.</div></div>
<div class="metodo"><span class="mt">Recordatorios</span><span class="mm">SincronizarRecordatoriosAsync · TraerRecordatoriosAsync</span><div class="md">Mismo patrón con <code>RecordatorioSalud</code>/<code>RecordatorioSaludOffline</code>.</div></div>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Cada <code>pedido</code> a Supabase usa el estilo de PostgREST: <code>client.From&lt;Tarea&gt;().Where(t =&gt; t.IdTarea == serverId).Set(...).Update()</code>.</p>
`,

recordatorioscheduler: `
<h2 class="titulo-nodo">⏰ Services/RecordatorioScheduler.cs</h2>
<p class="subtitulo-nodo">Planificador de recordatorios (híbrido)</p>
<p>Decide <b>cuándo y cómo</b> avisar al usuario. Usa dos mecanismos a la vez:</p>
<ul>
  <li><b>Notificaciones del sistema</b>: se programa una notificación para la próxima hora de aviso. Con la app cerrada, la lanza el propio sistema (Android/iOS/Mac).</li>
  <li><b>Avisos en pantalla</b>: un temporizador revisa cada 30 segundos si ya toca avisar y muestra un diálogo si la app está abierta.</li>
</ul>

<h3>Constantes</h3>
<p><code>TipoAgua = "agua"</code>, <code>TipoDescanso = "descanso"</code>, <code>TipoTareas = "tareas"</code> (los tres tipos), <code>UnidadMin/Hora/Dia</code>, e <code>AccionSuspender = 100</code> / <code>AccionCancelar = 101</code> (ids de los botones de la notificación de suspender pantalla).</p>

<h3>Métodos</h3>
<div class="metodo"><span class="mt">Preferencia</span><span class="mm">SuspenderPantalla (propiedad)</span><div class="md">Guarda en <code>Preferences</code> (solo en el dispositivo) si el aviso de descanso visual debe además apagar la pantalla.</div></div>
<div class="metodo"><span class="mt">Arranque</span><span class="mm">IniciarAsync()</span><div class="md">Evita iniciar dos veces (<code>_iniciado</code>). Si no hay sesión, sale. Crea un <b>temporizador de 30 segundos</b> que ejecuta <code>EvaluarAsync()</code>, lo arranca y hace una evaluación inmediata.</div></div>
<div class="metodo"><span class="mt">Detener</span><span class="mm">Detener()</span><div class="md">Detiene el temporizador, cancela la suspensión pendiente y cancela todas las notificaciones programadas (se usa al cerrar sesión).</div></div>
<div class="metodo"><span class="mt">Recarga</span><span class="mm">RefrescarAsync()</span><div class="md">Tras iniciar sesión o guardar preferencias, reevalúa (sin disparar avisos de golpe, con <code>onlyReSchedule = true</code>) y vuelve a programar las notificaciones.</div></div>
<div class="metodo"><span class="mt">Permisos</span><span class="mm">AsegurarPermisoAsync() · AsegurarAlarmasExactas()</span><div class="md">Piden permiso de notificaciones si está apagado. En Android, las <b>alarmas exactas</b> requieren un permiso especial que solo se pide al activar un recordatorio.</div></div>
<div class="metodo"><span class="mt">Acciones de botones</span><span class="mm">OnAccionNotificacion(e) · EjecutarAccion(actionId)</span><div class="md"><code>OnAccionNotificacion</code> se registra en <code>MauiProgram</code> para funcionar incluso con la app cerrada. <code>EjecutarAccion</code>: si la acción es «Suspender» (y no se hizo en los últimos 2 segundos) llama a <code>SuspenderSistema()</code>; si es «Cancelar», llama a <code>CancelarSuspension()</code>.</div></div>
<div class="metodo"><span class="mt">Intervalo</span><span class="mm">ObtenerIntervalo(RecordatorioSalud)</span><div class="md">Convierte «valor + unidad» en un <code>TimeSpan</code> real (usa <code>SupabaseService.ResolverMinutos</code>).</div></div>
<div class="metodo"><span class="mt">Evaluación</span><span class="mm">EvaluarAsync(onlyReSchedule) · EvaluarTipoAsync(...) · EvaluarTipoTareasAsync(...)</span><div class="md"><code>EvaluarAsync</code> carga los recordatorios y llama a los tres evaluadores. Cada evaluador:
<ol>
  <li>Si el recordatorio está desactivado/sin configurar, cancela la notificación.</li>
  <li>Si ya toca avisar (<code>LeDebeAvisar</code>: pasada la hora del último aviso + intervalo), muestra el aviso y guarda la nueva hora.</li>
  <li>En el primer inicio, fija la «ancla» para que los avisos salgan exactamente cada intervalo.</li>
  <li>Programa la próxima notificación del sistema.</li>
</ol>
El de tareas además <b>cuenta las tareas pendientes</b> y solo avisa si hay al menos una; el título cambia: «Tienes 1 tarea pendiente» o «Tienes N tareas pendientes».</div></div>
<div class="metodo"><span class="mt">Programar notificación</span><span class="mm">ProgramarProximaNotificacion(id, tipo, intervalo, titulo, mensaje, esSuspension)</span><div class="md">Calcula la próxima hora y crea un <code>NotificationRequest</code> con Schedule. En <b>Android</b> activa la repetición automática (<code>RepeatType</code> + <code>NotifyRepeatInterval</code>). En <b>Windows</b> no agenda nada: la app no puede mostrar notificaciones programadas con la ventana cerrada, así que el temporizador interno se encarga. Si la notificación es de «suspensión», adjunta la categoría con los botones.</div></div>
<div class="metodo"><span class="mt">Mostrar avisos</span><span class="mm">MostrarAsync(id, titulo, mensaje) · MostrarSuspensionAsync(id, titulo)</span><div class="md">Aseguran el permiso, lanzan la notificación (Windows usa su toast nativo <code>MostrarNotificacionWindows</code>) y, si la app está en primer plano, también muestran un diálogo (<code>DisplayAlert</code>).</div></div>
<div class="metodo"><span class="mt">Apagar pantalla</span><span class="mm">SuspenderSistema() · AdminDispositivoActivo (propiedad) · SolicitarActivarAdminDispositivo() · CancelarSuspension()</span><div class="md">En Windows usa la función del sistema <code>SetSuspendState</code> (P/Invoke sobre <code>powrprof.dll</code>) para <b>suspender la PC</b>; en Android usa <code>DevicePolicyManager.LockNow()</code> para <b>bloquear la pantalla</b> (requiere admin de dispositivo).</div></div>
<div class="metodo"><span class="mt">Windows (nativo)</span><span class="mm">MostrarNotificacionWindows · MostrarSuspensionWindows · HabilitarPrivilegioSuspension · SetSuspendState / OpenProcessToken / LookupPrivilegeValue / AdjustTokenPrivileges / CloseHandle</span><div class="md">Los relojes con <code>DllImport</code> llaman funciones del sistema operativo (Win32 API). <code>HabilitarPrivilegioSuspension</code> otorga el privilegio <code>SeShutdownPrivilege</code> al proceso para poder suspender la PC. <code>MostrarNotificacionWindows</code> construye un toast del Windows App SDK con <code>AppNotificationBuilder</code>.</div></div>
<div class="metodo"><span class="mt">Memoria del último aviso</span><span class="mm">ObtenerUltimo(tipo) · GuardarUltimo(tipo, fecha)</span><div class="md">Guardan/leen en <code>Preferences</code> la hora del último aviso de cada tipo.</div></div>
<p class="caja exito"><span class="titulo-caja">✅ Para tu exposición</span>Este es el fichero más «impresionante»: mezcla temporizadores, notificaciones con botones, funciones de sistema de Windows y administrador de dispositivo de Android.</p>
`,

progresosalud: `
<h2 class="titulo-nodo">📈 Services/ProgresoSalud.cs</h2>
<p class="subtitulo-nodo">Progreso diario de hidratación y descanso visual</p>
<p>Guarda los contadores del día (<b>vasos de agua</b> y <b>descansos visuales</b>) <b>solo en el dispositivo</b> usando <code>Preferences</code>, no en la base de datos (son datos personales del momento, sin necesidad de nube).</p>

<h3>Métodos</h3>
<div class="metodo"><span class="mt">Día actual</span><span class="mm">EsHoy() · IniciarDiaSiEsNecesario()</span><div class="md"><code>EsHoy</code> compara la fecha guardada (formato <code>yyyyMMdd</code>) con Hoy. <code>IniciarDiaSiEsNecesario</code> reinicia los contadores a 0 y dispara el evento <code>DiaReiniciado</code> cuando cambia el día.</div></div>
<div class="metodo"><span class="mt">Reinicio automático</span><span class="mm">IniciarAutoReinicioDiario()</span><div class="md">Crea un temporizador ligero (cada 30 segundos) que vigila el cambio de día <b>sin que el usuario haga nada</b>. Se invoca cuando la ventana se crea (<code>App.xaml.cs</code>).</div></div>
<div class="metodo"><span class="mt">Leer y sumar</span><span class="mm">VasosHoy() · DescansosHoy() · SumarVaso(delta) · SumarDescanso(delta)</span><div class="md">Devuelven los contadores o los modifican. <code>Sumar</code> nunca deja el valor en negativo gracias a <code>Math.Max(0, ...)</code>.</div></div>
<div class="metodo"><span class="mt">Evento</span><span class="mm">DiaReiniciado (evento)</span><div class="md">Las páginas (Dashboard y Salud) se suscriben para actualizar sus etiquetas al instante cuando cambia el día.</div></div>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Usar <code>Preferences</code> (un archivo clave-valor) para cosas pequeñas es más rápido y simple que SQLite. Esta clase demuestra cuándo <b>no</b> conviene la base de datos.</p>
`,

/* ────────────────────────────────────────────────────────
   BASE DE DATOS (SUPABASE)
   ──────────────────────────────────────────────────────── */
database: `
<h2 class="titulo-nodo">📁 Carpeta Database</h2>
<p class="subtitulo-nodo">Scripts SQL para configurar la base de datos en Supabase</p>
<p>Contiene los <b>guiones SQL</b> que se ejecutan en la consola de Supabase (SQL Editor) para crear/ajustar la base de datos de la nube. La app no los ejecuta sola: los aplica el desarrollador una vez.</p>
`,
fixrls: `
<h2 class="titulo-nodo">🛡️ fix_rls_registro.sql</h2>
<p class="subtitulo-nodo">Solución al problema de «Row Level Security» en la tabla usuario</p>
<p>Supabase activa por defecto la <b>RLS</b> (Row Level Security, seguridad a nivel de fila): sin políticas, <b>nadie</b> puede leer o escribir. Cuando el registro de usuarios fallaba, la causa era que la tabla <code>usuario</code> tenía RLS activada sin políticas.</p>
<p>Este script ofrece dos opciones:</p>
<ul>
  <li><b>Solución simple (recomendada en el propio script)</b>: apagar la RLS con <code>alter table public.usuario disable row level security;</code>.</li>
  <li><b>Alternativa segura</b>: crear las 4 políticas que permiten a cada usuario autenticado leer/crear/editar/borrar <b>solo su propia fila</b>, comparando <code>auth.uid() = auth_user_id</code>.</li>
</ul>
<p class="caja idea"><span class="titulo-caja">💡 Concepto RLS</span>La RLS es como el «portero» de cada fila de una tabla: decide quién puede entrar. <code>auth.uid()</code> es la clave del usuario autenticado, y <code>auth_user_id</code> es quién «es dueño» de la fila.</p>
`,
migracion: `
<h2 class="titulo-nodo">🔗 migracion_sesiones.sql</h2>
<p class="subtitulo-nodo">Enlazar usuarios antiguos con sus cuentas de Auth</p>
<p>Antes, la app guardaba usuarios con solo <code>correo</code> y <code>contrasena</code>. Al migrar a la autenticación real de Supabase (Auth) se añadió el campo <code>auth_user_id</code>. Este script <b>rellena</b> ese campo para los usuarios existentes:</p>
<pre data-lang="SQL"><code>UPDATE public.usuario u
SET auth_user_id = au.id
FROM auth.users au
WHERE au.email = u.correo
  AND u.auth_user_id IS NULL;</code></pre>
<p>Une cada fila de la tabla <code>usuario</code> con su cuenta en <code>auth.users</code> por el correo. Después ejecuta <b>consultas de diagnóstico</b> (SELECT) para comprobar que no hay duplicados ni cuentas sin enlazar. Es <b>idempotente</b>: se puede correr varias veces sin dañar nada.</p>
`,
saludsql: `
<h2 class="titulo-nodo">💧 recordatorio_salud.sql</h2>
<p class="subtitulo-nodo">Creación de la tabla de recordatorios con sus políticas RLS</p>
<p>Crea la tabla <code>recordatorio_salud</code> con: <code>id_recordatorio</code> (clave), <code>id_usuario</code> (dueño, con borrado en cascada), <code>tipo_recordatorio</code>, <code>frecuencia_minutos</code>, <code>frecuencia_valor</code>, <code>frecuencia_unidad</code> y <code>activo</code>. Añade una restricción <code>UNIQUE</code> para que cada usuario tenga <b>solo un recordatorio por tipo</b>, y crea las 4 políticas RLS que permiten a cada usuario gestionar únicamente sus propios recordatorios.</p>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>La política usa una subconsulta: <code>auth.uid() = (select auth_user_id from usuario where id_usuario = recordatorio_salud.id_usuario)</code>. Es decir: «puedes tocar tu fila si eres el dueño». ¿Ves cómo se relaciona con <code>fix_rls_registro.sql</code>?</p>
`,

/* ────────────────────────────────────────────────────────
   INSTALADOR / PUBLICACIÓN
   ──────────────────────────────────────────────────────── */
installer: `
<h2 class="titulo-nodo">📁 Carpeta installer</h2>
<p class="subtitulo-nodo">Instalador de Windows</p>
<p>Contiene el <b>script de Inno Setup</b> y el <b>instalador compilado</b> que genera. Crea un instalador clásico de Windows (wizard) que copia la app publicada, crea accesos directos y permite desinstalarla.</p>
`,
iss: `
<h2 class="titulo-nodo">📄 Proyecto.iss</h2>
<p class="subtitulo-nodo">Script de Inno Setup · las instrucciones del instalador</p>
<p>Inno Setup es un programa que genera instaladores de Windows a partir de un archivo de script (<code>.iss</code>). Es una «receta» en secciones:</p>
<table>
<tr><th>Sección</th><th>Qué hace</th></tr>
<tr><td><code>[Setup]</code></td><td>Datos generales: nombre, versión 1.3.0, carpeta de instalación (<code>{localappdata}Programs\Proyecto</code>), compresión lzma2, arquitectura x64, versión mínima de Windows 10.0.17763.</td></tr>
<tr><td><code>[Tasks]</code></td><td>Pregunta si crear un acceso directo en el escritorio.</td></tr>
<tr><td><code>[Files]</code></td><td>Copia todos los archivos de <code>..\publish\sc</code> (la app publicada) dentro de la carpeta de instalación, recursivamente.</td></tr>
<tr><td><code>[Icons]</code></td><td>Crea el acceso directo en el menú Inicio y (opcional) en el escritorio.</td></tr>
<tr><td><code>[Run]</code></td><td>Ofrece abrir la app al terminar la instalación.</td></tr>
<tr><td><code>[UninstallRun]</code></td><td>Al desinstalar, borra la entrada de autoarranque del registro (<code>HKCU\\...\\Run</code>).</td></tr>
</table>
<p class="caja idea"><span class="titulo-caja">💡 Para la exposición</span>El instalador toma los archivos ya compilados de la carpeta <code>publish</code>, así que el flujo completo fue: <b>compilar → publicar → Inno Setup → Setup.exe</b>.</p>
`,
exe: `
<h2 class="titulo-nodo">💿 Proyecto-Setup.exe</h2>
<p class="subtitulo-nodo">El instalador generado</p>
<p>Es el <b>resultado final</b> de Inno Setup: un ejecutable que el usuario final doble-clic, sigue el asistente e instala la aplicación en su PC. Fue el entregable de la versión de escritorio de Windows.</p>
`,
publish: `
<h2 class="titulo-nodo">📦 Carpeta publish</h2>
<p class="subtitulo-nodo">Salida de la publicación</p>
<p>Aquí está el resultado del comando <code>dotnet publish</code>: todas las <b>dlls y archivos finales</b> listos para ejecutar (la carpeta <code>sc</code> contiene la versión autosuficiente de Windows). No es código fuente: es el <b>producto compilado</b> que el instalador copia a la máquina del usuario.</p>
`,
publishinfo: `
<h2 class="titulo-nodo">📦 Contenido publicado (publish/sc)</h2>
<p class="subtitulo-nodo">Archivos compilados de la app</p>
<p>Encontrarás cientos de archivos: <code>Proyecto.dll</code>, <code>Proyecto.exe</code>, el runtime de .NET, librerías de MAUI/WinUI, y las carpetas con los <b>idiomas</b> (<code>es-ES</code>, <code>en-US</code>, etc.). Son los recursos internos de las plataformas y .NET.</p>
<p class="caja dato"><span class="titulo-caja">🔎 Dato</span>Como es una publicación <b>autosuficiente</b> (self-contained), incluye el propio .NET: el usuario final no necesita instalar nada más.</p>
`
};

/* ================= ESTADÍSTICAS =================
   Se calculan al cargar: sumamos las clases declaradas y
   contamos los bloques .metodo de todos los contenidos. */
const ESTADISTICAS = (() => {
  let clases = 0;
  const contar = (nodos) => {
    for (const n of nodos) {
      clases += n.clases || 0;
      if (n.hijos) contar(n.hijos);
    }
  };
  contar(ARBOL);
  let metodos = 0;
  for (const k in CONTENIDO) {
    const m = CONTENIDO[k].match(/<div class="metodo"/g);
    metodos += m ? m.length : 0;
  }
  let paquetes = 7;
  return { clases, metodos, paquetes };
})();