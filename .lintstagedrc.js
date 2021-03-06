/**
 * @date 2021-07-27 11:32:07
 * @lastEditTime 2021-07-27 11:33:55
 * @description lint-staged 配置
 * @filePath /.lintstagedrc.js
 * @see https://github.com/okonet/lint-staged
 */

module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write --parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
}
