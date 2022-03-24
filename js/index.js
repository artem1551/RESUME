window.addEventListener('load', () => {
  let data = {
    count: 'RU',
    count: 'ENG'
  };

  const eventTextRu = ` Event manager специализируется на организации отраслевых конференций, которые помогают компаниям улучшить свои деловые и производственные процессы, найти партнеров, достичь планов продаж и маркетинга и расти на рынке, опережая конкурентов. Помимо организации конференций в требования входит анализ рынка и сбор актуальной информации для спикеров мероприятия, а также проведение конференций.`;

  const eventTextEng = `Event manager specializes in the organization of industry conferences, which help companies to improve their business and production processes, find partners, achieve sales and marketing plans and grow in the market, outperforming the competition. In addition to the organization of the conferences included in the requirements, market analysis and collection of relevant information for the speakers of the event and the event was to hold conferences.`;

  const forwardTextRu = `В обязанности входил поиск и перевозка грузов по Европе и странам СНГ, полное сопровождение груза, таможенное оформление, контроль разгрузки и погрузки, время в пути следования грузового автомобиля, полное сопровождение груза от погрузки до этапа разгрузки. Поиск новых клиентов, новых водителей, заключение договоров. Компания занимается перевозкой всех видов грузов на различные расстояния.`;

  const forwardTextEng = `Duties included search and transportation of cargo in Europe and CIS countries, full escort of cargo, customs clearance, control of unloading and loading, time on the way of the truck, full escort of cargo from loading to the stage of unloading. The search for new customers, new drivers, the conclusion of contracts. The company is engaged in transportation of all kinds of cargo at different distances.`;

  const aboutTextRu = `Привет, меня зовут Артем :)В настоящее время я нахожусь в поиске возможностей в Front-end разработке и в постоянном обучении.

  В жизни я очень активен и всегда открыт для чего-то нового. Я считаю себя очень амбициозным, потому что стараюсь доводить до конца каждую задачу, за которую берусь. Я всегда задаю много вопросов и всегда стараюсь понять суть проблемы, чтобы принять наилучшее решение.

  Мне нравится активный отдых. Больше всего я люблю путешествовать.
  По профессии я инженер-ракетчик, но считаю, что для достижения космоса ракета не обязательна.

  Самое главное в жизни - это результат!`;

  const aboutTextEng = `Hi, my name is Artem :)I am currently in search of opportunities in Front-end development and in constant learning.

  In life I am very active and always open to something new. I consider myself very ambitious because I try to finish every task I undertake. I always ask a lot of questions and always try to understand the essence of a problem in order to make the best decision.

  I like active recreation. Most of all I like to travel.
  By profession I am a rocket engineer, but I believe that a rocket is not necessary to reach the space.

  The most important thing in life is the result!`;


  let language = document.querySelector('.resume__myContact__language');
  let buttonRussion = document.querySelector('.resume__myContact__russion');
  let buttonEnglish = document.querySelector('.resume__myContact__english');

  let workExperiences = document.querySelector('.right__work__experiences');
  let workPlaceEvent = document.querySelector('.right__work__place-event');
  let workSubtitleEvent = document.querySelector('.right__work__subtitle-event');
  let workPrasentEvent = document.querySelector('.right__work__year-event');

  let workPlaceForward = document.querySelector('.right__work__place-forward');

  let aboutMe = document.querySelector('.left__about__title');
  let aboutMeSutitle = document.querySelector('.left__about__subtitle');
  let workSubtitleForward = document.querySelector('.right__work__subtitle-forward');

  let education = document.querySelector('.right__wrapper__title');

  let lastWork = document.querySelector('.left__title');

  if (localStorage.btnClickLangSwitch) {
    data = JSON.parse(localStorage.btnClickLangSwitch);
  }

  if (data.count == 'RU') {
    workExperiences.innerHTML = `Опыт работы`;
    workPlaceEvent.innerHTML = `FPR.Events`;
    workSubtitleEvent.innerHTML = eventTextRu;
    workPrasentEvent.innerHTML = `09.2017 - 10.2019`;
    aboutMe.innerHTML = `Немного о себе`;
    aboutMeSutitle.innerHTML = aboutTextRu;
    workPlaceForward.innerHTML = 'Transport';
    workSubtitleForward.innerHTML = forwardTextRu;
    education.innerHTML = `Образование`;
    lastWork.innerHTML = `Часть работ`;
    buttonRussion.style.background = '#0f151b';
  } else if (data.count == 'ENG') {
    workExperiences.innerHTML = `Work Experiences`;
    workPlaceEvent.innerHTML = `FPR.Events`;
    workSubtitleEvent.innerHTML = eventTextEng;
    workPrasentEvent.innerHTML = `09.2017 - 10.2019`;
    aboutMe.innerHTML = `About Me`;
    aboutMeSutitle.innerHTML = aboutTextEng;
    workPlaceForward.innerHTML = ` Transport`;
    workSubtitleForward.innerHTML = forwardTextEng;
    education.innerHTML = `Education`;
    lastWork.innerHTML = `Some Work`;
    buttonEnglish.style.background = '#0f151b';
  }

  language.addEventListener('click', function (event) {
    if (event.target.className == 'resume__myContact__english resume__myContact__lang') {
      data.count = 'ENG';
      // alert('Eng')
      workExperiences.innerHTML = `Work Experiences`;
      workPlaceEvent.innerHTML = `FPR.Events`;
      workSubtitleEvent.innerHTML = eventTextEng;
      workPrasentEvent.innerHTML = `09.2017 - 10.2019`;
      aboutMe.innerHTML = `About Me`;
      aboutMeSutitle.innerHTML = aboutTextEng;
      workPlaceForward.innerHTML = `Transport`;
      workSubtitleForward.innerHTML = forwardTextEng;
      education.innerHTML = `Education`;
      lastWork.innerHTML = `Some Work`;
      buttonEnglish.style.background = '#0f151b';
      buttonRussion.style.background = 'linear-gradient(#273a57, #030303) #1c2630';
    } else if (event.target.className == 'resume__myContact__russion resume__myContact__lang') {
      data.count = 'RU';
      workExperiences.innerHTML = `Опыт работы`;
      workPlaceEvent.innerHTML = `FPR.Events`;
      workSubtitleEvent.innerHTML = eventTextRu;
      workPrasentEvent.innerHTML = `09.2017 - 10.2019`;
      aboutMe.innerHTML = `Немного о себе`;
      aboutMeSutitle.innerHTML = aboutTextRu;
      workPlaceForward.innerHTML = 'Transport';
      workSubtitleForward.innerHTML = forwardTextRu;
      education.innerHTML = `Образование`;
      lastWork.innerHTML = `Часть работ`;
      buttonRussion.style.background = '#0f151b';
      buttonEnglish.style.background = 'linear-gradient(#273a57, #030303) #1c2630';
    }

    localStorage.btnClickLangSwitch = JSON.stringify(data);
  });
});
