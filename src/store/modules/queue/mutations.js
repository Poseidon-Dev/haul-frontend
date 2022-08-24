// import axios from 'axios';

// const baseUrl = 'http://127.0.0.1:8000/api/'

export default {
    addToQueueIn(state, data) {
        const equipment = {
            equipment_id: data.equipment_id,
            to_company: data.company_id,
            company_name: data.company_name,
            to_division: data.division_id,
            division_name: data.division_name,
            description: data.description_1,
            to_status: data.status_code,
            data: data,
        }
        const equip = state.queueIn.filter(equipment => equipment.equipment_id == data.equipment_id)
        if (equip.length == 0) {
            state.queueIn.push(equipment)
        }
    },
    addToQueueOut(state, data) {
        console.log(data)
        const equipment = {
            company_id: data.company_id,
            company_name: data.company_name,
            division_id: data.division_id,
            division_name: data.division_name,
            equipment_id: data.equipment_id,
            description_1: data.description,
        }
        const equip = state.queueOut.filter(equipment => equipment.equipment_id == data.equipment_id)
        if (equip.length == 0) {
            state.queueOut.push(equipment)
        }
    },
    removeFromQueueIn(state, payload) {
        state.queueIn = state.queueIn.filter(equipment => equipment.equipment_id != payload.equipment_id)
    },
    removeFromQueueOut(state, payload) {
        state.queueOut = state.queueOut.filter(equipment => equipment.equipment_id != payload.equipment_id)
    },
};