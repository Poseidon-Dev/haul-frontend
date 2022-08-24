export default {
    addToTransfers(state, payload) {
        const trans = state.transfers.filter(equipment => equipment.equipment_id == payload.equipment_id)
        if (trans.length == 0) {
            state.transfers.push(payload)
        }
    },
    removeFromTransfers(state, payload) {
        state.transfers = state.transfers.filter(equipment => equipment.equipment_id != payload.equipment_id)
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