const state = {
    tests : new Map([[1, 'one'], [2, 'two'], [3 , 'tree']]),
    edditing : null,
    current : {
        name : "",
        rule : ""
    }
}

const getters = {
    getTests : (state) => state.tests,
    getCurrent : (state) => state.current,
    getEdditing : (state) => state.edditing
}

const actions = {
    newTest ({commit}, name, rule) {
        const tmp = {...state.tests};
        tmp.set(name, rule);
        commit('setTests', tmp)
    },
    deleteTest ({commit}, name) {
        const tmp = {...state.tests};
        tmp.delete(name);
        commit('setTests', tmp)
    },
    setName  ({commit}, name) {
        commit('setName', name)
    },
    setRule ({commit}, rule) {
        commit('setRule', rule)
    }
}

const mutations = {
    setTests: (state, tests) => (state.tests = tests),
    setEdditing: (state, name) => (state.edditing = name),
    setName: (state, name) => (state.current.name = name),
    setRule: (state, rule) => (state.current.rule = rule)
}

export default {
    state,
    getters,
    actions,
    mutations
}