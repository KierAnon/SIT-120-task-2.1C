const app = Vue.createApp({
    data() {
      return {
        itemName: '',
        items: [],
        noItemName: false
      };
    },
    methods: {
      createItem(){
        if(this.itemName){
            this.items.push(this.itemName);
            this.itemName = '';
            this.noItemName = false;
        }else{
            this.noItemName = true;
        }
        
      },
      deleteItem(index){
        this.items.splice(index, 1)
      }
    }
  });
  
  app.mount('#app');
  