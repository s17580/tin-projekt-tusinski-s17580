**AutoService CarTu**

*Karol Tusiński s17580*

**Wymagania:**

    • docker,
    • docker compose,
    • wolne porty 3000, 3306 (można je zmienić w docker-compose.yml).

**Instalacja:**

    1). git clone https://github.com/s17580/tin-projekt-tusinski-s17580.git
    2). tin-projekt-tusinski-s17580
    3). npm install,
    4). docker-compose up -d --build
    5). npm start.

**Po zbudowaniu i uruchomieniu kontenerów dostępne będą:**

    • REST API na localhost:3000,
    • Baza danych MYSQL na localhost:3306.

Baza danych została wypełniona danymi testowymi.


**Temat: AutoServis CarTu**

Firma **AutoServis CarTu** jest siecią firm naprawiającą samochody której potrzebna jest aplikacja dla klientów którzy będą zarządzać swoi mi samochodami dla których będą zlecać naprawy.

**Będziemy chcieli pamiętać informacje o:**

    • użytkownikach oraz ich rolach (administrator, klient),
    • samochodach,
    • adresach warsztatów,
    • zleceniach napraw oraz ich rodzaju (dla jakiego samochodu oraz w jakim warsztacie została zlecona naprawa).

Pierwszy prototyp aplikacji dostępny tutaj: https://github.com/s17580/tin.git


