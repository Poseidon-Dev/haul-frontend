import { createRouter, createWebHistory } from "vue-router";

import NotFound from './pages/NotFound.vue';
import EquipmentDetail from './pages/equipment/EquipmentDetail.vue';
import EquipmentList from './pages/equipment/EquipmentList.vue';
import TransfersActive from './pages/transfers/TransfersActive.vue';
import TransfersHistory from './pages/transfers/TransfersHistory.vue';
import TransfersDenied from './pages/transfers/TransfersDenied.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/equipment'},
        { path: '/dashboard', component: null},
        { path: '/messages', component: null },
        { path: '/equipment', component: EquipmentList },
        { path: '/equipment/:id', component: EquipmentDetail },
        { path: '/transfers', component: null, children: [
            { path: '/active', component: TransfersActive},
            { path: '/history', component: TransfersHistory},
            { path: '/denied', component: TransfersDenied},
        ] },
        { path: '/:notFound(.*)', component: NotFound}
    ], 
});

export default router;