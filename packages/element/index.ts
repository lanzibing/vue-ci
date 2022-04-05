import installer from './defaults'
export * from '@element/components'
export * from '@element/constants'
export * from '@element/directives'
export * from '@element/hooks'
export { makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
