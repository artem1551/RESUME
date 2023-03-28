window.addEventListener('load', () => {
  let data = {
    count: 'UA',
    count: 'ENG'
  };

  const eventTextUA = ` Працюючи в Латвійській компанії займався розробкою різних сайтів у більшості випадків для латвійських компаній на базі Wordpress, так само React, за рік роботи зробив багато різних проектів, користувався різними інструментами php, next and astro.js, компанія постійно пробувала щось нове`;

  const eventTextEng = `Working in a Latvian company, having taken up the development of various sites for the majority of Latvian companies on the basis of Wordpress, so React itself, for the sake of work, having built a lot of various projects, using various tools php, next and astro.js, the company constantly tried new things`;

  const aboutTextUA = `Привіт, мене звуть Артем :)В даний час я знаходжуся у пошуку можливостей у Front-end розробці та у постійному навчанні.

  У житті я дуже активний і завжди відкритий для чогось нового. Я вважаю себе дуже амбітним, тому що намагаюся доводити до кінця кожне завдання, за яке беруся. Я завжди ставлю багато запитань і завжди намагаюся зрозуміти суть проблеми, щоб ухвалити найкраще рішення.

  Мені подобається активний відпочинок. Найбільше я люблю мандрувати.
  За професією я інженер-ракетник, але вважаю, що для досягнення космосу ракета не є обов'язковою.

  Найголовніше в житті – це результат!`;

  const aboutTextEng = `Hi, my name is Artem :)I am currently in search of opportunities in Front-end development and in constant learning.

  In life I am very active and always open to something new. I consider myself very ambitious because I try to finish every task I undertake. I always ask a lot of questions and always try to understand the essence of a problem in order to make the best decision.

  I like active recreation. Most of all I like to travel.
  By profession I am a rocket engineer, but I believe that a rocket is not necessary to reach the space.

  The most important thing in life is the result!`;


  let language = document.querySelector('.resume__myContact__language');
  let buttonUA = document.querySelector('.resume__myContact__ua');
  let buttonEnglish = document.querySelector('.resume__myContact__english');

  let workExperiences = document.querySelector('.right__work__experiences');
  let workPlaceEvent = document.querySelector('.right__work__place-event');
  let workSubtitleEvent = document.querySelector('.right__work__subtitle-event');
  let workPrasentEvent = document.querySelector('.right__work__year-event');

  let aboutMe = document.querySelector('.left__about__title');
  let aboutMeSutitle = document.querySelector('.left__about__subtitle');

  let education = document.querySelector('.right__wrapper__title');

  let lastWork = document.querySelector('.left__title');

  if (localStorage.btnClickLangSwitch) {
    data = JSON.parse(localStorage.btnClickLangSwitch);
  }

  if (data.count == 'UA') {
    workExperiences.innerHTML = `Досвід роботи`;
    workPlaceEvent.innerHTML = `Turn.lv`;
    workSubtitleEvent.innerHTML = eventTextUA;
    workPrasentEvent.innerHTML = `04.2022 - 03.2023`;
    aboutMe.innerHTML = `Трохи про себе`;
    aboutMeSutitle.innerHTML = aboutTextUA;
    education.innerHTML = `Освіта`;
    lastWork.innerHTML = `Частина робіт у вільний час`;
    buttonUA.style.background = '#0f151b';
  } else if (data.count == 'ENG') {
    workExperiences.innerHTML = `Work Experiences`;
    workPlaceEvent.innerHTML = `Turn.lv`;
    workSubtitleEvent.innerHTML = eventTextEng;
    workPrasentEvent.innerHTML = `04.2022 - 03.2023`;
    aboutMe.innerHTML = `About Me`;
    aboutMeSutitle.innerHTML = aboutTextEng;
    education.innerHTML = `Education`;
    lastWork.innerHTML = `Some Work at free time`;
    buttonEnglish.style.background = '#0f151b';
  }

  language.addEventListener('click', function (event) {
    if (event.target.className == 'resume__myContact__english resume__myContact__lang') {
      data.count = 'ENG';
      workExperiences.innerHTML = `Work Experiences`;
      workPlaceEvent.innerHTML = `Turn.lv`;
      workSubtitleEvent.innerHTML = eventTextEng;
      workPrasentEvent.innerHTML = `04.2022 - 03.2023`;
      aboutMe.innerHTML = `About Me`;
      aboutMeSutitle.innerHTML = aboutTextEng;
      education.innerHTML = `Education`;
      lastWork.innerHTML = `Some Work at free time`;
      buttonEnglish.style.background = '#0f151b';
      buttonUA.style.background = 'linear-gradient(#273a57, #030303) #1c2630';
    } else if (event.target.className == 'resume__myContact__ua resume__myContact__lang') {
      data.count = 'UA';
      workExperiences.innerHTML = `Досвід роботи`;
      workPlaceEvent.innerHTML = `Turn.lv`;
      workSubtitleEvent.innerHTML = eventTextUA;
      workPrasentEvent.innerHTML = `04.2022 - 03.2023`;
      aboutMe.innerHTML = `Трохи про себе`;
      aboutMeSutitle.innerHTML = aboutTextUA;
      education.innerHTML = `Освіта`;
      lastWork.innerHTML = `Частина робіт у вільний час`;
      buttonUA.style.background = '#0f151b';
      buttonEnglish.style.background = 'linear-gradient(#273a57, #030303) #1c2630';
    }

    localStorage.btnClickLangSwitch = JSON.stringify(data);
  });
});
