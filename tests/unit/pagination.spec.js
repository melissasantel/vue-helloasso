import { shallowMount } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'

const factory = (props) => {
  return shallowMount(Pagination, {
    propsData:{
      totalPages: 2,
      perPage: 6,
      currentPage: 1,
      ...props
    } 
  })
}

describe('BasePagination.vue', () => {
  test('Check required props', () => {
    expect(Pagination.props.perPage.required).toBe(true)
  })

  test('Number of button', () => {
    const wrapper = factory()
    expect(wrapper.findAll('button').length).toBe(6)
  })
})