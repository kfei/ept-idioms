import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import ls from 'store';
import config from './config';

Vue.use(Vuex);

/* eslint-disable no-unused-vars */
/* The above line is for variable being used in template string */
/* See also: https://github.com/eslint/eslint/issues/1542 */

const leftPadder = n => `0${n}`.slice(-2);

const randomInt = (min, max) => {
  const lmin = Math.ceil(min);
  const lmax = Math.floor(max);
  return Math.floor(Math.random() * ((lmax - lmin) + 1)) + lmin;
};

const initialCls = () => {
  let previousCls;
  let part = '01';
  let cls = '01';
  if (ls.enabled) {
    previousCls = ls.get('previousCls');
  }
  if (previousCls && previousCls.part) {
    part = previousCls.part;
  }
  if (previousCls && previousCls.cls) {
    cls = previousCls.cls;
  }
  return `${part}${cls}`;
};

const saveHistory = (part, cls) => {
  if (!ls.enabled) {
    return;
  }
  ls.set('previousCls', {
    part,
    cls,
  });
};

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    part: initialCls().slice(0, 2),
    cls: initialCls().slice(-2),
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
      saveHistory(state.part, state.cls);
    },
    randomCls(state) {
      state.part = leftPadder(randomInt(1, config.MAX_PART));
      state.cls = leftPadder(randomInt(1, config.MAX_CLASS));
      saveHistory(state.part, state.cls);
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
        .catch((err) => {
          // Do nothing now
        });
    },
  },
});

export default store;
