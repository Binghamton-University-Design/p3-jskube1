/* javascript */

$(document).ready(function() {

$( ".close-icon" ).click(function() {
  $( this ).parent().fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

$( ".leaf" ).click(function() {
  $( ".leaf-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

$( ".bird" ).click(function() {
  $( ".bird-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

$( ".bark" ).click(function() {
  $( ".bark-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

$( ".root" ).click(function() {
  $( ".root-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

});