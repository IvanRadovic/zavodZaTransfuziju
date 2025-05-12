export const basicQuestions = [
  {
    id: 1,
    question: 'Da li ste do sada davali krv?',
    options: ['Da', 'Ne'],
  },
  {
    id: 2,
    question: 'Da li ste ikada bili odbijeni kao davalac krvi?',
    options: ['Da', 'Ne'],
  },
  {
    id: 3,
    question: 'Da li se trenutno osjećate zdravim i sposobnim da date krv?',
    options: ['Da', 'Ne'],
  },
  {
    id: 4,
    question: 'Da li ste prethodne noći spavali najmanje 6 sati?',
    options: ['Da', 'Ne'],
  },
  {
    id: 5,
    question: 'Da li ste nešto jeli prije dolaska na davanje krvi?',
    options: ['Da', 'Ne'],
  },
  {
    id: 6,
    question: 'Da li se bavite opasnim zanimanjem ili hobijem?',
    options: ['Da', 'Ne'],
  },
  {
    id: 7,
    question: 'Da li uzimate bilo kakve ljekove?',
    options: ['Da', 'Ne'],
  },
  {
    id: 8,
    question:
      'Da li uzimate aspirin, da li ste ga uzimali u poslednjih 5 dana?',
    options: ['Da', 'Ne'],
  },
  {
    id: 9,
    question:
      'Da li ste do sada ispitivani ili liječeni u bolnici ili ste trenutno na ispitivanju ili bolovanju?',
    options: ['Da', 'Ne'],
  },
  {
    id: 10,
    question: 'Da li ste vadili zub u proteklih 7 dana?',
    options: ['Da', 'Ne'],
  },
  {
    id: 11,
    question:
      'Da li ste u poslednjih 7 do 10 dana imali temperaturu preko 38°C, kijavicu, prehladu ili uzimate antibiotike?',
    options: ['Da', 'Ne'],
  },
  {
    id: 12,
    question:
      'Da li ste primili bilo koju vakcinu ili serum u proteklih 12 mjeseci?',
    options: ['Da', 'Ne'],
  },
  {
    id: 13,
    question:
      'Da li ste u poslednjih 6 mjeseci naglo izgubili na težini bez držanja dijete?',
    options: ['Da', 'Ne'],
  },
  {
    id: 14,
    question:
      'Da li ste imali ubode krpelja u proteklih 12 mjeseci i da li ste se zbog toga javljali ljekaru?',
    options: ['Da', 'Ne'],
  },
  {
    id: 15,
    question:
      'Da li ste ikada bili liječeni od epilepsije (padavice), šećerne bolesti, astme, tuberkuloze, infarkta, moždanog udara, malignih oboljenja ili malarije?',
    options: ['Da', 'Ne'],
  },
  {
    id: 16,
    question:
      'Da li bolujete od neke druge hronične bolesti srca, pluća, bubrega, jetre, želuca i crijeva, kostiju i zglobova, nervnog sistema, krvi i krvnih sudova?',
    options: ['Da', 'Ne'],
  },
  {
    id: 17,
    question:
      'Da li ste ikada imali problema sa štitnoom žlijezdom, hipofiozom ili primali hormone?',
    options: ['Da', 'Ne'],
  },
  {
    id: 18,
    question: 'Da li imate neke promjene na koži ili bolujete od alergije?',
    options: ['Da', 'Ne'],
  },
  {
    id: 19,
    question:
      'Da li dugo krvarite poslije povrede ili spontano dobijate modrice?',
    options: ['Da', 'Ne'],
  },
  {
    id: 20,
    question:
      'Da li ste u poroteklih 12 mjeseci imali neku operaciju ili primili krv?',
    questionSubA: 'imali seksualni odnos sa novim partnerom?',
    questionSubB: 'putovali u rizične zemlje?',
    questionSubC: 'primali transfuziju krvi?',
    options: ['Da', 'Ne'],
  },
  {
    id: 21,
    question:
      'Da li ste u poroteklih 12 mjeseci putovali ili zivjeli u inostranstvu?',
    options: ['Da', 'Ne'],
  },
  {
    id: 22,
    question:
      'Da li ste u poroteklih 12 mjeseci imali akupunkturu, pirsing ili tetovažu?',
    options: ['Da', 'Ne'],
  },
  {
    id: 23,
    question: 'Da li ste pili alkohol u proteklih 6 sati?',
    options: ['Da', 'Ne'],
  },
  {
    id: 24,
    question:
      'Da li ste bolobali ili bolujete od hepatitisa (žutice) A,B ili C?',
    options: ['Da', 'Ne'],
    questionSubA:
      'Da li ste bolobali ili bolujete od hepatitisa (žutice) A,B ili C?',
    questionSubB:
      'Da li mislite da je postojala mogućnost da se zarazite HIV-om?',
    questionSubC: 'Da li ste ikada koristili intravenske droge?',
    questionSubD:
      'Da li ste ikada koristili preparate za bodi bilding? (steroidi)',
    questionSubE:
      'Da li ste ikada za pružanje seksualnih usluga uzimali novac ili drogu?',
  },
  {
    id: 25,
    question:
      'Da li ste imali seksualne odnose tokom proteklih 6 mjeseci sa osobom koja je HIV pozitivna?',
    options: ['Da', 'Ne'],
    questionSubA: 'sa osobom koja je HIV pozitivna?',
    questionSubB:
      'sa osobom koja ima  osobom koja ima hepaptitis (žuticu) B ili C?',
    questionSubC:
      'sa osobom koja je ikada za pružanje seksualnih usluga uzimala novac ili drogu?',
    questionSubD: 'sa osobom koja je ikada koristila intravenske droge?',
    questionSubE:
      'sa osobom čije Vam dotadašnje seksualno ponašanje nije poznato?',
    questionSubF:
      'da li ste Vi imali analne seksualne odnosne tokom proteklih 6 mjeseic',
  },
];

export const womenQuestions = [
  {
    id: 26,
    question: 'Da li ste u drugom stanju?',
    options: ['Da', 'Ne'],
  },
  {
    id: 27,
    question: 'Da li trenutno imate menstruaciju?',
    options: ['Da', 'Ne'],
  },
  {
    id: 28,
    question:
      'Da li ste u poslednjih 6 mjeseci imali porođaj ili prekid trudnoće?',
    options: ['Da', 'Ne'],
    title: 'endOfWomen',
  },
];

export const confirmQuestions = [
  {
    id: 29,
    question: 'Tvrdim da se nisam izlagao/la riziku od infekcije',
    options: ['Da', 'Ne'],
  },
  {
    id: 30,
    question:
      'Obaviješten/a sam da će moja krv biti testirana na bolesti koje se prenose putem krvi i saglasan/a sam da budem pozavn/a na dodatno testiranje ukoliko bilo koji od testova bude pozitivan ili sumnjiv',
    options: ['Da', 'Ne'],
  },
  {
    id: 31,
    question:
      'Obaviješten/a sam o mogućnosti da odustanem od davanja krvi ili komponente krvi prije otpočinjanja postupka, kao i o mogućnosti odbijanja davanja, odnosno mogućnosti povlačenja saglasnostii u bilo kojem trenutku u toku davanja',
    options: ['Da', 'Ne'],
  },
  {
    id: 32,
    question:
      'Dajem pristanak i saglasan/a sam za nastavak postupka davanja krvi ili komponente krvi',
    options: ['Da', 'Ne'],
  },
  {
    id: 33,
    question:
      'Upoznat/a sam sa uobičajnim rizicima i mogućim reakcijama tokom uzimanja krvi, kao i obimu testiranja krvi',
    options: ['Da', 'Ne'],
  },
  {
    id: 34,
    question:
      'Upoznat/a sam sa mogućim posljedicama koje mogu nastati usljed davanja krvi ili komponente krvi',
    options: ['Da', 'Ne'],
  },
  {
    id: 35,
    question: 'Obaviješten/a sam o zaštiti podataka o ličnosti',
    options: ['Da', 'Ne'],
  },
  {
    id: 36,
    question:
      'Obaviješten/a sam o pravu na pristup podacima i pravu na ispravku podataka',
    options: ['Da', 'Ne'],
  },
  {
    id: 37,
    question: 'Imao/la sam mogućnost da postavim pitanja',
    options: ['Da', 'Ne'],
  },
  {
    id: 38,
    question: 'Dobio/la sam zadovoljavajući odgovor na postavljena pitanja',
    options: ['Da', 'Ne'],
  },
  {
    id: 39,
    question:
      'Dao/la sam istinite informacije prema svom najbolje znanju i potvrđujem vjerodostojnost datih podataka i upoznat/a sam da je davanje netačnih podataka kažnjivo po zakonu',
    options: ['Da', 'Ne'],
  },
];
