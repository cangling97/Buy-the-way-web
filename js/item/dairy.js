
window.addEventListener('load', function(){
    

    var CheeseInCart = false;
    var MilkInCart = false;
    var Cheese = 1;
    var Milk = 1;
    var CheeseInc = document.getElementById("addCheese");
    var CheeseDec = document.getElementById("minusCheese");
    var CheeseQuantity = document.getElementById('quantityCheese');
    var CheeseToCart = document.getElementById('addCheeseToCart');
    var CheeseAdded = document.getElementById('CheeseAdded');
    var MilkInc = document.getElementById("addMilk");
    var MilkDec = document.getElementById('minusMilk');
    var MilkQuantity = document.getElementById('quantityMilk');
    var MilkToCart = document.getElementById('addMilkToCart');
    var MilkAdded = document.getElementById('MilkAdded');
    
    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Cheese"){
                CheeseInCart = true;
                CheeseToCart.style.display = "none";
                CheeseAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Milk"){
                MilkInCart = true;
                MilkToCart.style.display = "none";
                MilkAdded.style.display = "block";
            }
        }
    }

    CheeseInc.onclick = function(){     
        if (!CheeseInCart){
            Cheese++;
            CheeseQuantity.innerHTML = Cheese;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CheeseDec.onclick = function(){
        if (!CheeseInCart){
            if (Cheese > 1){
                Cheese--;
                CheeseQuantity.innerHTML = Cheese;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CheeseToCart.onclick = function(){
        //alert(Cheese + " Cheese(s) added to cart");
        //add to list
        CheeseToCart.style.display = "none";
        CheeseAdded.style.display = "block";
        CheeseInCart=true;
        localStorage.setItem("Cheese",Cheese.toString());
    }


    MilkInc.onclick = function(){     
        if (!MilkInCart){
            Milk++;
            MilkQuantity.innerHTML = Milk;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    MilkDec.onclick = function(){
        if (!MilkInCart){
            if (Milk > 1){
                Milk--;
                MilkQuantity.innerHTML = Milk;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    MilkToCart.onclick = function(){
        //alert(Cheese + " Cheese(s) added to cart");
        //add to list
        MilkToCart.style.display = "none";
        MilkAdded.style.display = "block";
        MilkInCart=true;
        localStorage.setItem("Milk",Milk.toString());
    }
    
  });
