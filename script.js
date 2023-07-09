// document.onclick = function(e){
//     console.log(e.clientX)
//     console.log(e.clientY) 
// }

// elem.onclick = function(e){
//     console.log(e)
// }

document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    // При изменении состояния чекбоксов
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        var tag = this.id; // Получаем значение атрибута 'id' чекбокса
        var divs = document.querySelectorAll('div[data-tag="' + tag + '"]');
  
        // Если чекбокс отмечен, отображаем соответствующий <div>
        if (this.checked) {
          divs.forEach(function(div) {
            div.style.display = 'grid';
          });
        } else {
          divs.forEach(function(div) {
            div.style.display = 'none';
          });
        }
      });
    });
  });
