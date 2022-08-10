import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            equipment: [
                {
                    division: "phoenix",
                    division_id: 1,
                    description: "Test Equipment 3",
                    equipment_id: "12345",
                    serial: 'saiujdhasjkdsa',
                    model: 'Toyota',
                    class: 100,
                    model_year: 2019,
                    status_code: 4,
                },
                {
                    division: "tucson",
                    division_id: 1,
                    description: "Test Equipment 2",
                    equipment_id: "12346",
                    serial: 'saiujdhasjkdsa',
                    model: 'Toyota',
                    class: 100,
                    model_year: 2019,
                    status_code: 4,
                },
                {
                    division: "tucson",
                    division_id: 1,
                    description: "Test Equipment",
                    equipment_id: "22346",
                    serial: 'saiujdhasjkdsa',
                    model: 'Toyota',
                    class: 100,
                    model_year: 2019,
                    status_code: 4,
                }
            ],
            transfers: [],
            queueIn: [],
            queueOut: [],
        };
    },
    mutations,
    actions,
    getters,
};