let wishlist = [];


function addGift() {

    let name = document.getElementById("giftName").value;
    let link = document.getElementById("giftLink").value;


    if(name === "") {
        alert("Please enter a gift name");
        return;
    }


    let gift = {
        name: name,
        link: link
    };


    wishlist.push(gift);

    showWishlist();


    document.getElementById("giftName").value = "";
    document.getElementById("giftLink").value = "";
}



function showWishlist(){

    let list = document.getElementById("wishlist");

    list.innerHTML = "";


    wishlist.forEach(function(item,index){

        let li = document.createElement("li");


        li.innerHTML =
        "🎁 " + item.name +
        "<br>" +
        (item.link ? `<a href="${item.link}" target="_blank">View Gift</a>` : "")
        +
        "<br><button onclick='removeGift("+index+")'>Remove</button>";


        list.appendChild(li);

    });

}



function removeGift(index){

    wishlist.splice(index,1);

    showWishlist();

}