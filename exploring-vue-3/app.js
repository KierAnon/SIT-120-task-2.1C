const app = Vue.createApp({
    data() {
      return {
        enteredText: '',
        clicked: false,
        fruits: ['apple', 'orange', 'pear']
      };
    },
    methods: {
      showDiv(){
        this.clicked = !this.clicked;
      }
    }
  });
  
  app.mount('#app1');
  