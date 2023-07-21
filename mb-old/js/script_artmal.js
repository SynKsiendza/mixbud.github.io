function art_mal()
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
    // Pędzle
    "<div class='przedmiot_box'>" +
    "<img src='img/pedzle.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Pędzle</strong> <br>" +
    "<span class='small_text'>Wiele rozmiarów dostępne</span>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Wałki
    "<div class='przedmiot_box'>" +
    "<img src='img/walek.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Wałki</strong> <br>" +
    "<span class='small_text'>Wiele rozmiarów dostępne</span>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Kuwety
    "<div class='przedmiot_box'>" +
    "<img src='img/kuweta.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Kuwety malarskie</strong> <br>" +
    "<span class='small_text'>Wiele rozmiarów dostępne</span>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Wiadra
    "<div class='przedmiot_box'>" +
    "<img src='img/wiadro.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Wiadra</strong> <br>" +
    "<span class='small_text'>Wiele rozmiarów dostępne</span>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Folie
    "<div class='przedmiot_box'>" +
    "<img src='img/folia.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Folie Malarskie</strong> <br>" +
    "<span class='small_text'>Wiele rozmiarów dostępne</span>" +
    "</div><br>" +
    "</div><br><hr>" +
    // Taśma
    "<div class='przedmiot_box'>" +
    "<img src='img/tasma.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Taśmy malarskie</strong> <br>" +
    "<span class='small_text'>Wiele rozmiarów dostępne</span>" +
    "</div><br>" +
    "</div><br><hr>";
}