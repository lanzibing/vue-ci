import { withInstall } from '@element/utils'

import HelloWorld from './src/HelloWorld.vue'

export const ElAlert = withInstall(HelloWorld)
export default HelloWorld

export * from './src/HelloWorld.vue'
