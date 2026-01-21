function showHelp(availableTypes) {
  console.log(`
Auto Organize CLI

Uso:
  auto-organize [opciones]

Opciones:
  --dry-run           Muestra un preview sin hacer cambios
  --only <type>       Organiza solo un tipo específico
  --exclude <type>    Excluye un tipo de la organización
  --help              Muestra esta ayuda

Tipos disponibles:
  ${availableTypes.join(', ')}

Ejemplos:
  auto-organize --dry-run
  auto-organize --only images
  auto-organize --exclude archives
`);
}

module.exports = { showHelp };
