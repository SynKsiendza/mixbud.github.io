function akcesoria()
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
        
        "<div class='przedmiot_box'>" +
        "<img src='img/akcesoria2.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Akcesoria:</strong> <br>" +
        "<span class='small_text'>Taśmy, smary, linijki, łaty murarskie, poziomice, Miarki, ołówki, przymiary kątowe</span>" +
        "</div>" +
        "</div><hr>" +
        "<div class='przedmiot_box'>" +
        "<img src='img/chemia.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Chemia budowlana:</strong> <br>" +
        "<span class='small_text'>Plastyfikatory, Klej do drewna, Butapren, Rozpuszczalnik, Preparaty konserwacyjno-naprawcze</span>" +
        "</div>" +
        "</div><hr>";
}
