<template>
  <ag-grid-vue
    class="ag-theme-material"
    style="height: calc(100vh - 100px)"
    :row-data="equipmentData"
    :columnDefs="columnDefs.value"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    suppressRowClickSelection="true"
    suppressCopySingleCellRanges="true"
    animateRows="true"
    @row-selected="rowWasSelected"
    @grid-ready="onGridReady"
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

    // const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row

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
        {
          field: 'division',
        },
        { field: 'serial' },
        { field: 'model' },
        {
          field: 'item_class',
          headerName: 'Class',
          flex: 3,
          filter: 'agNumberColumnFilter',
        },
        {
          field: 'model_year',
          headerName: 'Year',
          filter: 'agNumberColumnFilter',
          flex: 2,
        },
        {
          field: 'status_code',
          headerName: 'Status',
          filter: 'agNumberColumnFilter',
          flex: 2,
        },
      ],
    });

    // DefaultColDef sets props common to all Columns
    const defaultColDef = {
      sortable: true,
      filter: true,
      floatingFilter: true,
      flex: 4,
      resizable: true,
      suppressMenu: true,
      debounceMs: 0,
      popupParent: document.body,
    };

    // Example load data from sever
    // onMounted(() => {
    // fetch('http://172.31.227.197:5000/equip')
    //   .then((result) => result.json())
    //   .then((remoteRowData) => (rowData.value = remoteRowData));
    // });

    return {
      onGridReady,
      columnDefs,
      defaultColDef,
    };
  },
  computed: {
    equipmentData: {
      get() {
        return this.$store.getters['equipment/equipment'];
      },
    },
    queueData: {
      get() {
        console.log(this.$store.getters['equipment/queue']);
        return this.$store.getters['equipment/queue'];
      },
    },
  },
  methods: {
    rowWasSelected(event) {
      this.addToQueueIn(event);
    },
    addToQueueIn(event) {
      if (event.node.selected) {
        this.$store.dispatch('equipment/addToQueueIn', event.data);
      } else if (!event.node.selected) {
        console.log('deselected');
        this.$store.dispatch('equipment/removeFromQueueIn', event.data);
      }
    },
  },
};
</script>

<style scoped></style>
