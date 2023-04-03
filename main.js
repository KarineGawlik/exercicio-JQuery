$(document).ready(function() {
    $('.nova-tarefa-botao').click(function() {
        if ($('.nova-tarefa-input').val().length != 0) {
            var x = $('.tarefas-container').html();
            var y = 
                `<div class="alert alert-success alert-dismissible fade in">
                <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
                ` + $('.nova-tarefa-input').val() + `</div>`;
                $('.tarefas-container').html(y + x);
                $('.nova-tarefa-input').val("");
        } else alert("Digite uma tarefa!");
    });


    $(document).on('click', '.alert', function() {
        if ($(this).css('text-decoration-line') == "none")
            $(this).css('text-decoration-line', 'line-through');
        else
            $(this).css('text-decoration-line', 'none');
    });
});