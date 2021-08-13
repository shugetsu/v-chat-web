/**
 * @description 设置 css 变量
 * @param {string} property
 * @param {string} value
 * @param {HTMLElement} dom
 * @return {void}
 */
export function setCssVars(property: string, value: string, dom: HTMLElement = document.documentElement): void {
  dom.style.setProperty(property, value)
}
