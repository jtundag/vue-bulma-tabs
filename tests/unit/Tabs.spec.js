import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { Tabs, Tab } from '@/main'

describe('Tabs.vue', () => {
	it('should render tabs component', () => {
		const wrapper = shallowMount(Tabs)
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	it('should be vertical', () => {
		const wrapper = shallowMount(Tabs, {
			propsData: {
				orientation: 'vertical'
			}
		})

		expect(wrapper.classes()).toContain('vertical')
	})

	it('should be horizontal', () => {
		const wrapper = shallowMount(Tabs)

		expect(wrapper.classes()).toContain('horizontal')
	})
})