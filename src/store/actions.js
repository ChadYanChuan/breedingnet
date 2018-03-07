import {url} from '../components/common/config.vue';
import axios from 'axios';

let actions = {
  promiseAction({ commit }) {
    //异步调用 可以引入async/await对action进行组合
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("promiseAction");
      }, 3000);
      resolve();
    })
  },
  increment({ commit }) {
    commit("increment");
  },
  rideten({ commit }) {
    commit("rideten");
  },
  getUser({commit}) {
    console.info("action 获取异步数据 改变");
    axios.get(url + 'h5.json')
      .then(function(res) {
        // console.log(res.data.htmlList);
        commit("getUser",res.data.htmlList);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default actions;
