function WkretySruby()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2' onclick='Wkrety()'>Wkręty</button>" +
        "<button class='btn2' onclick='Sruby()'>Śruby</button>" +
        "<button class='btn2' onclick='Kolki()'>Kołki</button>" +
        "<button class='btn2' onclick='oth()'>Inne</button>";
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
}
function Wkrety()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn3' onclick='Wkrety()'>&rarrhk; Wkręty</button>" +
        "<button class='btn3' onclick='Sruby()'>&rarrhk; Śruby</button>" +
        "<button class='btn3' onclick='Kolki()'>&rarrhk; Kołki</button>" +
        "<button class='btn3' onclick='oth()'>&rarrhk; Inne</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    
    document.getElementById("maincontent").innerHTML = "" +
        //Do Drewna 
        "<div class='przedmiot_box'>" +
        "<img src='img/wkret_drewno.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wkręty do drewna</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Do Drewna na klucz
        "<div class='przedmiot_box'>" +
        "<img src='img/wkret_drewno_klucz.png' class='przedmiot_box_image' height='180px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wkręty do drewna na klucz</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Ciesielskie WCT
        "<div class='przedmiot_box'>" +
        "<img src='img/ciesielskieWCT.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wkręty Ciesielskie WCT</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Stolarskie WCS
        "<div class='przedmiot_box'>" +
        "<img src='img/wcs.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wkręty Stolarskie WCS</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Blacowkręty typu Farmer
        "<div class='przedmiot_box'>" +
        "<img src='img/farmer.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Blachowkręt typu Farmer</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Blacowkręty typu talerzyk
        "<div class='przedmiot_box'>" +
        "<img src='img/blachowkret_talerzyk.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Blachowkręt z łbem talerzykowym</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Blacowkręty typu stożek
        "<div class='przedmiot_box'>" +
        "<img src='img/blachowkret_stozek.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Blachowkręt z łbem stożkowym</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!->Placeholder<-</span>" +
        "</div>" +
        "</div><hr>";
}
function Sruby()
{

    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn3' onclick='Wkrety()'>&rarrhk; Wkręty</button>" +
        "<button class='btn3' onclick='Sruby()'>&rarrhk; Śruby</button>" +
        "<button class='btn3' onclick='Kolki()'>&rarrhk; Kołki</button>" +
        "<button class='btn3' onclick='oth()'>&rarrhk; Inne</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";

    document.getElementById("maincontent").innerHTML = "" +
        //zwykłe 
        "<div class='przedmiot_box'>" +
        "<img src='img/sruba_zwykla.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śruby zwykłe</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //w Wyższej klasie
        "<div class='przedmiot_box'>" +
        "<img src='img/sruba_wyzsa_kalsa.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śruby zwykłe w wyższej klasie</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //zamkowe
        "<div class='przedmiot_box'>" +
        "<img src='img/sruba_zamkowa.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śruby zamkowe</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Imbusowe 
        "<div class='przedmiot_box'>" +
        "<img src='img/sruba_imbus.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śruby imbusowe</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        // Szpilki
        "<div class='przedmiot_box'>" +
        "<img src='img/szpilka.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Szpilki gwintowane</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Złącza śrubowe 
        "<div class='przedmiot_box'>" +
        "<img src='img/zlacze_srubowe.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Złącza śrubowe</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>";
}
function Kolki()
{

    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn3' onclick='Wkrety()'>&rarrhk; Wkręty</button>" +
        "<button class='btn3' onclick='Sruby()'>&rarrhk; Śruby</button>" +
        "<button class='btn3' onclick='Kolki()'>&rarrhk; Kołki</button>" +
        "<button class='btn3' onclick='oth()'>&rarrhk; Inne</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";

    document.getElementById("maincontent").innerHTML = "" +
        //zwykłe 
        "<div class='przedmiot_box'>" +
        "<img src='img/kolek_zwykly.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Kołek zwykły</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //szybki montaż 
        "<div class='przedmiot_box'>" +
        "<img src='img/szybki_montaz.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Kołek Szybki montaż</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //ramowy 
        "<div class='przedmiot_box'>" +
        "<img src='img/kolek_ramowy.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Kołek Ramowy</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Rozporowy
        "<div class='przedmiot_box'>" +
        "<img src='img/kolek_rozporowy.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Kołek Rozporowy</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>";
}
function oth()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn3' onclick='Wkrety()'>&rarrhk; Wkręty</button>" +
        "<button class='btn3' onclick='Sruby()'>&rarrhk; Śruby</button>" +
        "<button class='btn3' onclick='Kolki()'>&rarrhk; Kołki</button>" +
        "<button class='btn3' onclick='oth()'>&rarrhk; Inne</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";

    document.getElementById("maincontent").innerHTML = "" +
        //Kątownik 
        "<div class='przedmiot_box'>" +
        "<img src='img/katownik.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Kątowniki</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Płytka perforowana 
        "<div class='przedmiot_box'>" +
        "<img src='img/plytka_perforowana.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Płytki perforowane</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>";
}