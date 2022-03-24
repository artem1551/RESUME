window.addEventListener('load', () => {
    let data = {
      count: 'DE',
    };
  
    const amazonTextDeu = ` ICQA ist die Abkürzung von Inventory Control and Quality Assurance. Es handelt sich um eine eigenständige Abteilung des Online-Versandhändlers Amazon. Die ICQA führt in den jeweiligen Logistikzentren regelmäßig Inventuren durch und ist zudem für die Qualitätssicherung zuständig. Ein Teil dieser Abteilung prüft, ob der Inhalt der Regale auch mit den Angaben im elektronischen Lagersystem übereinstimmt und ob die Qualität der Ware einwandfrei ist. Eventuelle Lagerbestandsabweichungen sowie Fehler aus anderen Bereichen wie beispielsweise Stow, Receive und Pick sowie Diebstähle und Beschädigungen können zumeist mit der Hilfe von ICQA und den sogenannten Quality Analysten aufgedeckt, korrigiert und geklärt werden. `;
  
    const amazonTextEng = `ICQA is the abbreviation for Inventory Control and Quality Assurance. It is an independent department of the online mail order company Amazon. The ICQA regularly carries out inventories in the respective logistics centers and is also responsible for quality assurance. A part of this department checks whether the contents of the shelves also match the information in the electronic storage system and whether the quality of the goods is perfect. Any inventory deviations and errors from other areas such as stow, receive and pick as well as theft and damage can mostly be detected, corrected and clarified with the help of ICQA and the so-called quality analysts.`;
  
    const fiegeTextDeu = `Einsatz in unterschiedlichen Bereichen des Lagers, Bearbeitung von Wareneingängen, Kommissionierung von Kundenaufträgen, Unterstützung bei besonderen Kundenwünschen`;
  
    const fiegeTextEng = `Use in the perception of the camp,
                          Instruction of incoming goods,
                          Picking of customer orders,
                          Entering with certain customer knowledge`;
  
    const aboutTextDeu = `
    Ich ziele auf das Ergebnis des Fronted-Developer. Ich suche ein Unternehmen, in dem ich eine Möglichkeit hätte, meine Fertigkeiten zu verbessern und in meiner Karriere aufzusteigen. Im Leben mache ich mein Bestes, um mich zu entwickeln. Ich mag den Bereich der Computertechnologien und Programmierung sehr. Mich zieht die Gelegenheit an, etwas Neues zu schaffen.`;
  
    const aboutTextENG = ` I aim at the result of Fronted-Developer. I am looking for a company, in which I would have a possibility to improve my skills and increase in my career. I aspire to develop in my life. I like the sphere of computer technologies and programming. The opportunity of creating something new attracts me`;
  
    let resume = document.querySelector('.resume');
    let language = document.querySelector('.resume__myContact__language');
    let icqaWork = document.querySelector('.right__work');
    let buttonDeutsch = document.querySelector('.resume__myContact__deutsch');
    let buttonEnglish = document.querySelector('.resume__myContact__english');
  
    // buttonDeutsch.style.backgroundColor = 'red';
  
    ////// work exp//////
    let workEXperiences = document.querySelector('.right__work__experiences');
    let workPlaceAmazon = document.querySelector('.right__work__place-amazon');
    let workSubtitleAmazon = document.querySelector('.right__work__subtitle-amazon');
    let workPrasentAmazon = document.querySelector('.right__work__year-amazon');
    //fiege
    let workPlaceFiege = document.querySelector('.right__work__place-fiege');
  
    /// about me
    let aboutMe = document.querySelector('.left__about__title');
    let aboutMeSutitle = document.querySelector('.left__about__subtitle');
    let workSubtitleFiege = document.querySelector('.right__work__subtitle-fiege');
  
    ///aducation
    let education = document.querySelector('.right__wrapper__title');
  
    ////last work
    let lastWork = document.querySelector('.left__title');
  
    if (localStorage.btnClickLangSwitch) {
      data = JSON.parse(localStorage.btnClickLangSwitch);
    }
  
    if (data.count == 'DE') {
      workEXperiences.innerHTML = `Arbeitserfahrungen`;
      workPlaceAmazon.innerHTML = `bei Amazon`;
      workSubtitleAmazon.innerHTML = amazonTextDeu;
      workPrasentAmazon.innerHTML = `2018 -  Präsens`;
      aboutMe.innerHTML = `Über mich`;
      aboutMeSutitle.innerHTML = aboutTextDeu;
      workPlaceFiege.innerHTML = 'bei Fiege/Bosch';
      workSubtitleFiege.innerHTML = fiegeTextDeu;
      education.innerHTML = `Bildung`;
      lastWork.innerHTML = `Letzte Arbeit`;
      buttonDeutsch.style.background = '#0f151b';
    } else if (data.count == 'ENG') {
      workEXperiences.innerHTML = `Work Experiences`;
      workPlaceAmazon.innerHTML = `at Amazon`;
      workSubtitleAmazon.innerHTML = amazonTextEng;
      workPrasentAmazon.innerHTML = `2018 -  Present`;
      aboutMe.innerHTML = `About Me`;
      aboutMeSutitle.innerHTML = aboutTextENG;
      workPlaceFiege.innerHTML = ` at Fiege/Bosch`;
      workSubtitleFiege.innerHTML = fiegeTextEng;
      education.innerHTML = `Education`;
      lastWork.innerHTML = `Last Work`;
      buttonEnglish.style.background = '#0f151b';
    }
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    language.addEventListener('click', function (event) {
      if (event.target.className == 'resume__myContact__english resume__myContact__lang') {
        data.count = 'ENG';
        workEXperiences.innerHTML = `Work Experiences`;
        workPlaceAmazon.innerHTML = `at Amazon`;
        workSubtitleAmazon.innerHTML = amazonTextEng;
        workPrasentAmazon.innerHTML = `2018 -  Present`;
        aboutMe.innerHTML = `About Me`;
        aboutMeSutitle.innerHTML = aboutTextENG;
        workPlaceFiege.innerHTML = ` at Fiege/Bosch`;
        workSubtitleFiege.innerHTML = fiegeTextEng;
        education.innerHTML = `Education`;
        lastWork.innerHTML = `Last Work`;
        buttonEnglish.style.background = '#0f151b';
        buttonDeutsch.style.background = 'linear-gradient(#273a57, #030303) #1c2630';
      } else if (event.target.className == 'resume__myContact__deutsch resume__myContact__lang') {
        data.count = 'DE';
        workEXperiences.innerHTML = `Arbeitserfahrungen`;
        workPlaceAmazon.innerHTML = `bei Amazon`;
        workSubtitleAmazon.innerHTML = amazonTextDeu;
        workPrasentAmazon.innerHTML = `2018 -  Präsens`;
        aboutMe.innerHTML = `Über mich`;
        aboutMeSutitle.innerHTML = aboutTextDeu;
        workPlaceFiege.innerHTML = 'bei Fiege/Bosch';
        workSubtitleFiege.innerHTML = fiegeTextDeu;
        education.innerHTML = `Bildung`;
        lastWork.innerHTML = `Letzte Arbeit`;
        buttonDeutsch.style.background = '#0f151b';
        buttonEnglish.style.background = 'linear-gradient(#273a57, #030303) #1c2630';
      }
  
      localStorage.btnClickLangSwitch = JSON.stringify(data);
    });
  });
  