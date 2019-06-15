import { shallowMount } from '@vue/test-utils'
import DataTableFilters from '../components/DataTableFilters'

describe('Data Table Filters', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(DataTableFilters, {
            propsData: {
              tableData: {},
              perPage: [],
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy()
    });
});