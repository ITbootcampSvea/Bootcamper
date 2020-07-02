..............................................................Bootcamper..........................................................................

------------------------------FRONT END-------------------------------------

App je podeljena na dva tipa usera(routa) student, professor.

Komponente:

--------------------------------GLOBAL-------------------------
NavBar - razliciti linkovi za razlicite usere 
Footer - dodati logo sa linkom ka ITbootcamp sajtu

---------------------------------HOME-------------------------------

ChatBar - komunikacija izmedju korisnika
DashBoard - grupa kartica generisana po danu i datumu i opcijom za pretragu.
DashBoardCardGroup - sastoji se od Headera(datum i dan) sa opcijom expend card 
DashBoardCard - sastoji se od : imena authora, thumbnail(embbed youtube), vreme kreiranja, opis(komentar), opcija za edit i remove(samo za autora kartice)
AddDashBoardCard - kreiranje nove dashboard kartice, prikazano samo na professor accountu
DachboardCardPrevewModal - prikaz celokupnih podataka na kartici
DachboardCardaddModal - unos podataka za karticu
DashBoardFooter - sa korisnim ikonicama 

---------------------------------STUDENTS-----------------------------
Pristup imaju samo profesori
StudentGenerationSelector - odabir generacije studenata za prikaz (za generaciju koja nije aktivna onemoguciti modifikovanje podataka-readonly components)
SearchBar - pretraga studenata po (imenu ili ID-u)
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
HomeWorkCard - sastoji se od naziva, indikatora za status domaceg zadatka, rok za zavrsetak(datum, vreme), komentar studenta, polje za unos linka   guthub, dugme za submit, komentar profesora pregleda domaceg.


---------------------------------PROFILE-----------------------------

Sadrzi: 
-sliku(opcija za upload profilne slike i promenu)
-unos i prikaz osnovnih podataka (info/ ID, ime, prezime, mejl...) - ID, ime, prezime nisu promenljivi
-opcije za promenu username i password (account)
-...

---------------------------------SETTINGS-----------------------------

Sadrzi:
-opciju za kreiranje usera (unos ID, ime, prezime- studenta)
-opciju za promenu statusa usera (in/active)
-exportovanje kompletne baze za jednu generaciju (?brisanje i kreiranje nove generacije)


------------------------------BACK END LOGIKA-------------------------------------


-Kreiranje studenta:
    Na zahtev profesora kreiranje student enitiija, request prametri {studentID, name, lastname},
     kreirani objekat{ID,studentID, generation, name, lastname, emai, username, password} (inicajlni username=studentID, password=111111)

-Kreiranje profesora:
    Na zahtev profesora kreiranje student enitiija, request prametri {ID, name, lastname},
    
     kreirani objekat{profesorID, name, lastname, emai, username, password} (inicajlni username=profesorID, password=222222)


Kreiranje domaceg:

    DomaciMaster: {masterID, naziv, author, rok, fajl, opis} - kreira i edituje profesor

    DomaciStudent: {ID, studentID, masterID, comentar, linkZaGit, Promedbe, status } - kreira profesor, edituje i prof i stud

    statusi domaceg: 
    - siva - nije predat
    - plava- predat za pregled
    - zuta - pregledan ima gresaka
    - zelena - pregledan bez greske
    - crvena - nije uradjen u roku

Kreiranje testa: 
    TestMaster: {ID, masterID, naziv, author,  fajl, opis} kreira i edit prof
    TestStudent: {ID, masterID, studentID, rezulat} (rezultat inicijalno ima vrednost null) kreira i edit prof


Kreiranje dashboard kartica:
    {ID, profesorID, naziv, links[], opis}

Kreiranje chat-a: soketi...?