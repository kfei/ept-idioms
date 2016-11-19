import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from './config';

Vue.use(Vuex);

/* eslint-disable no-unused-vars */
const leftPadder = n => `0${n}`.slice(-2);

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    part: '01',
    cls: '01',
    isPlaying: false,
    textContent: '',
    textReady: false,
  },
  getters: {
    audioSrc: state => `${config.ASSETS_PREFIX}${state.part}${state.cls}.mp3`,
    imageSrc: state => `${config.ASSETS_PREFIX}${state.part}${state.cls}.jpg`,
  },
  mutations: {
    increment(state) {
      state.valueFromStore += 1;
    },
    selectCls(state, payload) {
      state.part = leftPadder(payload.part);
      state.cls = leftPadder(payload.cls);
    },
    setPlaying(state, payload) {
      state.isPlaying = payload.isPlaying;
    },
    setTextContent(state, newTextContent) {
      state.textContent = newTextContent;
      state.textReady = true;
    },
  },
  actions: {
    fetchTextContent({ commit, state }) {
      state.textReady = false;
      axios.get(`${config.ASSETS_PREFIX}${state.part}${state.cls}.html`)
        .then((res) => { commit('setTextContent', res.data); })
        .catch((err) => { console.log(err); });
    },
  },
});

export default store;
