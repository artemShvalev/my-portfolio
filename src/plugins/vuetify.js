import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import minifyTheme from 'minify-css-string';

Vue.use(Vuetify);

export default new Vuetify({
  // code here
  theme: { dark: true },
  option: { minifyTheme },
  themes: {
    light: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
    },
  },
});
