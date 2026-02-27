---
title: "Release Notes - 12 lutego 2026"
description: "Dzisiejszy release zawiera krytyczne poprawki stabilności i nowe funkcje. Poniżej znajdziecie opis zmian oraz instrukcje testowania dla każdej z nich.

💚 Dziękujemy Jagodzie i Marcie za dzisiejsze uw"
pubDate: 2026-02-12
heroImage: "/images/blog/release-notes-12-lutego-2026.png"
author: "Bartlomiej Glowacki"
category: "Inne"
tags: []
draft: false
---

Dzisiejszy release zawiera **krytyczne poprawki stabilności** i nowe funkcje. Poniżej znajdziecie opis zmian oraz **instrukcje testowania** dla każdej z nich.

💚 **Dziękujemy Jagodzie i Marcie** za dzisiejsze uwagi i zgłoszenia - dzięki Wam mogliśmy szybko zidentyfikować i naprawić kilka ważnych problemów!

* * *

## 1\. 🕐 Naprawa godzin w Google Calendar (KRYTYCZNE)

### Co się działo?

Sesje dodawane w aplikacji o godzinie np. **16:00** pojawiały się w Google Calendar o **17:00** - przesunięcie o dokładnie 1 godzinę.

### Co naprawiliśmy?

Poprawiliśmy sposób, w jaki serwer przelicza godziny między strefami czasowymi. Dodatkowo usunęliśmy sztywne ustawienie strefy „Europa/Warszawa" - teraz system pobiera strefę czasową z profilu terapeuty.

### ✅ Jak przetestować?

1.  Zaloguj się jako terapeuta
2.  Utwórz nową sesję na konkretną godzinę, np. **15:00**
3.  Sprawdź w Google Calendar - sesja powinna pojawić się o **15:00** (nie 16:00!)
4.  Edytuj sesję i zmień godzinę na **17:00** → sprawdź czy Google Calendar też pokazuje 17:00
5.  Utwórz sesję cykliczną → sprawdź czy wszystkie wystąpienia mają prawidłowe godziny
6.  Sprawdź widok dostępności (busy/free) - godziny powinny się zgadzać

* * *

## 2\. 🤖 Auto-zapis wyników AI

### Co się działo?

Wyniki generowane przez AI (mechanizmy, konceptualizacja, ocena sesji) **znikały po przeładowaniu strony** - nie były zapisywane do bazy danych.

### Co naprawiliśmy?

**Mechanizmy (Level 2 - „Dlaczego?"):**

-   Wyniki ekstrakcji AI są teraz **automatycznie zapisywane** do bazy
-   Przy wejściu na kartę pacjenta mechanizmy ładują się z bazy (nie znikają po F5)
-   Można też ręcznie edytować i zapisywać mechanizmy

**Dane z wywiadu wstępnego:**

-   Dodano możliwość **ręcznego zapisu** edytowanych danych demograficznych i rozwojowych
-   AI ekstrakcja wywiadu - auto-zapis działał już wcześniej ✓

### ✅ Jak przetestować mechanizmy?

1.  Wejdź na kartę pacjenta → „Informacje terapeutyczne"
2.  Przejdź do sekcji „Level 2 - Dlaczego?"
3.  Wybierz sesję z transkrypcją i kliknij „Analiza AI"
4.  Po wygenerowaniu → przycisk „Zapisz" **NIE powinien się pojawić** (dane zapisały się automatycznie)
5.  **Przeładuj stronę (F5)** → dane mechanizmów powinny się załadować z bazy
6.  Ręcznie zmień coś w polu → powinien pojawić się przycisk „Zapisz mechanizmy"
7.  Kliknij „Zapisz mechanizmy" → przycisk znika
8.  Przeładuj stronę → ręczna zmiana jest zachowana

### ✅ Jak przetestować dane z wywiadu?

1.  Sekcja „Wywiad wstępny" - zmień jakieś pole (np. „Stan cywilny")
2.  Powinien pojawić się przycisk „Zapisz dane konsultacji"
3.  Kliknij - przycisk znika
4.  Przeładuj stronę → zmiana zachowana
5.  Uruchom AI ekstrakcję wywiadu → przycisk „Zapisz" **NIE pojawia się** (auto-save)
6.  Przeładuj → dane z AI się zachowały

* * *

## 3\. 💾 Inteligentne przyciski zapisu

### Nowa zasada działania

**AI generuje wynik** → dane zapisują się automatycznie (bez przycisku).
**Użytkownik edytuje ręcznie** → pojawia się przycisk „Zapisz".

Dotyczy wszystkich sekcji AI:

Sekcja

AI → auto-save

Ręczna edycja → przycisk zapisu

Konceptualizacja CBT

✅

✅ „Zapisz konceptualizację"

Problemy

✅

✅ „Zapisz problemy"

Dane z wywiadu

✅

✅ „Zapisz dane konsultacji"

**Mechanizmy (NOWE)**

✅

✅ „Zapisz mechanizmy"

Ocena sesji SJS-CBT

✅

- (tylko odczyt)

### ✅ Jak przetestować konceptualizację (ABC)?

1.  Wybierz sesję z transkrypcją w sekcji „Level 1"
2.  Kliknij „Analiza AI" → po wygenerowaniu przycisk „Zapisz" **NIE powinien migać ani się pojawiać**
3.  Ręcznie zmień jakieś pole (np. „Wyzwalacz") → pojawia się „Zapisz konceptualizację"
4.  Kliknij Zapisz → przycisk znika
5.  Wybierz tę samą sesję ponownie → dane załadowane z bazy

### ✅ Jak przetestować problemy?

1.  Uruchom AI ekstrakcję problemów → przycisk „Zapisz problemy" **NIE pojawia się**
2.  Ręcznie zmień coś w problemie → pojawia się „Zapisz problemy"
3.  Kliknij Zapisz → przycisk znika

* * *

## 4\. 📄 Dokumenty prawne - naprawa błędu 429

### Co się działo?

Przy ładowaniu dokumentów prawnych (regulamin, polityka prywatności, DPA, oświadczenie) pojawiał się błąd: **„Nie udało się załadować dokumentu (429)"**.

### Co naprawiliśmy?

Wyłączyliśmy limit zapytań dla dokumentów prawnych - są publiczne i nie powinny być blokowane.

### ✅ Jak przetestować?

1.  Wyloguj się z aplikacji
2.  Zaloguj się ponownie
3.  Jeśli wymagana jest akceptacja dokumentów → modal powinien załadować wszystkie dokumenty **bez błędu**
4.  Kliknij „Czytaj więcej" na każdym dokumencie → powinny się otworzyć prawidłowo

* * *

## 5\. ⏰ Auto-kompletowanie sesji

### Nowa funkcja

System automatycznie zmienia status przeszłych sesji z „Zaplanowana" / „Potwierdzona" na „Zakończona":

-   Sprawdzanie odbywa się co 1 godzinę
-   Przy starcie aplikacji - jednorazowe naprawienie istniejących sesji z przeszłości

### ✅ Jak przetestować?

1.  Sprawdź sesje z przeszłości - powinny mieć status „Zakończona"
2.  Utwórz sesję w przeszłości → po pewnym czasie powinna automatycznie zmienić status na „Zakończona"

* * *

## 6\. 📬 Preferencje powiadomień (SMS/Email)

### Co zmieniliśmy?

-   System teraz **sprawdza preferencje terapeuty** przed wysyłką każdego emaila i SMS-a
-   Terapeuta może wyłączyć powiadomienia email lub SMS w swoich ustawieniach
-   Wiadomości do pacjentów obsługują teraz oba kanały (email + SMS)

### ✅ Jak przetestować?

1.  Wejdź w ustawienia terapeuty → sekcja powiadomienia
2.  Wyłącz powiadomienia email
3.  Utwórz sesję → terapeuta **NIE** powinien dostać emaila
4.  Włącz powiadomienia z powrotem → utwórz sesję → email przychodzi
5.  Sprawdź też SMS: wyłącz SMS → wyślij wiadomość do pacjenta → SMS nie wychodzi

* * *

## 7\. 🔧 Pozostałe poprawki

-   **Formatowanie transkrypcji** - poprawiony wygląd transkrypcji sesji
-   **Nagrywanie sesji** - poprawki w module nagrywania
-   **SMS feature gating** - ikona kłódki i wyłączone kontrolki SMS dla planów bez SMS
-   **Zapis promptów AI (admin)** - naprawiony zapis zmian z panelu admina
-   **Ochrona edycji admina** - restart aplikacji nie nadpisuje już promptów AI edytowanych przez admina
-   **Naprawa duplikatów kluczy tłumaczeń** - usunięto konflikty powodujące błąd 500 przy starcie
-   **Legal UI** - „Zaznacz wszystkie" przeniesiony na dół, obok przycisku potwierdzenia
-   **Poprawki kompilacji** - naprawione drobne błędy w serwisie dostępności

* * *

## 📋 Checklist QA

Co sprawdzić

OK?

Google Calendar: sesja o 15:00 → w kalendarzu 15:00 (nie 16:00)

⬜

Mechanizmy AI: wygeneruj → przeładuj stronę → dane zachowane

⬜

Dane wywiadu: edytuj ręcznie → zapisz → przeładuj → zachowane

⬜

Konceptualizacja: AI generuje → brak migającego przycisku „Zapisz"

⬜

Problemy: AI generuje → brak przycisku; ręczna edycja → przycisk

⬜

Dokumenty prawne: brak błędu 429 przy ładowaniu

⬜

Auto-kompletowanie: przeszłe sesje mają status „Zakończona"

⬜

Powiadomienia: wyłączenie email/SMS → brak wysyłki

⬜

SMS gating: plan bez SMS → ikona kłódki, kontrolki nieaktywne

⬜

Prompty AI (admin): edycja prompta → restart → edycja zachowana

⬜

W razie pytań lub wątpliwości - piszcie śmiało. Powodzenia w testowaniu! 🚀
