//Soked Sausage
$('#buttonSmokedSausage').click(function () {
    $('#inputSmokedSausage').toggle().val(0);
    $('#buttonAddSmokedSausage').toggle();
    $('#buttonRemoveSmokedSausage').toggle();
});
$('#buttonAddSmokedSausage').click(function () {
    if($('#inputSmokedSausage').val()<10){
        $('#inputSmokedSausage').val(eval(+$('#inputSmokedSausage').val()+1));
    }
});
$('#buttonRemoveSmokedSausage').click(function () {
    if($('#inputSmokedSausage').val()>0){
        $('#inputSmokedSausage').val(eval(+$('#inputSmokedSausage').val()-1));
    }
});

//Potato Dipper
$('#buttonPotatoDipper').click(function () {
    $('#inputPotatoDipper').toggle().val(0);
    $('#buttonAddPotatoDipper').toggle();
    $('#buttonRemovePotatoDipper').toggle();
});
$('#buttonAddPotatoDipper').click(function () {
    if($('#inputPotatoDipper').val()<10){
        $('#inputPotatoDipper').val(eval(+$('#inputPotatoDipper').val()+1));
    }
});
$('#buttonRemovePotatoDipper').click(function () {
    if($('#inputPotatoDipper').val()>0){
        $('#inputPotatoDipper').val(eval(+$('#inputPotatoDipper').val()-1));
    }
});

//Bacon
$('#buttonBacon').click(function () {
    $('#inputBacon').toggle().val(0);
    $('#buttonAddBacon').toggle();
    $('#buttonRemoveBacon').toggle();
});
$('#buttonAddBacon').click(function () {
    if($('#inputBacon').val()<10){
        $('#inputBacon').val(eval(+$('#inputBacon').val()+1));
    }
});
$('#buttonRemoveBacon').click(function () {
    if($('#inputBacon').val()>0){
        $('#inputBacon').val(eval(+$('#inputBacon').val()-1));
    }
});

//Ham
$('#buttonHam').click(function () {
    $('#inputHam').toggle().val(0);
    $('#buttonAddHam').toggle();
    $('#buttonRemoveHam').toggle();
});
$('#buttonAddHam').click(function () {
    if($('#inputHam').val()<10){
        $('#inputHam').val(eval(+$('#inputHam').val()+1));
    }
});
$('#buttonRemoveHam').click(function () {
    if($('#inputHam').val()>0){
        $('#inputHam').val(eval(+$('#inputHam').val()-1));
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