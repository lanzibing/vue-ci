import { buildProps, definePropType } from '@tiger/utils'
import type { ExtractPropTypes } from 'vue'
import type { ZIndexProperty } from 'csstype'
import type Affix from './affix.vue'

export const affixProps = buildProps({
	zIndex: {
		type: definePropType<ZIndexProperty>([Number, String]),
		default: 100
	},
	target: {
		type: String,
		default: ''
	},
	offset: {
		type: Number,
		default: 0
	},
	position: {
		type: String,
		values: ['top', 'bottom'],
		default: 'top'
	}
} as const)
export type AffixProps = ExtractPropTypes<typeof affixProps>

export const affixEmits = {
	scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) =>
		typeof scrollTop === 'number' && typeof fixed === 'boolean',
	change: (fixed: boolean) => typeof fixed === 'boolean'
}
export type AffixEmits = typeof affixEmits

export type AffixInstance = InstanceType<typeof Affix>
