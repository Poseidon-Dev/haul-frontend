export default {
    addToQueueIn(context, data) {
        context.commit('addToQueueIn', data);
    },
    addToQueueOut(context, data) {
        context.commit('addToQueueOut', data);
    },
    removeFromQueueIn(context, data) {
        context.commit('removeFromQueueIn', data);
    },
    removeFromQueueOut(context, data) {
        context.commit('removeFromQueueOut', data);
    },
};