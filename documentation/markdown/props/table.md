## Datatable Props
| Name | Type | Default | Description  
| --- | --- | --- | --- |
| url | String | "/" | The JSON url |
| columns | Array | [] | The table columns |
| order-by | String | "id" | (optional) The default column to order your data by |
| order-dir | String | "asc" | (optional) The default order by direction |
| per-page | Array | ['10','25','50'] | (optional) Amount to be displayed |
| theme | String | "light" | (optional) Must be dark or light |
| translate | Object | { nextButton: 'Next', previousButton: 'Previous', placeholderSearch: 'Search Table'} | (optional) used to overwrite the default pagination button text and search input placeholder |
| debounce-delay | Number | 0 | (optional) Adds a debounce delay to the get request when searching |
| add-filters-to-url | Boolean | false | <p class="wrap-text"> (optional) Will adjust the current url to keep track of used filters and will also store them in local storage. </p> |
| classes | Object | See Below | (optional) Table classes |
| pagination | Object | {}  | (optional) props for [gilbitron/laravel-vue-pagination](https://github.com/gilbitron/laravel-vue-pagination#props) |
| headers | Object | {} | Additional headers to pass route e.g. bearer token |
<br>

### Default Classes
```json
{
    "table-container": {
        "table-responsive": true,
    },
    "table": {
        "table": true,
        "table-striped": true,
        "border": true,
    },
    "t-head": {

    },
    "t-body": {
        
    },
    "t-head-tr": {

    },
    "t-body-tr": {
        
    },
    "td": {

    },
    "th": {
        
    },
}
```
