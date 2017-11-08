(function($){
    $.whatsappChat = function(selector, settings){
        var config = {
            'topMessage': 'Olá! Clique em um de nossos representantes abaixo e nós retornaremos assim que possível.';
            'urlImg': 'http://localhost/contato-whatsapp/assets/img/attendant.png';
        };
        if ( settings ){$.extend(config, settings);}

        var obj = $(selector);

        

        return this;
    };
})(jQuery);