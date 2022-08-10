import { createApp } from 'vue';

import Notifications from '@kyvg/vue3-notification';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRightArrowLeft, faCalendarCheck, faClockRotateLeft, faToolbox } from '@fortawesome/free-solid-svg-icons'

import router from './router.js'
import store from './store/index.js';
import App from './App.vue';
import BaseButton from './components/base/BaseButton.vue';
import Sidebar from './components/layout/Sidebar.vue';

const app = createApp(App)

app.use(router);
app.use(store);
app.use(Notifications);

app.component('base-button', BaseButton)
app.component('sidebar', Sidebar)
app.component('font-awesome-icon', FontAwesomeIcon)

library.add(faArrowRightArrowLeft)
library.add(faCalendarCheck)
library.add(faClockRotateLeft)
library.add(faToolbox)

app.mount('#app');
