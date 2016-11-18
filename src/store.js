import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// inner html
// isPlaying
// isStopped

/* eslint-disable no-unused-vars */
const ASSETS_PREFIX = 'https://s3-ap-northeast-1.amazonaws.com/kfei-app-assets/ept-idioms/';
const leftPadder = n => `0${n}`.slice(-2);

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    part: '01',
    cls: '01',
  },
  getters: {
    audioSrc: state => `${ASSETS_PREFIX}${state.part}${state.cls}.mp3`,
    imageSrc: state => `${ASSETS_PREFIX}${state.part}${state.cls}.jpg`,
  },
  mutations: {
    increment(state) {
      state.valueFromStore += 1;
    },
    selectCls(state, payload) {
      state.part = leftPadder(payload.part);
      state.cls = leftPadder(payload.cls);
    },
  },
});

export default store;
