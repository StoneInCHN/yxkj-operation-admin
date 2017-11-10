import Cookies from 'js-cookie'
import { getAreaList } from 'api/common'
import * as COM_ATTR from 'store/static'

const common = {
  state: {
    areas: {},
    selectedRow: {},
    payMethod: COM_ATTR.PUR_METHODS,
    paymentTypes: COM_ATTR.PAYMENT_TYPES
  },
  mutations: {
    SET_AREAS : (state, areas) => {
      state.areas = areas;
    },
    SET_PAY_METHOD : (state, payMethod) => {
      state.payMethod = payMethod;
    },
    SET_PAYMENT_TYPES : (state, payMethod) => {
      state.payMethod = payMethod;
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
    },
    SetPayMethod({commit}, payMethod){
      return new Promise(resolve => {
        commit('SET_PAY_METHOD', payMethod);
        resolve();
      });   
    }
  }
};

export default common;
