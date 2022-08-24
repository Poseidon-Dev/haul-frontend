<template>
  <ag-grid-vue
    class="ag-theme-material"
    style="height: calc(100vh - 75px)"
    :row-data="transferData"
    :columnDefs="columnDefs.value"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    suppressCopySingleCellRanges="true"
    animateRows="true"
    @row-selected="rowWasSelected"
    @grid-ready="onGridReady"
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
  beforeCreate() {
    // TODO: Get a loading spinner when necessary
    this.$store.dispatch('transfers/fetchTransfers');
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
        },
        {
          headerName: 'ID',
          field: 'equipment_id',
          lockPosition: true,
          flex: 3,
          sort: 'asc',
        },
        {
          field: 'description',
        },
        {
          headerName: 'Division',
          field: 'division_name',
          editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: [
              'Tucson',
              'Phoenix',
              'Hesperia',
              'Corona',
              'Pipeline',
              'Reno',
              'Carson',
              'Pacific',
              'Bullhead',
              'Inland',
              'Drip',
            ],
          },
        },
        {
          headerName: 'Requested',
          field: 'ask_date',
        },
        {
          headerName: 'Accepted',
          field: 'accepted_date',
        },
        {
          headerName: 'Completed',
          field: 'completed_date',
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
      animateRows: true,
    };

    return {
      onGridReady,
      columnDefs,
      defaultColDef,
    };
  },
  computed: {
    transferData() {
      return this.$store.getters['transfers/transfers'];
    },
  },
  methods: {
    rowWasSelected(event) {
      console.log(event);
      this.addToQueueOut(event);
    },
    addToQueueOut(event) {
      if (event.node.selected) {
        this.$store.dispatch('queues/addToQueueOut', event.data);
      } else if (!event.node.selected) {
        this.$store.dispatch('queues/removeFromQueueOut', event.data);
      }
    },
    cellValueChanged(event) {
      this.$store.dispatch('transfers/updateTransferDate', event.data);
    },
  },
};
</script>

<style scoped></style>
