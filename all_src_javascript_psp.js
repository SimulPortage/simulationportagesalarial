<script>
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
									document.getElementsByClassName('lds-default')[0].style.display = 'none';
									document.getElementById('resultat').style.display = 'block';
									document.getElementById('div-resultats').style.display = 'flex';
									// document.getElementById('pdf-text').style.display = 'flex';
									document.getElementById('div-div-resultats').style.display = 'flex';
									document.getElementById('js-pdf').style.display = 'block';
									document.getElementById('nom').innerHTML = nom + ",";
									document.getElementById('tjm').innerHTML = "VOTRE TJM : " + "<strong>" + tjm + " € </strong>";
									document.getElementById('nbJourParMois').innerHTML = "VOTRE NOMBRE DE JOURS FACTURES : " + "<strong>" + nbJourParMois + "</strong>";
									document.getElementById('tjmParMois').innerHTML = "VOTRE CHIFFRES D'AFFAIRES : " + "<strong>" + tjmParMois + " € </strong>";
									document.getElementById('salaireBArondi').innerHTML = "VOTRE SALAIRE BRUT MENSUEL : " + "<strong>" + salaireBArondi + " € </strong>";
									document.getElementById('salaireBAnArondi').innerHTML = "VOTRE SALAIRE BRUT ANNUEL : " + "<strong>" + salaireBAnArondi + " € </strong>";
									document.getElementById('salaireNetImposable').innerHTML = "VOTRE SALAIRE NET IMPOSABLE : " + "<strong>" + salaireNetImposable + " € </strong>";
									document.getElementById('salaireNetImposableAnnuel').innerHTML = "VOTRE SALAIRE NET IMPOSABLE ANNUEL : " + "<strong>" + salaireNetImposableAnnuel + " € </strong>";
									document.getElementById('totalFrais').innerHTML = "VOTRE FRAIS REEL : " + "<strong>" + totalFraisArondi + " € </strong>";
									document.getElementById('revenuNetFr').innerHTML = "VOTRE NET TOTALE : " + "<strong>" + revenuNetFrArondi + " € </strong>";
									document.getElementById('x11').innerHTML = "VOTRE PARTICIPATION : " + "<strong>" + x11 + " € </strong>";
									document.getElementById('x12').innerHTML = "VOTRE PARTICIPATION ANNUEL : " + "<strong>" + x12 + " € </strong>";
									document.getElementById('remuTotaleArondi').innerHTML = "VOTRE REMUNERATION TOTALE : " + "<strong>" + remuTotaleArondi + " € </strong>";
									document.getElementById('remuTotaleAnArondi').innerHTML = "VOTRE REMUNERATION TOTALE ANNUEL : " + "<strong>" + remuTotaleAnArondi + " €";
									document.getElementById('tauxDeRemuArondi').innerHTML = "% DU CA : " + "<p>" + tauxDeRemuArondi + " % 📈</p>";
									/*document.getElementById('BtnCache').click()
      }, 2000);
    }*/
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
</script>
<script>
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
									document.getElementsByClassName('lds-default')[0].style.display = 'none';
									document.getElementById('resultat').style.display = 'block';
									document.getElementById('div-resultats').style.display = 'flex';
									// document.getElementById('pdf-text').style.display = 'flex';
									document.getElementById('div-div-resultats').style.display = 'flex';
									document.getElementById('js-pdf').style.display = 'block';
									document.getElementById('nom').innerHTML = nom + ",";
									document.getElementById('tjm').innerHTML = "VOTRE TJM : " + "<strong>" + tjm + " € </strong>";
									document.getElementById('nbJourParMois').innerHTML = "VOTRE NOMBRE DE JOURS FACTURES : " + "<strong>" + nbJourParMois + "</strong>";
									document.getElementById('tjmParMois').innerHTML = "VOTRE CHIFFRES D'AFFAIRES : " + "<strong>" + tjmParMois + " € </strong>";
									document.getElementById('salaireBArondi').innerHTML = "VOTRE SALAIRE BRUT MENSUEL : " + "<strong>" + salaireBArondi + " € </strong>";
									document.getElementById('salaireBAnArondi').innerHTML = "VOTRE SALAIRE BRUT ANNUEL : " + "<strong>" + salaireBAnArondi + " € </strong>";
									document.getElementById('salaireNetImposable').innerHTML = "VOTRE SALAIRE NET IMPOSABLE : " + "<strong>" + salaireNetImposable + " € </strong>";
									document.getElementById('salaireNetImposableAnnuel').innerHTML = "VOTRE SALAIRE NET IMPOSABLE ANNUEL : " + "<strong>" + salaireNetImposableAnnuel + " € </strong>";
									document.getElementById('totalFrais').innerHTML = "VOTRE FRAIS REEL : " + "<strong>" + totalFraisArondi + " € </strong>";
									document.getElementById('revenuNetFr').innerHTML = "VOTRE NET TOTALE : " + "<strong>" + revenuNetFrArondi + " € </strong>";
									document.getElementById('x11').innerHTML = "VOTRE PARTICIPATION : " + "<strong>" + x11 + " € </strong>";
									document.getElementById('x12').innerHTML = "VOTRE PARTICIPATION ANNUEL : " + "<strong>" + x12 + " € </strong>";
									document.getElementById('remuTotaleArondi').innerHTML = "VOTRE REMUNERATION TOTALE : " + "<strong>" + remuTotaleArondi + " € </strong>";
									document.getElementById('remuTotaleAnArondi').innerHTML = "VOTRE REMUNERATION TOTALE ANNUEL : " + "<strong>" + remuTotaleAnArondi + " €";
									document.getElementById('tauxDeRemuArondi').innerHTML = "% DU CA : " + "<p>" + tauxDeRemuArondi + " % 📈</p>";
									/*document.getElementById('BtnCache').click()
      }, 2000);
    }*/
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
</script>
<script>
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
</script>
<script>
		function generatePDF() {
			var element = document.getElementById('div-resultats');
			var element2 = document.getElementById('pdf-text');
			var nom = document.getElementById('node').value;
			var tjm = document.getElementById('Tjm').value;
			var opt = {
				margin: 0,
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
					height: 600,
					scale: 1
				},
				jsPDF: {
					unit: 'pt',
					format: [1200, 600],
					orientation: 'landscape'
				}
			};
			var pdfFile = html2pdf().set(opt).from(element).toPdf().get('pdf').then(function(pdf) {
				pdf.addPage();
			}).from(element2).toContainer().toCanvas().toPdf().save();
		}
</script>