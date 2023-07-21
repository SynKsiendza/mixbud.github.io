function Worki()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2' onclick='Zaprawy()'>Zaprawy</button>" +
        "<button class='btn2' onclick='Kleje()'>Kleje</button>" +
        "<button class='btn2' onclick='Gladzie()'>Gładzie</button>" +
        "<button class='btn2' onclick='CementWapno()'>Cement i Wapno</button>" +
        "<button class='btn2' onclick='Gips()'>Gips</button>";
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
function Zaprawy()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" +
        "<button class='btn3' onclick='Zaprawy()'>&rarrhk; Zaprawy</button>" +
        "<button class='btn3' onclick='Kleje()'>&rarrhk; Kleje</button>" +
        "<button class='btn3' onclick='Gladzie()'>&rarrhk; Gładzie</button>" +
        "<button class='btn3' onclick='CementWapno()'>&rarrhk; Cement i Wapno</button>" +
        "<button class='btn3' onclick='Gips()'>&rarrhk; Gips</button>"+
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //Uniflott 
        "<div class='przedmiot_box'>" +
        "<img src='img/uniflott.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>KNAUF UNIFLOTT</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 5kg<br> Czas schnięcia: około 2 dni.</span>" +
        "<br><button id='remove_btn_uniflott' class='info_btn' onclick='moreinfo_reveal_uniflott()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_uniflott' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //MP75L
        "<div class='przedmiot_box'>" +
        "<img src='img/mp75l.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>KNAUF MP75L</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 30kg<br> Średnie zużycie: 8kg/m<sup>2</sup><br></span>" +
        "<br><button id='remove_btn_mp75l' class='info_btn' onclick='moreinfo_reveal_mp75l()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_mp75l' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Zaprawa Murarska Atlas
        "<div class='przedmiot_box'>" +
        "<img src='img/murarska_atlas.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Atlas Zaprawa Murarska</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg<br> Średnie zużycie: od 40 do 100kg/m<sup>2</sup> w zależności od grubości ściany." +
        "<br> Dostępny również odpowiednik produkcji firmy DUBLET</span>" +
        "<br><button id='remove_btn_murarska_atlas' class='info_btn' onclick='moreinfo_reveal_murarska_atlas()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_murarska_atlas' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Zaprawa Tynkarska Atlas
        "<div class='przedmiot_box'>" +
        "<img src='img/tynkarska_atlas.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Atlas Zaprawa Tynkarska</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg<br> Średnie zużycie [Przy gubości ok. 1cm]: około 18,5kg/m<sup>2</sup>." +
        "<br> Dostępny również odpowiednik produkcji firmy DUBLET</span>" +
        "<br><button id='remove_btn_tynkarska_atlas' class='info_btn' onclick='moreinfo_reveal_tynkarska_atlas()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_tynkarska_atlas' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Zaprawa Cementowa DUBLET
        "<div class='przedmiot_box'>" +
        "<img src='img/dublet-beton.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>DUBLET Wylewka Betonowa C16</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg<br> Średnie zużycie [Przy gubości minimalnej ok. 4cm]: około 66kg/m<sup>2</sup>.</span>" +
        "<br><button id='remove_btn_cementowa_dublet' class='info_btn' onclick='moreinfo_reveal_cementowa_dublet()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_cementowa_dublet' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function Kleje()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" +
        "<button class='btn3' onclick='Zaprawy()'>&rarrhk; Zaprawy</button>" +
        "<button class='btn3' onclick='Kleje()'>&rarrhk; Kleje</button>" +
        "<button class='btn3' onclick='Gladzie()'>&rarrhk; Gładzie</button>" +
        "<button class='btn3' onclick='CementWapno()'>&rarrhk; Cement i Wapno</button>" +
        "<button class='btn3' onclick='Gips()'>&rarrhk; Gips</button>"+
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //P9 
        "<div class='przedmiot_box'>" +
        "<img src='img/mapeiP9.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>MAPEI P9 Klej do płytek</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg<br> Srednie zużycie [przy grubości 1mm]: 1,2kg/m<sup>2</sup><br>Czas schnięcia: około 24h.</span>" +
        "<br><button id='remove_btn_p9' class='info_btn' onclick='moreinfo_reveal_p9()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_p9' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //MapeKlej
        "<div class='przedmiot_box'>" +
        "<img src='img/mapeKlej.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>MAPEI MapeKlej KDP</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg<br> Srednie zużycie: 2-5kg/m<sup>2</sup><br>Czas schnięcia: około 14 dni [Dla pełnego obciążenia].</span>" +
        "<br><button id='remove_btn_mapeKlej' class='info_btn' onclick='moreinfo_reveal_mapeKlej()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_mapeKlej' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Atlas GeoFlex
        "<div class='przedmiot_box'>" +
        "<img src='img/geoFlex.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Atlas GeoFlex</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg<br> Srednie zużycie: 2-3kg/m<sup>2</sup><br>Czas schnięcia: około 12h.</span>" +
        "<br><button id='remove_btn_geoFlex' class='info_btn' onclick='moreinfo_reveal_geoFlex()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_geoFlex' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Plus KDP
        "<div class='przedmiot_box'>" +
        "<img src='img/plusKDP.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Atlas Plus KDP</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg<br> Srednie zużycie: 2-5kg/m<sup>2</sup><br>Czas schnięcia: około 24h.</span>" +
        "<br><button id='remove_btn_plusKDP' class='info_btn' onclick='moreinfo_reveal_plusKDP()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_plusKDP' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Plus KDP
        "<div class='przedmiot_box'>" +
        "<img src='img/grawisU.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Atlas Grawis U Klej do siatki i styropianu</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg<br> Srednie zużycie: 3-5kg/m<sup>2</sup><br>Czas schnięcia: około 24h.</span>" +
        "<br><button id='remove_btn_grawisU' class='info_btn' onclick='moreinfo_reveal_grawisU()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_grawisU' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function Gladzie()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" +
        "<button class='btn3' onclick='Zaprawy()'>&rarrhk; Zaprawy</button>" +
        "<button class='btn3' onclick='Kleje()'>&rarrhk; Kleje</button>" +
        "<button class='btn3' onclick='Gladzie()'>&rarrhk; Gładzie</button>" +
        "<button class='btn3' onclick='CementWapno()'>&rarrhk; Cement i Wapno</button>" +
        "<button class='btn3' onclick='Gips()'>&rarrhk; Gips</button>"+
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //Akrylputz 
        "<div class='przedmiot_box'>" +
        "<img src='img/acrylputz.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Śnieżka Acryl-Putz ST10 Gładź szpachlowa</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 30kg; 5kg; 2,5kg; <br> Srednie zużycie [przy grubości 1mm]: 1kg/m<sup>2</sup></span>" +
        "<br><button id='remove_btn_acrylputz' class='info_btn' onclick='moreinfo_reveal_acrylputz()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_acrylputz' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Franspol
        "<div class='przedmiot_box'>" +
        "<img src='img/franspol_gladz.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Franspol Gładź szpachlowa GS2</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 20kg.<br> Srednie zużycie [przy grubości 1mm]: 1kg/m<sup>2</sup><br>Czas schnięcia: około 2h.</span>" +
        "<br><button id='remove_btn_franspol_gladz' class='info_btn' onclick='moreinfo_reveal_franspol_gladz()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_franspol_gladz' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function CementWapno()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" +
        "<button class='btn3' onclick='Zaprawy()'>&rarrhk; Zaprawy</button>" +
        "<button class='btn3' onclick='Kleje()'>&rarrhk; Kleje</button>" +
        "<button class='btn3' onclick='Gladzie()'>&rarrhk; Gładzie</button>" +
        "<button class='btn3' onclick='CementWapno()'>&rarrhk; Cement i Wapno</button>" +
        "<button class='btn3' onclick='Gips()'>&rarrhk; Gips</button>"+
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //Cement 
        "<div class='przedmiot_box'>" +
        "<img src='img/cement.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>GÓRAŻDŻE MultiCement 32,5</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 25kg.</span>" +
        "<br><button id='remove_btn_cement' class='info_btn' onclick='moreinfo_reveal_cement()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_cement' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //Wapno
        "<div class='przedmiot_box'>" +
        "<img src='img/wapno.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Izobet Wapno</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 20kg.</span>" +
        "<br><button id='remove_btn_wapno' class='info_btn' onclick='moreinfo_reveal_wapno()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_franspol_wapno' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}
function Gips()
{
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" +
        "<button class='btn3' onclick='Zaprawy()'>&rarrhk; Zaprawy</button>" +
        "<button class='btn3' onclick='Kleje()'>&rarrhk; Kleje</button>" +
        "<button class='btn3' onclick='Gladzie()'>&rarrhk; Gładzie</button>" +
        "<button class='btn3' onclick='CementWapno()'>&rarrhk; Cement i Wapno</button>" +
        "<button class='btn3' onclick='Gips()'>&rarrhk; Gips</button>"+
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //Gips
        "<div class='przedmiot_box'>" +
        "<img src='img/gips.png' class='przedmiot_box_image' height='250px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Dolina Nidy Gips Budowlany</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 15kg; 2kg.</span>" +
        "<br><button id='remove_btn_gips' class='info_btn' onclick='moreinfo_reveal_gips()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_gips' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}