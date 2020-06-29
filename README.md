..............................................................Bootcamper..........................................................................
App je podeljena na dva tipa usera(routa) student, professor.

Komponente:

--------------------------------GLOBAL-------------------------
NavBar - razliciti linkovi za razlicite usere 


---------------------------------HOME-------------------------------

ChatBar - komunikacija izmedju korisnika
DashBoard - grupa kartica generisana po danu i datumu
DashBoardCardGroup - sastoji se od Headera(datum i dan) sa opcijom expend card 
DashBoardCard - sastoji se od : imena authora, thumbnail(embbed youtube), vreme kreiranja, opis(komentar), opcija za edit i remove(samo za autora kartice)
AddDashBoardCard - kreiranje nove dashboard kartice, prikazano samo na professor accountu
DashBoardFooter - sa korisnim ikonicama 

---------------------------------STUDENTS-----------------------------
Pristup imaju samo profesori
StudentList - lista studenata(StudentListItem) sa search opcijom
StudentListItem - sastoji se od : indikatora za status domaceg zadatka, imena i prezimena studenta, status izostanaka
StudentCard - sastoji se od : slike sa osnovnim podacima studenta(ime, prezime, mail...), CircuralProgresBar za testove, lista domacih zadataka(HomeWorkCard)
CircuralProgresBar - sastoji se od naziva testa, grafikona uspesnosti
HomeWorkCard - sastoji se od Headera( naziv domaceg zadatka, indikator za status, link za kacenja na GitHubu),Body(komentar studenta, komentar profesora, opcije za promenu statusa )


---------------------------------ASSIGMENTS-----------------------------
Pristup imaju samo profesori
HomeWork - sastoji se od liste domacih zadataka
HomeWorkListItem - sastoji se od naziva, rok za zavrsetak domaceg(datum i vreme), opcije za edit i remove
AddHomeWorkListItem - sastoji se od taskName, rok za zavrsetak domaceg(datum i vreme), opcije za attachment fajlova, opis(description,comment)
Test - isti property kao i HomeWork

---------------------------------WORKBOOK-----------------------------
Pristup imaju samo studenti
TestList - sastoji se od liste testova(TestCard)
TestCard - naziv testa, opcije za download fajla , opis(komentar), rezultat testa(CircuralProgresBar---?still in progres: testResults)
HomeWorkList -  sastoji se od liste domacih zadataka(HomeWorkCard)
HomeWorkCard - sastoji se od naziva, indikatora za status domaceg zadatka,




