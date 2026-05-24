let songs = [];
let currentSong = null;

const audio = document.getElementById("audioPlayer");
const randomBtn = document.getElementById("randomBtn");
const checkBtn = document.getElementById("checkBtn");
const revealBtn = document.getElementById("revealBtn");
const answerInput = document.getElementById("answerInput");
const resultDiv = document.getElementById("resultArea");
const songCountSpan = document.getElementById("songCount");

const MUSIC_BASE_URL = 'https://pub-448184de5bd447ba91e4108089e8613e.r2.dev/';

const songNames = [
  "Альбенис. Астурия",
  "Альбинони. Адажио (С.Брайтман)",
  "Альбинони. Адажио",
  "Бах. Концерт для гобоя ре-минор. ч.2",
  "Бах. Менуэт и Шутка",
  "Бах. Страсти по Матфею. Ч.1 (Хор)",
  "Бах. Токката ре-минор",
  "Бах. Фуга ре-минор",
  "Бах. ХТК - Ч.1 прелюдия и фуга №1 До-мажор",
  "Бах. ХТК - Ч.1 прелюдия и фуга №2 до-минор",
  "Бетховен. Симфония №5-Ч.1",
  "Бетховен. Соната № 23 (Аппассионата)-Ч.1",
  "Бетховен. Соната №14 (Лунная)-Ч.1",
  "Бетховен. Соната №21 (Аврора). Ч.1",
  "Бетховен. Увертюра Эгмонт, op. 84",
  "Бетховен. Фп. сон. № 8 (Патетическая) Ч.1",
  "Бетховен. Фп. соната  Элизе",
  "Бизе. Кармен- Антракт к 4 действ.",
  "Бизе. Кармен-Куплеты Тореадора",
  "Бизе. Кармен-Увертюра",
  "Бизе. Кармен-Хабанера",
  "Боккерини. Менуэт",
  "Брамс. Венгерский танец №1",
  "Брамс. Венгерский танец №4",
  "Брамс. Венгерский танец №5",
  "Вагнер. Полет Валькирий",
  "Верди. опера Аида _ Марш",
  "Верди. опера Риголетто (Песенка Герцога)",
  "Верди. опера Травиата (Застольная)",
  "Верди. опера Травиата_ увертюра (Прелюдия)",
  "Вивальди-Concerto in F minor (Зима) Ч.1-Allegro non molto",
  "Вивальди-Concerto in F minor (Зима) Ч.2-Largo",
  "Вивальди-Concerto in F minor (Зима) Ч.3-Allegro",
  "Вивальди-Concerto in G minor (Лето) Ч.1-Allegro non molto",
  "Вивальди-Concerto in G minor (Лето) Ч.2-Adagio",
  "Вивальди-Concerto in G minor (Лето) Ч.3-Presto",
  "Гайдн. Симфония №104 - Ч.1",
  "Гендель. Музыка королевского фейерверка",
  "Гендель. Музыка на воде №2-Allegro",
  "Гершвин. Рапсодия в блюзовых тонах",
  "Гершвин.опер.Порги и Бесс (Колыбельная Клары)",
  "Глюк. опер. Орфей (Мелодия для флейты)",
  "Григ. Концерт для ф-но с орк. ля-минор. Ч.1",
  "Григ. сюита Пер Гюнт (В пещере горного короля)",
  "Григ. сюита Пер Гюнт (Танец Анитры)",
  "Григ. сюита Пер Гюнт (Утро)",
  "Гуно Ш. Ромео и Джульетта - Вальс Джульетты (М.Кабалье)",
  "Дворжак. Славянский танец №2",
  "Дворжак. Юмореска",
  "Дебюсси. Прелюдия «Девушка с волосами цвета льна»",
  "Дебюсси.Прелюдия «Лунный свет»",
  "Коччианте Р. Notre- Dame de Paris - Le temps de cathedrales (Время соборов) (фр.)",
  "Коччианте Р. Notre-Dame de Paris - Belle (Красавица) (фр.)",
  "Коччианте Р. Notre-Dame de Paris - Belle (рус.)",
  "Коччианте Р. Notre-Dame de Paris - Le temps des cathedrales (Время соборов) (рус.)",
  "Лист. Венгерская рапсодия №2",
  "Лист. Грёзы любви",
  "Лист. Утешение",
  "Мендельсон Симф. №4 -Итальянская- Ч1",
  "Мендельсон. Сон в летнюю ночь (Свадебный марш)",
  "Мессиан О. Экзотические птицы",
  "Моцарт В. Волшебная флейта - Ария Царицы ночи (А.Нетребко)",
  "Моцарт. Вариации для фп. До мажор, K265",
  "Моцарт. Волшебная флейта (Ария Царицы ночи) 1",
  "Моцарт. Маленькая ночная серенада Соль мажор (Ч.1 -  Allegro)",
  "Моцарт. Маленькая ночная серенада Соль мажор (Ч.4 -  Rondo_ Allegro)",
  "Моцарт. Маленькая ночная серенада",
  "Моцарт. опера Дон Жуан - Увертюра",
  "Моцарт. Реквием (Dies irae)",
  "Моцарт. Реквием (Lacrimosa dies illa)",
  "Моцарт. Свадьба Фигаро (Увертюра)",
  "Моцарт. Свадьба Фигаро - Ария Фигаро Мальчик, резвый, кудрявый, влюбленный",
  "Моцарт. Серенада «Gran Partita»_ адажио",
  "Моцарт. Симфония №40-Ч.1",
  "Моцарт. Фп. конц.№21, ч.2",
  "Моцарт.Соната для ф-но Ля мажор-Турецкий марш",
  "Онеггер. Пасифик-231",
  "Орф. Кармина Бурана (O, Fortuna)",
  "Оффенбах. Орфей в аду (Кан-Кан)",
  "Паганини. Каприс для скрипки №24",
  "Пило-Шультез. Моцарт. Рок-опера -  Ah!  Vous Dirais-Je Maman (Ах, сказала бы вам мама)",
  "Пило-Шультез. Моцарт. Рок-опера -  L_Assasymphonie (Симфония убийцы)",
  "Пило-Шультез. Моцарт. Рок-опера - Je Dors Sur Des Roses (Я сплю на розах)",
  "Пило-Шультез. Моцарт. Рок-опера - Tatoue-Moi (Запечатли меня)",
  "Пресгурвик Ж. Ромео и Джульетта - Aime (Благословение) (рус.)",
  "Пресгурвик Ж. Ромео и Джульетта - Aime (Благословение) (фр.)",
  "Пресгурвик Ж. Ромео и Джульетта - Les rois du  monde (Короли ночной Вероны) (рус.)",
  "Пресгурвик Ж. Ромео и Джульетта - Les rois du  monde (Короли ночной Вероны) (фр.)",
  "Пресгурвик Ж. Ромео и Джульетта - Verona (рус.)",
  "Пресгурвик Ж. Ромео и Джульетта - Verona (фр.)",
  "Пуччини. Тоска (Ария Каварадосси)",
  "Пьяццолла. Libertango",
  "Пьяццолла. Oblivion",
  "Равель. Болеро",
  "Райли Т. В тоне До",
  "Россини. Севильский цирюльник (Увертюра)",
  "Сен-Санс. Лебедь",
  "Сметана. Влтава",
  "Уэббер Э.Л. The Phantom Of The Opera (Призрак оперы) - Music of the night",
  "Уэббер Э.Л. Иисус Христос Суперзвезда  - Hosanna (Осанна)",
  "Уэббер Э.Л. Иисус Христос Суперзвезда (главная тема)",
  "Уэббер Э.Л. Иисус Христос Суперзвезда - Колыбельная Магдалины",
  "Уэббер Э.Л. Кошки - Memory (Память)",
  "Шопен. Вальс №7",
  "Шопен. Полонез Ля мажор",
  "Шопен. Прелюдия №4",
  "Шопен. Революционный этюд",
  "Шопен. Фп. соната № 2, Похоронный марш",
  "Штраус И. Весенние голоса. Op.410",
  "Штраус И. Голубой Дунай",
  "Штраус И. Летучая мышь (Увертюра)",
  "Штраус И. Полька Трик-трак",
  "Штраус И. Сказки венского леса",
  "Штраус Р. Так говорил Заратустра",
  "Шуберт. Ave Maria",
  "Шуберт. Музыкальный  момент",
  "Шуберт. Серенада"
];

function loadSongs() {
  for (let name of songNames) {
    // Кодируем только специальные символы, но не всю строку
    const encodedName = encodeURIComponent(name) + ".mp3";
    songs.push({
      name: name,
      url: MUSIC_BASE_URL + encodedName
    });
  }
  songCountSpan.innerText = `${songs.length} песен загружено`;
  if (songs.length > 0) randomSong();
}

function randomSong() {
  if (songs.length === 0) {
    resultDiv.innerText = "Нет песен";
    resultDiv.className = "result-message wrong";
    return;
  }

  const randomIndex = Math.floor(Math.random() * songs.length);
  currentSong = songs[randomIndex];

  audio.src = currentSong.url;
  audio.load();
  audio.play().catch(e => console.log("Автовоспроизведение заблокировано", e));

  answerInput.value = "";
  resultDiv.innerText = "Слушайте и вводите название...";
  resultDiv.className = "result-message";
  revealBtn.style.display = "inline-block";
}

function checkAnswer() {
  if (!currentSong) {
    resultDiv.innerText = "Сначала выберите трек";
    resultDiv.className = "result-message wrong";
    return;
  }

  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = currentSong.name.toLowerCase();

  if (userAnswer === correctAnswer || (correctAnswer.includes(userAnswer) && userAnswer.length > 3) || userAnswer.includes(correctAnswer)) {
    resultDiv.innerText = "Правильно! Отлично!";
    resultDiv.className = "result-message correct";
  } else {
    resultDiv.innerText = "Неправильно. Попробуйте ещё раз";
    resultDiv.className = "result-message wrong";
  }
}

function revealAnswer() {
  if (currentSong) {
    resultDiv.innerText = `Правильный ответ: ${currentSong.name}`;
    resultDiv.className = "result-message wrong";
  }
}

randomBtn.addEventListener("click", randomSong);
checkBtn.addEventListener("click", checkAnswer);
revealBtn.addEventListener("click", revealAnswer);
answerInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkAnswer();
});

loadSongs();
