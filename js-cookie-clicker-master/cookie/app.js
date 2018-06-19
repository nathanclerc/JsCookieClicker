var clic =$('#clickme');
var autoclic=$('#autoclick');
var div = $('#display');
var multiply= $('#multiply');
var bonus = $('#')
var compteur = 1;
var score = 0;
var mult= 50;
var auto = 0;
var prixauto=200;

clic.click( function(){
	score = score+1 *compteur;
	div.html(score);

});

multiply.click( function incrementer(){
	
	if(score>=mult){
		compteur ++;
		score = score - mult;
		mult = mult * 2;
		div.html(score);
		multiply.html('Multiplicateur x' + compteur + ' Prix ' + mult);
	} else{
		alert('Votre score est insuffisant!');
	}
});

autoclic.click(function(){
	if (score>=500) {
		auto++;
		score = score - prixauto;
		$(this).prop("disabled",true);
		setInterval(function(){
			 score = score +auto;
			 div.html(score);
		}, 1000);
	}
	else {
			alert('Votre score est insuffisant');
		}
	div.html(score);
});
