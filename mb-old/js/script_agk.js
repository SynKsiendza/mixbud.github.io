function agk()
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
        //regipsy
        "<div class='przedmiot_box'>" +
        "<img src='img/kartongips.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Płyty Karton-Gips</strong> <br>" +
        "<span class='small_text'>Dostępna również w wersji wodoodpornej!<br>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Akcesoria
        "<div class='przedmiot_box'>" +
        "<img src='img/akcesoria.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wieszaki, pręty, profile ścienne i sufitowe</strong> <br>" +
        "<span class='small_text'>Dostępna również w wersji wodoodpornej!<br>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>";
}