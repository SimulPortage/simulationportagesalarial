function handleButtonClick(e) {
	let selectValue = document.getElementById("type-psp").value;
	
	if (selectValue === "psp-uk") {
		cal(e);
		masquer_div('section-simulation-fr');
		afficher_div('section-simulation-7');
	} 
	if (selectValue === "psp-fr") {
		calBrut(e);
		masquer_div('section-simulation-7');
		afficher_div('section-simulation-fr');
	}
}

function afficher_div(id) {
	if (document.getElementById(id).style.display == '')
  {
       document.getElementById(id).style.display = 'block';
  } 
}

function masquer_div(id) {
	if (document.getElementById(id).style.display == 'block')
  {
       document.getElementById(id).style.display = '';
  } 
}

function copGeneral() {
	let nomRecup = document.getElementById('node').value;
	let z7 = (118.35 * 10) / 7890 ;
	let nbJourRecup = document.getElementById('Nb-de-Jour').value;
	let jtmRecup = document.getElementById('Tjm').value;
	let kmRecup = document.getElementById('Nb-de-km-jour').value;
	let cvRecup = document.getElementById('Nb-de-CV-fiscaux').value;
	let typePsp = document.getElementById('type-psp').value;
}

function cal(e) {
	e.preventDefault();
	let nbJourParMois = parseInt(document.getElementById('Nb-de-Jour').value);
	let x1 = (118.35 * 10) / 7890 ;
	let nbCvFx = parseInt(document.getElementById('Nb-de-CV-fiscaux').value);
	let nbKmParjour = parseInt(document.getElementById('Nb-de-km-jour').value);
	let nom = document.getElementById("node").value;
	let tjm = document.getElementById("Tjm").value;
	let tjmParMois = parseInt(tjm) * nbJourParMois;
	let nbKmParMois = nbKmParjour * nbJourParMois;
	let x2 = tjmParMois * x1;
	let x3 = tjmParMois - x2;
	let fraisKm;
	let fraisRepas = 18 * nbJourParMois;
	let x4;
	let totalFrais;
	let salaireNetImposable = 2200 ; 
	let salaireNetImposableAnnuel = salaireNetImposable * 12;
	let salaireBMajoreDixPourcent = salaireNetImposable / 0.77;
	let salaireBMajoreDixPourcentArondi = salaireBMajoreDixPourcent.toFixed(2);
	let salaireBrut = salaireBMajoreDixPourcentArondi / 1.1;
	let salaireBArondi = salaireBrut.toFixed(2);
	let salaireBrutAnnuel = salaireBrut * 12;
	let salaireBAnArondi = salaireBrutAnnuel.toFixed(2);
	let chargesPatronales = salaireBMajoreDixPourcent * 0.43;
	let chargesPatronalesArondi = chargesPatronales.toFixed(2);
	let coutEmployeur = salaireBMajoreDixPourcent + chargesPatronales;
	let coutEmployeurArondi = coutEmployeur.toFixed(2);
	let chargesSalariales = salaireBMajoreDixPourcent - salaireNetImposable;
	let chargesSalarialesArondi = chargesSalariales.toFixed(2);
	let revenuNetFr;
	let x5;
	let x6;
	let x7;
	let x8;
	let remunerationTotale;
	let tauxDeRemuneration;
	if(nbKmParMois <= 5000) {
		fraisKm = dispatch(nbCvFx, nbKmParMois);
	} else if(nbKmParMois <= 20000) {
		fraisKm = dispatch(nbCvFx, nbKmParMois);
	} else {
		fraisKm = dispatch(nbCvFx, nbKmParMois);
	}
	totalFrais = fraisRepas + fraisKm;
	totalFraisArondi = totalFrais.toFixed(2);
	if(x3 > totalFrais) {
		revenuNetFr = salaireNetImposable + totalFrais;
		revenuNetFrArondi = revenuNetFr.toFixed(2);
		x4 = x3 - totalFrais;
		x5 = x4 - coutEmployeur;
		console.log(x5);
		x9 = x5.toFixed(2);
		console.log(x9);
		x6 = x5 * 0.10;
		console.log(x6);
		x10 = x6.toFixed(2);
		console.log(x10);
		x7 = x5 - x6;
		console.log(x7);
		x11 = x7.toFixed(2);
		console.log(x11);
		x8 = x7 * 12;
		console.log(x8);
		x12 = x8.toFixed(2);
		remunerationTotale = revenuNetFr + x7;
		remuTotaleArondi = remunerationTotale.toFixed(2);
		remunerationTotaleAnnuel = remunerationTotale * 12;
		remuTotaleAnArondi = remunerationTotaleAnnuel.toFixed(2);
		tauxDeRemuneration = remunerationTotale / tjmParMois * 100;
		tauxDeRemuArondi = tauxDeRemuneration.toFixed(2) ; 
	}
	/*if(tjm > 0 || nbKmParjour >= 0 && nbCvFx >= 0) {
	  document.getElementById('resultat').style.display = 'none';
	  document.getElementById('div-resultats').style.display = 'none';
	  document.getElementsByClassName('lds-default')[0].style.display = 'flex';
	  setTimeout(function() {*/
		document.getElementById('nom7').innerHTML = nom ; 
		document.getElementById('remuTotaleArondi7').innerHTML = remuTotaleArondi + "€"; 
		document.getElementById('tauxDeRemuArondi7').innerHTML = tauxDeRemuArondi + "%"; 
		
		document.getElementById('nom').innerHTML = nom ;  
		document.getElementById('tjm').innerHTML = tjm + "€"; 
		document.getElementById('nbJourParMois').innerHTML = nbJourParMois ; 
		document.getElementById('tjmParMois').innerHTML = tjmParMois + "€"; 
		document.getElementById('salaireBArondi').innerHTML = salaireBArondi + "€"; 
		document.getElementById('salaireBAnArondi').innerHTML = salaireBAnArondi + "€"; 
		document.getElementById('salaireNetImposable').innerHTML = salaireNetImposable + "€"; 
		document.getElementById('salaireNetImposableAnnuel').innerHTML = salaireNetImposableAnnuel + "€"; 
		document.getElementById('totalFrais').innerHTML = totalFrais + "€"; 
		document.getElementById('revenuNetFr').innerHTML = revenuNetFr + "€"; 
		document.getElementById('x11').innerHTML = x11 + "€"; 
		document.getElementById('x12').innerHTML = x12 + "€"; 
		document.getElementById('remuTotaleArondi').innerHTML = remuTotaleArondi + "€"; 
		document.getElementById('remuTotaleAnArondi').innerHTML = remuTotaleAnArondi + "€"; 
		document.getElementById('tauxDeRemuArondi').innerHTML = tauxDeRemuArondi + "%"; 
		
	function dispatch(cv, nbkmMois) {
		switch (cv) {
			case 1:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.502
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.3) + 1007
				} else {
					return nbkmMois * 0.35
				}
				break;
			case 2:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.502
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.3) + 1007
				} else {
					return nbkmMois * 0.35
				}
				break;
			case 3:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.502
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.3) + 1007
				} else {
					return nbkmMois * 0.35
				}
				break;
			case 4:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.575
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.323) + 1262
				} else {
					return nbkmMois * 0.387
				}
				break;
			case 5:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.603
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.339) + 1320
				} else {
					return nbkmMois * 0.405
				}
				break;
			case 6:
				if(nbkmMois <= 5000) {
					return (nbkmMois * 0.631)
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.355) + 1382
				} else {
					return nbkmMois * 0.425
				}
				break;
			default:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.661
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.374) + 1435
				} else {
					return nbkmMois * 0.446
				}
		}
	}
}



function calBrut(e) {
	e.preventDefault();
	let nbJourParMois = parseInt(document.getElementById('Nb-de-Jour').value);
	let x1 = (118.35 * 10) / 7890 ;
	let nbCvFx = parseInt(document.getElementById('Nb-de-CV-fiscaux').value);
	let nbKmParjour = parseInt(document.getElementById('Nb-de-km-jour').value);
	let nom = document.getElementById("node").value;
	let tjm = document.getElementById("Tjm").value;
	
	let tjmParMois = parseInt(tjm) * nbJourParMois;
	let x2 = tjmParMois * x1;
	let x3 = tjmParMois - x2;
	
	let nbKmParMois = nbKmParjour * nbJourParMois;
	let fraisKm = dispatch(nbCvFx, nbKmParjour, nbJourParMois);
	let fraisRepas = 18 * nbJourParMois;
	let totalFrais = fraisRepas + fraisKm;
	let totalFraisArondi = totalFrais.toFixed(2);
	
	let x4 = x3 - totalFrais;
	
	let salaireBMajoreDixPourcent = x4 * 0.69 ;
	let salaireBMajoreDixPourcentArondi = salaireBMajoreDixPourcent.toFixed(2);
	
	let chargesPatronales = salaireBMajoreDixPourcent * 0.44;
	let chargesPatronalesArondi = chargesPatronales.toFixed(2);
	
	let coutEmployeur = salaireBMajoreDixPourcent + chargesPatronales;
	let coutEmployeurArondi = coutEmployeur.toFixed(2);
	
	let variable = x4 - coutEmployeurArondi ; 
	let variableArondi = variable.toFixed(2);
	
	let salaireBrut = salaireBMajoreDixPourcentArondi / 1.1;
	let salaireBArondi = salaireBrut.toFixed(2);
	let salaireBrutAnnuel = salaireBrut * 12;
	let salaireBAnArondi = salaireBrutAnnuel.toFixed(2);
		
	let chargesSalariales = salaireBMajoreDixPourcent * 0.24 ;
	let chargesSalarialesArondi = chargesSalariales.toFixed(2);
	
	let salaireNetImposable = salaireBMajoreDixPourcentArondi - chargesSalarialesArondi ;
	let salaireNetImposableArondi = salaireNetImposable.toFixed(2);
	let salaireNetImposableAnnuel = salaireNetImposable * 12;
	let salaireNetImposableAnnuelArondi = salaireNetImposableAnnuel.toFixed(2);
	
	let salaireNetAPayer = salaireNetImposable + totalFrais;
	let salaireNetAPayerArondi = salaireNetAPayer.toFixed(2);
	
	let remunerationTotale = salaireNetAPayer + variable ; 
	let remuTotaleArondi = remunerationTotale.toFixed(2);
	
	let remunerationTotaleAnnuel = remunerationTotale * 12 ; 
	let remuTotaleAnArondi = remunerationTotaleAnnuel.toFixed(2);
	
	let tauxDeRemuneration = remunerationTotale / tjmParMois * 100 ; 
	let tauxDeRemuArondi = tauxDeRemuneration.toFixed(2);
	
	 
	
	/*if(tjm > 0 || nbKmParjour >= 0 && nbCvFx >= 0) {
	  document.getElementById('resultat').style.display = 'none';
	  document.getElementById('div-resultats').style.display = 'none';
	  document.getElementsByClassName('lds-default')[0].style.display = 'flex';
	  setTimeout(function() {*/
		document.getElementById('nom777').innerHTML = nom ; 
		document.getElementById('remuTotaleArondi777').innerHTML = remuTotaleArondi + "€"; 
		document.getElementById('tauxDeRemuArondi777').innerHTML = tauxDeRemuArondi + "%"; 
		
		document.getElementById('nom777').innerHTML = nom ;  
		document.getElementById('tjm777').innerHTML = tjm + "€"; 
		document.getElementById('nbJourParMois777').innerHTML = nbJourParMois ; 
		document.getElementById('tjmParMois777').innerHTML = tjmParMois + "€"; 
		document.getElementById('salaireBArondi777').innerHTML = salaireBArondi + "€"; 

		document.getElementById('salaireNetImposable777').innerHTML = salaireNetImposableArondi + "€"; 

		document.getElementById('totalFrais777').innerHTML = totalFraisArondi + "€"; 
		document.getElementById('revenuNetFr777').innerHTML = salaireNetAPayerArondi + "€"; 

		document.getElementById('remuTotaleArondi777').innerHTML = remuTotaleArondi + "€"; 
		document.getElementById('remuTotaleAnArondi777').innerHTML = remuTotaleAnArondi + "€"; 
		document.getElementById('tauxDeRemuArondi777').innerHTML = tauxDeRemuArondi + "%"; 
		
		
	 
		
	function dispatch(cv, nbkmMois) {
		switch (cv) {
			case 1:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.502
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.3) + 1007
				} else {
					return nbkmMois * 0.35
				}
				break;
			case 2:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.502
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.3) + 1007
				} else {
					return nbkmMois * 0.35
				}
				break;
			case 3:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.502
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.3) + 1007
				} else {
					return nbkmMois * 0.35
				}
				break;
			case 4:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.575
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.323) + 1262
				} else {
					return nbkmMois * 0.387
				}
				break;
			case 5:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.603
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.339) + 1320
				} else {
					return nbkmMois * 0.405
				}
				break;
			case 6:
				if(nbkmMois <= 5000) {
					return (nbkmMois * 0.631)
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.355) + 1382
				} else {
					return nbkmMois * 0.425
				}
				break;
			default:
				if(nbkmMois <= 5000) {
					return nbkmMois * 0.661
				} else if(nbkmMois <= 20000) {
					return (nbkmMois * 0.374) + 1435
				} else {
					return nbkmMois * 0.446
				}
		}
	}
}




document.addEventListener('keypress', function(e) {
	if(e.keyCode === 13 || e.which === 13) {
		e.preventDefault();
		return false;
	}
});




function generatePDF() {
	var element = document.getElementById('simulation-777');
	var element2 = document.getElementById('pdf-text');
	var nom = document.getElementById('node').value;
	var tjm = document.getElementById('Tjm').value;
	var width777 = document.getElementById('simulation-777').offsetWidth ; 
	var height777 = document.getElementById('simulation-777').offsetHeight ; 
	var opt = {
		filename: nom + '_' + tjm + '_' + '1.pdf',
		image: {
			type: 'jpg',
			quality: 0.99
		},
		html2canvas: {
			dpi: 192,
			letterRendering: true,
			useCORS: true,
			scale: 1.5,
		},
		jsPDF: {
			unit: 'pt',
			format: [width777,height777],
			orientation: 'portrait',
		}
	};
	var pdfFile = html2pdf().set(opt).from(element).toContainer().toCanvas().toPdf().save();
}

