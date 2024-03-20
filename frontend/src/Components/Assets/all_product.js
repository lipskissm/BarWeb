import wahnonalk from '../Assets/Alus/wachen-nonalk.png';
import erdinon from '../Assets/Alus/erdinger-non-alk.png';
import bud from '../Assets/Alus/budweiser-non-alk.png';
import apinys from '../Assets/Alus/apinys.png';
import spikis from '../Assets/Alus/Spikis.png';
import gubtms from '../Assets/Alus/Gubernija-tamsus.png';
import gubextr from '../Assets/Alus/Ekstras.png';
import gubrad from '../Assets/Alus/gubernija-radler.png';
import hoeros from '../Assets/Alus/hoe-rosse.png';
import ainanasas from '../Assets/Alus/Ainanasas.png';
import sakai from '../Assets/Alus/sakai.png';
import rinkus from '../Assets/Alus/Rinkuskiai-gluten.png';
import maukas from '../Assets/Alus/BaltasMaukas.png';
import penkenas from '../Assets/Alus/Penkenas.png';
import marake from '../Assets/Alus/BaltasMarakesasa.png';
import burbu from '../Assets/Alus/Burbulose.png';
import nemiego from '../Assets/Alus/Nemegose.png';
import kopa from '../Assets/Alus/Kopaberg.png';
import rekowild from '../Assets/Alus/RekordWild.png';
import rekostraw from '../Assets/Alus/RekoStraw.png';
import westonperry from '../Assets/Alus/WestonPerry.png';
import westonvintage from '../Assets/Alus/westonVintage.png';
import gose from '../Assets/Alus/gose-rasp.png'
import coco from '../Assets/Alus/coco-milk-stt.png'
import pils from '../Assets/Alus/ltu-pilsner.png'
import orange from '../Assets/Alus/orange-zest.png'
import sakpassion from '../Assets/Alus/sakiskes-passion.png'
import pickle from '../Assets/Alus/pickle-sour.png'
import cherry from '../Assets/Alus/cherry-ipa.png'
import black from '../Assets/Alus/blackcurrant.png'
import mezcal from '../Assets/Alus/mezcal.png'
import sestas from '../Assets/Alus/sestas-menuo.png'
import kali from '../Assets/Alus/kalifornikacija_skarda.png'
import dvi from '../Assets/Alus/dvi-laisves.png'
import pineapp from '../Assets/Alus/pinneaple-breeze.png'
import baltic from '../Assets/Alus/baltic-pilsner.png'


const all_product = [
  {
    id: 1,
    name: "weichenstephaner-non alc",
    category: "non-alc",
    image: wahnonalk,
    price: 4.5
  },
  {
    id: 2,
    name: "Erdinger-non alc",
    category: "non-alc",
    image: erdinon,
    price: 4.5
  },
  {
    id: 3,
    name: "Budweiser-non alc",
    category: "non-alc",
    image: bud,
    price: 4.2
  },
  {
    id: 4,
    name: "Apinys",
    category: "non-alc",
    image: apinys,
    price: 5
  },
  {
    id: 5,
    name: "Spikis",
    category: "non-alc",
    image: spikis,
    price: 4.6
  },
  {
    id: 6,
    name: "Gubernija tamsusis",
    category: "non-alc",
    image: gubtms,
    price: 3.5
  },
  {
    id: 7,
    name: "Gubernija ekstra",
    category: "non-alc",
    image: gubextr,
    price: 3.5
  },
  {
    id: 8,
    name: "Gubernija Radler",
    category: "non-alc",
    image: gubrad,
    price: 3.5
  },
  {
    id: 9,
    name: "Hoegarden rosse",
    category: "non-alc",
    image: hoeros,
    price: 4.3
  },
  {
    id: 10,
    name: "Rinkuskiu gluten free",
    category: "lager",
    image: rinkus,
    price: 4.3
  },
  {
    id: 11,
    name: "Ainanasas",
    category: "sour",
    image: ainanasas,
    price: 4.9
  },
  {
    id: 12,
    name: "Sakai Sakai",
    category: "ale",
    image: sakai,
    price: 4.9
  },
  {
    id: 13,
    name: "Maukas",
    category: "ale",
    image: maukas,
    price: 5
  },
  {
    id: 14,
    name: "Penkenas",
    category: "Ipa",
    image: penkenas,
    price: 5
  },
  {
    id: 15,
    name: "Marakesas",
    category: "Ipa",
    image: marake,
    price: 4.9
  },
  {
    id: 16,
    name: "Burbulose",
    category: "sour",
    image: burbu,
    price: 5.1
  },
  {
    id: 17,
    name: "Nemiegose Pareigose",
    category: "sour",
    image: nemiego,
    price: 4.8
  },
  {
    id: 18,
    name: "Kopaberg strawberry lime",
    category: "cider",
    image: kopa,
    price: 5
  },
  {
    id: 19,
    name: "Rekorderling strawberry lime",
    category: "cider",
    image: rekostraw,
    price: 5.6
  },
  {
    id: 20,
    name: "Rekorderling wildberries",
    category: "cider",
    image: rekowild,
    price: 5.6
  },
  {
    id: 21,
    name: "Henry Westons Perry",
    category: "cider",
    image: westonperry,
    price: 5.8
  },
  {
    id: 22,
    name: "Henry Westons Vintage",
    category: "cider",
    image: westonvintage,
    price: 5.6
  },
  {
    id: 23,
    name: "Thatcers green goblin",
    category: "cider",
    image: that,
    price: 5
  },
  {
    id: 24,
    name: "Gose with raspberries",
    category: "sour",
    image: gose,
    price: 5
  },
  {
    id: 25,
    name: "Coconut milk stout",
    category: "stout",
    image: coco,
    price: 5
  },
  {
    id: 26,
    name: "Lithuanian Pilsner",
    category: "pilsner",
    image: pils,
    price: 5.1
  },
  {
    id: 27,
    name: "Orange and lemon zest pale ale",
    category: "ale",
    image: orange,
    price: 4.9
  },
  {
    id: 28,
    name: "Passion fruit sour ale",
    category: "sour",
    image: sakpassion,
    price: 5.4
  },
  {
    id: 29,
    name: "Pickle sour",
    category: "sour",
    image: pickle,
    price: 5.4
  },
  {
    id: 30,
    name: "Cherry IPA",
    category: "ipa",
    image: cherry,
    price: 5.4
  },
  {
    id: 31,
    name: "Blackcurrant sour ale",
    category: "ale",
    image: black,
    price: 5.3
  },
  {
    id: 32,
    name: "Mezcal infused ale",
    category: "ale",
    image: mezcal,
    price: 6
  },
  {
    id: 33,
    name: "Corn lager",
    category: "stout",
    image: coco,
    price: 5
  },
  {
    id: 34,
    name: "Sestas menuo",
    category: "ale",
    image: sestas,
    price: 5.4
  },
  {
    id: 35,
    name: "Kalifornikacija",
    category: "ipa",
    image: kali,
    price: 5.4
  },
  {
    id: 36,
    name: "Dvi laisves",
    category: "apa",
    image: dvi,
    price: 5.4
  },
  {
    id: 37,
    name: "Pinneapple breeze",
    category: "sour",
    image: pineapp,
    price: 4.9
  },
  {
    id: 38,
    name: "Baltic Pilsner",
    category: "pils",
    image: baltic,
    price: 4.9
  },


];

export default all_product;
