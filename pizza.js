var order='pizza';
var orderCount=0;
function takeOrder(topping,crustType){
  if(order==='pizza'){
     console.log('Order: '+crustType+' pizza topped with ' +topping);
   orderCount++;
     }
}
function getSubTotal(itemCount){
  return itemCount*7.5;
}
function getTax(){
  return getSubTotal(orderCount)*0.06;
}
function getTotal(){
  return getSubTotal(orderCount)+getTax();
}

takeOrder('steak','crispy crust');
takeOrder('sausage','thin crust');
takeOrder('chicken','soft crust');
console.log(getSubTotal(orderCount));
console.log(getTotal());
