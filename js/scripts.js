$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });

  $("#formTwo").submit(function(event){
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb1").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb1").text(verbInput);
    $(".noun").text(nounInput);

    $("#story2").show();

  });
  $("#form3").submit(function(event){
    event.preventDefault();
    const person1Input = $("input#person1").val();
    $(".person1").text(person1Input)
    $("#story2").show();
  });
  $("#form4").submit(function(event){
    event.preventDefault();
    const shoutInput = $("input#loud").val();
    
    $(".loud").text(shoutInput.toUpperCase());
    $("#shout").show();
  });
});