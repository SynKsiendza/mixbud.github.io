function Tarcza()
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
        //metal
        "<div class='przedmiot_box'>" +
        "<img src='img/tarcza_metal.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Tarcze do Metalu</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //drewno
        "<div class='przedmiot_box'>" +
        "<img src='img/tarcze_drewno.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Tarcze do Drewna</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //diamentowe
        "<div class='przedmiot_box'>" +
        "<img src='img/tarcza_diament.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Tarcze Diamentowe</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Wiertło
        "<div class='przedmiot_box'>" +
        "<img src='img/wiertlo_beton.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wiertła do Betonu</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //SDS
        "<div class='przedmiot_box'>" +
        "<img src='img/wiertlo_sds.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wiertła SDS</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //drewno
        "<div class='przedmiot_box'>" +
        "<img src='img/wiertlo_drewno.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wiertła do Drewna</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Do Metalu
        "<div class='przedmiot_box'>" +
        "<img src='img/wiertlo_sds.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wiertła do Metalu zwykłe oraz kobaltowe</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>" +
        //Koronka Diamentowa
        "<div class='przedmiot_box'>" +
        "<img src='img/wiertlo_koronka.png' class='przedmiot_box_image' height='200px' width='200px'>" +
        "<div class='przedmiot_box_text'>" +
        "<strong>Wiertło Koronka Diamentowa</strong> <br>" +
        "<span class='small_text'>Wiele rozmiarów dostępne!</span>" +
        "</div>" +
        "</div><hr>";
}