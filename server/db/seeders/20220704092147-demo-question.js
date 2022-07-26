'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [{
      theme: 'География',
      question: `На границе с какой страной находится самая южная точка России?`,
      answer: `Азербайджан`,
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'География',
      question: `В Юго‑Восточной Азии только эта страна никогда не была ничьей колонией. Недаром её название переводится как «Страна свободных». Назовите её.`,
      answer: `Таиланд`,
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'География',
      question: `Чтобы войти в неформальное объединение альпинистов «Клуб 7 вершин», надо покорить Эверест, Аконкагуа, Килиманджаро, пик Винсон, Пунчак‑Джая или пик Косцюшко, Мак‑Кинли и этот пятитысячник. Какой?`,
      answer: `Эльбрус`,
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'География',
      question: `Древние греки именовали этот остров Тринакрия — «треугольный». Как он называется сейчас?`,
      answer: `Сицилия`,
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'География',
      question: `Самые северные памятники Ленину установлены в посёлках Пирамида и Баренцбург. На каком архипелаге они расположены?`,
      answer: `Шпицберген`,
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Книги и кино',
      question: `В фильмах Джорджа Лукаса его блестяще воплотил бывший санитар Питер Мэйхью семи футов роста (213 см). Назовите имя персонажа.`,
      answer: `Чубакка`,
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Книги и кино',
      question: `Так назывался первый учебник, изданный И. Федоровым в 1574 году?`,
      answer: `Азбука`,
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Книги и кино',
      question: `Писатель Томас Харрис поведал: прототипом жуткого персонажа его тетралогии стал врач, сидевший в тюрьме мексиканского города Монтеррей. Что это за герой?`,
      answer: `Ганнибал Лектер`,
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Книги и кино',
      question: `На своём острове этот герой провозгласил свободу вероисповедания. Так, в его владениях мирно уживались протестант, язычник и католик. Назовите его имя`,
      answer: `Робинзон Крузо`,
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Книги и кино',
      question: `В кино драки обычно озвучивают ударами кулака по кочану капусты или куску сырого мяса; этот звук — стуком пластиковых стаканчиков. Какой?`,
      answer: `Стук копыт`,
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'История',
      question: `Этот напиток первым из европейцев попробовал испанский конкистадор Кортес`,
      answer: `Какао`,
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'История',
      question: `В Древней Иудее это вредное насекомое считалось съедобным, так как по вкусу оно якобы напоминает креветку`,
      answer: `Саранча`,
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'История',
      question: `В 1924 и 1948 годах Германия была наказана за развязывание войн так же, как когда-то была наказана Спарта. Что это за наказание?`,
      answer: `Участие в Олимпийских играх`,
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'История',
      question: `На пирах в средневековой Руси, жалуя гостя хлебом, царь выражал гостеприимство и расположение, а пожалование какого продукта выражало царскую любовь? `,
      answer: `Соль`,
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'История',
      question: `Его разбудили и сообщили о взятии Бастилии. «Но ведь это бунт!»- воскликнул он. «Нет, государь, это революция!`,
      answer: `Людовик XVI`,
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Фоксики',
      question: `Как говорит Денис: "Если искать долго, то это ..."`,
      answer: `долго`,
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Фоксики',
      question: `Если Даша показывает 2 пальца и потом один загибает, то какой остается?`,
      answer: `средний`,
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Фоксики',
      question: `Если Виталю заставляют пить много воды, то какой это абьюз?`,
      answer: `абьюз водного баланса`,
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Фоксики',
      question: `Любимый покемон Антона`,
      answer: `Бидрилл`,
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      theme: 'Фоксики',
      question: `Что вместо сессионных залов в зуме Эльбруса?`,
      answer: `палаты`,
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {});
  },

  async down(queryInterface, Sequelize) {

  }
};
