import { Logger } from './Logger'
import { createAppEnvConfigService } from '/%/utils'

const appEnv = createAppEnvConfigService()

/**
 * @description 创建日志
 * @param {string[]} modules
 * @return {Logger}
 */
export function createLogger(...modules: string[]): Logger {
  const level = appEnv.get('VITE_LOGGER_LEVEL')
  const namespace = appEnv.get('VITE_NAMESPACE')
  const fullNamespace = modules.reduce((modules, module) => `${modules}/${module}`, namespace)
  const logger = new Logger(`[${fullNamespace}]:`).setLevel(level)
  return logger
}
