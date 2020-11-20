


function MenuItem(product, kCal, gl, la){
    this.hamburger = product;
    this.calories = kCal;
    this.gluten = gl;
    this.lactose = la;
    this.selected = function(){
        return this.hamburger + ' has ' + this.calories + ' calories';
    };
}



/*var myElement = document.getElementById("MENU");
console.log(myElement);
for (burger of food){
    if (burger.stock > 0)
    {
        var divItem = document.createElement("div");
        divItem.className = "box";
        var headline = document.createElement("p");
        var listItem1 = document.createElement("li");
        var listItem2 = document.createElement("li");
        var listItem3 = document.createElement("li");
        var picture = document.createElement("img");
        picture.src = burger.img;

        
        var hamburger = document.createTextNode(burger.name);
        var calories = document.createTextNode(burger.kCal + " kCal");
        
        headline.className = "headlist";
        listItem1.className = "list";
        listItem2.className = "list";
        listItem3.className = "list";
        picture.className = "picture";

        headline.appendChild(hamburger);
        listItem1.appendChild(calories);

        divItem.appendChild(headline);
        divItem.appendChild(picture);
        divItem.appendChild(listItem1);

        if (burger.lactose){
            var conL = document.createTextNode("Contains");
            var lactose = document.createTextNode(" lactose");
            boldL = document.createElement('strong');
            boldL.appendChild(lactose);
            listItem2.appendChild(conL);
            listItem2.appendChild(boldL);
            divItem.appendChild(listItem2);    
             
        }
        if(burger.gluten){
            var conG = document.createTextNode("Contains");
            var gluten = document.createTextNode(" gluten");
            boldG = document.createElement('strong');
            boldG.appendChild(gluten);
            listItem3.appendChild(conG);
            listItem3.appendChild(boldG);
            divItem.appendChild(listItem3);
        }
        var addO = document.createTextNode("Add to order: ")
        var selectP = document.createElement("input");
        selectP.name = "checkHam";
        selectP.value = burger.name;
        selectP.setAttribute("type", "checkbox");
        var theButton = document.createElement('p');
        theButton.appendChild(addO);
        theButton.appendChild(selectP);
        divItem.appendChild(theButton);
        myElement.appendChild(divItem);
    }
}
*/
function  buttonInfo(){
    var orderInfo = {name: "", mail: "", street: "", number: "", payment: "", gender: "", burgers: ""};
    orderInfo.name = document.getElementById("fullname").value;
    orderInfo.mail = document.getElementById("E-mail").value;
    orderInfo.street = document.getElementById("Street").value;
    orderInfo.number = document.getElementById("House").value;
    orderInfo.payment = document.getElementById("Payment_options").value;
    var genders = document.getElementsByName("ge");
    
    for(x of genders){
        if(x.checked){
            orderInfo.gender = x.value;
        }
    }
    
    var theBurger = document.getElementsByName("checkHam");
    for(x of theBurger){
        if(x.checked){
            orderInfo.burgers += x.value;
        }
    }
    console.log(orderInfo.burgers);
    var divItem = document.createElement("div");

    var infoName = document.createElement("li");
    var theName = document.createTextNode(orderInfo.name);
    infoName.appendChild(theName);
    divItem.appendChild(infoName);

    var infoMail = document.createElement("li");
    var theMail = document.createTextNode(orderInfo.mail);
    infoMail.appendChild(theMail);
    divItem.appendChild(infoMail);

    var infoStreet = document.createElement("li");
    var theStreet = document.createTextNode(orderInfo.street);
    infoStreet.appendChild(theStreet);
    var theNumber = document.createTextNode(orderInfo.number);
    infoStreet.appendChild(theNumber);
    divItem.appendChild(infoStreet);

    var infoPayment = document.createElement("li");
    var thePayment = document.createTextNode(orderInfo.payment);
    infoPayment.appendChild(thePayment);
    divItem.appendChild(infoPayment);

    var infoGender = document.createElement("li");
    var theGender = document.createTextNode(orderInfo.gender);
    infoGender.appendChild(theGender);
    divItem.appendChild(infoGender);

    var infoBurgers = document.createElement("li");
    var theBurgers = document.createTextNode(orderInfo.burgers);
    infoBurgers.appendChild(theBurgers);
    divItem.appendChild(infoBurgers);


    var theElement = document.getElementById("info");
    theElement.appendChild(divItem);

}
