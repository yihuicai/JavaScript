var color='';
var int='';
var blink=false;
var colorbox=['cyan','yellow','magenta'];
function main(){
  
  $('.toggle-blink').on('click',function(){
    if(blink===false){
      int=setInterval(function(){
        $('.box.cyan').toggleClass('blink');
        $('.box.yellow').toggleClass('blink');
        $('.box.magenta').toggleClass('blink');
      },100);
      blink=true;
    }
    else{
      clearInterval(int);
      blink=false;
    } 
    $(this).toggleClass('opacity');

  });
  $('.select-color').on('click',function(){
    var selectedColor=$(this).attr('class');
    switch(selectedColor){
      case 'select-color cyan not-selected': color='cyan';
        break;
      case 'select-color yellow not-selected': color='yellow';
        break;
      case 'select-color magenta not-selected': color='magenta';
        break;
      }
    $(this).toggleClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });
  $('.box').on('click',function(){
   for(var i=0;i<colorbox.length;i++){
     if(color===colorbox[i]) continue;
     $(this).removeClass(colorbox[i]);
   }
   $(this).toggleClass(color);
   
 });
}
$(document).ready(main);

