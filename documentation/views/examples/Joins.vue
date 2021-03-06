<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">
                    Table Joins, Filters &amp; Searching
                </h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <information-alert>
            For more complex filtering, it is suggested to use the query builder as you are able to make cross table queries and searches in only a single call to the database.
            This will also provide you with the most control over how data is selected and searched upon.
        </information-alert>

        <div v-show="code">

            <pre>
                <joins-php-markdown>
                </joins-php-markdown>
            </pre>

            <information-alert>
                You will also need to add an additional attribute to each column as <code>columnName</code> to any column names that have been changed. This will be sent to the backend for filtering and searching. It is required you prefix these values with their table name where Integrity constraint violations may be present due to duplicated column names.
            </information-alert>

            <pre>
                <joins-js-markdown>
                </joins-js-markdown>
            </pre>
        </div>

        <data-table
            v-show="!code"
            :url="url"
            :filters="filters"
            :columns="columns">
            <div slot="filters" slot-scope="{ tableFilters, perPage }">
                <div class="row mb-2">
                    <div class="col-md-3">
                        <select class="form-control" v-model="tableFilters.length">
                            <option :key="page" v-for="page in perPage">{{ page }}</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select
                            v-model="tableFilters.filters.isActive"
                            class="form-control">
                            <option value>All</option>
                            <option value='1'>Active</option>
                            <option value='0'>Inactive</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select
                            v-model="tableFilters.filters.roleId"
                            class="form-control">
                            <option value>All</option>
                            <option value='1'>User</option>
                            <option value='2'>Staff</option>
                            <option value="3">Admin</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <input
                            name="name"
                            class="form-control"
                            v-model="tableFilters.search"
                            placeholder="Search Table">
                    </div>
                </div>
            </div>
        </data-table>
    </div>
</template>

<script>

    import Prism from 'prismjs';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '../../example-components/Switch';
    import JoinsJsMarkdown from '../../markdown/examples/joins-js.md';
    import JoinsPhpMarkdown from '../../markdown/examples/joins-php.md';
    import InformationAlert from '../../example-components/InformationAlert';
    
    export default {
        name: 'Table-Joins',
        components: {
            DataTable,
            VueSwitch,
            JoinsJsMarkdown,
            InformationAlert,
            JoinsPhpMarkdown,
        },
        mixins: [CodeExample],
        data() {
            return {
                name: 'Joins',
                filters: {
                    isActive: '',
                    roleId: '',
                },
                url: process.env.VUE_APP_QUERY_BUILDER_URL,
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        orderable: true,
                    },
                    {
                        label: 'Department Name',
                        name: 'department_name',
                        columnName: 'departments.name',
                        orderable: true,
                    },
                    {
                        label: 'Role Name',
                        name: 'role_name',
                        columnName: 'roles.name',
                        orderable: true,
                    },
                    {
                        label: 'Name',
                        name: 'user_name',
                        columnName: 'users.name',
                        orderable: true,
                    },
                    {
                        label: 'Active',
                        name: 'is_active',
                        columnName: 'users.is_active',
                        orderable: true,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        orderable: true,
                    },
                ]
            }
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
