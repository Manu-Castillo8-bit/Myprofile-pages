/* ============================================================
   MyProfile · Documentación — Lógica del explorador tipo VS
   Depende de content.js (ARBOL, CONTENIDO, ESTADISTICAS)
   ============================================================ */

var $arbol = document.getElementById("arbol");
var $contenido = document.getElementById("contenido");
var $migas = document.getElementById("migas");
var $buscar = document.getElementById("buscar");
var $btnColapsar = document.getElementById("btnColapsar");
var $statClases = document.getElementById("stat-clases");
var $statMetodos = document.getElementById("stat-metodos");
var $statPaquetes = document.getElementById("stat-paquetes");

/* ───────────── Estado ───────────── */
var abiertos = new Set();      // ids de carpetas expandidas
var seleccionado = null;       // id del nodo activo

/* Ruta (camino) de cada nodo desde la raíz */
var rutas = {};
(function calcularRutas(lista, cola) {
  for (var i = 0; i < lista.length; i++) {
    var n = lista[i];
    rutas[n.id] = cola.concat(n.id);
    if (n.hijos) calcularRutas(n.hijos, rutas[n.id]);
  }
})(ARBOL, []);

/* ───────────── Búsqueda de un nodo por id ───────────── */
function buscarNodo(id, lista) {
  lista = lista || ARBOL;
  for (var i = 0; i < lista.length; i++) {
    var n = lista[i];
    if (n.id === id) return n;
    if (n.hijos) {
      var r = buscarNodo(id, n.hijos);
      if (r) return r;
    }
  }
  return null;
}

/* ───────────── Resaltar coincidencias de búsqueda ───────────── */
function terminoBusqueda() {
  return $buscar.value.trim().toLowerCase();
}

function resaltar(texto) {
  var t = terminoBusqueda();
  if (!t) return texto;
  var idx = texto.toLowerCase().indexOf(t);
  if (idx < 0) return texto;
  var fin = idx + t.length;
  return texto.slice(0, idx) +
         '<mark class="resaltar">' + texto.slice(idx, fin) + '</mark>' +
         texto.slice(fin);
}

/* ───────────── Filtrado por búsqueda ───────────── */
function filtrar(lista, termino) {
  var salida = [];
  for (var i = 0; i < lista.length; i++) {
    var n = lista[i];
    var coincide = n.etiqueta.toLowerCase().indexOf(termino) >= 0;
    var hijos = null;
    if (n.hijos) {
      var h = filtrar(n.hijos, termino);
      if (h.length) hijos = h;
    }
    if (coincide || hijos) {
      salida.push({ id: n.id, etiqueta: n.etiqueta, ico: n.ico, tipo: n.tipo, clases: n.clases, hijos: hijos });
      if (n.hijos) abiertos.add(n.id);
    }
  }
  return salida;
}

/* ───────────── Dibujado del árbol ───────────── */
function construirArbol(nivel, lista) {
  var html = "";
  for (var i = 0; i < lista.length; i++) {
    var n = lista[i];
    var abierto = abiertos.has(n.id);
    var activo = n.id === seleccionado;

    html += '<div class="nodo" data-id="' + n.id + '">';
    html += '<div class="fila-nodo' + (abierto ? ' abierto' : '') + (activo ? ' activo' : '') + '">';
    html += '<span class="flecha">' + (n.hijos ? '▶' : '') + '</span>';
    html += '<span class="ico">' + n.ico + '</span>';
    html += '<span class="etiqueta">' + resaltar(n.etiqueta) + '<span class="tipo">' + n.tipo + '</span></span>';
    html += '</div>';
    if (n.hijos) {
      html += '<div class="hijos' + (abierto ? '' : ' oculto') + '">' + construirArbol(nivel + 1, n.hijos) + '</div>';
    }
    html += '</div>';
  }
  return html;
}

function renderArbol() {
  var t = terminoBusqueda();
  var datos = t ? filtrar(ARBOL, t) : ARBOL;
  if (!datos.length) {
    $arbol.innerHTML = '<p style="color:var(--texto2);font-size:12.5px;padding:12px;">Sin resultados para «' + $buscar.value + '»</p>';
    return;
  }
  $arbol.innerHTML = construirArbol(0, datos);
}

/* ───────────── Contenido del panel principal ───────────── */
function renderContenido(id) {
  var nodo = buscarNodo(id);
  var html = CONTENIDO[id];

  if (html === undefined) {
    html = contenidoGenerico(nodo);
  }

  $contenido.innerHTML = '<div class="doc" id="doc">' + html + '</div>';
  $contenido.scrollTop = 0;
}

function contenidoGenerico(nodo) {
  if (!nodo) {
    return '<p>Sin información para este nodo.</p>';
  }
  if (nodo.hijos) {
    var items = nodo.hijos.map(function (h) {
      return '<li>' + h.ico + ' <b>' + h.etiqueta + '</b> <span style="color:var(--texto2)">(' + h.tipo + ') · haz clic en el nodo</span></li>';
    }).join("");
    var cuantos = nodo.hijos.length;
    return '<h2 class="titulo-nodo">' + nodo.ico + ' ' + nodo.etiqueta + '</h2>' +
           '<p class="subtitulo-nodo">Carpeta del proyecto · haz clic en un elemento del árbol para ver su explicación</p>' +
           '<ul>' + items + '</ul>' +
           '<div class="caja dato"><span class="titulo-caja">🔎 Dato</span>' +
           'Esta carpeta contiene ' + cuantos + (cuantos === 1 ? ' elemento' : ' elementos') + '.</div>';
  }
  return '<h2 class="titulo-nodo">' + nodo.ico + ' ' + nodo.etiqueta + '</h2>' +
         '<p class="subtitulo-nodo">Nodo del proyecto</p>' +
         '<p>Este nodo no tiene aún una explicación detallada asociada.</p>';
}

/* ───────────── Migas de pan (breadcrumb) ───────────── */
function renderMigas(id) {
  var ruta = rutas[id] || [id];
  var html = "";
  for (var i = 0; i < ruta.length; i++) {
    var nodo = buscarNodo(ruta[i]);
    if (i === ruta.length - 1) {
      html += '<span class="cr-actual">' + nodo.etiqueta + '</span>';
    } else {
      html += '<a href="#" class="cr-padre" data-id="' + nodo.id + '">' + nodo.etiqueta + '</a>';
      html += '<span class="sep">/</span>';
    }
  }
  $migas.innerHTML = html;
}

/* ───────────── Selección de un nodo ───────────── */
function seleccionar(id) {
  seleccionado = id;
  if (rutas[id]) {
    /* expandir solo los ancestros (no el propio nodo) */
    for (var i = 0; i < rutas[id].length - 1; i++) {
      abiertos.add(rutas[id][i]);
    }
  }
  renderArbol();
  renderContenido(id);
  renderMigas(id);
}

/* ───────────── Expandir / contraer todo ───────────── */
function expandirTodo() {
  (function rec(lista) {
    for (var i = 0; i < lista.length; i++) {
      if (lista[i].hijos) {
        abiertos.add(lista[i].id);
        rec(lista[i].hijos);
      }
    }
  })(ARBOL);
}

/* ───────────── Clics en el árbol (delegación) ───────────── */
$arbol.addEventListener("click", function (e) {
  var fila = e.target.closest ? e.target.closest(".fila-nodo") : null;
  if (!fila) return;
  var contenedor = fila.parentNode;
  var id = contenedor.getAttribute("data-id");
  var nodo = buscarNodo(id);
  if (!nodo) return;
  if (nodo.hijos) {
    if (abiertos.has(id)) { abiertos.delete(id); }
    else { abiertos.add(id); }
  }
  seleccionar(id);
  e.preventDefault();
});

/* ───────────── Clics en las migas de pan ───────────── */
$migas.addEventListener("click", function (e) {
  var enlace = e.target.closest ? e.target.closest(".cr-padre") : null;
  if (!enlace) return;
  seleccionar(enlace.getAttribute("data-id"));
  e.preventDefault();
});

/* ───────────── Búsqueda en vivo ───────────── */
$buscar.addEventListener("input", function () {
  renderArbol();
});

/* ───────────── Botón contraer todo ───────────── */
$btnColapsar.addEventListener("click", function () {
  abiertos.clear();
  renderArbol();
});

/* ───────────── Estadísticas ───────────── */
$statClases.textContent = ESTADISTICAS.clases;
$statMetodos.textContent = ESTADISTICAS.metodos;
$statPaquetes.textContent = ESTADISTICAS.paquetes;

/* ───────────── Arranque ───────────── */
expandirTodo();
seleccionar("resumen");