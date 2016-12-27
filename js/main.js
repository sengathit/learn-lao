(function($){
	$(document).ready(function(){
		var button$ = $('button');
		var navigation$ = $('#navigation');
		var viewport$ = $('#viewport');
		var carousel_box$ = $('#carousel_box');
		var carousel_len = 0;
		var toggle$ = $('.toggle');
		var liveText;
		var vX = $(window).width();
		var vY = $(window).height();
		var consonant1 = $('#c1-btn');
		var consonant2 = $('#c2-btn');
		var consonant3 = $('#c3-btn');
		var consonant4 = $('#c4-btn');
		var consonant5 = $('#c5-btn');
		var consonant6 = $('#c6-btn');
		var vowel1 = $('#v1-btn');
		var vowel2 = $('#v2-btn');
		var vowel3 = $('#v3-btn');
		var vowel4 = $('#v4-btn');
		var counter = 1;
		var navWidth = 0;
		var ALPHABETS_PATH = './resources/lao-alphabets.json';

		viewport$.css({
			height : vY + 'px',
			width : vX + 'px',
			overflow: 'hidden',
			position: 'absolute' 
		});

		$.getJSON(ALPHABETS_PATH,function(data){
			$.each(data,function(key,value){
				if(key === 'consonants1'){
					consonant1.text(key);
					for(var i = 0; i < value.length;i++){
						carousel_len = value.length;
						var p$ = $('<div><p class="htmlcode">' + value[i].htmlcode + '</p><p class="name">' + value[i].name + '</p></div>');
						p$.css({
							height: vY + 'px',
							position: 'absolute',
							width: vX + 'px',
							top: 0,
							left: (i * vX) + 'px'
						});
						carousel_box$.css({
							width: (carousel_len * vX) + 'px'
						});
						carousel_box$.append(p$);
					}
				}
				if(key === 'consonants2'){
					consonant2.text(key);
				}
				if(key === 'consonants3'){
					consonant3.text(key);
				}
				if(key === 'consonants4'){
					consonant4.text(key);
				}
				if(key === 'consonants5'){
					consonant5.text(key);
				}
				if(key === 'consonants6'){
					consonant6.text(key);
				}
				if(key === 'vowels1'){
					vowel1.text(key);
				}
				if(key === 'vowels2'){
					vowel2.text(key);
				}
				if(key === 'vowels3'){
					vowel3.text(key);
				}
				if(key === 'vowels4'){
					vowel4.text(key);
				}
			});
		});

		button$.click(function(){
			$('.toggle.left').addClass('inactive');
			$('.toggle.right').removeClass('inactive');
			button$.removeClass('active-set');
			$(this).addClass('active-set');
			counter = 1;
			carousel_box$.empty();
			var clicked = $(this).text();
			$.getJSON(ALPHABETS_PATH,function(data){
				$.each(data,function(key,value){
					getAlphabets(key,value,clicked);
				})
			});
		});

		toggle$.on('click',function(){
			if($(this).hasClass('right')){
				if(counter < carousel_len){
					$('.toggle.left').removeClass('inactive');
					counter++;
					$(this).addClass('active');
					carousel_box$.animate({
						left : '-=' + vX
					},500,'swing',function(){

					});
					if(counter === carousel_len){
						$(this).addClass('inactive');
					}
				}
			}else if($(this).hasClass('left')){
				if(counter > 1){
					$('.toggle.right').removeClass('inactive');
					counter--;
					carousel_box$.animate({
						left : '+=' + vX
					},500,'swing',function(){
						
					});
					if(counter === 1){
						$(this).addClass('inactive');
					}
				}
			}
		})

		function getAlphabets(key,value,clicked){
			carousel_box$.css({
				left: 0
			});
			if(key === clicked){
				if(key !== 'vowels2'){
					for(var i = 0; i < value.length;i++){
						carousel_len = value.length;
						var p$ = $('<div><p class="htmlcode">' + value[i].htmlcode + '</p><p class="name">' + value[i].name + '</p></div>');
						p$.css({
							height: vY + 'px',
							position: 'absolute',
							width: vX + 'px',
							top: 0,
							left: (i * vX) + 'px'
						});
						carousel_box$.css({
							width: (carousel_len * vX) + 'px'
						});
						carousel_box$.append(p$);
					}
				}else{
					for(var i = 0; i < value.length;i++){
						carousel_len = value.length;
						var p$ = $('<div><p class="htmlcode-v2">' + value[i].htmlcode + '</p><p class="sub-text">X</p><p class="name-v2">' + value[i].name + '</p></div>');
						p$.css({
							height: vY + 'px',
							position: 'absolute',
							width: vX + 'px',
							top: 0,
							left: (i * vX) + 'px'
						});
						carousel_box$.css({
							width: (carousel_len * vX) + 'px'
						});
						carousel_box$.append(p$);
					}
				}
			}
		}
	});
})(jQuery);