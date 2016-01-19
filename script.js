/*
* Desenvolvida por Elton Santos - elton.melo.santos@gmail.com
*/
$(document).ready( function() {
   /* Executa a requisição quando o campo CEP perder o foco */
   $('#consultar').click(function(){
       /* Configura a requisição AJAX */
       $.ajax({
            url : "http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+cep, /* URL que será chamada */ 
            contentType: 'application/json',
            type : 'POST', /* Tipo da requisição */ 
            data: 'cep=' + $('#cep').val(), /* dado que será enviado via GET */
            dataType: 'jsonp', /* Tipo de transmissão */
            success: function(data){
                if(data.sucesso == 1){
                    $('#logradouro').val(data.logradouro);
                    $('#bairro').val(data.bairro);
                    $('#cidade').val(data.cidade);
                    $('#estado').val(data.estado);

                    $('#numero').focus();
                }
            }
       });   
   return false;    
   })
});