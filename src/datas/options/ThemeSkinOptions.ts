/**
 * @date 2021-08-17 11:35:13
 * @lastEditTime 2021-09-02 15:57:31
 * @description 主题皮肤
 * @filePath /src/datas/options/ThemeSkinOptions.ts
 */

import { ThemeSkinEnum } from '../enums/ThemeSkinEnum'
import { getAssetPath } from '/@/utils/helpers/getAssetPath'
import { tKey } from '/@/utils/helpers/tKey'

interface ThemeSkinOption {
  label: string
  value: ThemeSkinEnum
  image: string
}

export const ThemeSkinOptions: ThemeSkinOption[] = [
  {
    label: tKey('Datas.Options.ThemeSkinOptions.Default'),
    value: ThemeSkinEnum.DEFAULT,
    image: getAssetPath('common/images/components/application/default.png')
  },
  {
    label: tKey('Datas.Options.ThemeSkinOptions.Slime'),
    value: ThemeSkinEnum.SLIME,
    image: getAssetPath('common/images/components/application/slime.png')
  }
]
