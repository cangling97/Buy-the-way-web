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

    var juiceInCart = false;
    var sodaInCart = false;
    var juice = 1;
    var soda = 1;
    var juiceInc = document.getElementById("addJuice");
    var juiceDec = document.getElementById("minusJuice");
    var juiceQuantity = document.getElementById('quantityJuice');
    var juiceToCart = document.getElementById('addJuiceToCart');
    var juiceAdded = document.getElementById('juiceAdded');
    var sodaInc = document.getElementById("addSoda");
    var sodaDec = document.getElementById('minusSoda');
    var sodaQuantity = document.getElementById('quantitySoda');
    var sodaToCart = document.getElementById('addSodaToCart');
    var sodaAdded = document.getElementById('sodaAdded');
    
    
    juiceInc.onclick = function(){     
        if (!juiceInCart){
            juice++;
            juiceQuantity.innerHTML = juice;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    juiceDec.onclick = function(){
        if (!juiceInCart){
            if (juice > 1){
                juice--;
                juiceQuantity.innerHTML = juice;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    juiceToCart.onclick = function(){
        //alert(juice + " juice(s) added to cart");
        //add to list
        juiceToCart.style.display = "none";
        juiceAdded.style.display = "block";
        juiceInCart=true;
    }


    sodaInc.onclick = function(){     
        if (!sodaInCart){
            soda++;
            sodaQuantity.innerHTML = soda;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    sodaDec.onclick = function(){
        if (!sodaInCart){
            if (soda > 1){
                soda--;
                sodaQuantity.innerHTML = soda;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    sodaToCart.onclick = function(){
        //alert(juice + " juice(s) added to cart");
        //add to list
        sodaToCart.style.display = "none";
        sodaAdded.style.display = "block";
        sodaInCart=true;
    }
    
  }
