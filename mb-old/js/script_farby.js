

function Farby()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2' onclick='Scienne()'>Ścienne</button>" +
        "<button class='btn2' onclick='Akrylowe()'>Akrylowe</button>" +
        "<button class='btn2' onclick='Olejne()'>Olejne, Nitro itp.</button>" +
        "<button class='btn2' onclick='Podklady()'>Podkłady</button>" +
        "<button class='btn2' onclick='Grunty()'>Grunty</button>" +
        "<button class='btn2' onclick='drewno()'>Impregnaty, lakiery do drewna itp.</button>" +
        "<button class='btn2' onclick='Spraj()'>Spraye</button>";
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
function Spraj()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Spraj()'>&rarrhk; Spraye</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //DECOCOLOR 
        "<div class='przedmiot_box'>" +
        "<img src='img/decocolor.png' class='przedmiot_box_image' height='250px' width='130px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>DECOCOLOR Spray Kolorowy</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 400ml<br> Wydajność: do 2 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_decocolor' class='info_btn' onclick='moreinfo_reveal_decocolor()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_decocolor' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Marker Geodezyjny
        "<div class='przedmiot_box'>" +
        "<img src='img/geodezyjny.png' class='przedmiot_box_image' height='250px' width='130px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Marker geodezyjny</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,5L<br> Wydajność: do 2,5 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_geodozyjny' class='info_btn' onclick='moreinfo_reveal_geodezyjny()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_geodezyjny' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function Grunty()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Grunty()'>&rarrhk; Grunty</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //FEIDAL Grunt 
        "<div class='przedmiot_box'>" +
        "<img src='img/feidal_grunt.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>FEIDAL Grunt</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 5L<br> Wydajność: do 9 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_FeidalGrunt' class='info_btn' onclick='moreinfo_reveal_FeidalGrunt()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_FeidalGrunt' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //FEIDAL Grunt 
        "<div class='przedmiot_box'>" +
        "<img src='img/Sniezka_grunt.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śnieżka Grunt 6R43</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 1L; 5L<br> Wydajność: do 10 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_SniezkaGrunt' class='info_btn' onclick='moreinfo_reveal_SniezkaGrunt()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_SniezkaGrunt' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function Podklady()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Podklady()'>&rarrhk; Pdokłady</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //Śnieżka UrekorS 
        "<div class='przedmiot_box'>" +
        "<img src='img/Sniezka_urekorS.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śnieżka UrekorS</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,2L; 1L; 5L<br> Wydajność: do 9 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_us' class='info_btn' onclick='moreinfo_reveal_us()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_us' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Dekoral Podkład Antykorozyjny 
        "<div class='przedmiot_box'>" +
        "<img src='img/dekoral_antykorozyjny.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Dekoral Podkład Antykorozyjny</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,5L; 0,9L; 5L<br> Wydajność: do 11 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_antykorozja' class='info_btn' onclick='moreinfo_reveal_antykorozja()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_antykorozja' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function Olejne()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Olejne()'>&rarrhk; Farby <br>Olejne, Nitro</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //Śnieżka Supermal 
        "<div class='przedmiot_box'>" +
        "<img src='img/Sniezka_supermal.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śnieżka Supermal Emalia Olejno-Ftalowa</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,2L; 0,4L; 0,8L; 5L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_sm' class='info_btn' onclick='moreinfo_reveal_sm()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_sm' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Dekoral Emakol 
        "<div class='przedmiot_box'>" +
        "<img src='img/Dekoral_emakol.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Dekoral Emakol</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,2L; 0,9L; 5L<br> Wydajność: do 18 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_emakol' class='info_btn' onclick='moreinfo_reveal_emakol()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_emakol' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Hammerite 
        "<div class='przedmiot_box'>" +
        "<img src='img/hammerite.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Hammerite</strong> <br>" +
        "<span class='small_text'>Dostępne wykończenia: Połysk,  efekt młotkowy, matowy" +
        "<br>Dostępne opakowania: 0,25L; 0,75L; 2,5L<br> Wydajność: do 10 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_hm' class='info_btn' onclick='moreinfo_reveal_hm()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_hm' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Nobiles Chlorokauczuk
        "<div class='przedmiot_box'>" +
        "<img src='img/Nobiles_Chlorokauczuk.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Nobiles Chlorokauczuk</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,9L; 5L<br> Wydajność: do 12 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_chlorokauczuk' class='info_btn' onclick='moreinfo_reveal_chlorokauczuk()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_chlorokauczuk' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Śnieżka Nitro
        "<div class='przedmiot_box'>" +
        "<img src='img/Sniezka_Nitro.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śnieżka SUPERMAL Emalia Nitro</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,8L<br> Wydajność: do 10 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_nitro' class='info_btn' onclick='moreinfo_reveal_nitro()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_nitro' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function Akrylowe()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Akrylowe()'>&rarrhk; Farby<br> Akrylowe</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //Jedynka Deco&Protect
        "<div class='przedmiot_box'>" +
        "<img src='img/jedynka_decoprotect.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Jedynka Deco & Protect</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,7L; 0,2L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_DnP' class='info_btn' onclick='moreinfo_reveal_DnP()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_DnP' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        // DoDzieła
        "<div class='przedmiot_box'>" +
        "<img src='img/Dekoral_dodziela.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Dekoral DoDzieła!</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 0,2L; 0,5L; 0,9L<br> Wydajność: do 16 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
        "<br><button id='remove_btn_dd' class='info_btn' onclick='moreinfo_reveal_dd()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_dd' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function Scienne()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Scienne()'>&rarrhk; Farby<br> Scienne</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
       "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
       "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
    "<button class='btn2' onclick='Scienne_Sniezka()'><img src='img/Sniezka_logo.svg' height='35px' width='60px' > &nbsp; &nbsp; Śnieżka</button>" +
    "<button class='btn2' onclick='Scienne_Bondex()'><img src='img/bondex_logo.png' height='35px' width='70px' > &nbsp; &nbsp; Bondex</button>" +
    "<button class='btn2' onclick='Scienne_Dulux()'><img src='img/Dulux_logo.png' height='35px' width='40px' > &nbsp; &nbsp; Dulux</button>" +
    "<button class='btn2' onclick='Scienne_Dekoral()'><img src='img/Dekoral_logo.png' height='35px' width='60px' > &nbsp; &nbsp; Dekoral</button>" +
    "<button class='btn2' onclick='Scienne_Beckers()'><img src='img/beckers_logo.png' height='35px' width='40px' > &nbsp; &nbsp; Beckers</button>" +
    "<button class='btn2' onclick='Scienne_Tikkurila()'><img src='img/Tikkurila_logo.png' height='35px' width='40px' > &nbsp; &nbsp; Tikkurila</button>";
}

function Scienne_Sniezka()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Scienne()'> &rarrhk; Farby Scienne</button>" +
        "<button class='btn3' onclick='Scienne_Sniezka()' style='margin-left: 25%'>&rarrhk; Śnieżka</button>" +
        "<button class='btn3' onclick='Scienne_Dulux()' style='margin-left: 25%'>&rarrhk; Dulux</button>" +
        "<button class='btn3' onclick='Scienne_Bondex()' style='margin-left: 25%'>&rarrhk; Bondex</button>" +
        "<button class='btn3' onclick='Scienne_Dekoral()' style='margin-left: 25%'>&rarrhk; Dekoral</button>" +
        "<button class='btn3' onclick='Scienne_Beckers()' style='margin-left: 25%'>&rarrhk; Beckers</button>" +
        "<button class='btn3' onclick='Scienne_Tikkurila()' style='margin-left: 25%'>&rarrhk; Tikkurila</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
    // Plamoodporna
    "<div class='przedmiot_box'>" +
    "<img src='img/Sniezka_plamoodporna.png' class='przedmiot_box_image' height='250px' width='200px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Śnieżka Plamoodporna</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L<br> Wydajność: do 15 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_plamoodporna' class='info_btn' onclick='moreinfo_reveal_plamoodporna()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_plamoodporna' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
//    Barwy natury
    "<div class='przedmiot_box'>" +
    "<img src='img/Sniezka_barwynatury.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Śnieżka Barwy Natury</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_bn' class='info_btn' onclick='moreinfo_reveal_bn()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_bn' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Eko
    "<div class='przedmiot_box'>" +
    "<img src='img/Sniezka_eko.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Śnieżka Eko</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 13 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_eko' class='info_btn' onclick='moreinfo_reveal_eko()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_eko' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Eko plus
    "<div class='przedmiot_box'>" +
    "<img src='img/Sniezka_eko_plus.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Śnieżka Eko Plus</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_ekoPlus' class='info_btn' onclick='moreinfo_reveal_ekoPlus()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_ekoPlus' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>";
    
}
function Scienne_Dulux()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Scienne()'> &rarrhk; Farby Scienne</button>" +
        "<button class='btn3' onclick='Scienne_Sniezka()' style='margin-left: 25%'>&rarrhk; Śnieżka</button>" +
        "<button class='btn3' onclick='Scienne_Dulux()' style='margin-left: 25%'>&rarrhk; Dulux</button>" +
        "<button class='btn3' onclick='Scienne_Bondex()' style='margin-left: 25%'>&rarrhk; Bondex</button>" +
        "<button class='btn3' onclick='Scienne_Dekoral()' style='margin-left: 25%'>&rarrhk; Dekoral</button>" +
        "<button class='btn3' onclick='Scienne_Beckers()' style='margin-left: 25%'>&rarrhk; Beckers</button>" +
        "<button class='btn3' onclick='Scienne_Tikkurila()' style='margin-left: 25%'>&rarrhk; Tikkurila</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
    // Easycare
    "<div class='przedmiot_box'>" +
    "<img src='img/Dulux_easycare.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dulux EasyCare</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L - dla farb kolorowych oraz: 9L - dla farby białej<br> Wydajność: do 16 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_easycare' class='info_btn' onclick='moreinfo_reveal_easycare()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_easycare' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Absolute White
    "<div class='przedmiot_box'>" +
    "<img src='img/Dulux_absolute_white.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dulux Absolute White</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L - dla farb kolorowych oraz: 9L - dla farby białej<br> Wydajność: do 13 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_absoluteWhite' class='info_btn' onclick='moreinfo_reveal_absoluteWhite()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_absoluteWhite' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>";
}
function Scienne_Bondex()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Scienne()'> &rarrhk; Farby<br> Scienne</button>" +
        "<button class='btn3' onclick='Scienne_Sniezka()' style='margin-left: 25%'>&rarrhk; Śnieżka</button>" +
        "<button class='btn3' onclick='Scienne_Dulux()' style='margin-left: 25%'>&rarrhk; Dulux</button>" +
        "<button class='btn3' onclick='Scienne_Bondex()' style='margin-left: 25%'>&rarrhk; Bondex</button>" +
        "<button class='btn3' onclick='Scienne_Dekoral()' style='margin-left: 25%'>&rarrhk; Dekoral</button>" +
        "<button class='btn3' onclick='Scienne_Beckers()' style='margin-left: 25%'>&rarrhk; Beckers</button>" +
        "<button class='btn3' onclick='Scienne_Tikkurila()' style='margin-left: 25%'>&rarrhk; Tikkurila</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
    // smarthome
    "<div class='przedmiot_box'>" +
    "<img src='img/bondex_smarthome.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Bondex Smarthome</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_smarthome' class='info_btn' onclick='moreinfo_reveal_smarthome()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_smarthome' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>";
}
function Scienne_Dekoral()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Scienne()'> &rarrhk; Farby<br> Scienne</button>" +
        "<button class='btn3' onclick='Scienne_Sniezka()' style='margin-left: 25%'>&rarrhk; Śnieżka</button>" +
        "<button class='btn3' onclick='Scienne_Dulux()' style='margin-left: 25%'>&rarrhk; Dulux</button>" +
        "<button class='btn3' onclick='Scienne_Bondex()' style='margin-left: 25%'>&rarrhk; Bondex</button>" +
        "<button class='btn3' onclick='Scienne_Dekoral()' style='margin-left: 25%'>&rarrhk; Dekoral</button>" +
        "<button class='btn3' onclick='Scienne_Beckers()' style='margin-left: 25%'>&rarrhk; Beckers</button>" +
        "<button class='btn3' onclick='Scienne_Tikkurila()' style='margin-left: 25%'>&rarrhk; Tikkurila</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Wkręty, śruby itp.</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
    // Clean&Color
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_cc.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Clean&Color</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L<br> Wydajność: do 15 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_cc' class='info_btn' onclick='moreinfo_reveal_cc()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_cc' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Kuchnia łazienka
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_kl.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Łazienka & Kuchnia</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_knl' class='info_btn' onclick='moreinfo_reveal_knl()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_knl' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Kuchnia łazienka Biała
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_klb.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Łazienka & Kuchnia Śnieżnobiała</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 12 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_knlWhite' class='info_btn' onclick='moreinfo_reveal_knlWhite()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_knlWhite' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // AkrylitW
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_akrylitw.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Akrylit W</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_akrylitw' class='info_btn' onclick='moreinfo_reveal_akrylitw()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_akrylitw' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Polinak Plus
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_pp.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Polinak Plus</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 16 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_polinakPlus' class='info_btn' onclick='moreinfo_reveal_polinakPlus()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_polinakPlus' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>";
}
function Scienne_Beckers()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Scienne()'> &rarrhk; Farby<br> Scienne</button>" +
        "<button class='btn3' onclick='Scienne_Sniezka()' style='margin-left: 25%'>&rarrhk; Śnieżka</button>" +
        "<button class='btn3' onclick='Scienne_Dulux()' style='margin-left: 25%'>&rarrhk; Dulux</button>" +
        "<button class='btn3' onclick='Scienne_Bondex()' style='margin-left: 25%'>&rarrhk; Bondex</button>" +
        "<button class='btn3' onclick='Scienne_Dekoral()' style='margin-left: 25%'>&rarrhk; Dekoral</button>" +
        "<button class='btn3' onclick='Scienne_Beckers()' style='margin-left: 25%'>&rarrhk; Beckers</button>" +
        "<button class='btn3' onclick='Scienne_Tikkurila()' style='margin-left: 25%'>&rarrhk; Tikkurila</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
    // Designer
    "<div class='przedmiot_box'>" +
    "<img src='img/beckers_designer.png' class='przedmiot_box_image' height='200px' width='200px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Beckers Designer</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L<br> Wydajność: do 16 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_des' class='info_btn' onclick='moreinfo_reveal_des()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_des' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Designer White
    "<div class='przedmiot_box'>" +
    "<img src='img/beckers_designerwhite.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Beckers Designer White</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L; 10L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_desWhite' class='info_btn' onclick='moreinfo_reveal_desWhite()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_desWhite' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>";
}
function Scienne_Tikkurila()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn3' onclick='Scienne()'> &rarrhk; Farby<br> Scienne</button>" +
        "<button class='btn3' onclick='Scienne_Sniezka()' style='margin-left: 25%'>&rarrhk; Śnieżka</button>" +
        "<button class='btn3' onclick='Scienne_Dulux()' style='margin-left: 25%'>&rarrhk; Dulux</button>" +
        "<button class='btn3' onclick='Scienne_Bondex()' style='margin-left: 25%'>&rarrhk; Bondex</button>" +
        "<button class='btn3' onclick='Scienne_Dekoral()' style='margin-left: 25%'>&rarrhk; Dekoral</button>" +
        "<button class='btn3' onclick='Scienne_Beckers()' style='margin-left: 25%'>&rarrhk; Beckers</button>" +
        "<button class='btn3' onclick='Scienne_Tikkurila()' style='margin-left: 25%'>&rarrhk; Tikkurila</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
    // Antyreflex
    "<div class='przedmiot_box'>" +
    "<img src='img/tikkurila_antireflex.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Tikkurila Anti-reflex</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 3L; 10L<br> Wydajność: do 15 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_antyreflex' class='info_btn' onclick='moreinfo_reveal_antyreflex()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_antireflex' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>" +
    // SuperWhite
    "<div class='przedmiot_box'>" +
    "<img src='img/tikkurila_superwhite.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Tikkurila Superwhite</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 10L<br> Wydajność: do 12 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "<br><button id='remove_btn_superWhite' class='info_btn' onclick='moreinfo_reveal_superWhite()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_superWhite' class='moreinfo'></div><br>" +
    "</div><br>" +
    "</div><br><hr>";
}