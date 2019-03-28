import { shallowMount } from '@vue/test-utils'
import Tabs from '@/components/Tabs.vue'

describe('Tabs.vue', () => {
	it('renders tabs component', () => {
		const wrapper = shallowMount(Tabs)
		expect(wrapper.isVueInstance()).toBeTruthy()
	})
})
