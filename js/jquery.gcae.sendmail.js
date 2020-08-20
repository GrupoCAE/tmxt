$(function() {
$('.error').hide();  

  $("#submit").click(function() {  
    
    // Llenamos Variables
    var name = $("input#name").val();
    if (name == "") {
      $("input#name").val("Inserte un nombre válido"); 
      $("input#name").focus();
      return false;
    }

    var email = $("input#email").val();
    if (email == "") {
      $("input#email").val("Falta llenar este campo"); 
      $("input#email").focus();
      return false;
    } 

    if (!(/^[A-Z|a-z|0-9|\.|\-|_]+[@]([A-Z|a-z|0-9|\.|\-|_].)+[A-Z|a-z|0-9]{2,4}$/).test(email)) { 
      $("input#email").val("Inserte un correo válido"); 
      $("input#email").focus();
      return false;
    }

    var asunto = $("input#subject").val();
    if (asunto == "") {
      $("input#subject").val("Inserta un asunto"); 
      $("input#subject").focus();
      
      return false;
    } 

    var comentario = $("textarea#comments").val();
    if (comentario == "") {
      $("textarea#comments").val("Agregue un comentario, duda o sugerencia."); 
      $("textarea#comments").focus();
      return false;
    }

    var dataString = 'nombre='+ name + '&mail=' + email + '&asunto=' + asunto + '&mensaje=' + comentario;

    $.ajax({
      type: "POST",
      url: "js/send.php",
      data: dataString,
      success: function() {
        $('#tituloEmail').fadeOut(400);
        $('#form').fadeOut(400);
        $('#form').after("<div id='message'></div>");
        console.log("aqui voy");
        $('#message').html("<h2>Enviando Correo</h2>").hide().fadeIn(1500, 
          function() {
            $('#message').append("<img id='checkmark' src='./img/check.png' /><p>Pronto estaremos en contacto contigo.</p>");
          });
      },
      error: function() {
        alert("Error");
        $('#tituloEmail').fadeOut(400);
        $('#form').fadeOut(400);
        $('#form').after("<div id='message'></div>");
        $('#message').html("<h2>Enviando Correo</h2>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<img id='checkmark' src='./img/cancel.png' /><p>Ocurrio un error, vuelve a intentar mas tarde.</p>");
        });
      }


     });
    return false;
  });
});
runOnLoad(function(){
  $("input#name").select().focus();
});