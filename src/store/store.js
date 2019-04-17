
const store = {
    state: {
        count: 0,
        list: [1,2,5,2,11,23]
    },
    mutations:{
        increment(state){
            state.count++;
        },
        decrease(state){
            state.count--;
        }
    },
    action:{

    },
    getters:{
        filteredList(state){
            return state.list.filter(item => item>10)
        },
        listCount(state,getters)   {
            return getters.filteredList.length;
        }
    }
}

export default store;