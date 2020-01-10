# js_proj_3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

***

Celem projektu jest stworzenie aplikacji typu SPA (single page application). Backend stanowi serwer RESTowy, udostępniający dane w postaci JSON (można wykorzystać json-server). Klient działający w przeglądarce komunikuje się z nim przy pomocy AJAX. Dozwolone (a nawet zalecane) jest korzystanie z javascriptowych bibliotek i frameworków (np. Angular, React, Vue, Bakcbone, Knockout, Ember).

Aplikacja powinna pozwalać na przeglądanie, dodawanie, usuwanie oraz edycję danych. Rodzaj tych danych należy określić samemu, trzymając się ogólnych wytycznych (liczby w nawiasach oznaczają punktację, maksymalnie można zdobyć za projekt 10 punktów):

Obowiązkowa podstawa (3): CRUD do pojedynczej tabeli (np. książki, pracownicy, zakupy, piosenki), jej rekordy powinny mieć co najmniej 5 pól (użyj paru różnych typów, np. tekst, liczba, data)
- (+1) - przynajmniej dwie tabele połączone relacją jeden-do-wielu (np. autor-książki, rejon-pracownicy, zamówienie-produkty)
- (dodatkowo +1) - jeśli w powyższym wystąpi relacja wiele-do-wielu (np. książka może mieć wielu autorów, pracownik może być przypisany do wielu rejonów)
- (+1) - użytkownik ma możliwość sortowania (wg. dwóch czy trzech kryteriów)
- (+1) - użytkownik ma możliwość wyszukiwania/filtrowania danych (np. "pokaż książki o tytule zaczynajacym się od ...", "pokaż wszystkie książki danego autora")
- (+1) - zaimplementowano poprawnie działający routing po stronie klienta
- (+1) - bardziej złożona niż sam CRUD logika, pasująca do tematu projektu
- (+1) - wysoki user experience (wygoda, atrakcyjność, obecność grafik i animacji, responsywność)
- (+1) - wszelkie inne sensowne i nietrywialne dodatki wzbogacające aplikację

2 tabele: piosenki i autorzy (relacja wiele do wielu)
- Piosenka:
  - IdPiosenki
  - Tytuł (pobierany z API youtube): 
  - Liczba wyświetleń (pobierane z API youtube): X
  - Autorzy (lista):
  - Tekst piosenki:
  - Link do wersji na youtube (wymagane podanie):
  - Data publikacji:
- Autor:
  - IdAutora
  - Imię:
  - Nazwisko:

### Wymagane do zainstalowania do prawidłowego działania projektu
```
npm install -g npm
npm install axios
npm i lodash.debounce
npm install --save vue-router
npm i -S vue-youtube-embed
npm install json-server -g

npm install -g @vue/cli
vue add vuetify
```
### Wymagane do uruchomienia do prawidłowego działania projektu
```
json-server songs.json
```
