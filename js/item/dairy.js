function showList(showCheckList,checkList){
    if (showCheckList){
         checkList.style.display = "block";
    }
    if(!showCheckList){
        checkList.style.display = "none";
    }
    showCheckList = !showCheckList;
    return showCheckList;
}

window.onload=function(){
    
    var showCheckList = true;
    var myList = document.getElementById("myList");
    var checkList = document.getElementById('checkList');
    myList.onclick = function(){
        showCheckList = showList(showCheckList,checkList);
    };
    checkList.onclick = function(){
        showCheckList = showList(showCheckList,checkList);
    }

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
    }
    
  }
