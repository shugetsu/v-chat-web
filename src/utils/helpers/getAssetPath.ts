const assets = import.meta.globEager(`/src/assets/**`)

/**
 * @description 获取资源路径
 * @param {string} path
 * @return {string}
 */
export function getAssetPath(path: string): string {
  const pathKey = `/src/assets/${path}`.replaceAll('//', '/')
  const assetPath = assets[pathKey]?.default ?? ''
  return assetPath as unknown as string
}
