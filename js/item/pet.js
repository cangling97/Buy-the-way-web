
window.addEventListener('load', function(){
    


    var dogfoodInCart = false;
    var catfoodInCart = false;
    var cattreeInCart = false;
    var dogfood = 1;
    var catfood = 1;
    var cattree =1;
    var dogfoodInc = document.getElementById("adddogfood");
    var dogfoodDec = document.getElementById("minusdogfood");
    var dogfoodQuantity = document.getElementById('quantitydogfood');
    var dogfoodToCart = document.getElementById('adddogfoodToCart');
    var dogfoodAdded = document.getElementById('dogfoodAdded');
    var catfoodInc = document.getElementById("addcatfood");
    var catfoodDec = document.getElementById('minuscatfood');
    var catfoodQuantity = document.getElementById('quantitycatfood');
    var catfoodToCart = document.getElementById('addcatfoodToCart');
    var catfoodAdded = document.getElementById('catfoodAdded');
    var cattreeInc = document.getElementById("addcattree");
    var cattreeDec = document.getElementById('minuscattree');
    var cattreeQuantity = document.getElementById('quantitycattree');
    var cattreeToCart = document.getElementById('addcattreeToCart');
    var cattreeAdded = document.getElementById('cattreeAdded');
    var count = 0;
    
    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "dogfood"){
                dogfoodInCart = true;
                dogfoodToCart.style.display = "none";
                dogfoodAdded.style.display = "block";
            }
            if (localStorage.key(i) == "cattree"){
                cattreeInCart = true;
                cattreeToCart.style.display = "none";
                cattreeAdded.style.display = "block";
            }
            if (localStorage.key(i) == "catfood"){
                catfoodInCart = true;
                catfoodToCart.style.display = "none";
                catfoodAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }
    
    dogfoodInc.onclick = function(){     
        if (!dogfoodInCart){
            dogfood++;
            dogfoodQuantity.innerHTML = dogfood;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    dogfoodDec.onclick = function(){
        if (!dogfoodInCart){
            if (dogfood > 1){
                dogfood--;
                dogfoodQuantity.innerHTML = dogfood;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    dogfoodToCart.onclick = function(){
        //alert(dogfood + " dogfood(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            dogfoodToCart.style.display = "none";
            dogfoodAdded.style.display = "block";
            dogfoodInCart=true;
            localStorage.setItem("Dogfood",dogfood.toString());
            count++;
        }
    }


    catfoodInc.onclick = function(){     
        if (!catfoodInCart){
            catfood++;
            catfoodQuantity.innerHTML = catfood;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    catfoodDec.onclick = function(){
        if (!catfoodInCart){
            if (catfood > 1){
                catfood--;
                catfoodQuantity.innerHTML = catfood;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    catfoodToCart.onclick = function(){
        //alert(dogfood + " dogfood(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            catfoodToCart.style.display = "none";
            catfoodAdded.style.display = "block";
            catfoodInCart=true;
            localStorage.setItem("Catfood",catfood.toString());
            count++;
        }
    }

    cattreeInc.onclick = function(){     
        if (!cattreeInCart){
            cattree++;
            cattreeQuantity.innerHTML = cattree;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    cattreeDec.onclick = function(){
        if (!cattreeInCart){
            if (cattree > 1){
                cattree--;
                cattreeQuantity.innerHTML = cattree;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    cattreeToCart.onclick = function(){
        //alert(dogfood + " dogfood(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            cattreeToCart.style.display = "none";
            cattreeAdded.style.display = "block";
            cattreeInCart=true;
            localStorage.setItem("Cattree",cattree.toString());
            count++;
        }
    }
    
  });
