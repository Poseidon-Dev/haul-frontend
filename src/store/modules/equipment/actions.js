import axios from 'axios';

export default {
    addToQueueIn(context, data) {
        context.commit('addToQueueIn', data);
    },
    addToQueueOut(context, data) {
        context.commit('addToQueueOut', data);
    },
    addToTransfers(context, data) {
        context.commit('addToTransfers', data)
    },
    addToEquipment(context, data) {
        context.commit('addToEquipment', data)
    },
    removeFromQueueIn(context, data) {
        context.commit('removeFromQueueIn', data);
    },
    removeFromQueueOut(context, data) {
        context.commit('removeFromQueueOut', data);
    },
    removeFromTransfers(context, data) {
        context.commit('removeFromTransfers', data)
    },
    removeFromEquipment(context, data) {
        context.commit('removeFromEquipment', data)
    },
    fetchEquipment(context) {
        const baseURL = 'http://127.0.0.1:5000/equip';

        axios
            .get(baseURL)
            .then(response => {
                response.data.forEach(el => {
                    console.log(el);

                    const equipment = {
                        equipment_id: el.equipment_id,
                        description: el.description,
                        division: el.division,
                        division_id: el.division_id,
                        serial: el.serial,
                        model: el.model,
                        model_year: el.model_year,
                        item_class: el.item_class,
                        status_code: el.status_code
                    }
                    console.log(equipment)
                    context.commit('addToEquipment', equipment)
                });
            })
            .catch(e => {
                console.log(e)
            });
        return true;
    },
    updateTransferDate(context, data) {
        context.commit('updateTransferDate', data)
    }
};