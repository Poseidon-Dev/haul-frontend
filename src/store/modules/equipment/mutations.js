export default {
    addToQueueIn(state, payload) {
        const equip = state.queueIn.filter(equipment => equipment.equipment_id == payload.equipment_id)
        if (equip.length == 0) {
            state.queueIn.push(payload)
        }

    },
    addToQueueOut(state, payload) {
        const equip = state.queueOut.filter(equipment => equipment.equipment_id == payload.equipment_id)
        if (equip.length == 0) {
            state.queueOut.push(payload)
        }
    },
    addToTransfers(state, payload) {
        const equip = state.transfers.filter(equipment => equipment.equipment_id == payload.equipment_id)
        if (equip.length == 0) {
            state.transfers.push(payload)
        }
    },
    addToEquipment(state, payload) {
        const equip = state.equipment.filter(equipment => equipment.equipment_id == payload.equipment_id)
        if (equip.length == 0) {
            state.equipment.push(payload)
        }
    },
    removeFromQueueIn(state, payload) {
        state.queueIn = state.queueIn.filter(equipment => equipment.equipment_id != payload.equipment_id)
    },
    removeFromQueueOut(state, payload) {
        state.queueOut = state.queueOut.filter(equipment => equipment.equipment_id != payload.equipment_id)
    },
    removeFromTransfers(state, payload) {
        state.transfers = state.transfers.filter(equipment => equipment.equipment_id != payload.equipment_id)
    },
    removeFromEquipment(state, payload) {
        state.equipment = state.equipment.filter(equipment => equipment.equipment_id != payload.equipment_id)
    },
    updateTransferDate(state, payload) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        var newEquip = payload
        newEquip.requestDate = today
        var currentEquip = state.transfers.findIndex(equipment => equipment.equipment_id == payload.equipment_id)
        state.transfers[currentEquip] = newEquip
    }
};