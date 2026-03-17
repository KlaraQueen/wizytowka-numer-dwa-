export const siteData = {
  companyName: "AutoSerwis Plus",
  ownerName: "Karolina",

  images: {
    hero: require("./Images/hero.jpg"),
    team: require("./Images/team.png"),
    gallery: [
      { src: require("./Images/gallery-1.jpg"), alt: "Realizacja 1" },
      { src: require("./Images/gallery-2.jpg"), alt: "Realizacja 2" },
      { src: require("./Images/gallery-3.jpg"), alt: "Realizacja 3" },
      { src: require("./Images/gallery-4.jpg"), alt: "Realizacja 4" },
    ],
    logo: null,
  },

  hero: {
    title: "Twój samochód zasługuje na najlepszą opiekę.",
    subtitle: "Profesjonalne naprawy, przeglądy i serwis pojazdów. Doświadczony zespół mechaników zadba o Twój pojazd – od drobnych napraw po kompleksowe usługi.",
    buttonText: "Skontaktuj się z nami",
  },

  services: {
    label: "Zapoznaj się z naszą ofertą",
    title: "Usługi mechaniczne",
    items: [
      { icon: "wrench", title: "Naprawy ogólne", description: "Diagnostyka i naprawy usterek – od silnika po układ hamulcowy. Szybka i rzetelna obsługa." },
      { icon: "gears", title: "Przeglądy okresowe", description: "Kompleksowe przeglądy techniczne, wymiana oleju i filtrów zgodnie z zaleceniami producenta." },
      { icon: "carWheel", title: "Wymiana opon", description: "Sezonowa wymiana opon, wyważanie kół i kontrola geometrii zawieszenia." },
      { icon: "carBattery", title: "Układ elektryczny", description: "Diagnostyka i naprawy instalacji elektrycznej, wymiana akumulatorów i alternatorów." },
      { icon: "oilDrum", title: "Wymiana płynów", description: "Wymiana oleju silnikowego, płynu hamulcowego, chłodniczego oraz innych płynów eksploatacyjnych." },
    ],
  },

  pricing: {
    label: "Cennik",
    title: "Orientacyjne ceny usług",
    subtitle: "Ceny mogą się różnić w zależności od marki pojazdu i zakresu prac. Skontaktuj się po wycenę.",
    items: [
      { name: "Przegląd okresowy", price: "od 150 zł", unit: "z wymianą oleju i filtrów" },
      { name: "Wymiana opon", price: "od 80 zł", unit: "komplet 4 szt." },
      { name: "Diagnostyka komputerowa", price: "od 100 zł", unit: "odczyt i analiza błędów" },
      { name: "Wymiana klocków hamulcowych", price: "od 200 zł", unit: "przednia lub tylna oś" },
      { name: "Wymiana akumulatora", price: "od 50 zł", unit: "usługa montażu" },
      { name: "Dojazd", price: "5 zł/km", unit: "usługa dojazdu poza miastem" },
    ],
  },

  team: {
    label: "Poznaj nas",
    title: "Nasz zespół",
    description: "Doświadczeni mechanicy z pasją do motoryzacji. Naprawiamy pojazdy wszystkich marek – od małych aut po SUV-y i samochody dostawcze.",
    employees: [
      { name: "Marek Kowalski", role: "Właściciel", description: "Kieruje warsztatem i nadzoruje realizację napraw. Specjalista od silników i skrzyń biegów." },
      { name: "Tomasz Wiśniewski", role: "Mechanik samochodowy", description: "Specjalizuje się w diagnostyce komputerowej i naprawach układów elektrycznych." },
      { name: "Piotr Dąbrowski", role: "Mechanik – zawieszenie", description: "Ekspert od geometrii kół, wymiany opon i napraw zawieszenia." },
      { name: "Anna Lewandowska", role: "Recepcja i obsługa", description: "Przyjmuje zlecenia, koordynuje naprawy i dba o kontakt z klientami." },
      { name: "Katarzyna Nowak", role: "Mechanik – układ hamulcowy", description: "Specjalistka od układów hamulcowych i wymiany płynów eksploatacyjnych." },
    ],
  },

  reviews: {
    label: "Opinie Google",
    title: "Co mówią o nas klienci",
    items: [
      { author: "Anna K.", text: "Profesjonalna obsługa od A do Z. Samochód naprawiony szybko i solidnie. Polecam AutoSerwis Plus każdemu, kto szuka rzetelnego warsztatu.", rating: 5 },
      { author: "Tomasz M.", text: "Przegląd i wymiana opon zrobione perfekcyjnie. Ceny fair, terminowość na najwyższym poziomie. Na pewno wrócę.", rating: 5 },
      { author: "Magdalena W.", text: "Świetny warsztat! Serwisuję tu auto od dwóch lat. Zawsze punktualnie, ceny uczciwe, a mechanicy wiedzą co robią. Polecam!", rating: 5 },
    ],
  },

  about: {
    label: "O nas",
    title: "Jakie usługi mechaniczne wykonujemy?",
    description: "Oferta jest szeroka i dopasowana do potrzeb każdego kierowcy. Zajmujemy się naprawami, przeglądami i serwisem pojazdów osobowych oraz dostawczych. W naszym zespole pracują mechanicy z wieloletnim doświadczeniem.",
    works: [
      "diagnostyka komputerowa i naprawy silników",
      "wymiana oleju, filtrów i płynów eksploatacyjnych",
      "naprawy układów hamulcowych i zawieszenia",
      "wymiana opon, wyważanie i geometria kół",
      "naprawy instalacji elektrycznej i klimatyzacji",
    ],
  },

  contact: {
    title: "Skontaktuj się",
    address: "AutoSerwis Plus Sp. z o.o.\nul. Przykładowa 15\n22-400 Przykład",
    nip: "000-000-00-00",
    regon: "000000000",
    phone: "+48 000 000 000",
    phoneHref: "tel:+48000000000",
    email: "kontakt@autoserwisplus.pl",
    emailHref: "mailto:kontakt@autoserwisplus.pl",
    area: "Zamość i okolice do 50 km",
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "YouTube", href: "https://youtube.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "X", href: "https://x.com" },
    ],
  },

  gallery: {
    title: "Nasze realizacje",
  },

  nav: {
    items: [
      { id: "o-nas", label: "O nas" },
      { id: "uslugi", label: "Usługi" },
      { id: "cennik", label: "Cennik" },
      { id: "zespol", label: "Nasz zespół" },
      { id: "realizacje", label: "Realizacje" },
      { id: "opinie", label: "Opinie" },
      { id: "kontakt", label: "Kontakt" },
    ],
  },
};
