var socket = io();
var killer = new Vue({
   el: "#vue",
   data: {
      Burgers: food,
      name: '',
      Email: '',
      payment: '',
      gender: '',
      burgers: {},
      orders: {},
      orderList: {},
      theInfo: {},

   },
   created: function () {
      socket.on('initialize', function (data) {
         this.orders = data.orders;
      }.bind(this));

      socket.on('currentQueue', function (data) {
         this.orders = data.orders;
      }.bind(this));
   },
   methods: {
      doSomething: function () {
         var emp = new customer();
         this.name = emp.name;
         this.Email = emp.email;
         this.payment = emp.payment;
         this.gender = emp.gender;
         this.burgers = new ordered();
         this.theInfo = emp;
      },
      getNext: function () {
         var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
            return Math.max(last, next);
         }, 0);
         return lastOrder + 1;
      },
      displayOrder: function (event) {
         var offset = {
            x: event.currentTarget.getBoundingClientRect().left,
            y: event.currentTarget.getBoundingClientRect().top
         };

         var newOrder = {
            orderId: undefined,

            details: {
               x: event.clientX - 10 - offset.x,
               y: event.clientY - 10 - offset.y,
            },
            customerInfo: {},
            orderItems: [],

         };
         
         this.orderList = [newOrder];
      },

      addOrder: function () {
         this.orderList[0].orderId = this.getNext();
         this.orderList[0].orderItems = this.burgers;
         this.orderList[0].customerInfo = this.theInfo;
         socket.emit("addOrder", this.orderList[0]);

      }
   }
});


function customer() {
   var info = {name: "", email: "", gender:"", payment: ""};
   info.name = document.getElementById("fullname").value;
   info.email = document.getElementById("E-mail").value;
   info.payment = document.getElementById("Payment_options").value;
   var genders = document.getElementsByName("ge");
   for (x of genders) {
      if (x.checked) {
         info.gender = x.value;
      }
   }
   return info;
}
function ordered(){
   var theBurger = document.getElementsByName("ham");
   var burgers = [];
   for (x of theBurger) {
      if (x.checked) {
         burgers.push(x.value);
      }
   }
   return burgers;
}

