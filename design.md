# FUT STREET — Design System

Documento base de identidad visual para la web, redes y futuras piezas de la marca.

## 1. Esencia de marca

FUT STREET mezcla la cultura del fútbol con la energía del streetwear. La marca debe sentirse directa, urbana, competitiva y reconocible.

### Personalidad

- **Street:** nace en la calle y habla con un lenguaje visual contundente.
- **Futbolera:** referencias a camisetas, escudos, balones, números y cultura de club.
- **Propia:** diseños originales, sin apoyarse en marcas o equipos registrados.
- **Joven:** comunicación corta, visual y con ritmo.

### Idea principal

> Fútbol fuera del campo.

La ropa no es solo merchandising: es una forma de llevar el juego, la actitud y la identidad a cualquier sitio.

## 2. Logo principal

El logo oficial es:

`/FutStreetNoFondo.png`

Este archivo tiene el fondo transparente y debe ser el recurso principal para la cabecera, favicon adaptado, packaging, redes y etiquetas.

### Reglas de uso

- Mantener siempre la proporción original del logo.
- No deformarlo, inclinarlo ni cambiar sus colores.
- No colocarlo sobre fondos con demasiado ruido o poco contraste.
- Dejar un margen libre alrededor equivalente, como mínimo, al ancho de la letra `F` del logo.
- Para fondos oscuros, usar el PNG original con transparencia.
- Para fondos claros, colocar una base negra o una tarjeta oscura si el contorno pierde fuerza.

### Versiones recomendadas

1. **Logo completo:** para portada, packaging, Instagram y piezas principales.
2. **Logo reducido:** para footer, etiquetas y espacios pequeños. No reducirlo tanto que `FUT STREET` deje de leerse.
3. **Símbolo:** solo si se crea una versión oficial recortada del escudo; no improvisar un recorte en cada pantalla.

## 3. Paleta de color

La paleta sale directamente del logo: negro profundo, verde lima eléctrico y blanco roto. El color lima es el elemento más reconocible de la marca.

| Nombre | HEX | Uso |
| --- | --- | --- |
| **Street Black** | `#090A09` | Fondo principal, navegación, textos fuertes y botones |
| **Neon Lime** | `#C8FF00` | Color de marca, destacados, etiquetas y llamadas a la acción |
| **Off White** | `#F3F0E7` | Fondos claros y texto sobre negro |
| **Concrete** | `#A6A59D` | Texto secundario, bordes y estados desactivados |
| **Pitch Gray** | `#1B1D1B` | Superficies oscuras, tarjetas y bloques secundarios |
| **Alert Orange** | `#FF5A30` | Uso puntual para novedades, drops o avisos importantes |

### Proporción visual

- 60% **Off White** o fondos neutros.
- 25% **Street Black**.
- 10% **Neon Lime**.
- 5% de colores secundarios como naranja.

El lima debe destacar; no usarlo como fondo de toda la web ni en párrafos largos.

### Variables CSS

```css
:root {
  --color-black: #090A09;
  --color-lime: #C8FF00;
  --color-off-white: #F3F0E7;
  --color-concrete: #A6A59D;
  --color-pitch: #1B1D1B;
  --color-orange: #FF5A30;
}
```

## 4. Tipografía

### Titulares

Usar una sans serif pesada, condensada o geométrica. Debe transmitir fuerza y ocupar espacio.

Opciones recomendadas:

- **Archivo Black**
- **Bebas Neue**
- **Anton**
- **Arial Black** como fallback local

### Texto y navegación

Usar una sans serif limpia y legible:

- **Inter**
- **DM Sans**
- **Arial** como fallback

### Estilo tipográfico

- Titulares en mayúsculas o con contraste fuerte de tamaño.
- Tracking ligeramente cerrado en los titulares.
- Etiquetas y metadatos con mayúsculas, tamaño pequeño y espaciado amplio.
- No usar más de dos familias tipográficas en una misma pantalla.

## 5. Dirección visual

### Composición

- Mucho contraste entre bloques claros y negros.
- Bordes finos, retículas visibles y separadores horizontales.
- Grandes titulares con pocas palabras.
- Elementos inclinados o asimétricos con moderación.
- Sensación de póster, camiseta o cartel de partido.

### Recursos gráficos

Se pueden utilizar:

- Números de camiseta.
- Líneas de campo y círculos de balón.
- Etiquetas tipo `DROP 01`, `EST. 2025` o `DISEÑO PROPIO`.
- Texturas sutiles de hormigón, papel o serigrafía.
- Flechas diagonales y símbolos de movimiento.

Evitar:

- Escudos o nombres de equipos reales sin autorización.
- Fotografías de jugadores o competiciones protegidas.
- Exceso de efectos, degradados o colores diferentes al sistema.
- Imitar identidades visuales de clubes existentes.

## 6. Componentes web

### Botón principal

- Fondo: `Street Black`.
- Texto: `Off White`.
- Padding generoso y forma rectangular, no excesivamente redondeada.
- Flecha o indicador de movimiento al final.
- Hover: fondo `Neon Lime` y texto `Street Black`.

### Botón WhatsApp

- Verde de WhatsApp únicamente para acciones relacionadas con WhatsApp.
- Texto recomendado: **Consultar por WhatsApp**.
- Debe abrir una conversación con el nombre de la camiseta precargado.

### Tarjetas de producto

- Imagen o composición visual grande.
- Nombre y categoría debajo.
- Enlace `Ver ficha` alineado a la derecha.
- Etiquetas como `Novedad` o `Destacada` en lima, naranja o negro.
- La tarjeta completa debe ser clicable.

### Navegación

- Logo a la izquierda.
- Catálogo como entrada principal.
- En móvil, mantener una navegación simple y visible.
- El CTA `Ver camisetas` puede permanecer destacado en escritorio.

## 7. Espaciado y responsive

- Usar una retícula de 8 px: `8, 16, 24, 32, 48, 64, 96`.
- Contenido máximo recomendado: `1180 px`.
- Separar secciones con aire; la marca debe sentirse editorial, no apretada.
- En móvil, priorizar producto, nombre, tallas y WhatsApp.
- El logo completo puede reducirse, pero nunca debe competir visualmente con el nombre del producto.

## 8. Voz de marca

### Cómo hablamos

Frases cortas, seguras y con actitud. Español natural, directo y sin exagerar.

Ejemplos:

- `Juega a tu manera.`
- `Fútbol fuera del campo.`
- `Diseñado para la calle.`
- `Nueva colección.`
- `Consulta disponibilidad.`

### Cómo no hablamos

- No prometer envíos o stock que todavía no estén confirmados.
- No usar lenguaje agresivo contra otros equipos o marcas.
- No presentar réplicas como producto oficial.
- No saturar cada texto con jerga futbolera.

## 9. Checklist antes de publicar

- [ ] Se utiliza `FutStreetNoFondo.png` como logo oficial.
- [ ] El número de WhatsApp está actualizado.
- [ ] Cada producto tiene nombre, descripción, tallas y ficha clara.
- [ ] Las imágenes son propias o tienen licencia de uso.
- [ ] Las páginas legal, privacidad, cookies y devoluciones están completadas.
- [ ] La web se revisa en móvil antes de publicar.
- [ ] No aparecen logos, nombres o equipaciones de terceros sin autorización.

## 10. Redes sociales y lemas

### Perfiles oficiales

- Instagram: [@futstreetclothing](https://www.instagram.com/futstreetclothing/)
- TikTok: [@futstreet.clothing](https://www.tiktok.com/@futstreet.clothing)

Estos enlaces deben aparecer en el footer y pueden repetirse en la portada, especialmente cerca del bloque de contacto.

### Secciones por competición

El catálogo se organiza por **LaLiga**, **Premier League**, **Ligue 1**, **Bundesliga** y **Serie A**. La web utiliza identificadores propios de país (`ES`, `EN`, `FR`, `DE`, `IT`) en lugar de escudos oficiales. No descargar, copiar ni reutilizar logotipos de ligas o equipos sin licencia escrita.

### Lemas aprobados

- **Donde el fútbol se viste**
- **🔥 Camisetas que hablan fútbol**

El primer lema funciona como posicionamiento de marca. El segundo funciona como frase de campaña, descripción de redes o apoyo de la portada. Mantener la escritura y el emoji tal como aparecen aquí.
