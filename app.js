
var total=0;
var Cart = {
  name: "Your Cart",
  comics: [],
}
 function addComic(title, price){
    this.title=title;
    this.price=price;

    var qty=1;

    var elem = '<tr><td>' + title + '</td><td>' + price + '</td><td>' + "<button onclick=deleteSelf(this)>remove</button></td></td>"
    document.getElementById('cart').innerHTML += elem;
    
 total += price;

    // update the total the use have to pay
document.getElementById("total").value = total;
  }

  function mySubmit(){
    alert("Your form has been submitted");
  }
  function deleteSelf(button) {
  button.remove(button)
  }

