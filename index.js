$(document).ready(function(){

  $( "#accordion" ).accordion({
    header: "h3",
    heightStyle: "content",
    collapsible: true,
    active: false,
    animate: 200,
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });
});