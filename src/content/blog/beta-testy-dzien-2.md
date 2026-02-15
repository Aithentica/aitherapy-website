---
title: "Beta testy – podsumowanie po 2 dniach"
description: "Drugi dzień beta testów za nami! Nasza testerka przetestowała aplikację od A do Z i zgłosiła serię problemów UX oraz bugów. Wszystkie zostały naprawione w ciągu jednej sesji. Oto podsumowanie zmian z "
pubDate: 2026-02-11
heroImage: "/images/blog/probny-demo-day.png"
author: "Bartlomiej Glowacki"
category: "Inne"
tags: []
draft: false
---

Drugi dzień beta testów za nami! Nasza testerka przetestowała aplikację od A do Z i zgłosiła serię problemów UX oraz bugów. Wszystkie zostały naprawione w ciągu jednej sesji. Oto podsumowanie zmian z obu dni beta testów.

## Dzień 1 – fundamenty i nowe funkcje (feedback od Basi) (10 lutego)

### 1\. System finansowy

Przeprowadziliśmy refaktoryzację systemu finansowego – usunięcie starego systemu Tpay, wprowadzenie kredytów sesyjnych oraz obsługi faktur VAT. Link do modułu Finanse pojawił się teraz w głównej nawigacji.

### 2\. Nagrywanie sesji

Zmieniliśmy sposób nagrywania notatek podczas sesji. Poprawiliśmy obsługę błędów transkrypcji w czasie rzeczywistym i usprawniliśmy interfejs nagrywania.

### 3\. Powiadomienia

Naprawiliśmy system powiadomień – widoczność kanałów SMS, oznaczenia badge'ami, szablony SMS w trybie tylko do odczytu oraz auto-zapis ustawień.

### 4\. Lokalizacje i kalendarz

Wprowadziliśmy dynamiczne typy lokalizacji z API (zamiast hardkodowanych wartości) oraz integrację z Google Calendar przez OAuth.

### 5\. Tłumaczenia

Naprawiliśmy istniejące tłumaczenia i uzupełniliśmy brakujące klucze w systemie i18n.

## Dzień 2 – poprawki UX (feedback od Marty)(11 lutego)

### 1\. Kalendarz zaczyna się od poniedziałku

DatePicker w modalu sesji zaczynał tydzień od niedzieli – teraz startuje od poniedziałku, zgodnie z europejskim standardem.

### 2\. Separatory wizualne w dostępności

Po dodaniu kilku bloków godzinowych w ustawieniach dostępności nie było wiadomo, który blok należy do którego dnia. Dodaliśmy wizualne separatory między dniami.

### 3\. Kontakt ICE w danych pacjenta

Kontakt ICE (In Case of Emergency) został przeniesiony z dashboardu do zakładki "Dane podstawowe" w profilu pacjenta – tam, gdzie logicznie powinien się znajdować.

### 4\. Podgląd hasła (Eye icon)

Stworzyliśmy nowy komponent PasswordInput z ikoną oka, pozwalający na podgląd wpisywanego hasła. Działa na stronie logowania, ustawiania hasła oraz w profilu terapeuty.

### 5\. Widoczność wymagań hasła

Checklist wymagań hasła (16 znaków, duża/mała litera, cyfra, znak specjalny) jest teraz wyraźnie widoczny w niebieskim boxie między polami hasła. Dodaliśmy go również do sekcji zmiany hasła w profilu terapeuty.

### 6\. Polonizacja lokalizacji

Usunęliśmy mieszankę polsko-angielską w nazwach lokalizacji – "office" stało się "Gabinet", "online" – "Online". Dodaliśmy możliwość zmiany lokalizacji bezpośrednio z widoku szczegółów sesji.

### 7\. Przycisk akceptacji dokumentów

Przycisk "Akceptuję wszystkie" wyglądał jakby odznaczał checkboxy. Teraz mamy osobny link "Zaznacz wszystkie" / "Odznacz wszystkie" oraz przycisk "Potwierdzam i przechodzę dalej".

### 8\. Kolor pacjenta w kalendarzu

Dodaliśmy widoczny picker kolorów na dashboardzie pacjenta – 8 presetowanych kolorów plus możliwość wpisania własnego kodu HEX. Kolor jest używany w kalendarzu do rozróżniania sesji różnych pacjentów.

### 9\. Metoda płatności

W szczegółach sesji pojawił się dropdown z metodą płatności: Gotówka, Przelew/BLIK, Stripe. Dla sesji opłaconych przez Stripe pole jest zablokowane.

### 10\. Dostępność – koniec z auto-save

Usunęliśmy auto-save, który powodował "szalenie strony" przy dodawaniu bloków. Teraz zmiany zapisujemy ręcznie przyciskiem "Zapisz zmiany". Dodaliśmy wykrywanie nakładających się bloków godzinowych i automatyczne przycinanie przy zapisie. Nowe bloki inteligentnie ustawiają godzinę po ostatnim bloku danego dnia.

### 11\. Drugi blok godzinowy

Naprawiliśmy bug, przez który drugi blok dostępności (np. wieczorny) nie pojawiał się przy tworzeniu sesji. Problem leżał w hardkodowanej godzinie w serwisie backend – teraz używamy faktycznego czasu trwania sesji.

### 12\. Aplikacja mobilna

Równolegle z poprawkami UX dodaliśmy natywne nagrywanie audio na Androidzie i iOS z wykorzystaniem Capacitor oraz polling statusu transkrypcji po przesłaniu nagrania.

### 13\. Tłumaczenia

Dodaliśmy 40 nowych kluczy tłumaczeń (polskich i angielskich) pokrywających wszystkie nowe elementy interfejsu.

## Podsumowanie

Dwa dni beta testów przyniosły **ponad 30 zmian** – od fundamentalnych (system finansowy, nagrywanie) po drobne poprawki UX, które znacząco wpływają na komfort użytkowania. Feedback od testerki okazał się bezcenny – każdy zgłoszony problem został naprawiony tego samego dnia.
