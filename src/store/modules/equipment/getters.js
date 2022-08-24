export default {
    equipment: state => {
        return state.equipment;
    },
    hasEquipment(state) {
        return state.equipment && state.equipment.length > 0;
    },
    transfers: state => {
        return state.transfers
    },

};