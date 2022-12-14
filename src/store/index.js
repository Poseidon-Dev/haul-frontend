import { createStore } from 'vuex';

import equipmentModule from './modules/equipment/index.js';
import transfersModule from './modules/transfers/index.js';
import queueModule from './modules/queue/index.js';

const store = createStore({
    modules: {
        equipment: equipmentModule,
        transfers: transfersModule,
        queues: queueModule,
    },
});

export default store