import { v4 as uuidv4 } from "uuid";

function songs() {
  return [
    {
      name: "Golden",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      artist: "Aarigod",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13004",
      color: ["#A8C366", "#171B0E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Traveling",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Anbuu",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12137",
      color: ["#F4B3DB", "#35407A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Day One",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11230",
      color: ["#F4B3DB", "#35407A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bloom",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11234",
      color: ["#F4B3DB", "#35407A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lax Incense",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto, Daphné",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12123",
      color: ["#704751", "#A84820"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Small Town",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12122",
      color: ["#704751", "#A84820"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Everyday",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12126",
      color: ["#704751", "#A84820"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Streets Are Cold",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12127",
      color: ["#704751", "#A84820"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Trenches",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope, Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10246",
      color: ["#943B31", "#321D1A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Droplets",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10256",
      color: ["#943B31", "#321D1A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Thoda Thoda Pyaar",
      cover:
        "https://a10.gaanacdn.com/gn_img/albums/w4MKPDOKoj/MKPggoBAbo/size_xxl.jpg",
      artist: "Stebin Ben, Nilesh Ahuja",
      audio:
        "https://pagalsongs.site/files/sfd6/2756/Thoda%20Thoda%20Pyaar_192(PaglaSongs).mp3",
      color: ["#943B31", "#321D1A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lut Gaye",
      cover:
        "https://a10.gaanacdn.com/gn_img/albums/a7LWBkzbzX/LWBkkJpRbz/size_xxl.jpg",
      artist: "Jubin Nautiyal, Manoj Muntashir",
      audio:
        "https://pagalsongs.site/files/sfd6/2869/Lut%20Gaye_320(PaglaSongs).mp3",
      color: ["#943B31", "#321D1A"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default songs;
