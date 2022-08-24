import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/transfers/'

export default {
    addToTransfers(context, data) {
        const endpoint = baseUrl + 'transfers/';
        const equip = {
            equipment_id: data.equipment_id,
            to_company: data.to_company,
            to_division: data.to_division,
            to_status: data.status_code,
        }
        axios
            .post(endpoint, equip)
            .then(response => {
                context.commit('addToTransfers', response)
            })
            .catch(e => {
                console.log(e)
            });

        return true;
    },
    removeFromTransfers(context, data) {
        const endpoint = baseUrl + 'transfers/' + data.equipment_id + "/";
        axios
            .delete(endpoint)
            .catch(e => {
                console.log(e)
            });
        context.commit('removeFromTransfers', data)
    },
    fetchTransfers(context) {
        const endpoint = baseUrl + 'transfers/?format=json';
        axios
            .get(endpoint)
            .then(response => {
                response.data.forEach(el => {
                    const transfer = {
                        equipment_id: el.equipment_id,
                        to_company: el.to_company,
                        to_division: el.to_division,
                        to_status: el.to_status,
                        ask_date: el.ask_date,
                        accepted_date: el.accepted_date,
                        completed_date: el.completed_date,
                        completed: el.completed,
                        description: el.description,
                        company_name: el.company_name,
                        division_name: el.division_name,
                    }
                    context.commit('addToTransfers', transfer)
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