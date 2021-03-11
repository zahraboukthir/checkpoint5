butnstagadd = document.getElementsByClassName("add")
buntnstagmins = document.getElementsByClassName("moins")
checkbutn=document.getElementsByClassName("check") 
likebutn=document.getElementsByClassName("like")
deletebutn=document.getElementsByClassName("delate")
for( var i=0 ; i<butnstagadd.length ; i++){
    butnstagadd[i].addEventListener("click" ,add)
    checkbutn[i].addEventListener("click" , check)
    buntnstagmins[i].addEventListener("click" , moins )
    likebutn[i].addEventListener("click" , like )
    deletebutn[i].addEventListener("click" , supp)
}
function add(e){
    var buntnstagadd=e.target
    var tdElt = buntnstagadd.parentElement
    var inputstag =tdElt.querySelector(".qunatity")
    var quant=Number(inputstag.value)
    quant++
    inputstag.value=quant
    var unitePriceTag=buntnstagadd.parentElement.parentElement.querySelector(".uniteprice")
    var unitePrice=unitePriceTag.innerHTML
    var priceTag=buntnstagadd.parentElement.parentElement.querySelector(".price")
    var price=Number(priceTag.innerHTML)
    price=unitePrice*quant
    priceTag.innerHTML=price
}
function moins(e){
    var buntnstagadd=e.target
    var tdElt = buntnstagadd.parentElement
    var inputstag =tdElt.querySelector(".qunatity")
    var quant=Number(inputstag.value)
    if(quant>0){quant--}
    inputstag.value=quant
    var unitePriceTag=buntnstagadd.parentElement.parentElement.querySelector(".uniteprice")
    var unitePrice=unitePriceTag.innerHTML
    var priceTag=buntnstagadd.parentElement.parentElement.querySelector(".price")
    var price=Number(priceTag.innerHTML)
    price=unitePrice*quant
    priceTag.innerHTML=price

}
function check(e){
    var total=Number(document.getElementById("total").innerHTML)
    var totaltag=document.getElementById("total")
    var checktag=e.target
    var priceTag=checktag.parentElement.parentElement.parentElement.querySelector(".price")
        var price=Number(priceTag.innerHTML)
    var btnAddTag = priceTag.parentElement.querySelector(".add")
    var btnMinsTag = priceTag.parentElement.querySelector(".moins")
    if(checktag.checked===true){

        btnAddTag.setAttribute("disabled",true)
        
        btnMinsTag.setAttribute("disabled",true)
        total=total+price
        totaltag.innerHTML=total
    }
    else{
        
        total=total-price
        totaltag.innerHTML=total
        btnMinsTag.removeAttribute("disabled")
        btnAddTag.removeAttribute("disabled")
    }
}

function supp(e){
    var deletebutn=e.target
    var deltag = deletebutn.parentElement.parentElement
    deltag.remove()

}
function like(e){
    var likebutn=e.target
    var like=likebutn.parentElement
     like.style.color = "#ff0000";

}