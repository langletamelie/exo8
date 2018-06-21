function birth(){
  //déclaration des variables
  var age = document.getElementById('age').value;
  var regex = /^[0-9]{0,3}/;
  if (age >= 18 && age<130){
    alert ("Vous êtes majeur.");
  }else if (age >=1 && age<=17){
    alert ("Vous êtes mineur.");
  }else{
    alert ("Menteur");
  }
}
