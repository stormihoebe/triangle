$(function(){
  $("#newForm").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("input[name=side1]").val());
    var side2 = parseInt($("input[name=side2]").val());
    var side3 = parseInt($("input[name=side3]").val());

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1 ) {
      $(".result p").text("This is not a Triangle! The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.")
    } else{
      if (side1 === side2 && side2 === side3) {

        $(".result p").text("This is an Equilateral Triangle")
      } else if (side1 === side2 || side1 === side3 || side2 === side3){
          $(".result p").text("This is an Isosceles Triangle")
      } else {
          $(".result p").text("This is a Scalene Triangle")
      };
    };
  });


});
