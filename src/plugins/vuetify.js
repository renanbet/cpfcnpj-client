/*
* Define variáveis padrões da aplicação.
* Ex: cores do tema.
*/
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#21273e',
        secondary: '#3e2127',
        accent: '#273e21',
        error: '#f4cc36',
      },
    }
  }
});
