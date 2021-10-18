
/* Program */













/* BODY */

let body = document.getElementById('body');


/* tabs or iframe */
let tabsCheck = document.getElementById('tabsCheck');
let iframeCheck = document.getElementById('iframeCheck');

let tabsCheckB = false;
let iframeCheckB = false;

const popupLinks = document.getElementById('blockBTN');

/* popup */
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup__close');
/* MAIN BOOL */


function Tabs(){
    if(tabsCheck.checked){
        tabsCheckB = true;
    }else{
        tabsCheckB = false;
    }
}

function IFrame(){
    if(iframeCheck.checked){
        iframeCheckB = true;
    }else{
        iframeCheckB= false;
    }
}

popupLinks.addEventListener('click', function(e){
    Tabs();
    if(tabsCheckB == true){
        start();
    }else{
        allVariableIsFalse();
    }

    IFrame();
    if(iframeCheckB == true){
        destroyIframe();
        popup.classList.add('open');
        popupClose.addEventListener('click', function(){
            popup.classList.remove('open');
            allVariableIsFalse();
            e.preventDefault();
        });
        startIframe();
        body.style.overflowY = 'hidden';
        e.preventDefault();
    }else {
        allVariableIsFalse();
    }

});


function startIframe(){
    /* INFO Encyclopedia */
    iframeSource(wikipedia, is_wikipedia, "https://ru.wikipedia.org/wiki/", "iframeWikipedia");
    iframeSource(krugosvet, is_krugosvet, "https://kartaslov.ru/%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0/", "iframeKrugosvet");
    iframeSource(encyclopedia, is_encyclopedia, "http://www.encyclopedia.ru/search/?q=", "iframeEncyclopedia");
    iframeSource(megabook, is_megabook, "https://megabook.ru/search?SearchText=", "iframeMegabook");
    iframeSource(microexcel, is_microexcel, "https://microexcel.ru/?s=", "iframeMicroexcel");
    iframeSource(gufo, is_gufo, "https://gufo.me/search?term=", "iframeGufo");
    iframeSourceCenter(habr, is_habr, "https://habr.com/ru/search/?q=", "&target_type=posts&order=relevance", "iframeHabr");

    /* Words - ? */


    iframeSource(wiktionary, is_wiktionary, "https://ru.wiktionary.org/wiki/", "iframeWiktionary");
    iframeSource(kartaslov, is_kartaslov, "https://kartaslov.ru/%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0/", "iframeKartaslov");
    iframeSourceCenter(academic, is_academic, "https://academic.ru/searchall.php?SWord=", "&from=xx&to=ru&did=&stype=", "iframeWiktionary");

    /* Forums */

    iframeSource(znanija, is_znanija, "https://znanija.com/app/ask?q=", "iframeZnanija");
    iframeSource(mail, is_mail, "https://otvet.mail.ru/search/", "iframeMail");
    iframeSource(overflow, is_overflow, "https://stackoverflow.com/search?q=", "iframeOverflow");
    iframeSource(overflowRu, is_overflowRu, "https://ru.stackoverflow.com/search?q=", "iframeOverflow");

    /* NEWSRU */

    iframeSource(rt, is_rt, "https://russian.rt.com/search?q=", "iframeRT");
    iframeSource(mir, is_mir, "https://mir24.tv/news/search?q=", "iframeMIR24");
    iframeSource(ria, is_ria, "https://ria.ru/search/?query=", "iframeRia");
    iframeSource(rbk, is_rbk, "https://www.rbc.ru/search/?project=rbcnews&query=", "iframeRbk");
    iframeSourceCenter(gazeta, is_gazeta, "https://www.gazeta.ru/search.shtml?text=", "&p=main&input=utf8", "iframeGazeta");
    iframeSource(rain, is_rain, "https://tvrain.ru/archive/?query=", "iframeRain");
    iframeSource(exoMoscow, is_exoMoscow, "https://echo.msk.ru/search/?search_cond%5Bquery%5D=", "iframeExoMoscow");

    /* NEWS */

    iframeSource(cnn, is_cnn, "https://edition.cnn.com/search?q=", "iframeCNN");
    iframeSource(bbc, is_bbc, "https://www.bbc.co.uk/search?q=", "iframeBBC");
    iframeSource(sun, is_sun, "https://www.thesun.co.uk/?s=", "iframeSun");
    iframeSource(time, is_time, "https://www.thetimes.co.uk/search?source=nav-desktop&q=", "iframeTime");
    iframeSourceCenter(googleNews, is_googleNews, "https://news.google.com/search?q=", "&hl=en-US&gl=US&ceid=US:en", "iframeGoogleNews");
    iframeSource(NewYorkTimes, is_NewYorkTimes, "https://www.nytimes.com/search?query=", "iframeTime");
    iframeSource(championat, is_championat, "https://www.championat.com/tags/search/?q=", "iframeChampionat");
    /* Searching */

    iframeSourceCenter(google, is_google, "https://www.google.com/search?q=", "&newwindow=1&sxsrf=AOaemvLV-Fmx-IMHWgRo3P2u1vVJPFriEQ%3A1630342618808&source=hp&ei=2g0tYYzoK_Sf4-EP7K2CsA0&iflsig=ALs-wAMAAAAAYS0b6oNx_KenST6faIGVqiTjPrBhJwqL&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQ6gIQJzINCC4QxwEQrwEQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWABg_xBoAXAAeACAAQCIAQCSAQCYAQCwAQo&sclient=gws-wiz", "iframeGoogle");
    iframeSourceCenter(yandex, is_yandex, "https://yandex.ru/search/?text=", "&lr=213&clid=9582&src=suggest_B", "iframeTime");
    iframeSourceCenter(yahoo, is_yahoo, "https://search.yahoo.com/search?p=", "&fr=yfp-t&ei=UTF-8&fp=1", "iframeYahoo");
    iframeSourceCenterTwo(bing, is_bing, "https://www.bing.com/search?q=", "&form=QBLH&sp=-1&pq=", "&sc=8-5&sk=&cvid=9EE4A08D636E4989A83553E5AB8ABA51", "iframeBing");
    iframeSource(DuckDuckGo, is_DuckDuckGo, "https://duckduckgo.com/?q=", "iframeDuckDuckGo");
    iframeSource(ask, is_ASK, "https://www.ask.com/web?q=", "iframeDuckDuckGo");

    /* VideoHosting */

    iframeSource(youtube, is_youtube, "https://www.youtube.com/results?search_query=", "iframeYoutube");
    iframeSource(vimeo, is_vimeo, "https://vimeo.com/search?q=", "iframeVimeo");
    iframeSource(toxicbun, is_toxicbun, "https://toxicbun.com/search?keyword=", "iframeToxicbun");
    iframeSource(rutube, is_rutube, "https://rutube.ru/search/?query=", "iframeRutube");
    iframeSource(vk, is_vk, "https://vk.com/video?q=", "iframeVK");

    /* Films */

    iframeSource(kinopoisk, is_kinopoisk, "https://www.kinopoisk.ru/index.php?kp_query=", "iframeYoutube");
    iframeSource(ivi, is_ivi, "https://www.ivi.ru/search/?ivi_search=", "iframeIVI");
    iframeSource(megogo, is_megogo, "https://megogo.ru/ru/search-extended?q=", "iframeMegogo");
    iframeSource(okko, is_okko, "https://okko.tv/search/", "iframeOKKO");
}


function destroyIframe() {
    document.getElementById('iframeWikipedia').innerHTML = '';
    document.getElementById('iframeKrugosvet').innerHTML = '';
    document.getElementById('iframeEncyclopedia').innerHTML = '';
    document.getElementById('iframeMegabook').innerHTML = '';
    document.getElementById('iframeMicroexcel').innerHTML = '';
    document.getElementById('iframeGufo').innerHTML = '';
    document.getElementById('iframeHabr').innerHTML = '';

    /* Words - ? */

    document.getElementById('iframeWiktionary').innerHTML = '';
    document.getElementById('iframeKartaslov').innerHTML = '';
    document.getElementById('iframeAcademic').innerHTML = '';


    /* Forums */

    document.getElementById('iframeZnanija').innerHTML = '';
    document.getElementById('iframeMail').innerHTML = '';
    document.getElementById('iframeOverflow').innerHTML = '';
    document.getElementById('iframeOverflowRU').innerHTML = '';

    /* NEWSRU */

    document.getElementById('iframeRT').innerHTML = '';
    document.getElementById('iframeMIR24').innerHTML = '';
    document.getElementById('iframeRia').innerHTML = '';
    document.getElementById('iframeRbk').innerHTML = '';
    document.getElementById('iframeGazeta').innerHTML = '';
    document.getElementById('iframeRain').innerHTML = '';
    document.getElementById('iframeChampionat').innerHTML = '';
    document.getElementById('iframeExoMoscow').innerHTML = '';
    /* NEWS */

    document.getElementById('iframeCNN').innerHTML = '';
    document.getElementById('iframeBBC').innerHTML = '';
    document.getElementById('iframeSun').innerHTML = '';
    document.getElementById('iframeTime').innerHTML = '';
    document.getElementById('iframeGoogleNews').innerHTML = '';
    document.getElementById('iframeNewYorkTimes').innerHTML = '';

    /* Searching */

    document.getElementById('iframeGoogle').innerHTML = '';
    document.getElementById('iframeYandex').innerHTML = '';
    document.getElementById('iframeYahoo').innerHTML = '';
    document.getElementById('iframeBing').innerHTML = '';
    document.getElementById('iframeDuckDuckGo').innerHTML = '';
    document.getElementById('iframeASK').innerHTML = '';

    /* VideoHosting */

    document.getElementById('iframeYoutube').innerHTML = '';
    document.getElementById('iframeVimeo').innerHTML = '';
    document.getElementById('iframeToxicbun').innerHTML = '';
    document.getElementById('iframeRutube').innerHTML = '';
    document.getElementById('iframeVK').innerHTML = '';

    /* Films */

    document.getElementById('iframeKinopoisk').innerHTML = '';
    document.getElementById('iframeIVI').innerHTML = '';
    document.getElementById('iframeMegogo').innerHTML = '';
    document.getElementById('iframeOKKO').innerHTML = '';
}




/* IFRAME */

let popupBlock = document.getElementById('popup__block');


function iframeSource(variable, boolC, link, nameOfSource){
    if(variable.checked){
        boolC = true;
        if(variable){
            let source = document.getElementById(nameOfSource);

            let iframe = document.createElement("iframe");
            iframe.classList.add("iframeClass");
            iframe.src = link + search.value;
            iframe.height = 1000;
            iframe.width = 1500;
            iframe.sandbox="allow-scripts allow-forms";
            iframe.style.border = "solid 10px";
            source.appendChild(iframe);
        }
    }else if(variable.checked == false) {
        boolC = false;
    }
    
}

function iframeSourceCenter(variable, boolC, link, linkTwo, nameOfSource){
    if(variable.checked){
        boolC = true;
        if(variable){
            let source = document.getElementById(nameOfSource);

            let iframe = document.createElement("iframe");
            iframe.src = link + search.value + linkTwo;
            iframe.height = 1000;
            iframe.width = 1500;
            iframe.style.border = "solid 10px";
            source.appendChild(iframe);
        }
    }else {
        boolC = false;
    }
    
}

function iframeSourceCenterTwo(variable, boolC, link, linkTwo, link3, nameOfSource){
    if(variable.checked){
        boolC = true;
        if(variable){
            let source = document.getElementById(nameOfSource);

            let iframe = document.createElement("iframe");
            iframe.src = link + search.value + linkTwo + search.value + link3;
            iframe.height = 1000;
            iframe.width = 1500;
            iframe.style.border = "solid 10px";
            source.appendChild(iframe);
        }
    }else {
        boolC = false;
    }
    
}




    







/* DOM */

/* INFO */
let wikipedia = document.getElementById("wikipedia");
let wiktionary = document.getElementById("wiktionary");
let lurkmore = document.getElementById("lurkmore");
let kartaslov = document.getElementById("kartaslov");
let znanija = document.getElementById("znanija");
let krugosvet = document.getElementById("krugosvet");
let encyclopedia = document.getElementById("encyclopedia");
let academic = document.getElementById("academic");
let megabook = document.getElementById("megabook");
let microexcel = document.getElementById("microexcel");
let gufo = document.getElementById("gufo");
let mail = document.getElementById("mail");
let habr = document.getElementById("habr");


let overflow = document.getElementById('overflow');
let overflowRu = document.getElementById('overflowRu');



/* NEWS */
let mir = document.getElementById("mir");
let rt = document.getElementById("rt");
let ria = document.getElementById("ria");
let rbk = document.getElementById("rbk");
let bbc = document.getElementById("bbc");
let cnn = document.getElementById("cnn");
let sun = document.getElementById("sun");
let time = document.getElementById("time");
let rain = document.getElementById("rain");
let gazeta = document.getElementById("gazeta");
let googleNews = document.getElementById("googleNews");
let NewYorkTimes = document.getElementById("NewYorkTimes");

let championat = document.getElementById("championat");
let exoMoscow = document.getElementById("exoMoscow");

/* searchEngines */
let google = document.getElementById("google");
let yandex = document.getElementById("yandex");
let yahoo = document.getElementById("yahoo");
let bing =document.getElementById("bing");
let DuckDuckGo = document.getElementById("DuckDuckGo");
let ask = document.getElementById("ask");


/* searchShop */

let aliexpress = document.getElementById("aliexpress");
let amazon = document.getElementById("amazon");
let ozon = document.getElementById("ozon");
let dns = document.getElementById("dns");
let eldorado = document.getElementById("eldorado");

/* videoHosting */

let youtube = document.getElementById("youtube");
let vimeo = document.getElementById("vimeo");
let toxicbun = document.getElementById("toxicbun");
let rutube = document.getElementById("rutube");
let vk = document.getElementById("vk");


/* StartProgram */


/* Films */

let kinopoisk = document.getElementById("kinopoisk");
let ivi = document.getElementById("ivi");
let megogo = document.getElementById("megogo");
let okko = document.getElementById("okko");

function allVariableIsFalse(){
/* BOOL */

/* INFO */

    is_wikipedia = false;
    is_wiktionary = false;
    is_kartaslov = false; 
    is_znanija = false;
    is_krugosvet = false;
    is_encyclopedia = false;
    is_academic = false;
    is_megabook = false;
    is_microexcel = false;
    is_gufo = false;
    is_mail = false;
    is_habr = false;

    is_overflowRu = false;
    is_overflow = false;

    /* NEWS */

    is_mir = false;
    is_rt = false;
    is_ria = false;
    is_rbk = false;
    is_bbc = false;
    is_cnn = false;
    is_sun = false;
    is_time = false;
    is_rain = false;
    is_gazeta = false;
    is_googleNews = false;
    is_NewYorkTimes = false;
    is_championat = false;
    is_exoMoscow = false;

    /* searchEngines */

    is_google = false;
    is_yandex = false;
    is_yahoo = false;
    is_bing = false;
    is_DuckDuckGo = false;
    is_ASK = false;

    /* searchShop */

    is_aliexpress = false;
    is_amazon = false;
    is_ozon = false;
    is_dns = false;
    is_eldorado = false;

    /* videoHosting */

    is_youtube = false;
    is_vimeo = false;
    is_toxicbun = false;
    is_rutube = false;
    is_vk = false;

    /* Films */

    is_kinopoisk = false;
    is_ivi = false;
    is_megogo = false;
    is_okko = false;

}







/* BOOL */

/* INFO */

let is_wikipedia = false;
let is_wiktionary = false;
let is_kartaslov = false; 
let is_znanija = false;
let is_krugosvet = false;
let is_encyclopedia = false;
let is_academic = false;
let is_megabook = false;
let is_microexcel = false;
let is_gufo = false;
let is_mail = false;
let is_habr = false;

let is_overflow = false;
let is_overflowRu = false;


/* NEWS */

let is_mir = false;
let is_rt = false;
let is_ria = false;
let is_rbk = false;
let is_bbc = false;
let is_cnn = false;
let is_sun = false;
let is_time = false;
let is_rain = false;
let is_gazeta = false;
let is_googleNews = false;
let is_NewYorkTimes = false;

let is_championat = false;
let is_exoMoscow = false;

/* searchEngines */

let is_google = false;
let is_yandex = false;
let is_yahoo = false;
let is_bing = false;
let is_DuckDuckGo = false;
let is_ASK = false;

/* searchShop */

let is_aliexpress = false;
let is_amazon = false;
let is_ozon = false;
let is_dns = false;
let is_eldorado = false;
/* videoHosting */

let is_youtube = false;
let is_vimeo = false;
let is_toxicbun = false;
let is_rutube = false;
let is_vk = false;

/* Films */

let is_kinopoisk = false;
let is_ivi = false;
let is_megogo = false;
let is_okko = false;




/* 
    INPUT
*/

let search = document.getElementById('search');

//functions



    function checkSt(variable, is_boolC, linkC){
        if(variable.checked){
            is_boolC = true;
            if(is_boolC){
                window.open(linkC + search.value);
            }
        }else{
            is_boolC = false;
     
        }
    }
    
    function checkStCenter(variable, is_boolC, linkC, linkC2){
        if(variable.checked){
            is_boolC = true;
            if(is_boolC){
                window.open(linkC + search.value + linkC2);
            }
        }else{
            is_boolC = false;
     
        }
    }
    
    
    function checkStCenterTwo(variable, is_boolC, linkC, linkC2, linkC3){
        if(variable.checked){
            is_boolC = true;
            if(is_boolC){
                window.open(linkC + search.value + linkC2 + search.value + linkC3);
            }
        }else{
            is_boolC = false;
     
        }
    }
    
    
    
    
    
    function start(){
        
            /* INFO */
    
            checkSt(wikipedia, is_wikipedia, "https://ru.wikipedia.org/wiki/");
            checkSt(wiktionary, is_wiktionary, "https://ru.wiktionary.org/wiki/");
            checkSt(kartaslov, is_kartaslov, "https://kartaslov.ru/%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0/");
            checkSt(znanija, is_znanija, "https://znanija.com/app/ask?q=");
    
            checkSt(krugosvet, is_krugosvet, "https://www.krugosvet.ru/search/node/");
    
            checkSt(encyclopedia,is_encyclopedia, "http://www.encyclopedia.ru/search/?q=");
    
            checkStCenter(academic, is_academic, "https://academic.ru/searchall.php?SWord=", "&from=xx&to=ru&did=&stype=");
    
            checkStCenter(megabook, is_megabook, "https://megabook.ru/search?SearchText=", "&EntityKind=Article");
            checkSt(microexcel, is_microexcel, "https://microexcel.ru/?s=");
            checkSt(gufo, is_gufo, "https://gufo.me/search?term=");
            checkSt(mail, is_mail, "https://otvet.mail.ru/search/");
            checkStCenter(habr, is_habr, "https://habr.com/ru/search/?q=", "&target_type=posts&order=relevance");
    

            
            checkSt(overflowRu, is_overflowRu, "https://ru.stackoverflow.com/search?q=");
            checkSt(overflow, is_overflow, "https://stackoverflow.com/search?q=");

    
            /* NEWS */
            checkSt(rt, is_rt, "https://russian.rt.com/search?q=");
            checkSt(ria, is_ria, "https://ria.ru/search/?query=");
            checkSt(rbk, is_rbk, "https://www.rbc.ru/search/?project=rbcnews&query=");
            checkSt(rain, is_rain, "https://tvrain.ru/archive/?query=");
            checkSt(cnn, is_cnn, "https://edition.cnn.com/search?q=");
            checkSt(bbc, is_bbc, "https://www.bbc.co.uk/search?q=");
            checkSt(sun, is_sun, "https://www.thesun.co.uk/?s=");
            checkSt(time, is_time, "https://www.thetimes.co.uk/search?source=nav-desktop&q=");
            checkStCenter(gazeta, is_gazeta, "https://www.gazeta.ru/search.shtml?text=", "&p=main&input=utf8");
            checkSt(mir, is_mir, "https://mir24.tv/news/search?q=");
            checkStCenter(googleNews, is_googleNews, "https://news.google.com/search?q=", "&hl=en-US&gl=US&ceid=US:en");
            checkSt(NewYorkTimes, is_NewYorkTimes, "https://www.nytimes.com/search?query=");

            checkSt(championat, is_championat, "https://www.championat.com/tags/search/?q=");
            checkSt(exoMoscow, is_exoMoscow, "https://echo.msk.ru/search/?search_cond%5Bquery%5D=");
    
            /* searchEngines */
            checkStCenter(yahoo, is_yahoo, "https://search.yahoo.com/search?p=", "&fr=yfp-t&ei=UTF-8&fp=1");
            checkStCenter(google, is_google, "https://www.google.ru/search?q=", "&newwindow=1&sxsrf=AOaemvLV-Fmx-IMHWgRo3P2u1vVJPFriEQ%3A1630342618808&source=hp&ei=2g0tYYzoK_Sf4-EP7K2CsA0&iflsig=ALs-wAMAAAAAYS0b6oNx_KenST6faIGVqiTjPrBhJwqL&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQ6gIQJzINCC4QxwEQrwEQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWABg_xBoAXAAeACAAQCIAQCSAQCYAQCwAQo&sclient=gws-wiz");
            checkStCenterTwo(bing, is_bing, "https://www.bing.com/search?q=", "&form=QBLH&sp=-1&pq=", "&sc=8-5&sk=&cvid=9EE4A08D636E4989A83553E5AB8ABA51");
            checkSt(DuckDuckGo, is_DuckDuckGo, "https://duckduckgo.com/?q=");
            checkSt(ask, is_ASK, "https://www.ask.com/web?q=");
            checkStCenter(yandex, is_yandex, "https://yandex.ru/search/?text=", "&lr=213&clid=9582&src=suggest_B");
            

            /* searchShop */

            checkStCenter(aliexpress, is_aliexpress, "https://aliexpress.ru/af/%25D0%25A4%25D1%2583%25D1%2582%25D0%25B1%25D0%25BE%25D0%25BB%25D0%25BA%25D0%25B0.html?d=y&origin=n&SearchText=", "&catId=0&initiative_id=SB_20211003052955");
            checkStCenter(amazon, is_amazon, "https://www.amazon.com/s?k=", "&ref=nb_sb_noss_1");
            checkSt(ozon, is_ozon, "https://www.ozon.ru/search/?from_global=true&text=");
            checkSt(dns, is_dns, "https://www.dns-shop.ru/search/?q=");
            checkStCenter(eldorado, is_eldorado, "https://www.eldorado.ru/search/catalog.php?q=", "&utf");
            /* videoHosting */
    
            checkSt(youtube, is_youtube, "https://www.youtube.com/results?search_query=");
            checkSt(vimeo, is_vimeo, "https://vimeo.com/search?q=");
            checkSt(toxicbun, is_toxicbun, "https://toxicbun.com/search?keyword=");
            checkSt(rutube, is_rutube, "https://rutube.ru/search/?query=");
            checkSt(vk, is_vk, "https://vk.com/video?q=");
    
            
            /* Films */
    
    
            checkSt(kinopoisk, is_kinopoisk, "https://www.kinopoisk.ru/index.php?kp_query=");
            checkSt(ivi, is_ivi, "https://www.ivi.ru/search/?ivi_search=");
            checkSt(megogo, is_megogo, "https://megogo.ru/ru/search-extended?q=");
            checkSt(okko, is_okko, "https://okko.tv/search/");
    
        
    
    }
  


/*function checkWikipedia(){
        if(wikipedia.checked){
            is_wikipedia = true;
            startProgram(is_wikipedia, "https://ru.wikipedia.org/wiki/");
        }else{
            is_wikipedia = false;
        }
}*/









