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

    var CrackerInCart = false;
    var ChipInCart = false;
    var CookieInCart = false;
    var Cracker = 1;
    var Chip = 1;
    var Cookie =1;
    var CrackerInc = document.getElementById("addCracker");
    var CrackerDec = document.getElementById("minusCracker");
    var CrackerQuantity = document.getElementById('quantityCracker');
    var CrackerToCart = document.getElementById('addCrackerToCart');
    var CrackerAdded = document.getElementById('CrackerAdded');
    var ChipInc = document.getElementById("addChip");
    var ChipDec = document.getElementById('minusChip');
    var ChipQuantity = document.getElementById('quantityChip');
    var ChipToCart = document.getElementById('addChipToCart');
    var ChipAdded = document.getElementById('ChipAdded');
    var CookieInc = document.getElementById("addCookie");
    var CookieDec = document.getElementById('minusCookie');
    var CookieQuantity = document.getElementById('quantityCookie');
    var CookieToCart = document.getElementById('addCookieToCart');
    var CookieAdded = document.getElementById('CookieAdded');
    
    
    CrackerInc.onclick = function(){     
        if (!CrackerInCart){
            Cracker++;
            CrackerQuantity.innerHTML = Cracker;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CrackerDec.onclick = function(){
        if (!CrackerInCart){
            if (Cracker > 1){
                Cracker--;
                CrackerQuantity.innerHTML = Cracker;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CrackerToCart.onclick = function(){
        //alert(Cracker + " Cracker(s) added to cart");
        //add to list
        CrackerToCart.style.display = "none";
        CrackerAdded.style.display = "block";
        CrackerInCart=true;
    }


    ChipInc.onclick = function(){     
        if (!ChipInCart){
            Chip++;
            ChipQuantity.innerHTML = Chip;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    ChipDec.onclick = function(){
        if (!ChipInCart){
            if (Chip > 1){
                Chip--;
                ChipQuantity.innerHTML = Chip;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    ChipToCart.onclick = function(){
        //alert(Cracker + " Cracker(s) added to cart");
        //add to list
        ChipToCart.style.display = "none";
        ChipAdded.style.display = "block";
        ChipInCart=true;
    }

    CookieInc.onclick = function(){     
        if (!CookieInCart){
            Cookie++;
            CookieQuantity.innerHTML = Cookie;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CookieDec.onclick = function(){
        if (!CookieInCart){
            if (Cookie > 1){
                Cookie--;
                CookieQuantity.innerHTML = Cookie;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CookieToCart.onclick = function(){
        //alert(Cracker + " Cracker(s) added to cart");
        //add to list
        CookieToCart.style.display = "none";
        CookieAdded.style.display = "block";
        CookieInCart=true;
    }
    
  }
