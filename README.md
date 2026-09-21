# Asociación El Granero

Web estática de la Asociación El Granero, preparada para publicarse gratis con GitHub Pages.

## Estructura

```text
.
├── index.html
├── styles.css
├── script.js
├── 404.html
├── .nojekyll
├── assets/
│   └── img/
└── .github/
    └── workflows/
        └── pages.yml
```

## Cómo publicarla gratis

1. Crea un repositorio nuevo en GitHub.
2. Ponle, por ejemplo, `asociacion-el-granero`.
3. Sube todos los archivos de esta carpeta.
4. Asegúrate de que la rama principal se llama `main`.
5. En GitHub entra en:
   `Settings > Pages`
6. En `Build and deployment > Source`, selecciona:
   `GitHub Actions`
7. Haz un commit o ejecuta manualmente el workflow desde:
   `Actions > Deploy to GitHub Pages`
8. Cuando termine, GitHub mostrará la URL pública.

La dirección será normalmente:

`https://TU-USUARIO.github.io/asociacion-el-granero/`

## Editar contenido

La mayor parte del contenido está en `index.html`.

Puedes cambiar:

- nombre de la asociación;
- textos;
- eventos;
- noticias;
- rifas;
- correo;
- teléfono;
- Instagram;
- fotos.

## Añadir fotografías

Guarda las fotos dentro de:

`assets/img/`

Por ejemplo:

`assets/img/fiestas-2026.jpg`

Y sustituye un bloque de galería en `index.html` por:

```html
<img src="assets/img/fiestas-2026.jpg" alt="Fiestas de 2026">
```

## Dominio propio

Más adelante puedes usar un dominio como:

`asociacionelgranero.es`

sin cambiar de hosting. GitHub Pages seguirá siendo gratuito y solo pagarías el dominio.

Cuando tengas el dominio, añádelo en:

`Settings > Pages > Custom domain`

## Recomendaciones antes de publicar

- Sustituye el email y teléfono de ejemplo.
- Añade las redes sociales reales.
- Añade vuestro logo si tenéis uno.
- Revisa fotografías y permisos de publicación.
- Si añades formularios o recopilas datos personales, prepara el aviso de privacidad correspondiente.
