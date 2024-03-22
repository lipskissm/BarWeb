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
import marake from '../Assets/Alus/BaltasMarakesas.png';
import burbu from '../Assets/Alus/Burbulose.png';
import nemiego from '../Assets/Alus/Nemegose.png';
import kopa from '../Assets/Alus/Kopaberg.png';
import rekowild from '../Assets/Alus/RekordWild.png';
import rekostraw from '../Assets/Alus/RekoStraw.png';
import westonperry from '../Assets/Alus/WestonPerry.png';
import westonvintage from '../Assets/Alus/WestonVintage.png';
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
import that from '../Assets/Alus/grgoblin.png'

const all_product = [
  {
    id: 1,
    name: "weichenstephaner-non alc",
    category: "Nealkoholiniai",
    image: wahnonalk,
    price: 4.5
  },
  {
    id: 2,
    name: "Erdinger-non alc",
    category: "Nealkoholiniai",
    image: erdinon,
    price: 4.5
  },
  {
    id: 3,
    name: "Budweiser-non alc",
    category: "Nealkoholiniai",
    image: bud,
    price: 4.2
  },
  {
    id: 4,
    name: "Apinys",
    category: "Nealkoholiniai",
    image: apinys,
    price: 5
  },
  {
    id: 5,
    name: "Spikis",
    category: "Nealkoholiniai",
    image: spikis,
    price: 4.6
  },
  {
    id: 6,
    name: "Gubernija tamsusis",
    category: "Nealkoholiniai",
    image: gubtms,
    price: 3.5
  },
  {
    id: 7,
    name: "Gubernija ekstra",
    category: "Nealkoholiniai",
    image: gubextr,
    price: 3.5
  },
  {
    id: 8,
    name: "Gubernija Radler",
    category: "Nealkoholiniai",
    image: gubrad,
    price: 3.5
  },
  {
    id: 9,
    name: "Hoegarden rosse",
    category: "Nealkoholiniai",
    image: hoeros,
    price: 4.3
  },
  {
    id: 10,
    name: "Rinkuskiu gluten free",
    category: "Alus",
    image: rinkus,
    price: 4.3
  },
  {
    id: 11,
    name: "Ainanasas",
    category: "Alus",
    image: ainanasas,
    price: 4.9
  },
  {
    id: 12,
    name: "Sakai Sakai",
    category: "Alus",
    image: sakai,
    price: 4.9
  },
  {
    id: 13,
    name: "Maukas",
    category: "Alus",
    image: maukas,
    price: 5
  },
  {
    id: 14,
    name: "Penkenas",
    category: "Alus",
    image: penkenas,
    price: 5
  },
  {
    id: 15,
    name: "Marakesas",
    category: "Alus",
    image: marake,
    price: 4.9
  },
  {
    id: 16,
    name: "Burbulose",
    category: "Alus",
    image: burbu,
    price: 5.1
  },
  {
    id: 17,
    name: "Nemiegose Pareigose",
    category: "Alus",
    image: nemiego,
    price: 4.8
  },
  {
    id: 18,
    name: "Kopaberg strawberry lime",
    category: "Sidras",
    image: kopa,
    price: 5
  },
  {
    id: 19,
    name: "Rekorderling strawberry lime",
    category: "Sidras",
    image: rekostraw,
    price: 5.6
  },
  {
    id: 20,
    name: "Rekorderling wildberries",
    category: "Sidras",
    image: rekowild,
    price: 5.6
  },
  {
    id: 21,
    name: "Henry Westons Perry",
    category: "Sidras",
    image: westonperry,
    price: 5.8
  },
  {
    id: 22,
    name: "Henry Westons Vintage",
    category: "Sidras",
    image: westonvintage,
    price: 5.6
  },
  {
    id: 23,
    name: "Thatcers green goblin",
    category: "Sidras",
    image: that,
    price: 5
  },
  {
    id: 24,
    name: "Gose with raspberries",
    category: "Alus",
    image: gose,
    price: 5
  },
  {
    id: 25,
    name: "Coconut milk stout",
    category: "Alus",
    image: coco,
    price: 5
  },
  {
    id: 26,
    name: "Lithuanian Pilsner",
    category: "Alus",
    image: pils,
    price: 5.1
  },
  {
    id: 27,
    name: "Orange and lemon zest pale ale",
    category: "Alus",
    image: orange,
    price: 4.9
  },
  {
    id: 28,
    name: "Passion fruit sour ale",
    category: "Alus",
    image: sakpassion,
    price: 5.4
  },
  {
    id: 29,
    name: "Pickle sour",
    category: "Alus",
    image: pickle,
    price: 5.4
  },
  {
    id: 30,
    name: "Cherry IPA",
    category: "Alus",
    image: cherry,
    price: 5.4
  },
  {
    id: 31,
    name: "Blackcurrant sour ale",
    category: "Alus",
    image: black,
    price: 5.3
  },
  {
    id: 32,
    name: "Mezcal infused ale",
    category: "Alus",
    image: mezcal,
    price: 6
  },
  {
    id: 33,
    name: "Corn lager",
    category: "Alus",
    image: coco,
    price: 5
  },
  {
    id: 34,
    name: "Sestas menuo",
    category: "Alus",
    image: sestas,
    price: 5.4
  },
  {
    id: 35,
    name: "Kalifornikacija",
    category: "Alus",
    image: kali,
    price: 5.4
  },
  {
    id: 36,
    name: "Dvi laisves",
    category: "Alus",
    image: dvi,
    price: 5.4
  },
  {
    id: 37,
    name: "Pinneapple breeze",
    category: "Alus",
    image: pineapp,
    price: 4.9
  },
  {
    id: 38,
    name: "Baltic Pilsner",
    category: "Alus",
    image: baltic,
    price: 4.9
  },


];

export default all_product;
