import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/'

export default {
    addToEquipment(context, data) {
        const endpoint = baseUrl + 'equipment/equipmentTransfers/';
        axios
            .patch(endpoint + data.equipment_id + "/", { status: 0 })
            .catch(e => {
                console.log(e)
            });
        context.commit('addToEquipment', data)
        return true;
    },
    removeFromEquipment(context, data) {
        const endpoint = baseUrl + 'equipment/equipment/';
        axios
            .patch(endpoint + data.equipment_id + "/", { status: 1 })
            .catch(e => {
                console.log(e)
            });
        context.commit('removeFromEquipment', data)
        return true;
    },
    fetchAllEquipments(context) {
        const endpoint = baseUrl + 'equipment/equipment/?format=json';
        axios
            .get(endpoint)
            .then(response => {
                response.data.forEach(el => {

                    const equipment = {
                        company_id: el.company_id,
                        company_name: el.company_name,
                        division_id: el.division_id,
                        division_name: el.division_name,
                        equipment_id: el.equipment_id,
                        description_1: el.description_1,
                        description_2: el.description_2,
                        description_3: el.description_3,
                        serial: el.serial,
                        model: el.model,
                        model_year: el.model_year,
                        item_class: el.item_class,
                        status_code: el.status_code,
                        warehouse: el.warehouse,
                    }
                    context.commit('addToEquipment', equipment)
                });
            })
            .catch(e => {
                console.log(e)
            });
        return true;
    },
    fetchSingleActiveEquipment(context, data) {
        const endpoint = baseUrl + 'equipment/equipment/' + data.equipment_id + '/';
        console.log(endpoint)
        axios
            .get(endpoint)
            .then(response => {
                const equipment = {
                    company_id: response.data.company_id,
                    company_name: response.data.company_name,
                    division_id: response.data.division_id,
                    division_name: response.data.division_name,
                    equipment_id: response.data.equipment_id,
                    description_1: response.data.description_1,
                    description_2: response.data.description_2,
                    description_3: response.data.description_3,
                    serial: response.data.serial,
                    model: response.data.model,
                    model_year: response.data.model_year,
                    item_class: response.data.item_class,
                    status_code: response.data.status_code,
                    warehouse: response.data.warehouse,
                }
                return equipment
            })
            .catch(e => {
                console.log(e)
            });
        return true;
    },
    fetchSingleTransferEquipment(context, data) {
        const endpoint = baseUrl + 'equipment/equipmentTransfers/' + data.equipment_id + '/';
        console.log(endpoint)
        axios
            .get(endpoint)
            .then(response => {
                const equipment = {
                    company_id: response.data.company_id,
                    company_name: response.data.company_name,
                    division_id: response.data.division_id,
                    division_name: response.data.division_name,
                    equipment_id: response.data.equipment_id,
                    description_1: response.data.description_1,
                    description_2: response.data.description_2,
                    description_3: response.data.description_3,
                    serial: response.data.serial,
                    model: response.data.model,
                    model_year: response.data.model_year,
                    item_class: response.data.item_class,
                    status_code: 0,
                    warehouse: response.data.warehouse,
                }
                return equipment
            })
            .catch(e => {
                console.log(e)
            });
        return true;
    },

};