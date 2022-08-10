<template>
  <ag-grid-vue
    class="ag-theme-material"
    style="height: calc(100vh - 75px)"
    :row-data="rowData"
    :columnDefs="columnDefs.value"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    suppressCopySingleCellRanges="true"
    animateRows="true"
    @row-selected="rowWasSelected"
    @grid-ready="onGridReady"
    @onClick="onSelectionChanged"
    @cell-value-changed="cellValueChanged"
  >
  </ag-grid-vue>
</template>

<script>
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridVue } from 'ag-grid-vue3';
import { reactive, ref } from 'vue';

export default {
  components: {
    AgGridVue,
  },
  setup() {
    const gridApi = ref(null); // Optional - for accessing Grid's API

    // Obtain API from grid's onGridReady event
    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    // Each Column Definition results in one Column.
    const columnDefs = reactive({
      value: [
        {
          checkboxSelection: true,
          lockPosition: true,
          floatingFilter: false,
          flex: 1,
          // cellRenderer: (params) => {
          //   return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
          // },
        },
        {
          headerName: 'ID',
          field: 'equipment_id',
          lockPosition: true,
          flex: 3,
        },
        {
          field: 'description',
        },

        { field: 'model' },
        {
          field: 'model_year',
          headerName: 'Year',
          filter: 'agNumberColumnFilter',
          flex: 2,
        },
        {
          field: 'Division',
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: [
              'Corporate',
              'Tucson',
              'Phoenix',
              'Hesperia',
              'Corona',
              'Carson',
              'Pacific',
              'Bullhead',
              'Drip',
            ],
            cellHeight: 20,
            cellWidth: 150,
          },
        },
      ],
    });

    // DefaultColDef sets props common to all Columns
    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 4,
      resizable: true,
      suppressMenu: true,
      debounceMs: 0,
      popupParent: document.body,
    };

    return {
      onGridReady,
      columnDefs,
      defaultColDef,
      deselectRows: () => {
        gridApi.value.deselectAll();
      },
    };
  },
  computed: {
    rowData: {
      get() {
        return this.$store.getters['equipment/transfers'];
      },
    },
  },
  methods: {
    rowWasSelected(event) {
      this.addToQueueOut(event);
    },
    addToQueueOut(event) {
      if (event.node.selected) {
        this.$store.dispatch('equipment/addToQueueOut', event.data);
      } else if (!event.node.selected) {
        console.log('deselected');
        this.$store.dispatch('equipment/removeFromQueueOut', event.data);
      }
    },
    cellValueChanged(event) {
      this.$store.dispatch('equipment/updateTransferDate', event.data);
    },
  },
};
</script>

<style scoped></style>
