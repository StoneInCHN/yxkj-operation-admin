import Cookies from 'js-cookie';
import { getAreaList } from 'api/common';

const common = {
  state: {
    areas: {},
    selectedRow: {}
  },
  mutations: {
    SET_AREAS : (state, areas) => {
      state.areas = areas;
    },
    SET_SELECTED_ROW : (state, selectedRow) => {
      state.selectedRow = selectedRow;
    }
  },
  actions: {
    GetAreaList({ commit, state }) {
      return new Promise((resolve, reject) => {
        getAreaList().then(res => {
            if (res.code === '0000') {
               commit('SET_AREAS', res);
               resolve(res);
            } 
        }).catch(error => {
          reject(error);
        })
      });     
    },
    SetSelectedRow({commit}, row){
      return new Promise(resolve => {
        commit('SET_SELECTED_ROW', row);
        resolve();
      });   
    }
  }
};

export default common;
