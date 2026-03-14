---
title: "Release Notes — 25 lutego 2026 🚀"
description: "Największy release od miesięcy! Przebudowany interfejs, dynamiczny kalendarz z urlopami i sesjami 15-minutowymi, nowe pola kliniczne, wykres problemów pacjenta, dzienniczek terapeuty, wiele dokumentów, 7 języków i desiatki poprawek zgłoszonych przez nasz zespół. Dziękujemy Joannie, Barbarze, Bogdanowi i Marcie!"
pubDate: 2026-02-25
heroImage: "/images/blog/release-notes-25-lutego-2026.png"
author: "Bartlomiej Glowacki"
category: "Rozwój Produktu"
tags: ["Aktualizacje"]
draft: false
---

To był **intensywny sprint** — ponad 50 commitów, przebudowa kluczowych ekranów i kilka funkcji, na które czekaliście od dawna. Zaczęliśmy od czegoś, co odczujecie od razu po wejściu do aplikacji: **interfejs wygląda i działa inaczej**.

💚 **Wielkie podziękowania** dla naszych testerów: **Joanny**, **Barbary**, **Bogdana** i **Marty** — wasze zgłoszenia były napędem tego releasu!

* * *

## 1\. 🎨 Interfejs — co się zmieniło i dlaczego

To nie był kosmetyczny lifting. Przeszliśmy przez każdy ekran i usunęliśmy wszystko, co było zbędne, mylące albo rozpraszało od pracy klinicznej.

### Profil pacjenta — nowy układ

Górna sekcja profilu pacjenta była przeładowana. Teraz:

- **Stały termin** widoczny od razu w prawej kolumnie nagłówka (dni tygodnia, częstotliwość) — bez szukania po zakładkach
- **Kompaktowy widget finansów**: zaległości, suma i liczba opóźnień w jednej linii, z ikonkami email/SMS do szybkiego kontaktu
- Przyciski akcji (status, dezaktywacja, stały termin) przeniesione poniżej numeru telefonu — logiczniejsza kolejność
- **Usunięty przycisk "Wstecz"** — nawigacja przez przeglądarkę wystarczy, a dodatkowy przycisk mylił
- **Usunięty kolorowy pasek statusu** z kart sesji na dashboardzie — mniej wizualnego szumu, czytelniejsza lista

### Dashboard — czystszy, szybszy

- Usunięty widget QR code — był rzadko używany, zajmował prime real estate
- Sekcja "Ten tydzień" przeniesiona do lewej kolumny — pierwsze co widzisz po zalogowaniu
- Karty sesji na dashboardzie mają teraz badge (zaplanowana/oczekuje potwierdzenia/anulowana) — status widoczny bez otwierania szczegółów

### Emoji i drobnostki (zgłosiła Marta)

Na prośbę Marty (SCRUM-530) usunęliśmy emoji z przycisków nastroju w dzienniczku — interfejs jest teraz czystszy i bardziej profesjonalny, zgodny z klimatem gabinetu terapeutycznego.

### Dostępność i lokalizacje

Ekran dostępności terapeuty przeszedł reorganizację — zamiast abstrakcyjnych "gabinetów" mamy teraz listę **"Lokalizacji sesji"** z możliwością edycji inline. Każda lokalizacja ma adres, miasto i flagę "widoczne w profilu publicznym". Lokalizacje propagują się teraz automatycznie do generowanych sesji ze stałych terminów — koniec z brakiem lokalizacji w automatycznie tworzonych sesjach.

* * *

## 2\. 📅 Nowy Kalendarz — urlopy, 15-minutówki i dynamiczna siatka

Kalendarz to serce codziennej pracy. W tym releasie dostał największy pakiet zmian w historii aplikacji.

### Urlopy i dni wolne (SCRUM-532, zgłosiła Joanna)

Terapeuta może teraz oznaczać w kalendarzu **urlopy i dni wolne** — z automatyczną blokadą dostępności na te dni.

Gdy dodajesz urlop obejmujący istniejące sesje — pojawia się dwuetapowy modal: najpierw wybierasz zakres dat i tytuł (np. "Wakacje letnie"), potem system pokazuje listę sesji kolidujących i pyta jak je obsłużyć: pozostaw bez zmian, anuluj bez powiadomień, lub anuluj i wyślij wiadomość do pacjentów. Przy anulowaniu z powiadomieniem — szablon wiadomości jest wypełniony z góry, możesz go edytować przed wysłaniem.

### Ostrzeżenie przy sesjach poza godzinami

Gdy ustawiasz sesję poza standardowymi godzinami przyjęć — pojawia się alert: **"Ten termin jest poza Twoimi standardowymi godzinami przyjęć. Sesja zostanie utworzona jednorazowo."** Koniec z przypadkowym tworzeniem sesji w środku nocy.

### Sesje 15, 30 i 45-minutowe

Nowy toggle w profilu terapeuty: **"Zezwalaj na krótsze sesje"**. Po włączeniu — formularz tworzenia sesji pokazuje presety: 15 min, 30 min, 45 min, 60 min. Świetne dla konsultacji, check-inów i sesji grupowych.

### Dynamiczna siatka tygodniowa

Zamiast statycznej siatki 6:00-22:00, kalendarz tygodniowy **dopasowuje zakres godzin do faktycznej dostępności**. Jeśli masz tylko sesje między 9:00 a 17:00 — siatka wyświetla tylko te godziny. Mniej przewijania, więcej widocznych sesji naraz.

Dodaliśmy też **czerwoną linię aktualnej godziny** — zawsze wiesz gdzie jesteś w swoim dniu.

### Modal konfliktu przy nakładaniu wydarzeń

Gdy dwa wydarzenia nakładają się w tym samym czasie — pojawia się modal z pytaniem: pozostaw oba, anuluj jedno z powiadomieniem, lub przenieś na inny termin. Koniec z cichym nadpisywaniem.

### Stały termin otwiera właściwą zakładkę

Małe, ale denerwujące: kliknięcie "Dodaj stały termin" w profilu pacjenta otwierało modal sesji z zakładką jednorazowej. Teraz automatycznie otwiera zakładkę **"Terminy stałe"**.

* * *

## 3\. 🧠 Nowe pola kliniczne — Cel terapeuty i Wykres problemów

### Cel pacjenta vs. Cel terapeuty

Do tej pory było jedno pole "Cel terapeutyczny". Teraz mamy dwa:

- **Cel pacjenta** (zielona obwódka) — głos pacjenta, widoczny w portalu pacjenta, to on mówi czego chce
- **Cel terapeuty** (indygo obwódka) — perspektywa kliniczna, prywatne pole terapeuty, opisuje cel z perspektywy konceptualizacji

To rozróżnienie ma duże znaczenie dla CBT: cel sformułowany przez pacjenta rzadko jest tożsamy z celem klinicznym.

### Wykres nasilenia problemów

Nowy wykres w profilu pacjenta pokazuje **jak zmieniało się nasilenie każdego problemu terapeutycznego w czasie** (ostatnie 90 dni). Każdy problem ma własną kolorową linię, oś X to daty (format dd.MM), oś Y to skala 0-10.

Zamiast przeglądać notatki sesja po sesji — jeden rzut oka pokazuje trend. Które problemy ustępują, które rosną, które stoją w miejscu.

### Pola ABC — dwa nowe elementy

W konceptualizacji ABC (myśl-uczucie-zachowanie) dodaliśmy dwa nowe pola:
- **Znaczenie myśli** — co ta myśl oznacza dla pacjenta
- **Strategia behawioralna** — jakie zachowanie wybrał pacjent w odpowiedzi

Oba pola są wyciągane przez AI z transkrypcji i widoczne w edytorze.

* * *

## 4\. 📓 Dzienniczek — terapeuta pisze, terapeuta czyta

### Widok terapeuty w dzienniku (zgłosiła Marta)

Dzienniczek był dotąd narzędziem tylko dla pacjenta. Teraz terapeuta ma **pełny dostęp** bezpośrednio z profilu pacjenta:

- Może przeglądać wszystkie wpisy pacjenta chronologicznie
- Może tworzyć własne wpisy (notatki obserwacyjne między sesjami, ćwiczenia do wykonania)
- Wpisy terapeuty są oznaczone niebieskim badge'em "Terapeuta" — pacjent wie, kto pisał
- Terapeuta może edytować i usuwać dowolne wpisy bez limitu czasowego

Pacjent nadal może edytować tylko swoje wpisy, i tylko przez 24 godziny od utworzenia.

### Wykres nastroju z prawidłowymi datami

Wykres nastroju w portalu pacjenta używa teraz właściwej osi czasu (chartjs TimeScale z biblioteką date-fns). Tooltip pokazuje pełną datę (dd.MM.yyyy), a nie tylko numer dnia. Drobna zmiana, ale czytelność rośnie znacząco.

* * *

## 5\. 📄 Dokumenty i Formularze

### Wiele dokumentów dla pacjentów (SCRUM-536, zgłosiła Barbara)

Koniec z jednym slotem na dokument. Terapeuta może teraz przypisać pacjentowi **wiele plików PDF** w podziale na typy:

- Umowa główna (jak dotychczas)
- Klauzula RODO
- Aneks do umowy
- Dokumenty dodatkowe

Pacjent widzi wszystkie dokumenty w swoim portalu z przyciskami pobierania. W ustawieniach terapeuty — nowa sekcja "Dodatkowe dokumenty" z uploadem i zarządzaniem.

### Terapeuta wypełnia formularz za pacjenta

Terapeuta może teraz **samodzielnie wypełnić formularz diagnostyczny** za pacjenta (np. gdy pacjent ma trudności z obsługą portalu lub gdy wypełniacie razem na sesji). Formularz zapisuje się z oznaczeniem "wypełnione przez terapeutę".

### Podgląd szablonu formularza

Przed przypisaniem formularza do pacjenta możesz teraz **podejrzeć jego pytania** — klikasz przycisk "Formularz" i widzisz cały kwestionariusz zanim wyślesz pacjentowi.

### Sortowanie pacjentów alfabetycznie (SCRUM-561, zgłosił Bogdan)

W formularzach tworzenia sesji pacjenci są teraz posortowani alfabetycznie według nazwiska i imienia. Oczywiste, ale wcześniej tego brakowało — przy dużej bazie pacjentów szukanie było frustrujące.

* * *

## 6\. 🚪 Portal Pacjenta — blokada i badge

Pacjent bez podanego adresu email **lub** numeru telefonu nie może korzystać z portalu. Bez kontaktu nie możemy wysyłać powiadomień i przypomnień.

Na liście pacjentów pojawia się **badge "Brak konta"** — żeby od razu wiedzieć, którzy pacjenci mają niekompletne dane kontaktowe. W profilu pacjenta bez emaila baner przypomina: "Dodaj email, aby aktywować portal".

Email nie jest już polem obowiązkowym przy tworzeniu pacjenta — bo nie każdy pacjent ma lub chce podawać email. Aplikacja po prostu ogranicza funkcje, które wymagają kontaktu.

* * *

## 7\. 🔔 Przeprojektowane Powiadomienia (SCRUM-563, zgłosił Bogdan)

Ekran powiadomień przeszedł **gruntowny redesign**. Na górze — dwa globalne przełączniki:

- **Wyłącz wszystkie powiadomienia Email** — jeden przełącznik wyłącza cały kanał
- **Wyłącz wszystkie powiadomienia SMS** — analogicznie

Gdy kanał jest wyłączony, indywidualne ustawienia wyszarzają — wiadomo dlaczego powiadomienie nie wychodzi. Poniżej globalnych toggles — szczegółowe ustawienia dla każdego typu powiadomienia (nowe sesje, przypomnienia, odwołania, wiadomości od pacjentów).

* * *

## 8\. 🤖 AI — typy sesji i naprawa transkrypcji (Joanna)

### Automatyczna klasyfikacja typów sesji (SCRUM-599)

Po wgraniu transkrypcji AI automatycznie **klasyfikuje typ sesji**: Standardowa sesja CBT, Sesja konsultacyjna, Sesja kryzysowa, lub Wywiad. Każdy typ ma inne zachowania — np. sekcja Oceny Sesji SJS-CBT jest ukryta gdy typ nie obsługuje ratingu.

Typ można też zmienić ręcznie z dropdownu w szczegółach sesji. Ikona informuje czy typ był ustawiony przez AI czy ręcznie.

Cztery systemowe typy sesji są teraz **seedowane automatycznie przy starcie** — nowe konta nie startują z pustą listą.

### Naprawa błędu 504 na wywiadzie (SCRUM-636, zgłosiła Joanna)

Przy dużych transkrypcjach (3+ sesje, każda po kilka tysięcy słów) wywiad wstępny rzucał błąd 504 (timeout Azure AI). Naprawione — transkrypcje są teraz przycinane do 8000 znaków przed wysłaniem, co mieści się w limicie API.

### Zaległości — prawidłowy zakres dat (SCRUM-636)

Filtr "z zaległościami" na liście sesji był ograniczony do 7 dni — przez co terapeuta widział tylko część faktycznych zaległości. Teraz automatycznie rozszerza zakres do bieżącego roku.

### Spinner transkrypcji

Powiadomienia "transkrypcja w toku" starsze niż 4 godziny teraz wyświetlają ikonę błędu zamiast wiecznego spinnera. Wiadomo że coś poszło nie tak, zamiast czekać w nieskończoność.

* * *

## 9\. 💰 Finanse — poprawki i nowe statystyki

- **Wyrównanie logiki zaległości**: `/finanse` i `/pacjenci` pokazywały inne kwoty zaległości. Teraz obydwa widoki używają tej samej definicji "niezapłaconego" — sesja w przeszłości, neanulowana, bez zakończonej płatności.
- **Nowa statystyka**: "Zrealizowane sesje w tym miesiącu" — widoczne w panelu finansów. Szybki wgląd w produktywność bieżącego miesiąca.
- **Faktura 0 zł**: System nie generuje już faktur z kwotą zerową — log warning i pominięcie.
- **Zmiana metody płatności**: Dropdown metody płatności reaguje teraz natychmiastowo (optimistic UI) — koniec z czekaniem na odświeżenie API.

* * *

## 10\. 🌍 Aplikacja w 7 językach

Dodaliśmy obsługę **5 nowych języków**:

🇸🇰 Słowacki · 🇷🇺 Rosyjski · 🇺🇦 Ukraiński · 🇪🇸 Kataloński · 🇱🇹 Litewski

Razem z polskim i angielskim — mamy teraz **7 języków**. Wszystkie formularze diagnostyczne (PHQ-9, GAD-7, DASS-21, PCL-5, ATQ-30, DAS-24, Wywiad) są w pełni przetłumaczone. Interfejs, komunikaty, powiadomienia, emaile — wszystko.

Przeprowadziliśmy też **migrację systemu tłumaczeń** — pliki JSON zastąpiły bazę danych jako jedyne źródło prawdy. Zmiana tłumaczenia = commit + deploy (~3 minuty), bez migracji i bez restartu serwera.

* * *

## 11\. ⚡ Stabilność — SignalR i auto-logout

### SignalR — koniec z traconymi połączeniami

Aplikacja działa na wielu serwerach bez sticky sessions. Połączenia WebSocket trafiały na losowy serwer i traciły kontekst. Naprawiliśmy to przez `skipNegotiation + WebSockets` — czystsze, szybsze i odporne na takie środowiska. Przy okazji naprawiliśmy pętlę reconnect, która powodowała crash Chrome po kilku godzinach pracy.

### Auto-logout — 5 minut grace period

Przełączenie zakładki w przeglądarce uruchamiało timer auto-logout. Teraz masz **5 minut** zanim sesja wygaśnie — czas żeby wrócić do aplikacji bez ponownego logowania.

* * *

## 12\. 📋 Checklist QA

| Co sprawdzić | OK? |
|---|---|
| Profil pacjenta: stały termin widoczny w nagłówku | ⬜ |
| Dashboard: brak kolorowego paska statusu na kartach sesji | ⬜ |
| Urlop w kalendarzu → blokada dostępności na te dni | ⬜ |
| Sesja poza godzinami → alert z potwierdzeniem | ⬜ |
| Sesja 15 i 30 minut — presety w formularzu | ⬜ |
| Siatka kalendarza dopasowana do godzin pracy | ⬜ |
| Profil pacjenta: pola "Cel pacjenta" i "Cel terapeuty" | ⬜ |
| Wykres problemów pacjenta w profilu | ⬜ |
| Dzienniczek: terapeuta tworzy i czyta wpisy | ⬜ |
| Pacjent nie edytuje wpisu starszego niż 24h | ⬜ |
| Wiele dokumentów: RODO + Aneks + Umowa w profilu | ⬜ |
| Formularz: terapeuta wypełnia za pacjenta | ⬜ |
| Podgląd szablonu formularza przed przypisaniem | ⬜ |
| Pacjent bez emaila: badge na liście, blokada portalu | ⬜ |
| Powiadomienia: globalny toggle SMS wyłącza wszystkie SMS | ⬜ |
| Typy sesji: AI klasyfikuje typ po wgraniu transkrypcji | ⬜ |
| Zaległości: filtr pokazuje cały rok, nie tylko 7 dni | ⬜ |
| Brak błędu 504 przy wywiadzie wstępnym | ⬜ |
| Logika zaległości: /finanse i /pacjenci zgodne kwotowo | ⬜ |
| Zmiana języka na ukraiński: cały UI przetłumaczony | ⬜ |
| Auto-logout: 5 minut po zmianie zakładki | ⬜ |

* * *

To był **wyjątkowo bogaty sprint** 🎉 Dziękujemy całemu zespołowi za zgłoszenia i testy. Kolejny release już w drodze!

_Artykuł przygotowany przez zespół AI Therapy Support_
