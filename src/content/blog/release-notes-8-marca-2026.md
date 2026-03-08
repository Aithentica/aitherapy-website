---
title: "Release Notes — 8 marca 2026"
description: "Widget rezerwacji do osadzenia na stronie terapeuty (embed iframe), edytowalne przypomnienia o zaległościach, przebudowa formularza rezerwacji, pełne wsparcie kwadransów w kalendarzu, monitoring Application Insights, nowy wygląd logowania i ponad 30 commitów poprawek."
pubDate: 2026-03-08
heroImage: "/images/blog/release-notes-8-marca-2026.png"
author: "Bartlomiej Glowacki"
category: "Inne"
tags: []
draft: false
---

Ponad **30 commitów** w tym sprincie — z jedną dużą funkcją, na którą czekaliście od dawna: **widget rezerwacji do osadzenia na własnej stronie internetowej**. Poza tym — nowy moduł przypomnień finansowych, przebudowa formularza rezerwacji, pełne wsparcie kwadransów w kalendarzu, monitoring Application Insights i seria hotfixów stabilizujących produkcję.

💚 **Dziękujemy** naszym testerkom: **Magdalenie** i **Joannie** — wasze zgłoszenia napędzały ten sprint!

* * *

## 1\. 🧩 Widget rezerwacji (Embed) — Twój kalendarz na Twojej stronie

To największa nowość tego releasu — **12 commitów** poświęconych wyłącznie tej funkcji. Terapeuta może teraz **osadzić formularz rezerwacji na swojej stronie internetowej** — jako iframe, który wygląda jak natywna część strony.

### Jak to działa?

1. W panelu terapeuty pojawia się **unikalny slug** (np. `jan-kowalski`) — generowany automatycznie, niezależny od profilu publicznego
2. Klikasz "Embed" — kopiujesz gotowy kod `<iframe>` do wklejenia na swoją stronę
3. Pacjent widzi Twój kalendarz, wybiera termin, typ sesji i płaci przez Stripe — bez opuszczania Twojej strony

### Budowa widgetu krok po kroku

Embed powstawał iteracyjnie — oto co dodawaliśmy:

1. **Nowa trasa `/embed/:slug`** — dedykowany widok rezerwacji, oddzielony od głównej aplikacji. Każdy terapeuta ma unikalny slug, niezależny od profilu publicznego (np. zmiana nazwiska w profilu nie łamie linku embed)
2. **Redesign z brandingiem Therapy Support** — nagłówek z logo, link do aitherapy.support, spójne kolory
3. **Domyślny język PL** — embed automatycznie ustawia `lang=pl` w generowanym kodzie iframe
4. **Logo w nagłówku jako link** — kliknięcie logo w embedzie otwiera stronę aitherapy.support
5. **Typy sesji** — pacjent wybiera z listy typów sesji ustawionych w profilu terapeuty (SCRUM-718, zgłosiła beta testerka)
6. **Prawdziwe logo TherapySupport** w nagłówku zamiast placeholdera (SCRUM-718, zgłosiła Magdalena)
7. **Kompaktowy checkout** — podsumowanie w jednej linii, email i telefon w jednym rzędzie, notatki w jednym wierszu — żeby formularz zmieścił się w małym iframe
8. **Płatności Stripe przez `window.top`** — redirect na stronę płatności wychodzi z iframe'a, żeby Stripe mógł poprawnie obsłużyć 3D Secure i powrót do strony
9. **Ukryty Cookie Banner i Analytics** w trybie embed — czysty interfejs bez zbędnych elementów, które nie mają sensu wewnątrz iframe'a

### Dostępność i bezpieczeństwo

- Embed jest dostępny **tylko dla terapeutów z podpiętym Stripe Connect** — bez konta płatniczego nie ma sensu pokazywać widgetu rezerwacji
- **Auto-slug** — slug generowany jest automatycznie przy tworzeniu konta. Dla istniejących terapeutów — **lazy generation** przy pierwszym wejściu do ustawień embed
- **EmbedGuard** — komponent chroniący trasę embed przed dostępem bez odpowiedniego sluga (naprawiony zduplikowany import, który łamał build)

### Panel admina

- Nowy **przycisk "Embed"** w panelu `/admin/therapists` — admin widzi i może skopiować kod embed każdego terapeuty
- Naprawiony bug: `TherapistProfile.TherapistId` zamiast `UserId` w `AdminTherapistsController` — bez tej poprawki admin widział błędne dane

* * *

## 2\. 📋 Przebudowa formularza rezerwacji

Formularz rezerwacji (ten sam, który wyświetla się w embedzie i w głównej aplikacji) przeszedł **przebudowę layoutu**:

- **Data w headerze** — wybrana data sesji widoczna na stałe w nagłówku formularza, nie trzeba przewijać żeby ją zobaczyć
- **Zmieniona kolejność pól** — logiczniejszy flow: najpierw typ sesji, potem data i godzina, na końcu dane kontaktowe
- Formularz jest teraz spójny między widokiem w aplikacji a widokiem w embedzie

* * *

## 3\. 💰 Przypomnienia o zaległościach — edytowalne szablony

Nowy **FinanceReminderModal** — reużywalny komponent pozwalający wysłać przypomnienie o zaległościach finansowych do pacjenta przez email lub SMS.

### Co nowego?

- **Edytowalne pola SMS i e-mail** — domyślny szablon wiadomości jest wypełniony, ale możesz go zmienić przed wysłaniem. Treść dopasowana do konkretnego pacjenta
- **Zapis szablonów** — zmodyfikowana treść jest zapamiętywana jako szablon na przyszłość — nie musisz pisać od nowa za każdym razem
- **Przycisk w profilu pacjenta** — szybki dostęp do modalu przypomnienia bezpośrednio z widoku profilu, bez szukania w sekcji finansów
- **Spójne kryteria filtrowania** — podgląd (reminder-preview) i wysyłka (send-reminder) używają **tych samych kryteriów** co dashboard finansowy. Wcześniej mogło się zdarzyć, że podgląd pokazywał inne kwoty niż faktycznie wysyłane
- **Toast zamiast `alert()`** — koniec z brzydkimi natywnimi alertami przeglądarki. Błędy wyświetlają się teraz jako inline komunikat w modalu lub jako toast notification
- **Naprawiony import `AlertCircle`** w `TherapistFinance.tsx` — brakujący import powodował runtime error przy otwieraniu sekcji finansów

* * *

## 4\. ⏱️ Pełne wsparcie kwadransów w UI

Kalendarz i formularze sesji obsługują teraz **sesje zaczynające się o dowolnym kwadransie** (9:00, 9:15, 9:30, 9:45) — nie tylko o pełnych godzinach.

### Co się zmieniło?

- **`ensureFullHour`** — nowa funkcja utility normalizująca godziny w interfejsie. Gdy sesja zaczyna się o 9:15 i trwa 45 minut, system poprawnie oblicza koniec na 10:00
- **Time pickery** — wszystkie selektory godzin (tworzenie sesji, stałe terminy, dostępność) pokazują **kwadransowe sloty** zamiast samych pełnych godzin
- **Kalendarz tygodniowy** — siatka poprawnie renderuje sesje zaczynające się o :15, :30, :45 — wcześniej takie sesje mogły "skakać" do najbliższej pełnej godziny

* * *

## 5\. 🏷️ Zmiana nazwy sesji i licznik na dashboardzie (SCRUM-636)

Na zgłoszenie **Joanny** zmieniliśmy nazwę typu sesji:

- **"Konsultacja wstępna" → "Wywiad wstępny"** — bardziej precyzyjna terminologia kliniczna, spójna z praktyką CBT
- **Licznik sesji na dashboardzie** — w sekcji "Ten tydzień" widoczna jest teraz liczba zaplanowanych sesji obok listy. Szybki wgląd w obciążenie dnia bez liczenia ręcznego

* * *

## 6\. 📊 Application Insights — monitoring produkcji (SCRUM-577)

Wdrożyliśmy **Azure Application Insights** do monitorowania błędów w czasie rzeczywistym. To trzy osobne commity budujące kompletny system:

### Architektura monitoringu

- **Frontend** — Application Insights SDK przechwytuje błędy JavaScript, wolne ładowania stron i nieudane requesty HTTP
- **Backend** — middleware loguje wyjątki, wolne zapytania do bazy i błędy API
- **LiveKit** — szczegółowe eventy Room (dołączenie, opuszczenie, disconnect) + webhook endpoint do monitorowania jakości połączeń wideo

### Konfiguracja

- **DEV vs PROD** — oddzielne instancje Application Insights. Błędy z dev nie mieszają się z produkcyjnymi — łatwiejszy debugging
- **Connection string w GitHub Secrets** — bezpieczne przechowywanie konfiguracji. Wcześniej string był hardkodowany w kodzie — potencjalne ryzyko bezpieczeństwa

* * *

## 7\. 🎨 Strona logowania — nowy wygląd

Strona logowania przeszła redesign:

- **Brand colors Therapy Support** — zielone akcenty, ciemne tło, logo w nagłówku — zamiast generycznych kolorów Tailwind. Pierwsze wrażenie po wejściu do aplikacji jest teraz spójne z resztą brandingu
- **Usunięte strony BetaTester** z aplikacji — rejestracja beta przeniesiona w całości na stronę marketingową (`aitherapy.support/betatester`). Mniej kodu w głównej aplikacji, jedno miejsce do zarządzania procesem onboardingu

* * *

## 8\. 👤 Formatowanie imion i nazwisk pacjentów

Nowy utility **`formatPatientName`** — centralna funkcja formatująca imię i nazwisko pacjenta w całej aplikacji:

- Spójne formatowanie: "Kowalski, Jan" / "Jan Kowalski" w zależności od kontekstu
- Zastosowane we wszystkich listach pacjentów, formularzach i nagłówkach profili
- **Usunięcie beta signup** z głównej aplikacji — kod rejestracji przeniesiony na stronę marketingową

* * *

## 9\. 🐛 Poprawki i hotfixy

### Transkrypcja

- **Zawsze async batch** — niezależnie od rozmiaru pliku, transkrypcja idzie teraz przez Azure Batch Transcription API. Wcześniej małe pliki szły synchronicznie, co czasem powodowało timeouty. Teraz jeden flow dla wszystkich plików
- **Hotfix: 401 na operacjach transkrypcji** — naprawiony problem z wygasłym tokenem autoryzacji przy długich transkrypcjach + usunięta **nieskończona pętla pollingu** (infinite polling loop), która zawieszała przeglądarkę gdy transkrypcja się nie powiodła
- **Usunięty `UPLOAD_TIMEOUT_MS`** z main — stała nie była eksportowana z `apiClient`, co łamało build na produkcji

### Pacjenci i sesje

- **Email opcjonalny** w `AddPatientModal` — formularz dodawania pacjenta nie wymaga już emaila. Spójność z backendem, który od zeszłego releasu akceptuje pacjentów bez emaila
- **Reschedule sesji z konfliktem** — terapeuta może teraz przełożyć sesję nawet gdy nowy termin koliduje z inną sesją, po jawnym potwierdzeniu w modalu (SCRUM-719, zgłosiła Joanna). Wcześniej system blokował przeniesienie bez wyjaśnienia

### Backend

- **Hotfix: DbContext concurrent operation** — naprawiony race condition w `ResolveChannelPreferencesAsync`. Gdy dwa requesty jednocześnie próbowały rozwiązać preferencje kanału komunikacji, Entity Framework rzucał wyjątek. Dodany `SemaphoreSlim` do synchronizacji dostępu

* * *

## 10\. 📋 Checklist QA

| Co sprawdzić | OK? |
|---|---|
| Embed: wejdź na `/embed/:slug` — widget rezerwacji się wyświetla | ⬜ |
| Embed: widoczne typy sesji (lista z profilu terapeuty) | ⬜ |
| Embed: logo TherapySupport w nagłówku, link do aitherapy.support | ⬜ |
| Embed: kompaktowy checkout — email+tel w rzędzie, notatki 1 linia | ⬜ |
| Embed: płatność Stripe otwiera się w nowym oknie (nie w iframe) | ⬜ |
| Embed: cookie banner i analytics ukryte | ⬜ |
| Embed: brak widgetu gdy brak Stripe Connect | ⬜ |
| Embed: przycisk w panelu admina `/admin/therapists` | ⬜ |
| Embed: lazy slug — istniejący terapeuta dostaje slug przy pierwszym wejściu | ⬜ |
| Formularz rezerwacji: data widoczna w headerze | ⬜ |
| Formularz rezerwacji: kolejność pól — typ → data → dane | ⬜ |
| Przypomnienie: edytowalne pola SMS i email w modalu | ⬜ |
| Przypomnienie: zapis szablonu na przyszłość | ⬜ |
| Przypomnienie: przycisk w profilu pacjenta | ⬜ |
| Przypomnienie: toast zamiast alert() przy błędzie | ⬜ |
| Kalendarz: sesja o 9:15 renderuje poprawnie w siatce | ⬜ |
| Kalendarz: time picker pokazuje sloty co 15 minut | ⬜ |
| Dashboard: "Wywiad wstępny" zamiast "Konsultacja wstępna" | ⬜ |
| Dashboard: licznik sesji w sekcji "Ten tydzień" | ⬜ |
| Login: nowy design z brand colors | ⬜ |
| Login: brak stron BetaTester w aplikacji | ⬜ |
| Transkrypcja: brak timeoutów na dużych plikach (async batch) | ⬜ |
| Transkrypcja: brak nieskończonego pollingu przy błędzie | ⬜ |
| Dodawanie pacjenta: email opcjonalny | ⬜ |
| Reschedule: przeniesienie sesji z konfliktem po potwierdzeniu | ⬜ |
| Finanse: sekcja TherapistFinance otwiera się bez błędu | ⬜ |
| Application Insights: błędy widoczne w Azure Portal (PROD) | ⬜ |

* * *

To był **kolejny intensywny sprint** — 30+ commitów w 3 tygodnie. Embed to dopiero początek — w następnym releasie planujemy rozszerzenie widgetu o dodatkowe opcje konfiguracji i personalizacji wyglądu.

_Artykuł przygotowany przez zespół Therapy Support_
