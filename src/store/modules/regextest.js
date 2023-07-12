const state = {
    tests : new Map(),
    edditing : null,
    current : {
        name : "",
        rule : ""
    },
    testString : '',
    testResult : []
}

const getters = {
    getTests : (state) => state.tests,
    getCurrent : (state) => state.current,
    getEdditing : (state) => state.edditing,
    getString : (state) => state.testString,
    getResult : (state) => state.testResult
}

const actions = {
    setTest ({commit}) {
        if (state.current.name === '') {
            alert("Name shouldn't be empty");
        } else {
            const tmp = new Map(state.tests);
            let valid = true;
            if (state.edditing === null) {
                valid = !tmp.has(state.current.name);
            }  else {
                valid = !(tmp.has(state.current.name) & state.current.name != state.edditing);
            }
            if (valid) {
                tmp.set(state.current.name, state.current.rule);
                localStorage.setItem('tests', JSON.stringify(Array.from(tmp)));
                commit('setTests', tmp);
                commit('setName', '');
                commit('setRule', '');
                commit('setEdditing', null);
            } else {
                alert(`Sorry name ${state.current.name} is already occupied`)
            }
        }
        
    },
    deleteTest ({commit}, name) {
        const tmp = new Map(state.tests);
        tmp.delete(name);
        localStorage.setItem('tests', JSON.stringify(Array.from(tmp)));
        commit('setTests', tmp)
    },
    setName  ({commit}, name) {
        commit('setName', name)
    },
    setRule ({commit}, rule) {
        commit('setRule', rule)
    },
    setEdit ({commit}, name) {
        commit('setEdditing', name);
        commit('setName', name);
        commit('setRule', state.tests.get(name));
    },
    setString ({commit}, str) {
        commit('setString', str)
    },
    setResult ({commit}, result) {
        commit('setResult', result)
    },
    setAllTests ({commit}, tests) {
        commit('setTests', tests)
    }
}

const mutations = {
    setTests: (state, tests) => (state.tests = tests),
    setEdditing: (state, name) => (state.edditing = name),
    setName: (state, name) => (state.current.name = name),
    setRule: (state, rule) => (state.current.rule = rule),
    setString: (state, newstring) => (state.testString = newstring),
    setResult: (state, result) => (state.testResult = result)
}

export default {
    state,
    getters,
    actions,
    mutations
}