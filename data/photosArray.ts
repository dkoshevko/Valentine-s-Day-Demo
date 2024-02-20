// You can add path to Firebase or other into "src"

type Photos = {
  lat: number;
  lng: number;
  src: string;
  date: string;
};

let photosArray: Photos[] = [
  {
    lat: 48.8566,
    lng: 2.3522,
    src: `/photos/andrey-k-YekSR4J5uZE-unsplash.jpg`,
    date: "17.03.2021",
  },
  {
    lat: 43.7102,
    lng: 7.262,
    src: `/photos/bacila-vlad-WTThc6UmwEI-unsplash.jpg`,
    date: "05.11.2021",
  },
  {
    lat: 47.2184,
    lng: -1.5536,
    src: `/photos/david-clarke-lJmx6aV5F0k-unsplash.jpg`,
    date: "19.12.2021",
  },
  {
    lat: 45.764,
    lng: 4.8357,
    src: `/photos/engin-akyurt-fEG6djtQffM-unsplash.jpg`,
    date: "12.02.2022",
  },
  {
    lat: 43.6047,
    lng: 1.4442,
    src: `/photos/ilia-bronskiy-xVk0S6wudkw-unsplash.jpg`,
    date: "28.05.2023",
  },
];

export default photosArray;
