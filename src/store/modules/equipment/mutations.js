export default {
    addToEquipment(state, payload) {
        const equip = state.equipment.filter(equipment => equipment.equipment_id == payload.equipment_id)
        if (equip.length == 0) {
            state.equipment.push(payload)
        }
    },
    removeFromEquipment(state, payload) {
        state.equipment = state.equipment.filter(equipment => equipment.equipment_id != payload.equipment_id)
    },

};