import { provideGlobalConfig } from '@element/hooks'
import { version } from './version'
import type { App, Plugin } from 'vue'

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

export const makeInstaller = (components: Plugin[] = []) => {
	const install = (app: App, options?: any) => {
		if (app[INSTALLED_KEY]) return

		app[INSTALLED_KEY] = true
		components.forEach((c) => app.use(c))

		if (options) provideGlobalConfig(options, app, true)
	}

	return {
		version,
		install
	}
}
