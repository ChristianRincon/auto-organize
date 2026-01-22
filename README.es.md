# Auto Organize CLI

Leer en: [Inglés](README.md) | **Español** 

<br>

Una herramienta de línea de comandos (CLI) para **organizar automáticamente archivos** en cualquier carpeta del sistema.

<br>

## ¿Qué problema resuelve?

Cuando trabajamos con carpetas que acumulan archivos (Descargas, Escritorio, proyectos, etc), el orden se suele alterar y vemos:

* Archivos mezclados por tipo.
* Pérdida de tiempo clasificando los archivos manualmente.
* Movemos o borramos archivos incorrectos.

<br>

> **Auto Organize CLI** automatiza y corrige ese proceso.

<br>

## Características principales

* Organización automática por tipo de archivo (clasificacion por extensión).
* Modo simulación (`--dry-run`) para previsualizar.
* Filtros por tipo (`--only`, `--exclude`).
* Funciona en **Windows, macOS y Linux**.

<br>

## Instalación

Requiere **Node.js >= 16**

> [Descarga Node aquí](https://nodejs.org/es/download) 

### Opción 1: Uso sin instalación (Para uso puntual)
```bash
npx auto-organize
```

### Opción 2: Instalación Global (Para uso continuo)
```bash
npm install -g auto-organize
```

<br>

## Uso básico

Ubicate en cualquier carpeta del sistema. Por ejemplo '/descargas'

```bash
cd users/descargas
```

y ejecuta:

```bash
auto-organize
```

Esto, dependiendo del tipo de archivos presentes, creará carpetas como:

```txt
Images/
Documents/
Audio/
Video/
Archives/
Others/
```

y clasificará los archivos en la carpeta correspondiente.

```txt
foto.jpg -> Images/

documento.pdf -> Documents/ 

canción.mp3 -> Audio/ 

video.mp4 -> Video/ 

archivo.rar -> Archives/ 

config.json -> Others/ 
```

<br>

## Modo simulación (Dry Run)

Antes de ejecutar cambios reales, se puede previsualizar si la clasificación es correcta:

```bash
auto-organize --dry-run
```

Salida de ejemplo:

```txt
foto.jpg -> Images/
contrato.pdf -> Documents/
song.mp3 -> Audio/
```

<br>

## Configuraciones disponibles (flags)

### `--only <type>`

Organiza **solo** un tipo específico de archivo.

```bash
auto-organize --only images
```

---

### `--exclude <type>`

Excluye un tipo de archivo de la organización.

```bash
auto-organize --exclude archives
```

---

### `--help`

Muestra una guía completa y los tipos disponibles.

```bash
auto-organize --help
```

<br>

## Tipos soportados

* images
* documents
* spreadsheets
* presentations
* archives
* audio
* video
* others

<br>

## Casos típicos de uso

* Organizar la carpeta de Descargas.
* Limpieza rápida del Escritorio.
* Automatizar la clasificación de archivos de un proyecto (por ejemplo la carpeta '/public').

<br>

## Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Realiza un fork del proyecto.
2. Crea una rama con tu feature: `git checkout -b feature/{tu-feature}`
3. Haz commit de tus cambios: `git commit -m 'Add some feature'`
4. Haz push a la rama: `git push origin feature/{tu-feature}`
5. Abre un Pull Request.

<br>

## Licencia

* MIT

<br>

## Autor

* LinkedIn: https://www.linkedin.com/in/christian-math%C3%ADas-rinc%C3%B3n-037a90297/

* GitHub: https://github.com/ChristianRincon

