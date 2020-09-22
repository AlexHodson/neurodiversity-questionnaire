import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import CustomSelect from './CustomSelect'

configure({ 'adapter': new Adapter() })

const callback = jest.fn()

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description contains the automated test to verify the custom select component functionality
 */
describe('Custom Select Test', () => {
	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description renders and returns the {@link CustomSelect} component
	 * @param label the label prop to be set
	 * @param placeholder the placeholder prop to be set
	 * @return {RenderResult} the render result
	 */
	const renderComponent = (label, placeholder) => render((
		<CustomSelect
			state={null}
			options={[
				{ 'value': 'option-1', 'label': 'Option 1' },
				{ 'value': 'option-2', 'label': 'Option 2' }
			]}
			handleChange={callback}
			label={label}
			placeholder={placeholder}
		/>
	))

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description verifies the {@link CustomSelect} component can be rendered without any errors
	 */
	it('should render without errors', () => {
		const { getByText } = renderComponent('Test Label', 'Test Placeholder')

		const placeholder = getByText('Test Placeholder')

		expect(placeholder).toBeTruthy()
	})

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description verifies the {@link CustomSelect} component can be rendered with a set placeholder
	 */
	test('renders the custom select component with the correct placeholder', () => {
		const { getByText } = renderComponent('Test Label', 'Custom Placeholder')

		const placeholder = getByText('Custom Placeholder')

		expect(placeholder).toBeTruthy()
	})

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description verifies the {@link CustomSelect} component can be rendered with a set label
	 */
	test('renders the custom select component with the correct label', () => {
		const { getByText } = renderComponent('Test Label', 'Custom Placeholder')

		const placeholder = getByText('Test Label')

		expect(placeholder).toBeTruthy()
	})

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description verifies the {@link CustomSelect} component can be rendered with a dedicated callback method
	 */
	test('renders the custom select component with a working callback for when an option is select', () => {
		const expected = 1
		const { container, getByText } = renderComponent('Test Label', 'Test Placeholder')

		fireEvent.focus(container.querySelector('input'))
		fireEvent.keyDown(container.querySelector('input'), { 'key': 'ArrowDown', 'code': 40 })
		fireEvent.click(getByText('Option 1'))

		expect(callback).toHaveBeenCalledTimes(expected)
	})
})
