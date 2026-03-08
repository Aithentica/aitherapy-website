---
title: "Release Notes — 8 marca 2026"
description: "Sesje wideo online bez Google Meet, nagrywanie które nie przerywa się przy przełączaniu zakładek, aplikacja mobilna do nagrywania z telefonu, widget rezerwacji na Twoją stronę, chat AI ze streamingiem, branded emaile i dziesiątki usprawnień zgłoszonych przez nasz zespół."
pubDate: 2026-03-08
heroImage: "/images/blog/release-notes-8-marca-2026.png"
author: "Bartlomiej Glowacki"
category: "Inne"
tags: []
draft: false
---

To jest **największa aktualizacja w historii Therapy Support**. Zmian jest tak dużo, że podzieliliśmy je na 13 sekcji — ale najważniejsza wiadomość jest prosta: **sesje wideo możesz teraz prowadzić bezpośrednio w aplikacji**, a nagrywanie działa nawet gdy przechodzisz między zakładkami.

💚 **Wielkie podziękowania** dla całego zespołu testerów: **Martyny**, **Joanny**, **Bohdana**, **Ewy**, **Magdaleny**, **Jagody**, **Marty** i **Bartłomieja** — Wasze zgłoszenia kształtowały ten release na każdym kroku!

* * *

## 1\. 🎥 Sesje wideo online — bez wychodzenia z aplikacji

Do tej pory prowadzenie sesji online wymagało przełączenia się na Google Meet. Od teraz **sesje wideo odbywają się bezpośrednio w Therapy Support** — z kamerą, mikrofonem i udostępnianiem ekranu.

### Co się zmieniło?

- **Jeden klik** — otwierasz sesję, klikasz "Dołącz" i jesteś w pokoju wideo. Bez kopiowania linków, bez otwierania nowych zakładek
- **Stały pokój per pacjent** — każdy pacjent ma swój pokój wideo, który działa na każdą sesję. Nie trzeba generować nowych linków
- **Pacjent dołącza bez logowania** — pacjent dostaje link zaproszeniowy i dołącza jednym kliknięciem, bez zakładania konta. Przycisk "Dołącz do sesji" widoczny na jego dashboardzie
- **Kopiowanie linku** — w profilu terapeuty możesz skopiować link wideo dla pacjenta i wysłać go mailem lub SMS-em

### Typ spotkania: AITS Video czy Google Meet?

Przy każdej sesji widzisz teraz informację jakiego typu jest spotkanie — "AITS Video" albo "Google Meet". Możesz zmienić domyślny typ w ustawieniach. Na liście pacjentów i w profilu widać czytelny badge z typem spotkania.

### Co naprawiliśmy w trakcie wdrażania?

Podczas testów wideo pojawił się cały szereg drobnych problemów — naprawiliśmy je wszystkie:
- Przyciski kamery i mikrofonu były niewidoczne — teraz są zawsze na swoim miejscu
- Pasek kontrolny był przycięty na małych ekranach — poprawiony layout
- Po zakończeniu nagrywania okno nie zamykało się automatycznie — teraz zamyka się i odświeża dane sesji
- Przycisk "Wstecz" w sesji wideo przenosił na złą stronę — teraz wraca tam, skąd przyszedłeś

* * *

## 2\. 🎙️ Nagrywanie bez przerw — nawet gdy przełączasz zakładki (Martyna)

Na prośbę **Martyny** przebudowaliśmy nagrywanie od podstaw. Najważniejsza zmiana: **nagrywanie nie przerywa się gdy przechodzisz między zakładkami**.

### Jak to działa teraz?

- Klikasz "Nagraj" — nagrywanie startuje i **trwa w tle**, nawet gdy otwierasz notatki z poprzedniej sesji, przeglądasz profil pacjenta czy sprawdzasz kalendarz
- **Transkrypcja na żywo** — tekst pojawia się na ekranie w czasie rzeczywistym, od razu po rozpoczęciu nagrywania. Nie trzeba czekać na koniec sesji
- Jeśli z jakiegokolwiek powodu transkrypcja na żywo nie zadziała, system automatycznie **zapisuje kopię zapasową pliku audio** (MP3). Masz **24 godziny na pobranie** nagrania i ponowne przetworzenie
- Gdy nagrywanie zostanie przerwane (np. przez problem z połączeniem), widzisz **czytelny komunikat** co się stało i co możesz zrobić

### Pobieranie nagrania

Na zgłoszenie **Bartłomieja** dodaliśmy przycisk pobierania nagrania bezpośrednio w sesji. Widać przy nim informację "24h" — tyle czasu plik jest dostępny. Na zgłoszenie **Bohdana** naprawiliśmy też problem, gdy przycisk pobierania znikał po przejściu do innej sesji.

* * *

## 3\. 📱 Aplikacja mobilna — nagrywanie sesji z telefonu

Nowa aplikacja mobilna pozwala **nagrywać sesje bezpośrednio z telefonu** — idealna gdy prowadzisz sesję stacjonarnie i chcesz ją nagrać bez laptopa.

### Co potrafi?

- **Nagrywanie z telefonu** — otwierasz aplikację, wybierasz sesję, naciskasz "Nagraj". Transkrypcja automatyczna
- **Szybki PIN** zamiast pełnego logowania — gdy wracasz do aplikacji po wygaszeniu ekranu, wpisujesz tylko PIN
- **Sesja nie wygasa** podczas długich nagrywań — nawet 2-godzinna sesja nie zostanie przerwana przez automatyczne wylogowanie
- **Pull-to-refresh** — lista sesji odświeża się gestem, jak w każdej nowoczesnej aplikacji
- **Statusy przesyłania** — widzisz na bieżąco czy nagranie zostało przesłane i przetworzone

### Co naprawiliśmy?

Podczas testów mobilnych odkryliśmy, że transkrypcja z telefonu nadpisywała istniejące notatki zamiast dopisywać. Naprawione — teraz **mobilna transkrypcja zawsze dopisuje** do istniejących notatek sesji, nic nie ginie.

* * *

## 4\. 🤖 Chat AI — odpowiedzi na żywo i formatowanie

Asystent AI w profilu pacjenta przeszedł dużą przebudowę. Na zgłoszenie **Joanny** zmieniliśmy sposób, w jaki AI jest dostępny podczas pracy z pacjentem.

### Co nowego?

- **Odpowiedzi pojawiają się na żywo** — nie czekasz na pełną odpowiedź, widzisz tekst pojawiający się słowo po słowie
- **Ładne formatowanie** — odpowiedzi AI mają nagłówki, listy i pogrubienia, dzięki czemu są dużo czytelniejsze
- **Stały widget AI** — asystent AI jest widoczny cały czas na profilu pacjenta, bez potrzeby otwierania dodatkowego okna. Na zgłoszenie **Joanny** zastąpiliśmy wyskakujący modal stałym widgetem z licznikiem kontekstu
- **AI widzi notatki sesji** — na zgłoszenie **Bartłomieja** asystent AI bierze teraz pod uwagę notatki z bieżącej sesji i historię czatu przy generowaniu odpowiedzi
- **Edytor promptu** — administrator może dostosować sposób, w jaki AI odpowiada, bezpośrednio z interfejsu

### Co naprawiliśmy?

- Kliknięcie przycisku analizy ABC powodowało biały ekran — naprawione
- Po zapisaniu transkryptu aplikacja automatycznie przechodzi do zakładki nagrania

* * *

## 5\. 🧩 Widget rezerwacji — Twój kalendarz na Twojej stronie

Teraz możesz **osadzić formularz rezerwacji na swojej stronie internetowej**. Pacjent widzi Twój kalendarz, wybiera termin, typ sesji i płaci — bez opuszczania Twojej strony.

### Jak to działa?

1. W panelu znajdziesz swój unikalny link do widgetu
2. Kopiujesz gotowy kod i wklejasz na swoją stronę
3. Na Twojej stronie pojawia się formularz rezerwacji z Twoim kalendarzem

### Co zawiera widget?

- **Typy sesji** — pacjent widzi listę typów sesji, które ustawiłeś w swoim profilu. Na zgłoszenie **beta testerki** dodaliśmy tę funkcję
- **Logo Therapy Support** w nagłówku — na zgłoszenie **Magdaleny** zamieniliśmy placeholder na prawdziwe logo
- **Kompaktowy formularz** — wszystko mieści się w małej ramce na Twojej stronie
- **Płatność Stripe** — pacjent przechodzi do płatności bezpośrednio z widgetu

Widget jest dostępny **tylko gdy masz podpięte konto Stripe**. Administrator widzi też przycisk widgetu w panelu zarządzania terapeutami.

* * *

## 6\. 💰 Przypomnienia o zaległościach — gotowe szablony, które możesz edytować

Nowy sposób wysyłania przypomnień o zaległościach finansowych do pacjentów — przez email lub SMS.

- **Gotowy szablon** — wiadomość jest już wypełniona, ale możesz ją zmienić przed wysłaniem
- **Zapamiętywanie zmian** — Twoja zmodyfikowana treść zapisuje się jako szablon na przyszłość
- **Przycisk w profilu pacjenta** — szybki dostęp do wysłania przypomnienia bezpośrednio z profilu, bez przechodzenia do sekcji finansów
- **Spójne kwoty** — podgląd i faktyczna wysyłka pokazują te same kwoty co dashboard finansowy

* * *

## 7\. 📧 Profesjonalne emaile z logo i brandingiem (Ewa)

Na zgłoszenie **Ewy** wszystkie emaile wysyłane z systemu mają teraz **profesjonalny wygląd**:

- Logo Therapy Support w nagłówku
- Spójne kolory i układ
- Poprawne wyświetlanie zarówno na komputerze jak i na telefonie

Koniec z prostymi, tekstowymi wiadomościami — Twoi pacjenci otrzymują emaile, które wyglądają profesjonalnie i budują zaufanie do Twojej praktyki.

* * *

## 8\. 🎙️ Nagrywanie i transkrypcja — wybór języka i status diaryzacji

### Wybór języka nagrywania

Przed rozpoczęciem nagrywania możesz teraz **wybrać język i liczbę osób** biorących udział w sesji. System dopasowuje język transkrypcji do Twojego wyboru. Domyślnie ustawiony jest polski.

Selektory języka i liczby osób są widoczne nawet jeśli coś poszło nie tak z połączeniem — możesz je zmienić i spróbować ponownie.

### Status rozpoznawania mówców

Jeśli nagrywasz z telefonu, widzisz teraz **status diaryzacji** — czyli informację, czy system poprawnie rozpoznaje kto mówi (terapeuta czy pacjent).

### Powiadomienia o transkrypcji

Powiadomienia o przetwarzanej transkrypcji zawierają teraz **imię pacjenta i numer sesji** — od razu wiesz, której sesji dotyczy powiadomienie. Na kafelkach sesji widoczny jest też wskaźnik, że audio jest w trakcie przetwarzania.

### Przesyłanie nagrań do starszych sesji

Na prośbę **Martyny** możesz teraz **wgrać plik audio do sesji, która już się odbyła** — na wypadek gdy nagrywanie nie było włączone podczas sesji, ale masz plik z dyktafonu.

* * *

## 9\. 📅 Kalendarz — kwadransy i przeciąganie między tygodniami

### Sesje co kwadrans

Kalendarz i formularze sesji obsługują teraz **sesje zaczynające się co 15 minut** — o 9:00, 9:15, 9:30 czy 9:45. Wcześniej sloty były dostępne tylko co pełną godzinę.

### Przeciąganie sesji między tygodniami

Na siatce kalendarza tygodniowego możesz teraz **przeciągnąć sesję do innego tygodnia** — na przykład gdy pacjent chce przenieść wizytę o tydzień.

### Przenoszenie sesji z konfliktem (Joanna)

Na zgłoszenie **Joanny** terapeuta może teraz **przenieść sesję nawet gdy nowy termin koliduje** z inną sesją. System pyta o potwierdzenie i pozwala kontynuować — bo czasem jest to celowe (np. sesja grupowa).

### Inne zmiany w sesjach

- Na zgłoszenie **Joanny** zmieniliśmy nazwę "Konsultacja wstępna" na **"Wywiad wstępny"** — bardziej precyzyjna terminologia kliniczna
- Na liście "Ten tydzień" na dashboardzie widać teraz **liczbę zaplanowanych sesji**
- Na zgłoszenie **Marty**: sesja odwołana w odpowiednim terminie **nie wyświetla się już jako "Nieopłacona"**
- Profil publiczny terapeuty pokazuje teraz **typy sesji** w kalendarzu dostępności

* * *

## 10\. 🔍 Klasyfikacja sesji i analiza AI (Bohdan, Jagoda)

### Automatyczne rozpoznawanie typu sesji (Bohdan)

Na zgłoszenie **Bohdana** naprawiliśmy automatyczną klasyfikację sesji. Wcześniej system nie zawsze poprawnie rozpoznawał typ sesji po wgraniu transkrypcji. Teraz klasyfikacja działa prawidłowo — wystarczy kliknąć "Podsumowanie", a AI określi czy to była sesja standardowa, konsultacyjna, kryzysowa czy wywiad.

Na zgłoszenie **Bohdana** naprawiliśmy też problem z przesunięciem znacznika czasu transkrypcji o 1 godzinę — teraz czas jest poprawny.

### Analiza ABC (Jagoda)

Na zgłoszenie **Jagody** zaktualizowaliśmy sposób, w jaki AI wyciąga elementy z modelu ABC (myśl-uczucie-zachowanie). Analiza uwzględnia teraz **znaczenie myśli** dla pacjenta i **strategię behawioralną** — dwa nowe pola, które pojawiają się automatycznie po analizie transkrypcji.

* * *

## 11\. 🎨 Nowy wygląd i interfejs

### Strona logowania

Strona logowania ma teraz **nowy design** w kolorach Therapy Support — zielone akcenty i profesjonalny wygląd od pierwszego kontaktu z aplikacją.

### Dashboard

- Na zgłoszenie **Bohdana**: liczba sesji na dashboardzie wyświetla się teraz poprawnie z prawidłową odmianą ("1 sesja", "3 sesje", "5 sesji") — we wszystkich 7 językach
- Panele na dashboardzie (przychody, sesje, notatki) mają teraz widoczne ramki — łatwiej je odróżnić

### Profil pacjenta

- Przyciski w profilu pacjenta zostały uporządkowane — logiczniejszy układ, najczęściej używane akcje na wierzchu
- Przyciski wideo na dashboardzie pacjenta zostały przeniesione w bardziej intuicyjne miejsce
- Formatowanie imion i nazwisk pacjentów jest teraz spójne w całej aplikacji

### Formularz rezerwacji

- **Data sesji widoczna w nagłówku** formularza — nie musisz przewijać żeby zobaczyć wybraną datę
- **Zmieniona kolejność pól** — najpierw typ sesji, potem data i godzina, na końcu dane kontaktowe. Bardziej naturalny flow

### Tłumaczenia (Ewa)

Na zgłoszenie **Ewy** dodaliśmy brakujące tłumaczenia w sekcjach wideo, typów spotkań, subskrypcji i ustawień hasła. Poprawiliśmy też tłumaczenie statusu "online" w 5 językach (słowackim, katalońskim, rosyjskim, ukraińskim i litewskim).

* * *

## 12\. 🐛 Co naprawiliśmy?

Poniżej lista problemów, które zgłosiliście — wszystkie naprawione w tym releasie:

- **Duże pliki audio** powodowały timeout przy transkrypcji — teraz wszystkie pliki przetwarzane są w trybie wsadowym, niezależnie od rozmiaru
- **Transkrypcja nie pojawiała się** w polu tekstowym po zakończeniu przetwarzania — naprawione
- **Nagrywanie przerywało się** przy dłuższych sesjach z powodu wygaśnięcia sesji — teraz token odświeża się automatycznie
- Na zgłoszenie **Bohdana**: ograniczenia funkcji AI działały niespójnie między planami — ujednolicone, plan Professional ma teraz pełny dostęp
- Synchronizacja z kalendarzem zewnętrznym (CalDAV) nie działała poprawnie — na zgłoszenie **Bartłomieja** naprawiona metoda komunikacji
- Zdarzało się, że aplikacja zwalniała po dłuższym czasie pracy — naprawione problemy z wydajnością, które mogły powodować zawieszanie przeglądarki
- Przycisk "Wyloguj" w przeglądarce nie działał — przywrócony i działa poprawnie
- Dodawanie pacjenta wymagało podania emaila, choć backend go nie wymagał — teraz email jest opcjonalny
- Aplikacja jest stabilniejsza — naprawiliśmy kilka problemów z jednoczesnym dostępem do danych, które mogły powodować sporadyczne błędy

* * *

## 13\. 📋 Co warto sprawdzić?

| Sprawdź to | ✅ |
|---|---|
| **Wideo** | |
| Otwórz sesję online i dołącz do pokoju wideo — kamera i mikrofon działają | ⬜ |
| Wyślij pacjentowi link zaproszeniowy — pacjent dołącza bez logowania | ⬜ |
| Na liście pacjentów widać badge "AITS Video" lub "Google Meet" | ⬜ |
| Zmień domyślny typ spotkania w ustawieniach | ⬜ |
| Skopiuj link wideo z profilu terapeuty | ⬜ |
| **Nagrywanie** | |
| Rozpocznij nagrywanie i przejdź do innej zakładki — nagrywanie trwa | ⬜ |
| Po błędzie transkrypcji — przycisk pobierania nagrania widoczny (info "24h") | ⬜ |
| Transkrypcja na żywo pojawia się od razu po starcie nagrywania | ⬜ |
| Wybierz język i liczbę osób przed nagrywaniem | ⬜ |
| Wgraj plik audio do sesji, która już się odbyła | ⬜ |
| **Telefon** | |
| Nagraj sesję z aplikacji mobilnej — transkrypcja pojawia się w sesji | ⬜ |
| Po wygaszeniu ekranu — wpisz PIN i wróć do aplikacji bez logowania | ⬜ |
| Transkrypcja z telefonu dopisuje się do notatek (nie nadpisuje) | ⬜ |
| **Chat AI** | |
| Otwórz chat AI w profilu pacjenta — odpowiedzi pojawiają się na żywo | ⬜ |
| Odpowiedzi AI mają formatowanie (nagłówki, listy, pogrubienia) | ⬜ |
| Kliknij przycisk analizy ABC — brak białego ekranu | ⬜ |
| **Widget rezerwacji** | |
| Otwórz swoją stronę z widgetem — formularz rezerwacji się wyświetla | ⬜ |
| Pacjent widzi typy sesji w formularzu widgetu | ⬜ |
| Płatność Stripe otwiera się poprawnie z widgetu | ⬜ |
| **Finanse i przypomnienia** | |
| Wyślij przypomnienie o zaległości z profilu pacjenta | ⬜ |
| Zmodyfikuj treść przypomnienia i zapisz jako szablon | ⬜ |
| **Kalendarz** | |
| Utwórz sesję o 9:15 — wyświetla się poprawnie w kalendarzu | ⬜ |
| Przeciągnij sesję do innego tygodnia na siatce kalendarza | ⬜ |
| Przenieś sesję na termin kolidujący z inną — po potwierdzeniu działa | ⬜ |
| Odwołana sesja nie wyświetla się jako "Nieopłacona" | ⬜ |
| **Emaile** | |
| Sprawdź email z systemu — logo i branding widoczne | ⬜ |
| **Inne** | |
| Nowy wygląd strony logowania | ⬜ |
| Liczba sesji na dashboardzie wyświetla się poprawnie (1 sesja / 3 sesje) | ⬜ |

* * *

To był **rekordowy sprint** — sesje wideo, aplikacja mobilna, przebudowane nagrywanie i dziesiątki usprawnień. Dziękujemy całemu zespołowi za nieocenione zgłoszenia i cierpliwość w testach!

_Artykuł przygotowany przez zespół Therapy Support_
