export const increment = ({commit}) => {
  commit('INCREMENT')
}
export const decrement = ({commit}) => {
  commit('DECREMENT')
}
export const updateCurrentData = ({commit}, attr) => {
  commit('UPDATE_CURRENTDATA', attr)
}
