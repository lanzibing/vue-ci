import { computed, defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, fn, it, vi } from 'vitest'
import { debugWarn } from '@tiger/utils'
import { useDeprecated } from '../use-deprecated'

const AXIOM = 'Rem is the best girl'

vi.mock('@tiger/utils/error', async () => {
	return {
		...(await vi.importActual<any>('@tiger/utils/error')),
		debugWarn: fn()
	}
})

const DummyComponent = defineComponent({
	props: {
		shouldWarn: Boolean
	},
	setup(props) {
		useDeprecated(
			{
				from: 'oldApi',
				replacement: 'newApi',
				scope: 'dummyComponent',
				version: 'some version',
				ref: ''
			},
			computed(() => props.shouldWarn)
		)
		return () => AXIOM
	}
})

describe('useDeprecated', () => {
	afterEach(() => {
		vi.restoreAllMocks()
	})

	it('should warn when condition is true', async () => {
		mount(DummyComponent, {
			props: {
				shouldWarn: true
			}
		})
		await nextTick()
		expect(debugWarn).toHaveBeenCalled()
	})

	it('should not warn when condition is false', async () => {
		mount(DummyComponent)
		await nextTick()
		expect(debugWarn).not.toHaveBeenCalled()
	})
})
