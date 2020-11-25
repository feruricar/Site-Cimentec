  
// ScroolToTop
$(document).ready(function(){
	// $(window).scroll(function(){
	// 	if ($(this).scrollTop() > 100) {
	// 		$('.scrollToTop').fadeIn();
	// 	} else {
	// 		$('.scrollToTop').fadeOut();
	// 	}
	// });
	$('.scrollToTop').click(function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});



	$("#form-interesse").submit( function(event){
  	event.preventDefault();
  	var dados = new FormData($('#form-interesse')[0]);
		$.ajax({
			type: 'post',
			url: base_url + "enviainteresse",
			data: dados,
      contentType: false,
      processData: false,
			beforeSend: function(data){
				$('#form-interesse').hide();
				$('#msg-status-interesse').html('Enviando. Aguarde.');
				$('#msg-status-interesse').show();
			},
			success: function (data) {
				if(data == 'ok'){
					$('#msg-status-interesse').html('Seus dados foi encaminhado com sucesso!<br>Em breve, lhe retornaremos.');
				  gtag('event', 'conversion', {
				     'send_to': 'AW-880877119/QcmtCJKWw8wBEL-8hKQD'
				  });
				}else{
					$('#msg-status-interesse').html(data);
					$('#msg-status-interesse').show();
					$('#form-interesse').show();
					setTimeout(function(){
						$('#msg-status-interesse').hide();
					},5000);
				}
			},
			error: function(){
				$('#form-interesse').show();
				alert('Erro ao gravar os dados. Tente novamente.');
			}
		});
	});



	$("#form-ligamospravc").submit( function(event){
  	event.preventDefault();
		$.ajax({
			type: 'post',
			url: base_url + "envialigamospravc",
			data: $('#form-ligamospravc').serialize(),
			beforeSend: function(data){
				$('#form-ligamospravc').hide();
				$('#msg-status-ligamospravc').html('Enviando. Aguarde.');
				$('#msg-status-ligamospravc').show();
			},
			success: function (data) {
				if(data == 'ok'){
					$('#msg-status-ligamospravc').html('Seus dados foi encaminhado com sucesso!<br>Em breve, lhe retornaremos.');
					gtag('event', 'conversion', {
			      'send_to': 'AW-880877119/mHHPCLyWp8wBEL-8hKQD'
			  	});
				}else{
					$('#msg-status-ligamospravc').html(data);
					$('#msg-status-ligamospravc').show();
					$('#form-ligamospravc').show();
					setTimeout(function(){
						$('#msg-status-ligamospravc').hide();
					},5000);
				}
			},
			error: function(){
				$('#form-ligamospravc').show();
				alert('Erro ao gravar os dados. Tente novamente.');
			}
		});
	});


	$('#btn-maisfotos').click(function(e) {
		maisfotos(e);
	});


	function maisfotos (e){
		var id = $(e.target).data('id');
		$(e.target).parent().remove();
		$('.lista-'+id).show();
		if($('#btn-'+(id+1)).length){
			$('#btn-'+(id+1)).show().click(function (e){ maisfotos(e); });
		}
	}

	
	$("#form-atendimentoemail").submit( function(event){
  	event.preventDefault();
		$.ajax({
			type: 'post',
			url: base_url + "enviaatendimentoemail",
			data: $('#form-atendimentoemail').serialize(),
			beforeSend: function(data){
				$('#form-atendimentoemail').hide();
				$('#msg-status-atendimentoemail').html('Enviando. Aguarde.');
				$('#msg-status-atendimentoemail').show();
			},
			success: function (data) {
				if(data == 'ok'){
					$('#msg-status-atendimentoemail').html('Seus dados foi encaminhado com sucesso!<br>Em breve, lhe retornaremos.');
					gtag('event', 'conversion', {
			      'send_to': 'AW-880877119/26nECKKUw8wBEL-8hKQD'
			    });
				}else{
					$('#msg-status-atendimentoemail').html(data);
					$('#msg-status-atendimentoemail').show();
					$('#form-atendimentoemail').show();
					setTimeout(function(){
						$('#msg-status-atendimentoemail').hide();
					},5000);
				}
			},
			error: function(){
				$('#form-atendimentoemail').show();
				alert('Erro ao gravar os dados. Tente novamente.');
			}
		});
	});

	$("#form-contato").submit( function(event){
  	event.preventDefault();
		$.ajax({
			type: 'post',
			url: base_url + "enviacontato",
			data: $('#form-contato').serialize(),
			beforeSend: function(data){
				$('#form-contato').hide();
				$('#msg-status-faleconosco').html('Enviando. Aguarde.');
				$('#msg-status-faleconosco').show();
			},
			success: function (data) {
				if(data == 'ok'){
					$('#msg-status-faleconosco').html('Sua mensagem foi encaminhada com sucesso!<br>Em breve, lhe retornaremos.');
					gtag('event', 'conversion', {
			      'send_to': 'AW-880877119/HcksCMTDtWcQv7yEpAM'
				  });
				}else{
					$('#msg-status-faleconosco').html(data);
					$('#msg-status-faleconosco').show();
					$('#form-contato').show();
					setTimeout(function(){
						$('#msg-status-faleconosco').hide();
					},5000);
				}
			},
			error: function(){
				$('#form-contato').show();
				alert('Erro ao gravar os dados. Tente novamente.');
			}
		});
	});

	$("#form-trabalhe").submit( function(event){
  	event.preventDefault();
  	var dados = new FormData($('#form-trabalhe')[0]);
		$.ajax({
			type: 'post',
			url: base_url + "enviatrabalhe",
			data: dados,
      contentType: false,
      processData: false,
			beforeSend: function(data){
				$('#form-trabalhe').hide();
				$('#msg-status-trabalhe').html('Enviando. Aguarde.');
				$('#msg-status-trabalhe').show();
			},
			success: function (data) {
				if(data == 'ok'){
					$('#msg-status-trabalhe').html('Seu curriculo foi encaminhado com sucesso!<br>Em breve, lhe retornaremos.');
				}else{
					$('#msg-status-trabalhe').html(data);
					$('#msg-status-trabalhe').show();
					$('#form-trabalhe').show();
					setTimeout(function(){
						$('#msg-status-trabalhe').hide();
					},5000);
				}
			},
			error: function(){
				$('#form-trabalhe').show();
				alert('Erro ao gravar os dados. Tente novamente.');
			}
		});
	});

	$("#form-orcamento").submit( function(event){
  	event.preventDefault();
  	var dados = new FormData($('#form-orcamento')[0]);
		$.ajax({
			type: 'post',
			url: base_url + "enviaorcamento",
			data: dados,
      contentType: false,
      processData: false,
			beforeSend: function(data){
				$('#form-orcamento').hide();
				$('#msg-status-orcamento').html('Enviando. Aguarde.');
				$('#msg-status-orcamento').show();
			},
			success: function (data) {
				if(data == 'ok'){
					$('#msg-status-orcamento').html('Seu pedido de orçamento foi encaminhado com sucesso!<br>Em breve, lhe retornaremos.');
				}else{
					$('#msg-status-orcamento').html(data);
					$('#msg-status-orcamento').show();
					$('#form-orcamento').show();
					setTimeout(function(){
						$('#msg-status-orcamento').hide();
					},5000);
				}
			},
			error: function(){
				$('#form-orcamento').show();
				alert('Erro ao gravar os dados. Tente novamente.');
			}
		});
	});

	$('#obras .nav-link').click(function(e){
		$('#obras .nav-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
		var id = $(this).data('id');
		if(id == 't'){
			$('#obras .lista .itens').show();
		}else{
			$('#obras .lista .itens.cat-'+id).show();
			$('#obras .lista .itens:not(.cat-'+id+')').hide();
		}
	});

	$('.data').inputmask('99/99/9999',{ "placeholder": "dd/mm/yyyy" });
  $('.telefone').inputmask('(99) 9999[9]-9999');
  $('.cep').inputmask('99999-999');
  $('.cpf').inputmask('999.999.999-99');

});


'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));

function whatsapp(){
	gtag('event', 'conversion', {
    'send_to': 'AW-880877119/wxqwCOiMw8wBEL-8hKQD'
  });
  window.open("https://wa.me/5543999285395");
}
