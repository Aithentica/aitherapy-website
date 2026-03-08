---
title: "Release Notes — 8 marca 2026"
description: "Widget rezerwacji do osadzenia na stronie terapeuty, edytowalne przypomnienia o zaległościach, pełne wsparcie kwadransów w kalendarzu, monitoring Application Insights i wiele poprawek zgłoszonych przez Magdalenę i Joannę."
pubDate: 2026-03-08
heroImage: "/images/blog/release-notes-8-marca-2026.png"
author: "Bartlomiej Glowacki"
category: "Inne"
tags: []
draft: false
---

W tym sprincie skupiliśmy się na jednej dużej funkcji, na którą czekaliście od dawna: **widget rezerwacji, który możecie osadzić na własnej stronie internetowej**. Poza tym — nowy moduł przypomnień finansowych, pełne wsparcie kwadransów w kalendarzu i stabilizacja monitoringu.

💚 **Dziękujemy** naszym testerkom: **Magdalenie** i **Joannie** — wasze zgłoszenia napędzały ten sprint!

* * *

## 1\. 🧩 Widget rezerwacji (Embed) — Twój kalendarz na Twojej stronie

To największa nowość tego releasu. Terapeuta może teraz **osadzić formularz rezerwacji na swojej stronie internetowej** — jako iframe, który wygląda jak natywna część strony.

### Jak to działa?

1. W panelu terapeuty pojawia się **unikalny slug** (np. `jan-kowalski`) — generowany automatycznie, niezależny od profilu publicznego
2. Klikasz "Embed" — kopiujesz gotowy kod `<iframe>` do wklejenia na swoją stronę
3. Pacjent widzi Twój kalendarz, wybiera termin, typ sesji i płaci przez Stripe — bez opuszczania Twojej strony

### Co zawiera widget?

- **Typy sesji** — pacjent wybiera z listy typów sesji, które ustawiłeś w swoim profilu (SCRUM-718)
- **Branding Therapy Support** — nagłówek z logo, link do aitherapy.support
- **Kompaktowy checkout** — email i telefon w jednym rzędzie, notatki w jednej linii, podsumowanie zamówienia w jednej linii
- **Domyślny język PL** — embed automatycznie ustawia polski jako język interfejsu
- **Płatności Stripe** — redirect przez `window.top`, żeby wyjść z iframe'a na stronę Stripe

### Dostępność

Embed jest dostępny **tylko dla terapeutów z podpiętym Stripe Connect**. Jeśli nie masz jeszcze konta Stripe — widget nie pojawi się w Twoim panelu. Slug generowany jest automatycznie (lazy) przy pierwszym wejściu do ustawień embed.

### Szczegóły techniczne

- Cookie banner i Analytics są ukryte w trybie embed — czysty interfejs bez zbędnych elementów
- Przycisk "Embed" dostępny też w panelu admina (`/admin/therapists`)
- Logo w nagłówku embedu linkuje do aitherapy.support (SCRUM-718, zgłosiła Magdalena)

* * *

## 2\. 💰 Przypomnienia o zaległościach — edytowalne szablony

Nowy **FinanceReminderModal** pozwala wysłać przypomnienie o zaległościach finansowych do pacjenta — przez email lub SMS.

### Co nowego?

- **Edytowalne pola** — możesz zmienić treść wiadomości SMS i email przed wysłaniem
- **Zapis szablonów** — Twoja zmodyfikowana treść jest zapamiętywana na przyszłość
- **Przycisk w profilu pacjenta** — szybki dostęp do modalu przypomnienia bezpośrednio z profilu
- **Spójne kryteria** — podgląd (preview) i wysyłka (send) używają tych samych kryteriów co dashboard finansowy
- **Toast zamiast alert()** — koniec z brzydkimi alertami przeglądarki, błędy wyświetlają się inline w modalu

* * *

## 3\. ⏱️ Pełne wsparcie kwadransów w UI

Kalendarz i formularze sesji obsługują teraz **sesje zaczynające się o dowolnym kwadransie** (9:00, 9:15, 9:30, 9:45).

### Co się zmieniło?

- **ensureFullHour** — nowa funkcja normalizująca godziny w interfejsie
- **Time pickery** — wszystkie selektory godzin pokazują kwadransowe sloty
- **Kalendarz tygodniowy** — siatka poprawnie renderuje sesje zaczynające się o :15, :30, :45
- Poprawka nazewnictwa: **"Konsultacja wstępna"** zmieniona na **"Wywiad wstępny"** + licznik sesji na dashboardzie (SCRUM-636, zgłosiła Joanna)

* * *

## 4\. 📊 Application Insights — monitoring produkcji

Wdrożyliśmy **Azure Application Insights** do monitorowania błędów na froncie i backendzie.

- **DEV vs PROD** — oddzielne instancje Application Insights dla środowiska deweloperskiego i produkcyjnego (SCRUM-577)
- **Connection string w GitHub Secrets** — bezpieczne przechowywanie konfiguracji, bez hardkodowania w kodzie
- **Frontend + Backend + LiveKit** — monitoring obejmuje całą ścieżkę: od kliknięcia użytkownika, przez API, po zdarzenia pokoju LiveKit

* * *

## 5\. 🎨 Strona logowania — nowy wygląd

Strona logowania przeszła redesign:

- **Brand colors** — kolory Therapy Support zamiast domyślnych Tailwind
- **Usunięte strony BetaTester** z aplikacji — rejestracja beta przeniesiona w całości na stronę marketingową (aitherapy.support/betatester)

* * *

## 6\. 🐛 Poprawki i stabilizacja

- **Transkrypcja zawsze async** — niezależnie od rozmiaru pliku, transkrypcja idzie przez batch API. Koniec z timeoutami na dużych plikach
- **Email opcjonalny** w formularzu dodawania pacjenta — spójność z backendem
- **Hotfix: 401 na transkrypcji** — naprawiony problem z autoryzacją i nieskończoną pętlą pollingu
- **Hotfix: DbContext concurrent operation** — naprawiony race condition w `ResolveChannelPreferencesAsync`
- **Reschedule sesji z konfliktem** — terapeuta może teraz przełożyć sesję nawet gdy koliduje z inną, po potwierdzeniu (SCRUM-719, zgłosiła Joanna)

* * *

## 7\. 📋 Checklist QA

| Co sprawdzić | OK? |
|---|---|
| Embed: widget rezerwacji na `/embed/:slug` | ⬜ |
| Embed: typy sesji widoczne w formularzu | ⬜ |
| Embed: logo TherapySupport w nagłówku | ⬜ |
| Embed: płatność Stripe otwiera się w nowym oknie | ⬜ |
| Embed: przycisk w panelu admina | ⬜ |
| Przypomnienie: edytowalne pola SMS i email | ⬜ |
| Przypomnienie: toast zamiast alert() | ⬜ |
| Kalendarz: sesje o :15, :30, :45 renderują poprawnie | ⬜ |
| Wywiad wstępny: zmieniona nazwa z "Konsultacja wstępna" | ⬜ |
| Login: nowy design z brand colors | ⬜ |
| Transkrypcja: brak timeoutów na dużych plikach | ⬜ |
| Reschedule: przeniesienie sesji z konfliktem po potwierdzeniu | ⬜ |

* * *

Dziękujemy za kolejny intensywny sprint! Embed to dopiero początek — w następnym releasie planujemy rozszerzenie widgetu o dodatkowe opcje konfiguracji.

_Artykuł przygotowany przez zespół Therapy Support_
