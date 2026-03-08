---
title: "Release Notes — 8 marca 2026"
description: "Ponad 200 commitów! Sesje wideo online (LiveKit), persistent recording, aplikacja mobilna, widget embed, chat AI ze streamingiem, branded emaile, drag & drop w kalendarzu, edytowalne przypomnienia finansowe i dziesiątki poprawek od całego zespołu."
pubDate: 2026-03-08
heroImage: "/images/blog/release-notes-8-marca-2026.png"
author: "Bartlomiej Glowacki"
category: "Inne"
tags: []
draft: false
---

To jest **największy release w historii Therapy Support** — ponad **200 commitów** od naszego ostatniego wydania 25 lutego. Zmieniło się praktycznie wszystko: od sesji wideo online, przez nagrywanie audio, po aplikację mobilną i chat AI. Poniżej pełny opis zmian.

💚 **Wielkie podziękowania** dla całego zespołu: **Martyny**, **Joanny**, **Bohdana**, **Ewy**, **Magdaleny**, **Jagody**, **Marty** i **Bartłomieja** — wasze zgłoszenia i testy kształtowały ten release!

* * *

## 1\. 🎥 Sesje wideo online — LiveKit Integration

To największa zmiana tego releasu. Therapy Support ma teraz **wbudowane sesje wideo** oparte na LiveKit — koniec z przekierowywaniem na Google Meet.

### Podstawy

- **Nowa trasa wideo** — sesja online otwiera się bezpośrednio w aplikacji, z kontrolkami kamery, mikrofonu i udostępniania ekranu (LiveKit SDK: `@livekit/components-react`, `livekit-client`)
- **Stały pokój wideo per pacjent** — każdy pacjent dostaje unikalny, permanentny pokój wideo. Nie trzeba generować linków na każdą sesję
- **Link zaproszeniowy dla pacjenta** — pacjent dołącza przez link z tokenem (`VideoInviteToken`) bez logowania. Przycisk "Dołącz" widoczny na dashboardzie pacjenta
- **API token** — endpoint `VideoInviteToken` wystawiony w therapist session detail API

### Typy spotkań

- **Nowy enum `SessionMeetingType`** — każda sesja ma teraz typ: "AITS Video" lub "Google Meet" + pole `MeetingLink`
- **Badge na liście pacjentów** — oddzielna kolumna z badge'em "AITS Video" lub "Google Meet", widoczne też w profilu
- **Selektor typu spotkania** — klikalny "Pokój Online" w ustawieniach + możliwość zmiany domyślnego typu
- **Migracja bazy** — pola `MeetingType`, `MeetingLink` i `VideoInviteToken` dodane do tabeli `Session`

### Naprawki LiveKit

- **Widoczne kontrolki** — dodany `data-lk-theme="default"` do `LiveKitRoom`, bez tego kontrolki audio/video były niewidoczne
- **Layout LiveKitRoom** — `absolute inset-0` container + `min-h-0` zamiast `overflow-hidden` — naprawiony problem z przyciętym paskiem kontrolnym
- **Nawigacja wstecz** — przycisk "wróć" w VideoSession używa teraz `history.back()` zamiast hardkodowanego `/sessions`
- **Tokeny JWT** — zastąpiono LiveKit SDK standardową generacją JWT (`cc2a7b04`) — prostsze, mniej zależności
- **Auto-zamknięcie modalu** — po zakończeniu nagrywania modal zamyka się automatycznie + odświeżenie danych sesji
- **VITE_LIVEKIT_URL** — poprawiony endpoint LiveKit Cloud + dodany build argument do workflow dev deployment
- **meetingType integer** — backend przyjmuje integer, frontend wysyłał string — naprawione mapowanie w obie strony

### Link video w profilu terapeuty

- **Przycisk kopiowania** linku video dla pacjenta bezpośrednio w profilu terapeuty (`e060fb7b`)

* * *

## 2\. 🎙️ Persistent Recording — nagrywanie bez przerw (Martyna)

Seria commitów dedykowanych **Martynie** — nagrywanie sesji, które trwa nawet gdy terapeuta nawiguje po aplikacji.

### Jak działa persistent recording?

- **Nagrywanie trwa przy nawigacji** — terapeuta może otwierać inne zakładki, przeglądać notatki, sprawdzać profil pacjenta — nagrywanie nie przerywa się
- **Podpięcie pod przycisk Transcription** — `startPersistentRecording` uruchamiany bezpośrednio z przycisku transkrypcji w profilu sesji
- **Live transkrypcja widoczna od razu** — obszar transkrypcji pojawia się natychmiast po starcie nagrywania, nie trzeba czekać na koniec

### Backup audio

- **Równoległy backup MP3** — podczas nagrywania system tworzy równoległy plik MP3 jako backup. Jeśli realtime transkrypcja zawiedzie, plik audio jest dostępny do pobrania i ponownego przetworzenia
- **Alert przy przerwaniu** — wizualizacja przerwania nagrywania z komunikatem co się stało i co robić dalej
- **Upload audio z backupu** — backup WebM pomija walidację pustego transkryptu i transkrypcję — zapisuje tylko plik do pobrania
- **Backup upload tylko przy błędzie** — audio backup uploadowany jest wyłącznie gdy realtime transkrypcja nie powiodła się (przywrócenie diaryzacji)

### Pobieranie nagrania

- **Przycisk pobierania** — napis "24h" informuje że plik jest dostępny przez dobę + przycisk "X" do usunięcia (SCRUM-692, Bartłomiej)
- **Fix: przycisk znika** — naprawiony bug gdy przycisk pobierania znikał po nawigacji między sesjami (SCRUM-692, Bohdan)

* * *

## 3\. 📱 Aplikacja mobilna (MAUI)

Nowy **klient mobilny** dla terapeutów — nagrywanie sesji z telefonu.

### Funkcje

- **Nagrywanie na telefonie** — terapeuta otwiera aplikację, wybiera sesję, nagrywa — transkrypcja automatyczna
- **PIN lock** — zamiast pełnego logowania po wygaszeniu ekranu, szybki PIN
- **Refresh token flow** — sesja nie wygasa podczas długich nagrywań
- **Skip MFA dla mobile** — mobilna aplikacja pomija 2FA (sesje są chronione PINem)
- **Pull-to-refresh** — lista sesji odświeżana gestem
- **Close zamiast logout** — przycisk zamyka aplikację bez wylogowania (sesja trwa)
- **Upload status i pending badges** — per-session badge informuje o statusie uploadu

### Naprawa transkrypcji mobilnych

- **Append zamiast nadpisywanie** — mobilna transkrypcja **dopisuje** do istniejących notatek sesji zamiast tworzyć osobne rekordy
- **Async mobile transcription** — asynchroniczne przetwarzanie appends do istniejącego transkryptu
- **Token keep-alive** — zapobieganie auto-logout podczas nagrywania + fix stale token w audio upload
- **Idle timeout 120 min** — zwiększony z 30 do 120 minut dla długich sesji nagrywania

### Nagrywanie z telefonu

- **Direct-upload (SAS)** — nagrania uploadowane bezpośrednio do Azure Blob Storage przez SAS token
- **Przycisk pobierania dla MobileRecording** — oddzielny od desktopowego (SCRUM-692)
- **Lifecycle policy** — blob nie jest kasowany od razu po transkrypcji, lifecycle policy kasuje po 1 dniu

* * *

## 4\. 🤖 Chat AI — streaming, markdown i edytor promptu

Zupełnie nowy experience chatu AI w profilu pacjenta.

### Streaming i markdown

- **Streaming odpowiedzi** — chat AI wysyła odpowiedzi tokenami w czasie rzeczywistym, nie czekasz na pełną odpowiedź
- **Markdown rendering** — odpowiedzi AI formatowane z nagłówkami, listami, pogrubieniami
- **Inline chat** na profilu pacjenta — naprawa renderowania markdown

### Trigger modal (SCRUM-681, Joanna)

- **Persistent AI widget** zamiast trigger modalu — stały widget AI z licznikiem kontekstu, widoczny cały czas na profilu pacjenta
- **Notatki sesji i historia czatu** w kontekście AI — asystent AI widzi notatki z bieżącej sesji i historię czatu
- **Notatka z sesji brana pod uwagę** w analizie AI (SCRUM-676, Bartłomiej)
- **Gear icon** dla admin preview (PromptyAI) — widoczny tylko dla roli admin, nie dla zwykłego administratora (SCRUM-681)
- **Edytor promptu** — admin może edytować system prompt bezpośrednio z interfejsu chatu

### Przycisk mózgu (ABC)

- **Fix białego ekranu** po kliknięciu przycisku mózgu — brakowało tabulation do zakładki sesji
- **SessionStorage** — poprawka dispatch event + sessionStorage dla nawigacji w obu scenariuszach (direct + tab switch)
- **Auto-przejście** do zakładki Nagranie po zapisaniu transkryptu

* * *

## 5\. 🧩 Widget rezerwacji (Embed)

Terapeuta może teraz **osadzić formularz rezerwacji na swojej stronie internetowej** jako iframe — **12 commitów** poświęconych tej funkcji.

### Jak to działa?

1. W panelu terapeuty pojawia się **unikalny slug** (np. `jan-kowalski`) — generowany automatycznie, niezależny od profilu publicznego
2. Klikasz "Embed" — kopiujesz gotowy kod `<iframe>` do wklejenia
3. Pacjent widzi kalendarz, wybiera termin, typ sesji i płaci przez Stripe — bez opuszczania strony terapeuty

### Detale

- **Typy sesji** w formularzu (SCRUM-718, beta testerka)
- **Prawdziwe logo TherapySupport** w nagłówku (SCRUM-718, Magdalena)
- **Kompaktowy checkout** — email+tel w rzędzie, notatki w jednej linii
- **`lang=pl`** domyślnie w generowanym kodzie iframe
- **Stripe redirect przez `window.top`** — wyjście z iframe na stronę płatności
- **Cookie banner i Analytics ukryte** w trybie embed
- **Przycisk "Embed"** w panelu admin/therapists
- **EmbedGuard** — ochrona trasy + fix duplikatu powodującego build failure
- Embed dostępny **tylko z podpiętym Stripe Connect** + auto-slug

* * *

## 6\. 💰 Przypomnienia o zaległościach — edytowalne szablony

Nowy **FinanceReminderModal** — reużywalny komponent do wysyłania przypomnień finansowych.

- **Edytowalne pola SMS i email** — domyślny szablon, modyfikowalny przed wysłaniem
- **Zapis szablonów** — treść zapamiętywana na przyszłość
- **Przycisk w profilu pacjenta** — szybki dostęp bezpośrednio z profilu
- **Spójne kryteria** — preview i send używają tych samych kryteriów co dashboard finansowy
- **Toast zamiast `alert()`** — inline komunikaty zamiast natywnych alertów
- **Fix import AlertCircle** w TherapistFinance.tsx

* * *

## 7\. 📧 Branded emaile (SCRUM-354, Ewa)

Wszystkie emaile wysyłane z systemu mają teraz **profesjonalny design HTML**:

- Logo Therapy Support w nagłówku
- Spójne kolory brandingowe
- Responsywny layout — poprawne wyświetlanie na mobilnych klientach email
- Design system dla szablonów emailowych

* * *

## 8\. 📅 Kalendarz i sesje

### Pełne wsparcie kwadransów

- **`ensureFullHour`** — normalizacja godzin w UI
- **Time pickery** — sloty co 15 minut
- **Kalendarz tygodniowy** — poprawny rendering sesji o :15, :30, :45
- **AllowHalfHourSessions** — sloty co 15 min zamiast przycisków długości

### Drag & drop cross-week

- **Przeciąganie sesji między tygodniami** na siatce kalendarza (`09f469c5`)
- **Fix stref zrzutu** — cross-week drag zones poprawnie wykrywają drops

### Inne

- **"Konsultacja wstępna" → "Wywiad wstępny"** + licznik sesji na dashboardzie (SCRUM-636, Joanna)
- **Sesja odwołana na czas** nie wyświetla się jako "Nieopłacona" (SCRUM-712, Marta)
- **Profil publiczny terapeuty** pokazuje typy sesji w kalendarzu

* * *

## 9\. 🔧 Klasyfikacja typu sesji (SCRUM-688, Bohdan)

Seria poprawek do automatycznej klasyfikacji sesji przez AI:

- **Inline zamiast background queue** — klasyfikacja przy kliknięciu "Podsumowanie"
- **JsonSchema fix** — Azure wymaga wszystkich pól w `required` (naprawiony schemat)
- **Seeder nie aktualizował promptu** — naprawiona aktualizacja promptu klasyfikacji w DB
- **Poprawka znacznika czasu** transkrypcji przesuniętego o 1h (SCRUM-677, Bohdan)
- **ABC extraction prompt** — force update z `meaningOfThought` i `behavioralStrategy` (SCRUM-527, Jagoda)

* * *

## 10\. 🎙️ Nagrywanie i transkrypcja

### Język nagrywania

- **Wybór języka i liczby osób** w oknie nagrywania (`91d21cf2`)
- **Język zależny od UI** — pełne mapowanie locale → język transkrypcji
- **Domyślny pl-PL** — fallback gdy mapowanie nie znajdzie dopasowania
- **Selektory widoczne po błędzie** — język/osoby widoczne nawet gdy połączenie się nie udało

### Diaryzacja

- **Status diaryzacji** — nowy widok statusu dla transkrypcji z telefonu (`0c42f5d0`)

### Transkrypcja

- **Zawsze async batch** — niezależnie od rozmiaru pliku
- **Notification z session ID i patient name** — zlokalizowane powiadomienia
- **Status message** w obszarze transkrypcji — notyfikacja w stylu powiadomień
- **Audio processing indicator** — wskaźnik na kafelkach sesji i w formularzu transkrypcji
- **Upload pliku audio/transkrypcji** do sesji historycznej (Martyna)
- **Transkrypcja nie pojawia się** — fix brakującego pola tekstowego po zakończeniu przetwarzania

### Hotfixy

- **401 na transkrypcji** — odświeżenie tokenu przed połączeniem SignalR + fix nieskończonej pętli pollingu
- **Token expiry prevention** — proactive refresh dla długich nagrywań
- **DbContext concurrent operation** — SemaphoreSlim w `ResolveChannelPreferencesAsync`
- **UPLOAD_TIMEOUT_MS** — usunięty brakujący eksport z apiClient
- **`HasProcessingTranscriptions`** — brakujący parametr w konstruktorach `SessionListItemDto`

* * *

## 11\. 📊 Application Insights (SCRUM-577)

- **Azure Application Insights** — monitoring frontend + backend + LiveKit
- **DEV vs PROD** — oddzielne instancje
- **Connection string w GitHub Secrets** — bezpieczne przechowywanie
- **LiveKit monitoring** — eventy Room + webhook endpoint (Joanna)

* * *

## 12\. 🎨 UI i interfejs

### Strona logowania

- **Brand colors** — nowy design z kolorami Therapy Support
- **Usunięte strony BetaTester** — przeniesione na stronę marketingową

### Dashboard

- **Widoczne ramki** na panelach Revenue, Sessions, Notes (`fc43a3f7`)
- **sessionsCount** — poprawna pluralizacja we wszystkich 7 językach + interpolacja `{{count}}`
- **Liczba + jednostka** na dashboardzie (SCRUM-698, Bohdan)
- **Licznik sesji** na widoku "Ten tydzień"

### Profil pacjenta

- **Reorganizacja przycisków** w profilu pacjenta (widok terapeuty) — logiczniejszy układ
- **Reorganizacja przycisków video** na dashboardzie pacjenta
- **formatPatientName** — centralna funkcja formatowania imion

### Przebudowa formularza rezerwacji

- **Data w headerze** — widoczna na stałe
- **Zmieniona kolejność pól** — typ → data → dane kontaktowe

### Inne

- **Przycisk Logout przywrócony** w przeglądarce zamiast niedziałającego Close (`862a4af9`)
- **FeatureGuard** — spójność AI + professional bez ograniczeń (SCRUM-693, Bohdan)
- **Brakujące tłumaczenia** — sessions.video, addSession.meetingType, therapist.subscription (SCRUM-702, Ewa)
- **Tłumaczenia isOnline** w SK/CA/RU/UK/LT (SCRUM-701, Ewa)
- **Reschedule sesji z konfliktem** po potwierdzeniu (SCRUM-719, Joanna)
- **CalDAV REPORT** — użycie metody REPORT zamiast POST (SCRUM-705, Bartłomiej)
- **Chrome crash prevention** — performance fixes
- **Usunięty stary widok SessionDetails** — przekierowanie `/sessions/:id` na profil pacjenta
- **Email opcjonalny** w AddPatientModal

* * *

## 13\. 📋 Checklist QA

| Co sprawdzić | OK? |
|---|---|
| **Wideo** | |
| Sesja wideo: dołączenie przez LiveKit, kamera + mikrofon działają | ⬜ |
| Sesja wideo: pacjent dołącza przez link zaproszeniowy (bez logowania) | ⬜ |
| Badge "AITS Video" / "Google Meet" na liście pacjentów | ⬜ |
| Selektor typu spotkania w ustawieniach | ⬜ |
| Kontrolki LiveKit widoczne (play/pause/mute) | ⬜ |
| Przycisk kopiowania linku video w profilu terapeuty | ⬜ |
| **Nagrywanie** | |
| Persistent recording: nagrywanie trwa przy nawigacji po app | ⬜ |
| Backup MP3: plik dostępny do pobrania po błędzie transkrypcji | ⬜ |
| Przycisk pobierania nagrania z info "24h" | ⬜ |
| Live transkrypcja widoczna od razu przy starcie | ⬜ |
| Wybór języka i liczby osób w oknie nagrywania | ⬜ |
| Status diaryzacji widoczny | ⬜ |
| **Mobile** | |
| Nagrywanie z telefonu — upload i transkrypcja | ⬜ |
| PIN lock zamiast pełnego logowania | ⬜ |
| Pull-to-refresh na liście sesji | ⬜ |
| Transkrypcja mobilna dopisuje do notatek (nie nadpisuje) | ⬜ |
| **Chat AI** | |
| Streaming odpowiedzi AI w chacie | ⬜ |
| Markdown w odpowiedziach (nagłówki, listy, bold) | ⬜ |
| Kontekst AI: notatki sesji + historia czatu | ⬜ |
| Gear icon edytora promptu (tylko admin) | ⬜ |
| Przycisk mózgu (ABC): brak białego ekranu | ⬜ |
| **Embed** | |
| Widget rezerwacji na `/embed/:slug` | ⬜ |
| Typy sesji widoczne w formularzu embed | ⬜ |
| Stripe redirect wychodzi z iframe | ⬜ |
| Przycisk Embed w panelu admina | ⬜ |
| **Finanse** | |
| Edytowalne pola SMS/email w modalu przypomnienia | ⬜ |
| Toast zamiast alert() przy błędzie | ⬜ |
| Przycisk przypomnienia w profilu pacjenta | ⬜ |
| **Kalendarz** | |
| Sesja o 9:15 renderuje poprawnie | ⬜ |
| Drag & drop sesji między tygodniami | ⬜ |
| "Wywiad wstępny" zamiast "Konsultacja wstępna" | ⬜ |
| Sesja odwołana na czas ≠ "Nieopłacona" | ⬜ |
| **Transkrypcja** | |
| Async batch: brak timeoutów na dużych plikach | ⬜ |
| Brak nieskończonego pollingu przy błędzie | ⬜ |
| Audio processing indicator na kafelkach sesji | ⬜ |
| **Inne** | |
| Login: nowy design z brand colors | ⬜ |
| Branded emaile HTML (logo + kolory) | ⬜ |
| Ramki na panelach dashboard | ⬜ |
| Application Insights: błędy widoczne w Azure Portal | ⬜ |
| CalDAV REPORT: synchronizacja z kalendarzem zewnętrznym | ⬜ |

* * *

To był **absolutnie rekordowy sprint** — ponad 200 commitów, 13 dużych obszarów zmian, nowy klient mobilny, wbudowane wideo i kompletnie nowy experience nagrywania. Dziękujemy całemu zespołowi!

_Artykuł przygotowany przez zespół Therapy Support_
