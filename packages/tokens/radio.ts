import type { RadioGroupProps } from '@tiger/components'
import type { InjectionKey } from 'vue'

export interface RadioGroupContext extends RadioGroupProps {
	changeEvent: (val: RadioGroupProps['modelValue']) => void
}

export const radioGroupKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupKey')
