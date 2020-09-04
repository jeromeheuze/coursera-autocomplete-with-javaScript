let shippingName_field = document.getElementById('shippingName');
let shippingZip_field = document.getElementById('shippingZip');
let is_same_checkbox = document.getElementById('same');
let billingName_field = document.getElementById('billingName');
let billingZip_field = document.getElementById('billingZip');

function billingFunction() {
  if (is_same_checkbox.checked === true) {
    //checked populate fields
    if (shippingName_field.value !== '') {
      billingName_field.value = shippingName_field.value;
    }
    if (shippingZip_field.value !== '') {
      billingZip_field.value = shippingZip_field.value;
    }
  } else {
    //unchecked clear fields
    billingName_field.value = '';
    billingZip_field.value = '';
  }
}
