function billingFuction(){

  if (document.querySelector('same').checked)
   {

   var name = document.querySelector('shipppingName').value;
   var zip = document.querySelector('shippingZip').value;
    
    document.querySelector('billingName').value = name;
    document.querySelector('billingZip').value = zip;
   }


  else
   {

    document.querySelector('#billingName').value = "";
    document.querySelector('#billingZip').value = "";

   }
}