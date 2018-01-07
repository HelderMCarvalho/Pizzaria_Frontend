//Ingredient Slider
$('.btn-toggle').click(function () {
    $(this).parent().children('div.form-group').children('input').toggle().val(0).next('.buttonAddIngredient').toggle().next('.buttonRemoveIngredient').toggle();
});
$('.buttonAddIngredient').click(function () {
    if($(this).prevAll('input').val()<10){
        $(this).prevAll('input').val(eval(+$(this).prevAll('input').val()+1));
    }
});
$('.buttonRemoveIngredient').click(function () {
    if($(this).prevAll('input').val()>0){
        $(this).prevAll('input').val(eval(+$(this).prevAll('input').val()-1));
    }
});

//Quantity of Pizzas
$('#buttonAddQuantity').click(function () {
    if($('#inputQuantity').val()<10){
        $('#inputQuantity').val(eval(+$('#inputQuantity').val()+1));
    }
});
$('#buttonRemoveQuantity').click(function () {
    if($('#inputQuantity').val()>1){
        $('#inputQuantity').val(eval(+$('#inputQuantity').val()-1));
    }
});

//Remover Pizza do Carrinho
$('.removeFromCart').click(function(event) {
    $(this).closest('li').remove();
    event.stopPropagation();
});

//Calcular Preço da Pizza
var anterior;
$('select.form-control').focus(function () {
    anterior = parseInt($(this).find('option:selected').attr('price'));
    // alert($(this).val());
    // alert($(this).find('option:selected').attr('price'));
}).change(function () {
    var price = parseInt($('#price').text()) + parseInt($(this).find('option:selected').attr('price')) - anterior;
    $('#price').html(price);
    anterior = parseInt($(this).find('option:selected').attr('price'));
    // alert($(this).val());
    // alert($(this).find('option:selected').attr('price'));
});

//Fazer Adicionar ao carrinho (falta somar ao preço os ingredientes)