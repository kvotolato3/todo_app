$(document).ready(function(){

  // Global Handler that fires at the begining of each Ajax Request
  $(document).ajaxStart(function(){
    // Will execute at the start of each ajax call
    $('#ajaxSpinnerImage').show();

  }).ajaxStop(function(){
    // Will execute at the end of each ajax call
    $('#ajaxSpinnerImage').hide();
  }).ajaxError(function(event, request, settings){
    // Fires when an ajax error occurs
    $('#msg').append("<p>Error Requesting page " + settings.url + "</p>");
  });
});
