//Imports
import { shallowMount } from '@vue/test-utils'
import DataTableCell from '../src/components/DataTableCell'
import ColumnNotFoundException from '../src/exceptions/ColumnNotFoundException';

describe('Data Table Cell', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'test',
                },
                name: 'name'
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('can be mounted with correct prop values', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'test',
                },
                name: 'name'
            }
        });

        expect(wrapper.props().value.name).toBe('test');
        expect(wrapper.props().name).toBe('name');
    });

    test('can be mounted with a default value', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'test',
                },
                name: 'name'
            }
        });

        expect(wrapper.text()).toBe('test');
    });

    test('can throw no column found exception', () => {
        
        try {
            shallowMount(DataTableCell);
        }
        catch(error) {
            expect(error).toBeInstanceOf(ColumnNotFoundException);
        }
    });

    test('can tranform values', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'james',
                },
                name: 'name',
                transform: (row) => { return row.data.name.charAt(0).toUpperCase() + row.data.name.slice(1) }
            }
        });

        expect(wrapper.text()).toBe('James');
    });
});