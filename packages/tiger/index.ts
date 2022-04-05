import installer from './defaults'
export * from '@tiger/components'
export * from '@tiger/constants'
export * from '@tiger/directives'
export * from '@tiger/hooks'
export * from '@tiger/tokens'
export { makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
