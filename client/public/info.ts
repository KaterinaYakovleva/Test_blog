interface Image {
  url: string;
  alt: string;
}

interface Post {
  id: number;
  image: Image;
  date: string; // Формат: YYYY-MM-DD
  readTime: string;
  commentsCount: number;
  title: string;
  description: string;
  tags: string[];
}

const posts: Post[] = [
  {
    id: 1,
    image: {
      url: "/pic1.svg",
      alt: "Человек в шляпе на фоне гор и леса",
    },
    date: "9 Апр",
    readTime: "2 мин",
    commentsCount: 1,
    title: "Вдохновение в каждом шаге",
    description:
      "Наши путешественники находят вдохновение в каждом шаге своего пути.",
    tags: ["Природа", "Люди"],
  },
  {
    id: 2,
    image: {
      url: "/pic 2.svg",
      alt: "Коала на дереве",
    },
    date: "6 Апр",
    readTime: "3 мин",
    commentsCount: 5,
    title: "Моменты тишины и покоя",
    description:
      "В такие моменты наши фотографы ощущают гармонию и умиротворение.",
    tags: ["Природа", "Животные"],
  },
  {
    id: 3,
    image: {
      url: "/pics/pic 3.svg",
      alt: "Руки держат цветы",
    },
    date: "5 Апр",
    readTime: "3 мин",
    commentsCount: 10,
    title: "Цвета природы в наших руках",
    description:
      "Наши художники вдохновляются природой и создают уникальные композиции.",
    tags: ["Искусство", "Цветы"],
  },
  {
    id: 4,
    image: {
      url: "/pics/pic 4.svg",
      alt: "Обезьяна",
    },
    date: "4 Апр",
    readTime: "15 мин",
    commentsCount: 6,
    title: "Семейные узы в дикой природе",
    description:
      "Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.",
    tags: ["Природа", "Животные"],
  },
  {
    id: 5,
    image: {
      url: "/pics/pic 5.svg",
      alt: "Природа",
    },
    date: "3 Апр",
    readTime: "2 мин",
    commentsCount: 2,
    title: "Гармония городских и природных пейзажей ",
    description:
      "Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.",
    tags: ["Природа", "Искусство"],
  },
  {
    id: 6,
    image: {
      url: "/pics/pic 5.svg",
      alt: "Cобака и человек",
    },
    date: "6 Апр",
    readTime: "4 мин",
    commentsCount: 0,
    title: "Моменты, которые остаются в сердце ",
    description: "любовью",
    tags: ["Природа", "Люди", "Животные"],
  },
];

export default posts;