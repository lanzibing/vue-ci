import type { configProviderProps } from '@tiger/components/config-provider'
import type { ExtractPropTypes, InjectionKey, Ref } from 'vue'

export type ConfigProviderContext = Partial<ExtractPropTypes<typeof configProviderProps>>

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol()
