console.log('JS loaded!')

const app = Vue.createApp({
    data() {
        return {
            firstName:"",
            lastName: "",
            quantity: "0",
            pricePeritem: "10"
        };
    },

    computed: {
        fullName(){
            return this.firstName + ' ' + this.lastName;
        },
        totalPrice(){
            return this.quantity * this.pricePeritem;
        }
    },

    methods: {
        clearFields(){
            this.firstName = "",
            this.lastName = "",
            this.quantity = "0"
        }
    }


});

app.mount('#app');