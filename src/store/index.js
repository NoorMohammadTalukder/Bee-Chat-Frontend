import { createStore } from 'vuex';
import userModule from'./modules/loggedUser.js'

const store = createStore({
    modules:{
        user:userModule,
    },
   
})

export default store;