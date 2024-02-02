// store.js
import { reactive } from 'vue';

export const store = reactive({
  show: false,
  toggleShow() {
    this.show = !this.show;
  },
});
