function Sylikon()
{
    history.pushState(null, null, document.URL);

    // Add an event listener to the window's 'popstate' event
    window.addEventListener('popstate', function(event) {
        // Redirect to index.html
        window.location.href = 'index.html';
    });
    document.getElementById("nav").innerHTML = "" +
        "<button class='btn' id='btn_farby' onclick='Farby()'>Farby oraz lakiery</button>" +
        "<button class='btn' id='btn_artmal' onclick='art_mal()'>Artykuły malarskie</button>" +
        "<button class='btn' id='btn_wkrety' onclick='WkretySruby()'>Artykuły Metalowe</button>" +
        "<button class='btn' id='btn_sylikon' onclick='Sylikon()'>Silikony, kleje,<br>piany montażowe</button>" +
        "<button class='btn' id='btn_worki' onclick='Worki()'>Zaprawy,<br> kleje i inne</button>" + 
        "<button class='btn' id='btn_tarcza' onclick='Tarcza()'>Tarcze i wiertła</button>" +
        "<button class='btn' id='btn_agk' onclick='agk()'>Zabudowa AGK</button>" +
        "<button class='btn' id='btn_akcesoria' onclick='akcesoria()'>Akcesoria</button>";
    document.getElementById("maincontent").innerHTML = "" +
        //Uniflott 
        "<div class='przedmiot_box'>" +
        "<img src='img/piana_montazowa.png' class='przedmiot_box_image' height='250px' width='120px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>TYTAN 65 Piana montażowa</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 750ml<br></span>" +
        "<br><button id='remove_btn_montazowa' class='info_btn' onclick='moreinfo_reveal_montazowa()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_montazowa' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //niskoprężna 
        "<div class='przedmiot_box'>" +
        "<img src='img/piana_niskoprezna.png' class='przedmiot_box_image' height='250px' width='120px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>TYTAN Piana montażowa niskoprężna Lexy60</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 750ml<br></span>" +
        "<br><button id='remove_btn_niskoprezna' class='info_btn' onclick='moreinfo_reveal_niskoprezna()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_niskoprezna' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>" +
        //niskoprężna 
        "<div class='przedmiot_box'>" +
        "<img src='img/klej_montazowy.png' class='przedmiot_box_image' height='250px' width='120px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>TYTAN Klej Montażowy</strong> <br>" +
        "<span class='small_text'> Dostępne opakowania: 300ml<br></span>" +
        "<br><button id='remove_btn_klejmontaz' class='info_btn' onclick='moreinfo_reveal_klejmontaz()'>Więcej Informacji</button><br>" +
        "<div id='moreinfo_klejmontaz' class='moreinfo'></div><br>" +
        "</div><br>" +
        "</div><br><hr>";
}