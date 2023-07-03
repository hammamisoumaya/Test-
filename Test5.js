$(document).ready(function() {
  
    $('#form_info').validate({
         errorPlacement: function (error, element) {
              if (element.attr("type") == "checkbox") {
                 element.parent().parent().prepend(error);
              } else {
                  error.insertBefore($(element));
              }
          }
    });
    
    $("#form_info").on( "submit", function(e) {
      
      $(".subTriage").each(function() {
        if($(this).find(":selected").data("refSd") != undefined) {
          $("#refSd").val($(this).find(":selected").data("refSd"));
        }
        if($(this).find(":selected").data("dispositif") != undefined) {
          $("#dispositif").val($(this).find(":selected").data("dispositif"));
        }
        if($(this).find(":selected").data("campagne") != undefined) {
          $("#campagne").val($(this).find(":selected").data("campagne"));
        }
        if($(this).find(":selected").data("shoot") != undefined) {
          $("#shoot").val($(this).find(":selected").data("shoot"));
        }	  
        if($(this).find(":checked").data("refSd") != undefined) {
          $("#refSd").val($(this).find(":checked").data("refSd"));
        }
        if($(this).find(":checked").data("dispositif") != undefined) {
          $("#dispositif").val($(this).find(":checked").data("dispositif"));
        }
        if($(this).find(":checked").data("campagne") != undefined) {
          $("#campagne").val($(this).find(":checked").data("campagne"));
        }
        if($(this).find(":checked").data("shoot") != undefined) {
          $("#shoot").val($(this).find(":checked").data("shoot"));
        }
      });
      return(true);
    });
  });