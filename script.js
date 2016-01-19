/*
* Desenvolvida por Elton Santos - elton.melo.santos@gmail.com
*/
$(document).ready( function() {
   /* Executa a requisição quando o campo CEP perder o foco */
   $('#cep').blur(function(){
       /* Configura a requisição AJAX */
       $.ajax({
            url : "http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+cep, /* URL que será chamada */
            contentType: 'application/json',
            type : 'GET', /* Tipo da requisição */ 
            data: 'cep=' + $('#cep').val(), /* dado que será enviado via POST */
            dataType: 'jsonp', /* Tipo de transmissão */
            beforeSend: function() {
              $('#wait').show();
            },
            success: function(data){
                if(data.sucesso == 1){
                    $('#logradouro').val(unescape(data.logradouro));
                    $('#bairro').val(unescape(data.bairro));
                    $('#cidade').val(unescape(data.cidade));
                    $('#estado').val(unescape(data.estado));

                    $('#numero').focus();
                }
            },
            complete: function(){
              $('#wait').hide();
            }
       });   
   return false;    
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