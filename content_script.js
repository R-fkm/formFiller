

console.log(document);

//let form_items = document.querySelectorAll(".form__item");
let form_items = document.getElementsByClassName("form__item");
for(let i = 0; i < form_items.length; i++){
  let form_row = form_items[i];
  form_row.style.color = 'red';

  console.log(form_row);
  console.log(form_row.getElementsByClassName("form__item__title")[0].innerHTML);
 

  form_row_title = form_row.getElementsByClassName("form__item__title")[0].innerHTML;
  form_group = form_row.getElementsByClassName("form__item__group");
  console.log(form_group)
  console.log('start_iter');
  for(let j=0; j < form_group.length; j++){
    let form_parts = form_group[j];
    console.log('form_parts');
    console.log(form_parts);
  }
  console.log('end_iter');

  //console.log(form.keys(form.keys(), form.values()));
}


