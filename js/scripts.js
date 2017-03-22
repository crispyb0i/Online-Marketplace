$(document).ready(function(){
  $("#order").submit(function(event){

    var name = $("#name").val();
    var address = $("#address").val();
    var item = $("input:radio[name=item]:checked").val();
    var message = "Thank you for your purchases " + name + "! We will ship your " + item + " to your address at: " + address + ".";

    $(".receipt").show()
    $("#nameText").text("Thank you for your purchase " + name + "!");
    $('#orderText').text("We will ship your " + item + " to your address at: ");
    $('#addressText').text(address);
    event.preventDefault();
  })
});
