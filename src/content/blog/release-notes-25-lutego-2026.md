---
title: "Release Notes — 25 lutego 2026 🚀"
description: "Największy release ostatnich tygodni! Nowe dokumenty dla pacjentów, 7 języków, dynamiczny kalendarz z urlopami, przeprojektowany ekran powiadomień i cała masa poprawek zgłoszonych przez nasz zespół testerów. Dziękujemy Joannie, Barbarze, Bogdanowi i Marcie!"
pubDate: 2026-02-25
heroImage: "/images/blog/release-notes-12-lutego-2026.png"
author: "Bartlomiej Glowacki"
category: "Inne"
tags: []
draft: false
---

Ten release to **prawdziwy przełom** — kilka tygodni intensywnej pracy i ponad 50 commitów zebranych w jeden duży update. Nowe funkcje, poprawki UX, stabilność i coś, na co czekaliśmy od dawna: **aplikacja mówi teraz w 7 językach** 🌍

💚 **Ogromne podziękowania** dla naszych niezmęczonych testerów: **Joanny**, **Barbary**, **Bogdana** i **Marty** — bez Waszych zgłoszeń ten release byłby o połowę mniejszy!

* * *

## 1\. 🚫 Portal Pacjenta — blokada gdy brak kontaktu

### Co nowego?

Pacjenci bez podanego adresu email **lub** numeru telefonu nie mogą teraz korzystać z portalu pacjenta. To ważna zmiana — bez kontaktu nie możemy wysyłać powiadomień o sesjach, przypomnień ani linków do zaproszenia.

Na liście pacjentów pojawia się teraz **badge informujący** terapeutę, że dany pacjent ma niekompletne dane kontaktowe — żeby łatwo to wychwycić.

### ✅ Jak przetestować?

1. Utwórz pacjenta **bez** adresu email i numeru telefonu
2. Sprawdź listę pacjentów → pacjent powinien mieć widoczny **badge z ostrzeżeniem**
3. Spróbuj wysłać zaproszenie do portalu → system powinien zablokować akcję z komunikatem
4. Dodaj email lub telefon → badge znika, portal dostępny

* * *

## 2\. 📄 Wiele dokumentów dla pacjentów (zgłosiła Barbara)

### Co nowego?

Terapeuta może teraz przypisać pacjentowi **wiele dokumentów naraz**: umowę o świadczenie usług, klauzulę RODO i aneks do umowy — wszystko w jednym miejscu.

Wcześniej był tylko jeden slot na dokument — to było dużym ograniczeniem dla gabinetów, które wymagają podpisania kilku dokumentów przed pierwszą sesją.

### ✅ Jak przetestować?

1. Wejdź w profil pacjenta → sekcja „Dokumenty"
2. Dodaj kilka dokumentów różnych typów (umowa + RODO + aneks)
3. Sprawdź czy wszystkie są widoczne i można je pobrać
4. Prześlij dokument pacjentowi → sprawdź czy widzi wszystkie dokumenty w portalu

* * *

## 3\. 📅 Nowy Kalendarz — urlopy, sesje ½h i dynamiczna siatka

### To był największy pakiet zmian w tej iteracji! 🎉

#### Urlopy i dni wolne

Terapeuta może teraz oznaczać w kalendarzu **urlopy i dni wolne** — z automatyczną blokadą rezerwacji przez pacjentów na te dni. Przy próbie wyjścia poza godziny przyjęć pojawia się **modal potwierdzenia** z pytaniem czy na pewno chcemy zapisać sesję poza standardowymi godzinami.

#### Sesje półgodzinne i wydarzenia pozasesyjne

Kalendarz obsługuje teraz **sesje 30-minutowe** (wcześniej tylko godzinne). Można też dodawać **wydarzenia pozasesyjne** — spotkania, szkolenia, superwizje — które blokują czas bez tworzenia sesji z pacjentem.

#### Dynamiczna siatka tygodniowa

Widok tygodniowy kalendarza jest teraz **w pełni dynamiczny** — siatka dopasowuje się do zawartości. Gdy kilka sesji/wydarzeń koliduje w tym samym przedziale czasu, pojawia się **modal konfliktu** z pytaniem jak chcemy rozwiązać nakładanie.

### ✅ Jak przetestować kalendarz?

1. Wejdź w Kalendarz → utwórz urlop na kilka dni
2. Sprawdź czy pacjent nie może zarezerwować sesji w dni urlopu
3. Utwórz sesję 30-minutową → powinna się prawidłowo wyświetlać w siatce
4. Dodaj wydarzenie pozasesyjne (np. „Superwizja") → powinno być widoczne w kalendarzu
5. Utwórz dwa события nakładające się → sprawdź modal konfliktu

* * *

## 4\. 🔔 Przeprojektowane powiadomienia SMS/Email (zgłosił Bogdan)

### Co nowego?

Ekran powiadomień przeszedł **gruntowny redesign**. Teraz masz dwa globalne przełączniki — jeden dla SMS, jeden dla Email — i możesz jednym kliknięciem wyłączyć cały kanał komunikacji.

Poniżej globalnych toggles znajdziesz szczegółowe ustawienia dla każdego typu powiadomienia — nowe sesje, przypomnienia, odwołania itd. Ekran jest teraz czytelniejszy i szybszy w obsłudze.

### ✅ Jak przetestować?

1. Wejdź w Ustawienia → Powiadomienia
2. Wyłącz globalny toggle SMS → sprawdź czy żaden SMS nie wychodzi po zapisaniu sesji
3. Włącz z powrotem → utwórz sesję → SMS przychodzi
4. Wyłącz konkretny typ powiadomień (np. „Przypomnienie 24h") → sprawdź czy działa niezależnie
5. Sprawdź czy pacjent też może zarządzać swoimi preferencjami w portalu

* * *

## 5\. 📓 Dzienniczek — widok terapeuty i ograniczenie edycji (zgłosiła Marta)

### Co nowego?

Terapeuta ma teraz **własny widok dzienniczka** — może przeglądać wpisy swoich pacjentów bez wchodzenia w ich profil.

Dodaliśmy też **ograniczenie 24 godzin na edycję wpisów** — pacjent może poprawić wpis tylko przez dobę od jego utworzenia. To ważne dla zachowania integralności dokumentacji.

Na prośbę Marty usunęliśmy też **emoji z przycisków nastroju** w dzienniku — interfejs jest teraz czystszy i bardziej profesjonalny.

### ✅ Jak przetestować?

1. Jako pacjent — utwórz wpis w dzienniczku
2. Sprawdź czy terapeuta widzi ten wpis w swoim widoku dzienniczka
3. Edytuj wpis jako pacjent → powinno działać w ciągu 24h
4. Spróbuj edytować wpis starszy niż 24h → powinna być blokada
5. Sprawdź przyciski nastroju → brak emoji, tylko tekst

* * *

## 6\. 🤖 AI — klasyfikacja typów sesji i naprawa wywiadu (zgłosiła Joanna)

### Klasyfikacja typów sesji przez AI

Nowy mechanizm AI **automatycznie klasyfikuje typ sesji** na podstawie transkrypcji — rozpoznaje czy to sesja CBT, psychodynamiczna, interwencyjna itd. Lokalizacja sesji jest teraz też przekazywana przy sesjach cyklicznych.

### Naprawa błędu 504 i zaległości 7 dni

Joanna zgłosiła krytyczny błąd — wywiad wstępny wyrzucał błąd **504 (timeout)** przy długich dokumentach. Naprawiliśmy też logikę zaległości, która teraz poprawnie liczy **7-dniowe okno** dla niezapłaconych sesji.

Dodaliśmy również **spinner ładowania** przy ekstrakcji transkrypcji AI — wcześniej interfejs wyglądał jak zamrożony podczas przetwarzania.

### Systemowe typy sesji

Dodaliśmy seeder który automatycznie tworzy **predefiniowane typy sesji** przy pierwszym uruchomieniu — nowe instalacje nie startują już z pustą listą.

### ✅ Jak przetestować AI?

1. Przejdź do sesji z transkrypcją → uruchom analizę AI
2. Sprawdź czy pojawia się **spinner** podczas przetwarzania
3. Sprawdź sekcję „Wywiad wstępny" → nie powinno być błędu 504
4. Sprawdź zakładkę Finanse → zaległości powinny wyświetlać tylko sesje z ostatnich 7 dni
5. Utwórz nową sesję → sprawdź czy lista typów sesji jest wypełniona (nie pusta)

* * *

## 7\. 🗂️ Stały termin — poprawa UX i tłumaczenia (zgłosiła Joanna)

### Co naprawiliśmy?

Sekcja **Stały termin sesji** przeszła przeprojektowanie UX — formularze są teraz bardziej intuicyjne i czytelne.

Joanna zgłosiła brakujące tłumaczenia w **opcjach miesięcznych formularza** — np. „Co miesiąc w 3. środę" były po polsku niezależnie od ustawień języka. Naprawione ✅

Pacjent widzi teraz swój stały termin w portalu z pełnymi informacjami.

* * *

## 8\. 🌍 Aplikacja mówi teraz w 7 językach!

### To historyczny moment dla naszego produktu 🎊

Dodaliśmy obsługę **5 nowych języków**:
- 🇸🇰 **Słowacki**
- 🇪🇸 **Kataloński**
- 🇷🇺 **Rosyjski**
- 🇺🇦 **Ukraiński**
- 🇱🇹 **Litewski**

Razem z polskim i angielskim — mamy teraz **7 języków** w aplikacji. Wszystkie formularze, komunikaty, powiadomienia i interfejs są w pełni przetłumaczone.

Przeprowadziliśmy też **dużą refaktoryzację systemu i18n** — tłumaczenia teraz żyją wyłącznie w plikach JSON (nie w bazie danych), co sprawia że zmiany językowe wchodzą po ~3 minutach od deployu bez potrzeby restartu serwera.

### ✅ Jak przetestować?

1. Wejdź w Ustawienia → zmień język na Ukraiński
2. Sprawdź czy cały interfejs się zmienił
3. Przełącz na Słowacki → sprawdź formularze i powiadomienia
4. Wróć na Polski → upewnij się że nic się nie rozjechało

* * *

## 9\. ⚡ Stabilność — SignalR, auto-logout i inne poprawki

### SignalR — naprawa połączeń real-time

Naprawiliśmy krytyczny problem z **SignalR** (komunikacja real-time — powiadomienia, statusy sesji). Aplikacja była deployowana na wiele instancji bez sticky sessions, przez co WebSocket trafiał na losowy serwer i tracił połączenie.

Rozwiązanie: przeszliśmy na `skipNegotiation + WebSockets` — czystsze, szybsze i odporne na środowiska bez sticky sessions. Przy okazji naprawiliśmy pętlę reconnect, która powodowała crash Chrome na długich sesjach.

### Auto-logout — 5 minut grace period

Dodaliśmy **5-minutowy bufor** przy zmianie zakładki — wcześniej przełączenie na inną kartę przeglądarki powodowało szybki auto-logout. Teraz masz 5 minut zanim sesja wygaśnie.

### Powiadomienia email dla pacjentów — domyślnie wyłączone

Nowi pacjenci nie dostają teraz emaili z powiadomieniami domyślnie — terapeuta świadomie włącza tę funkcję. Ogranicza to niechciane emaile przy onboardingu.

* * *

## 10\. 📋 Checklist QA

| Co sprawdzić | OK? |
|---|---|
| Badge na liście pacjentów bez email/telefonu | ⬜ |
| Blokada portalu dla pacjenta bez kontaktu | ⬜ |
| Wiele dokumentów w profilu pacjenta | ⬜ |
| Urlopy w kalendarzu — blokada rezerwacji | ⬜ |
| Sesja 30-minutowa w widoku tygodniowym | ⬜ |
| Globalne toggles SMS/Email w powiadomieniach | ⬜ |
| Dzienniczek — widok terapeuty | ⬜ |
| Blokada edycji wpisu po 24h | ⬜ |
| Spinner przy ekstrakcji AI transkrypcji | ⬜ |
| Brak błędu 504 przy wywiadzie wstępnym | ⬜ |
| Zaległości — poprawne 7-dniowe okno | ⬜ |
| Stały termin — tłumaczenia opcji miesięcznych | ⬜ |
| Zmiana języka na ukraiński — cały UI przetłumaczony | ⬜ |
| SignalR — powiadomienia real-time działają | ⬜ |
| Auto-logout: 5 minut po zmianie zakładki | ⬜ |

* * *

To był **wyjątkowo bogaty sprint** — dziękujemy całemu zespołowi za zgłoszenia, testy i cierpliwość. Kolejny release już w drodze! 🚀

_Artykuł przygotowany przez zespół AI Therapy Support_
