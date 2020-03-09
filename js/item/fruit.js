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

    var AppleInCart = false;
    var BananaInCart = false;
    var GrapeInCart = false;
    var Apple = 1;
    var Banana = 1;
    var Grape =1;
    var AppleInc = document.getElementById("addApple");
    var AppleDec = document.getElementById("minusApple");
    var AppleQuantity = document.getElementById('quantityApple');
    var AppleToCart = document.getElementById('addAppleToCart');
    var AppleAdded = document.getElementById('AppleAdded');
    var BananaInc = document.getElementById("addBanana");
    var BananaDec = document.getElementById('minusBanana');
    var BananaQuantity = document.getElementById('quantityBanana');
    var BananaToCart = document.getElementById('addBananaToCart');
    var BananaAdded = document.getElementById('BananaAdded');
    var GrapeInc = document.getElementById("addGrape");
    var GrapeDec = document.getElementById('minusGrape');
    var GrapeQuantity = document.getElementById('quantityGrape');
    var GrapeToCart = document.getElementById('addGrapeToCart');
    var GrapeAdded = document.getElementById('GrapeAdded');
    
    
    AppleInc.onclick = function(){     
        if (!AppleInCart){
            Apple++;
            AppleQuantity.innerHTML = Apple;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    AppleDec.onclick = function(){
        if (!AppleInCart){
            if (Apple > 1){
                Apple--;
                AppleQuantity.innerHTML = Apple;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    AppleToCart.onclick = function(){
        //alert(Apple + " Apple(s) added to cart");
        //add to list
        AppleToCart.style.display = "none";
        AppleAdded.style.display = "block";
        AppleInCart=true;
    }


    BananaInc.onclick = function(){     
        if (!BananaInCart){
            Banana++;
            BananaQuantity.innerHTML = Banana;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    BananaDec.onclick = function(){
        if (!BananaInCart){
            if (Banana > 1){
                Banana--;
                BananaQuantity.innerHTML = Banana;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    BananaToCart.onclick = function(){
        //alert(Apple + " Apple(s) added to cart");
        //add to list
        BananaToCart.style.display = "none";
        BananaAdded.style.display = "block";
        BananaInCart=true;
    }

    GrapeInc.onclick = function(){     
        if (!GrapeInCart){
            Grape++;
            GrapeQuantity.innerHTML = Grape;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    GrapeDec.onclick = function(){
        if (!GrapeInCart){
            if (Grape > 1){
                Grape--;
                GrapeQuantity.innerHTML = Grape;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    GrapeToCart.onclick = function(){
        //alert(Apple + " Apple(s) added to cart");
        //add to list
        GrapeToCart.style.display = "none";
        GrapeAdded.style.display = "block";
        GrapeInCart=true;
    }
    
  }
