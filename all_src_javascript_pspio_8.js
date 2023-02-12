
function cal(e) {
	e.preventDefault();
	let nbJourParMois = parseInt(document.getElementById('Nb-de-Jour').value);
	let x1 = document.getElementById('Pourcent-Factu').value;
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
	let salaireNetImposable = parseInt(document.getElementById('Salaire-net-Impo').value);
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
		tauxDeRemuArondi = tauxDeRemuneration.toFixed(2)
	}
	/*if(tjm > 0 || nbKmParjour >= 0 && nbCvFx >= 0) {
	  document.getElementById('resultat').style.display = 'none';
	  document.getElementById('div-resultats').style.display = 'none';
	  document.getElementsByClassName('lds-default')[0].style.display = 'flex';
	  setTimeout(function() {*/
	areaTjm = document.getElementById('tjm');
	areanbJourParMois = document.getElementById('nbJourParMois');
	areatjmParMois = document.getElementById('tjmParMois');
	areasalaireBArondi = document.getElementById('salaireBArondi');
	areasalaireBAnArondi = document.getElementById('SalaireBAnArondi');
	areasalaireNetImposable = document.getElementById('salaireNetImposable');
	areasalaireNetImposableAnnuel = document.getElementById('salaireNetImposableAnnuel');
	areatotalFrais = document.getElementById('totalFrais');
	arearevenuNetFr = document.getElementById('revenuNetFr');
	areaparticipation = document.getElementById('x11');
	areaparticipationannuelle = document.getElementById('x12');
	arearemuTotaleArondi = document.getElementById('remuTotaleArondi');
	arearemuTotaleAnArondi = document.getElementById('remuTotaleAnArondi');
	areatauxDeRemuArondi = document.getElementById('tauxDeRemuArondi');
	
	
	areaTjm.appenChild(tjm);
	areanbJourParMois.appenChild(nbJourParMois);
	areatjmParMois.appenChild(tjmParMois);
	areasalaireBArondi.appenChild(salaireBArondi);
	areasalaireBAnArondi.appenChild(salaireBAnArondi);
	areasalaireNetImposable.appenChild(salaireNetImposable);
	areasalaireNetImposableAnnuel.appenChild(salaireNetImposableAnnuel);
	areatotalFrais.appenChild(totalFrais);
	arearevenuNetFr.appenChild(revenuNetFr);
	areaparticipation.appenChild(participation);
	areaparticipationannuelle.appenChild(participationannuelle);
	arearemuTotaleArondi.appenChild(remuTotaleArondi);
	arearemuTotaleAnArondi.appenChild(remuTotaleAnArondi);
	areatauxDeRemuArondi.appenChild(tauxDeRemuArondi);
	
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


function cal2(e) {
									e.preventDefault();
									let nbJourParMois2 = parseInt(document.getElementById('Nb-de-Jour2').value);
									let x1 = document.getElementById('Pourcent-Factu').value;
									let nbCvFx = parseInt(document.getElementById('Nb-de-CV-fiscaux').value);
									let nbKmParjour = parseInt(document.getElementById('Nb-de-km-jour').value);
									let nom = document.getElementById("node").value;
									let tjm = document.getElementById("Tjm").value;
									let tjmParMois = parseInt(tjm) * nbJourParMois2;
									let nbKmParMois = nbKmParjour * nbJourParMois2;
									let x2 = tjmParMois * x1;
									let x3 = tjmParMois - x2;
									let fraisKm;
									let fraisRepas2 = 18 * nbJourParMois2;
									let x4;
									let totalFrais2;
									let salaireNetImposable = parseInt(document.getElementById('Salaire-net-Impo').value);
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
									let revenuNetFr2;
									let x5;
									let x6;
									let x7;
									let x8;
									let remunerationTotale;
									let tauxDeRemuneration;
									let totalFraisArondi2;
									let revenuNetFrArondi2;
									let z1;
									let z2;
									let remuTotaleArondi2;
									let remuTotaleAnArondi2;
									let tauxDeRemuArondi2;
									if(nbKmParMois <= 5000) {
										fraisKm = dispatch(nbCvFx, nbKmParMois);
									} else if(nbKmParMois <= 20000) {
										fraisKm = dispatch(nbCvFx, nbKmParMois);
									} else {
										fraisKm = dispatch(nbCvFx, nbKmParMois);
									}
									totalFrais2 = fraisRepas2 + fraisKm;
									totalFraisArondi2 = totalFrais2.toFixed(2);
									if(x3 > totalFrais2) {
										revenuNetFr2 = salaireNetImposable + totalFrais2;
										revenuNetFrArondi2 = revenuNetFr2.toFixed(2);
										x4 = x3 - totalFrais2;
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
										z1 = x7.toFixed(2);
										console.log(z1);
										x8 = x7 * 12;
										console.log(x8);
										z2 = x8.toFixed(2);
										remunerationTotale = revenuNetFr2 + x7;
										remuTotaleArondi2 = remunerationTotale.toFixed(2);
										remunerationTotaleAnnuel = remunerationTotale * 12;
										remuTotaleAnArondi2 = remunerationTotaleAnnuel.toFixed(2);
										tauxDeRemuneration = remunerationTotale / tjmParMois * 100;
										tauxDeRemuArondi2 = tauxDeRemuneration.toFixed(2)
									}
									/*if (nbJourParMois2 == 0) {
            document.getElementById('resultat2').style.display = 'none';

   }else{
    if(tjm > 0 || nbKmParjour >= 0 && nbCvFx >= 0 ) {
      document.getElementById('resultat2').style.display = 'none';

      document.getElementsByClassName('lds-default')[0].style.display = 'flex';
      setTimeout(function() {*/
									document.getElementsByClassName('lds-default')[0].style.display = 'none';
									document.getElementById('resultat2').style.display = 'block';
									document.getElementById('div-resultats').style.display = 'flex';
									document.getElementById('pdf-text').style.display = 'none';
									document.getElementById('nom2').innerHTML = nom + ",";
									document.getElementById('tjm2').innerHTML = "VOTRE TJM : " + "<strong>" + tjm + " € </strong>";
									document.getElementById('nbJourParMois2').innerHTML = "VOTRE NOMBRE DE JOURS FACTURES : " + "<strong>" + nbJourParMois2 + "</strong>";
									document.getElementById('tjmParMois2').innerHTML = "VOTRE CHIFFRES D'AFFAIRES : " + "<strong>" + tjmParMois + " € </strong>";
									document.getElementById('salaireBArondi2').innerHTML = "VOTRE SALAIRE BRUT MENSUEL : " + "<strong>" + salaireBArondi + " € </strong>";
									document.getElementById('salaireBAnArondi2').innerHTML = "VOTRE SALAIRE BRUT ANNUEL : " + "<strong>" + salaireBAnArondi + " € </strong>";
									document.getElementById('salaireNetImposable2').innerHTML = "VOTRE SALAIRE NET IMPOSABLE : " + "<strong>" + salaireNetImposable + " € </strong>";
									document.getElementById('salaireNetImposableAnnuel2').innerHTML = "VOTRE SALAIRE NET IMPOSABLE ANNUEL : " + "<strong>" + salaireNetImposableAnnuel + " € </strong>";
									document.getElementById('totalFrais2').innerHTML = "VOTRE FRAIS REEL : " + "<strong>" + totalFraisArondi2 + " € </strong>";
									document.getElementById('revenuNetFr2').innerHTML = "VOTRE NET TOTALE : " + "<strong>" + revenuNetFrArondi2 + " € </strong>";
									document.getElementById('z1').innerHTML = "VOTRE PARTICIPATION : " + "<strong>" + z1 + " € </strong>";
									document.getElementById('z2').innerHTML = "VOTRE PARTICIPATION ANNUEL : " + "<strong>" + z2 + " € </strong>";
									document.getElementById('remuTotaleArondi2').innerHTML = "VOTRE REMUNERATION TOTALE : " + "<strong>" + remuTotaleArondi2 + " € </strong>";
									document.getElementById('remuTotaleAnArondi2').innerHTML = "   VOTRE REMUNERATION TOTALE ANNUEL : " + "<strong>" + remuTotaleAnArondi2 + " €";
									document.getElementById('tauxDeRemuArondi2').innerHTML = "% DU CA : " + "<p>" + tauxDeRemuArondi2 + " % 📈</p>";
									/*document.getElementById('BtnCache').click()
      }, 2000);
      
      }
     
    }  */
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

function copGeneral() {
	let nomRecup = document.getElementById('node').value;
	let pourcentRecup = document.getElementById('Pourcent-Factu').value;
	let nbJourRecup = document.getElementById('Nb-de-Jour').value;
	let jtmRecup = document.getElementById('Tjm').value;
	let kmRecup = document.getElementById('Nb-de-km-jour').value;
	let cvRecup = document.getElementById('Nb-de-CV-fiscaux').value;
	if(nbJourRecup != '' && pourcentRecup != '' && jtmRecup != '') {
		document.getElementById("btn1").style.display = 'block';
	} else {
		document.getElementById("btn1").style.display = 'none';
	}
}


function generatePDF() {
	var element = document.getElementById('div-resultats');
	var element2 = document.getElementById('pdf-text');
	var nom = document.getElementById('node').value;
	var tjm = document.getElementById('Tjm').value;
	var opt = {
		margin: [0, 10, 10, 10],
		filename: nom + '_' + tjm + '_' + '1.pdf',
		image: {
			type: 'jpg',
			quality: 0.99
		},
		html2canvas: {
			dpi: 192,
			letterRendering: true,
			useCORS: true,
			width: 1200,
			height: 1000,
			scale: 1
		},
		jsPDF: {
			unit: 'pt',
			format: [1200, 1000],
			orientation: 'landscape'
		}
	};
	var pdfFile = html2pdf().set(opt).from(element).toPdf().get('pdf').then(function(pdf) {
		pdf.addPage();
	}).from(element2).toContainer().toCanvas().toPdf().save();
}
