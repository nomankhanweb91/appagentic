/**
 * Resolves static asset paths safely whether deployed at root domain,
 * custom domain, or GitHub Pages sub-directory.
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  // Ensure exactly one slash between base and path if base doesn't end with slash
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
}
