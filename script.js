/*
* Desenvolvida por Elton Santos - elton.melo.santos@gmail.com
*/
$(document).ready( function() {
   /* Executa a requisição quando o campo CEP perder o foco */
   $('#cep').blur(function(){
       /* Configura a requisição AJAX */
       $.ajax({
          url : "http://cep.republicavirtual.com.br/web_cep.php?formato=json&cep="+ $(this).val(), /* URL que será chamada */
          type : 'GET', /* Tipo da requisição */
          dataType: 'json', /* Tipo de transmissão */
          beforeSend: function() {
            console.log("Mostra loading");
            $('#wait').show();
          },
          success: function(data) {
            if(data.resultado == 1){
              $('#logradouro').val(unescape(data.logradouro));
              $('#bairro').val(unescape(data.bairro));
              $('#cidade').val(unescape(data.cidade));
              $('#estado').val(unescape(data.uf));
              $('#numero').focus();
            }
          },
          complete: function(){
            console.log("Esconde loading");
            $('#wait').hide();
          }
       });   
   });
});

// Substituta sem a função $.ajax
/*
    $('#cep').change(function(e) {

        e.preventDefault();

        $("#logradouro").val('');
        $("#bairro").val('');
        $("#cidade").val('');
        $("#estado").val('');

        var cep = $('#cep').val().replace("-", "");

        $.getJSON("http://cep.republicavirtual.com.br/web_cep.php?cep=" + cep + "&formato=json", {}, function(data) {

            if (data.resultado_txt == 'sucesso - cep completo') {

                $("#logradouro").val(data.tipo_logradouro + ' ' + data.logradouro);
                $("#bairro").val(data.bairro);
                $("#cidade").val(data.cidade);
                $("#estado").val(data.uf);
                
            }
        });
    });*/