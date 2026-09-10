# Track My Bus — UI & Product Improvement Plan

## Purpose and scope

This is an implementation blueprint for Track My Bus, a mobile-first MSRTC (Maharashtra State Road Transport Corporation) companion for commuters in the Nashik/Yeola corridor. It is based on repository review and the supplied mobile screens. It recommends product and design changes only; it does not authorize changing the current application as part of this plan.

The product promise should be: **“Know whether to leave, wait, or take another bus.”** Everything on the primary journey should reduce uncertainty at a stop—not merely expose telemetry.


### Complementary design notes

The existing interface is already a polished prototype, so the redesign should be driven primarily by **subtraction and hierarchy**, not by replacing the entire visual language. Preserve what is working while removing visual competition.

- **Subtract before adding:** reduce unnecessary cards, pills, badges, rounded containers, gradients, glass effects, decorative status treatments, and competing CTAs. The goal is not to make the app “prettier”; it is to make the important information easier to see.
- **One visual hero per screen:** each major screen should have one dominant decision surface (for example, the next arrival on Home or the map on Tracking), one clear primary action, and deliberately quieter secondary information.
- **Preserve the strongest existing foundations:** the blue/green transit semantics, typography, route origin→destination visualization, live-map context, QR workflow, nearby-stop concept, multilingual foundation, and accessibility work are valuable and should evolve rather than be discarded.
- **Use Apple HIG as a usability reference, not as the product's visual identity:** retain useful principles such as hierarchy, accessibility, touch targets, motion discipline, and clarity, while avoiding an interface that feels like an iOS/Apple clone. The product should have its own recognizable local-transit character.
- **Redesign in controlled stages:** do not perform a large architectural rewrite merely to achieve the visual redesign. Improve the existing screens first, validate the new hierarchy and interaction patterns, and refactor architecture where the resulting UI and feature set genuinely require it.
- **Keep the core question visible:** the design quality bar should be whether a passenger can quickly answer **“What bus can I actually take, and should I leave now?”** The interface should feel like a calm, trustworthy transit instrument—not a dashboard made from interchangeable cards.


## Current product, users, and workflows

### What exists today

The app lets a commuter:

1. Start from a splash screen, select English/Marathi/Hindi, and enter Home or QR scan.
2. Search a small local dataset of stops and buses from Home; see one nearby stop and its next bus.
3. Browse nearby stops, filter them by radius/name, and open a live-map context.
4. Scan a physical bus-stop QR code (camera or uploaded image) to identify a stop and view arrivals.
5. Browse and filter route cards; expand stops/live buses and open a simulated Leaflet tracking map.
6. Read a stop’s timetable, facilities, contacts, and community reports; favorite stops; submit/verify reports.
7. Use an account-shaped experience, accessibility settings, voice announcements, helplines, and mock booking/pass screens.

### Primary users and jobs

| User | Primary job | Current support | Main gap |
|---|---|---|---|
| Daily commuter | Know the next bus at habitual stops | Favorites, nearby card, live map | No reliable alert workflow or “leave now” decision |
| Occasional/rural traveler | Find the right stop/route and transfer | Search, routes, QR, a basic planner | Planner invents a fixed result and lacks origin, time, transfers, confidence |
| Passenger already waiting | Know if a specific bus is truly coming | QR, ETA, tracking, reports | GPS recency/confidence and service-change messaging are unclear |
| Marathi/Hindi-first or older user | Use the service with low digital confidence | Language controls, large text, contrast, voice | Mixed-language UI, small labels, weak screen-reader/dialog behavior |
| MSRTC operations staff | Understand service health | Hidden admin view and mock KPIs | Not a separate authenticated operational product; data is static |

### Current technical architecture

| Area | Current implementation | Consequence for the next agent |
|---|---|---|
| App shell | One static `index.html` containing all screen markup and modals | Easy to prototype, difficult to maintain/test as screens and states grow |
| UI logic | One ~190 KB imperative `app.js`, direct DOM queries, template-string `innerHTML`, global `window.WMB` helpers | Rendering, business rules, side effects, and navigation need separation before feature growth |
| Data | One ~895 KB browser-global `SMART_ST_DATA` in `data.js` | All journeys work against bundled mock data; no source, cache policy, or freshness contract |
| Persistence | `localStorage` for favorite stops, last viewed stop, mock account, feedback and display preferences | Not cross-device, not secure for credentials, and insufficient for alerts/reports |
| Mapping | Leaflet loaded from unpinned CDN with public OSM/Esri tiles; simulated bus movement via interval | Useful prototype visual, but live GPS and tile/network reliability must be engineered |
| QR | Camera via `getUserMedia`, BarcodeDetector/jsQR fallback, image upload | Good progressive fallback; needs permission-denied/help/error states |
| Network | `navigator.onLine` only; a banner claims offline mode | No service worker, cache manifest, queued writes, or actual offline capability |
| External assets | Leaflet and jsQR are CDN scripts; Google font is CSS-imported | Startup and critical routes fail or degrade on weak networks; version integrity is weak |

There is no package manifest, automated test suite, build pipeline, service worker, backend/API client, or route-aware URL/history behavior in the reviewed files. Treat the current app as a high-fidelity front-end prototype, not an operational transit system.

## What is already good — preserve it

- The mobile information cards are highly scannable. Route code, direction, live/on-time status, ETA, distance, and action buttons are generally grouped well.
- QR scanning is a meaningful local affordance for a physical-stop product, with both camera and upload fallback.
- Nearby-stop cards turn location into a practical next action; this is more useful than a generic map landing page.
- The live map has an intuitive visual route, “next stop” banner, follow/fit/layer controls, and telemetry summary.
- The route directory exposes corridor structure, stop count, duration, frequency, services, and active buses—excellent raw decision inputs.
- Marathi/Hindi data support, Noto Devanagari, voice output, large text, dark mode and high-contrast intent are unusually strong foundations for this audience.
- Community reports have expiry and verification cues, which is the right trust direction.
- The design has a consistent rounded-card, blue-action, green-live-status vocabulary and a recognizable red bus-marker logo.

## Part 1 — Existing UI/UX improvement backlog

Priorities are P0 (essential), P1 (high value), P2 (polish). “Files” identify likely implementation touchpoints, not required file names after a refactor.

| Priority | Current problem and why it matters | Recommended improvement | Expected benefit | Relevant files/components |
|---|---|---|---|---|
| P0 | Home’s top search, route search, nearby search, stop search, and planner all use different labels/behaviors. Home gives mixed result types, while Planner only accepts a destination and returns hard-coded-looking options. Users cannot form a reliable trip request. | Establish one reusable transit search pattern: **From** defaults to “Current location/selected stop”; **To** is required; recent/favorite places and type-ahead results include type, district and Marathi name. Keep a compact “Search stops, routes, places” variant only for exploration. | Makes the core task understandable, reduces wrong-stop selection. | `index.html` Home/Planner/Routes/Nearby inputs; `app.js` `setupJourneyPlanner`, `setupStopSearch`, `setupHomeFeatures`; `data.js` stop/route indices |
| P0 | Live labels imply operational certainty (“Live GPS”, exact minutes, 100% GPS tracked), but buses are simulated and no timestamp/source quality is shown. This is potentially harmful in a transit product. | Add a universal data-freshness model: `Updated 32 sec ago`, source, GPS age, accuracy/estimated label, last known location, and an explicit stale/offline state. Never show a minute ETA as live after a defined freshness threshold. | Trustworthy decisions and safer expectation-setting. | `app.js` tracking simulation/render functions, `data.js` telemetry schema, Home/Nearby/Routes/Tracking templates |
| P0 | “Offline Mode Active” only toggles with `navigator.onLine`; maps/CDN/data and write actions do not actually work offline. | Until real offline support ships, change wording to “You’re offline—showing saved information” and disable unsupported actions. Then implement a service worker, versioned local cache, stale timestamp, downloadable stop/route packs, and queued reports. | Prevents a false promise; useful service in poor rural connectivity. | `app.js` `setupNetworkStatus`; new service worker/cache module; `index.html` external assets |
| P0 | Bottom navigation has five equal items, but “Live Map” opens a default bus rather than the user’s selected context; Planner is labeled with a search icon; routes and nearby stops are hidden behind Home/drawer. The secondary side drawer duplicates navigation. | Use five intentional destinations: Home, Plan, Nearby, Scan QR, Account. Make Live Tracking a contextual full-screen flow launched from a bus/stop. Move Routes into Plan/Search results. Remove duplicate drawer navigation or make it utility-only. | Clear mental model; users start from their goal rather than a generic map. | `index.html` `.bottom-nav`, side drawer; `app.js` `navigateTo`, event setup |
| P0 | The header persists across all contexts, consuming vertical space and creating no contextual back behavior. Screens such as route detail, nearby, QR and live tracking need orientation and exit paths. | Adopt a compact app bar: Home shows brand + language/account utility; child screens show Back, contextual title, and only relevant actions. On tracking, use an overlay/back button over the map. | More usable on narrow phones and clearer navigation hierarchy. | `index.html` app header and screen markup; `styles.css` header/layout |
| P0 | Journey Planner is an empty state until typing and then generates the same direct/connecting results with fixed fare/time. It can produce impossible advice. | Do not present a planner as live until it is backed by schedule/pathfinding data. Near term: call it “Find a route” and return only validated corridor matches. Production: multi-leg pathfinding with timetable + real-time overlays, explicit transfer stop/wait/walk/fare assumptions, no-result recovery. | Avoids misinformation; turns the feature into a meaningful planning tool. | `app.js` `setupJourneyPlanner`; data/API contract; `index.html` `planner-view` |
| P0 | Booking, tickets, pass, account, and admin surfaces look actionable but use hard-coded data or local mock state. Sign-in stores a credential-shaped object in `localStorage`. | Gate each behind a clearly labeled prototype/demo state or remove it from commuter navigation until official integrations, identity, security, and support ownership exist. Never store passwords/PINs client-side. Separate staff admin from the commuter app entirely. | Prevents unsafe/false transactional expectations and scope creep. | `index.html` ticket/pass/auth/admin modals/views; `app.js` auth/portal handlers; `data.js` |
| P1 | The home screen leads with a broad search then a single nearby card, followed by an oversized grid of “Quick actions” and “Support & utilities.” The first useful arrival can sit below the fold. | Make “Your next bus” the first decision card when location/favorites are known. Show two favorite/nearby stops with next arrival, then a single “More” entry. Demote feedback/grievance/helpline/settings to Account/Help. | Faster daily commute flow and less visual clutter. | `index.html` Home; `app.js` `renderHomeDashboard`; Home CSS |
| P1 | Visual hierarchy competes: large blue hero panels, many outlined chips, rounded white cards, status pills, icon tiles, gradients, and colored icon boxes appear in one viewport. Screenshots show an attractive but busy prototype. | Limit each screen to one primary surface (map or decision card), one primary CTA, and status color only for actual state. Standardize card elevation and remove decorative blue gradient hero cards unless they carry a decision. | More credible, calmer, easier-to-scan interface. | `styles.css` token/component blocks; all HTML screen templates |
| P1 | The visual language calls itself “Apple HIG” yet uses a generic system-blue/white card treatment and inconsistent brand crimson usage. “Track My Bus” lacks a distinctive Maharashtra/MSRTC identity beyond logo/text. | Use the proposed “Transit Signal” design direction below: MSRTC vermilion for identity/urgent service notices; deep indigo for navigation/action; warm paper background; state colors reserved for status. Avoid copying iOS visual conventions verbatim. | Recognizable, less template-like product identity. | `styles.css` root tokens, header, card/button/badge styles; logo assets |
| P1 | Typography has some 10.5–12 px navigation/support text, condensed labels, and long stop names that wrap abruptly. Devanagari/English appear together without a clear hierarchy. | Set 14 px minimum for persistent controls, 16 px minimum body on mobile, 20 px minimum key ETA/bus name. Use tabular figures for time/distance. Keep a fixed two-line stop-name rule with ellipsis/title fallback; present transliteration/Marathi as a purposeful secondary line. | Better legibility for outdoor, older, and multilingual use. | `styles.css` typography/nav/badge rules; dynamic card templates |
| P1 | CSS has colors embedded in SVG attributes and many inline styles/templates, despite a token system. Repeated patterns drift and theme support becomes incomplete. | Centralize semantic tokens and component classes; use `currentColor` SVGs; eliminate inline presentational styles in new/changed screens; add theme QA tokens for map and status states. | Consistency, maintainability, reliable dark/high contrast modes. | `styles.css`, all inline `style=` in `index.html`, `app.js` template strings |
| P1 | The QR experience starts a camera automatically but does not clearly explain permission, camera unavailable, unsupported torch, QR-not-recognized, or manual stop-code recovery. Its large black viewport dominates before intent is confirmed. | Add permission preflight with “Allow camera” CTA, fallback hierarchy (scan / upload / enter stop code / browse nearby), a real scan target label, processing indicator, and recoverable error cards. Stop camera on background/route change. | Higher scanner completion in real-world conditions. | `app.js` `startCameraScan`, `toggleTorch`, upload handlers; `scanner-view`; scanner CSS |
| P1 | Nearby Stops says “real-time GPS distance” even when a location fallback/mock location may be used. The results have duplicate distance/walk/status elements and no permission failure state. | Show `Using your location` only after consent; otherwise offer city/stop selection. Clearly distinguish straight-line and walk estimates. Include loading skeleton, denied/no-GPS/low-accuracy states, retry, and a “Set location manually” link. | Honest location behavior and graceful recovery. | `app.js` `renderNearbyBusStops`, `renderNearbyStopsCards`; nearby views/CSS |
| P1 | Live tracking presents speed, distance, ETA, GPS signal, a next-stop banner, previous/current/next-stop card, and full timeline simultaneously. On a phone this duplicates information and pushes the action below the fold. | Make tracking a map-first sheet: current bus + destination, next-stop ETA and freshness at top; bottom sheet with Stops, Details, and Alerts tabs. Collapse raw speed/signal into Details. Keep map controls under one accessible control. | Faster comprehension while waiting. | `tracking-view`, `renderTrackingScreen`, Leaflet controls, responsive CSS |
| P1 | Route cards are information-rich but very tall; description, bilingual title, chip sets, route visual, metrics, service pills, next bus and three CTAs compete. | Use a summary card (route code, origin→destination, next departure/ETA, service health) and a dedicated route detail screen. Make “View route” the card tap; retain Track only when a bus is live. | Better density and one clear action. | `app.js` `renderRoutesCards`; route card CSS; new route-detail view |
| P1 | Filters use horizontal chips without an indication that they scroll, count updates, reset option, or no-results suggestion. | Make chips horizontally scrollable with fade/scroll affordance; announce active filter/count; include clear filters and suggestions for no matches. | Discoverable filtering and fewer dead ends. | Nearby/Route filter markup and setup functions/CSS |
| P1 | Toasts are visual-only DOM messages with no evident ARIA live region; modal open/close only toggles a class. Focus is not trapped or restored, Escape/backdrop behavior and semantics are inconsistent. | Establish accessible dialog primitives: `role=dialog`, `aria-modal`, labelled title, initial focus, focus trap, Escape, restore trigger focus, scroll lock, and polite/assertive live regions. Use native buttons/labels and visible keyboard focus. | Functional assistive technology support and fewer accidental actions. | `app.js` `openModal`, `closeModal`, `showToast`; modal markup/CSS |
| P1 | Language selection translates only marked strings; many labels/modal options/templates remain English. Language choice does not appear persisted. | Audit every user-visible string, including generated content, date/time, number formatting, empty/error text, aria-labels and validation. Persist locale, use `Intl`, and test Marathi/Hindi overflow. | A genuinely multilingual rather than partially translated experience. | `data.js` i18n, `app.js` render templates, `index.html` literals |
| P1 | Status relies on red/green dots and light badge fills; some secondary gray text is low contrast. “Live”, “On time”, “Moving”, “GPS” are not consistently encoded. | Define a status component with icon + text + color, AA contrast in light/dark/high-contrast, and a semantic taxonomy: Live, Estimated, Scheduled, Delayed, Cancelled, Stale. | Accessibility and consistent passenger expectations. | CSS tokens/badge components; all arrival/tracking/route templates |
| P2 | Loading behavior is generally a blank card/container; only camera/map may visibly change. | Add skeletons for cards/list/map, a pending state on submit buttons, last-content retention on refresh, and no-layout-shift sizing. | Perceived performance and confidence on slow networks. | Dynamic renderers across `app.js`; shared CSS |
| P2 | Empty and error wording is generic (“No nearby bus stops found”), and never tells users what to do next. | Each empty/error state needs a reason, recovery CTA, and preserved context: e.g., `No live arrivals at Yeola yet. See timetable · Report a sighting · Try another stop.` | Users recover instead of abandoning. | Nearby, route, planner, favorites, reports, scanner; `app.js` render functions |
| P2 | Animations are a uniform screen fade/slide; map/bus motion is synthetic and may imply accuracy. | Keep motion functional: 150–200 ms navigation/sheet transitions, status transition only on value changes, no pulsing “live” decorative motion. Honor reduced motion (already started). | More polished, less misleading, calmer. | `styles.css` keyframes/transitions; tracking renderer |
| P2 | Desktop behavior only expands max width and changes tracking to two columns at 1024 px. Other desktop pages retain mobile card stacks and sticky mobile bottom navigation. | At ≥1024px use a responsive shell: left navigation rail, max readable content column, route list/detail split-pane, persistent filters, larger map/detached inspector. Keep controls keyboard operable and avoid a fake mobile canvas. | Product feels intentionally designed on desktop/tablet. | `styles.css` desktop media query; navigation and views |

## Interaction and state standards for implementation

Implement these as shared primitives before adding more screens:

| Situation | Required behavior |
|---|---|
| Initial loading | Skeleton matching final layout; announce “Loading arrivals for [stop]”; do not display fabricated defaults |
| Refreshing | Keep previous results, show compact refreshing indicator and timestamp; do not blank map/list |
| No data | Explain scope and freshness; show schedule/favorite/search alternatives |
| GPS permission denied | Do not repeatedly prompt; offer manual place/stop selection and browser settings help |
| GPS stale/inaccurate | State `Location may be inaccurate` and suppress misleading walk-time precision |
| Live feed delayed | Change all affected labels to Estimated/Last known, timestamp them, offer timetable fallback |
| Network offline | Show saved data’s timestamp and cache scope; disable or queue writes with explicit consent/status |
| Submit report/feedback | Validate locally, disable duplicate submit, confirm queued/sent state, permit undo/edit where possible |
| Destructive action | Confirm remove favorite/sign out, then announce outcome with an undo where feasible |
| Form validation | Inline field error linked through `aria-describedby`; retain entered values; never rely only on toast |

## Part 2 — New feature discovery

### Recommended features

| Feature | User problem | Value | UX and UI | Technical considerations | Priority / complexity / recommendation |
|---|---|---|---|---|---|
| **Reliable arrival confidence** | An ETA without source or freshness does not tell a passenger whether to trust it. | Core differentiator for a live bus product. | Every arrival shows minutes, `Live/Estimated/Scheduled`, last update, and a confidence explanation. Tap opens compact details: last known position, next stop, service alerts. | Backend telemetry ingestion, timestamped positions, ETA engine, freshness thresholds, shared status model; replace simulation. | Critical / High / **Strongly recommend** |
| **Stop watch / leave-now alerts** | Daily commuters must repeatedly open the app and mentally judge when to leave. | Directly saves time and reduces missed buses. | On a stop/bus card, “Watch this bus.” Choose milestones: 15 min, 10 min, 5 min, approaching, delayed/cancelled; show active watches on Home. Request notification permission only after the user chooses a useful alert. | Auth optional for device-only; push subscription, background jobs, dedupe/rate limit, notification deep links, consent/preferences, real-time feed. | High / High / **Strongly recommend after telemetry** |
| **Personal commute shortcuts** | Home treats first-time and daily users alike. | Makes the product much faster after one or two visits. | “Morning commute” and “Saved stops” cards surface next 1–2 relevant arrivals, a current commute banner, and editable default origin/destination. | Local preferences first; authenticated sync later. Privacy controls and deletion. | High / Medium / **Strongly recommend** |
| **Validated route planner** | Travelers need origin-to-destination advice, including transfers, not a destination field and generic sample card. | Expands the product beyond stop tracking without diluting the core. | From/To/when form; results rank direct then transfer options. Each has depart/arrive, transfer location/wait, walking, fare range, status confidence, and “track relevant bus.” No-results offers nearby origin/date/time adjustments. | Normalized stop/route/trip calendar data; graph/pathfinding; fare rules; real-time overlay; date/time/timezone; robust API. | High / High / **Strongly recommend when schedule data is available** |
| **Service alerts at route/stop level** | A bus may be delayed/cancelled/diverted; community reports alone are insufficient. | Avoids wasted travel and builds trust. | A slim, dismissible alert strip appears only when relevant to current stop/route/tracked bus. Alert detail states effect, alternatives, authority, publish/update/expiry times. | Official operations publishing workflow, severity model, affected entities, expiry/audit trail, moderation; accessible announcements. | High / High / **Strongly recommend** |
| **Downloadable local travel pack** | Rural network loss is expected, especially at stops and in transit. | Preserves timetable, QR-to-stop lookup, favorites, and basic directions. | “Available offline” label shows exactly what is saved. Offer “Download Nashik–Yeola area (x MB)” on Wi-Fi; settings displays last sync/manage storage. | Service worker, Cache Storage/IndexedDB, versioning, delta updates, quotas, cache expiry, map tile licensing/cost policy. | High / High / **Strongly recommend** |
| **Report trust and safety loop** | Passenger reports can be useful but can also mislead or expose people. | Makes crowdsourced information useful rather than noisy. | Report is tied to current stop/route/bus, has structured type, optional note, expiry, “I can confirm / no longer true,” report-abuse option, and visible confidence. Avoid public identity/contact details. | Auth/rate limiting/device abuse controls, moderation queue, privacy policy, expiry jobs, aggregate verification algorithm, audit logs. | Medium / High / **Strongly recommend if reports remain** |
| **Accessible stop mode** | A passenger at a physical pole needs a fast, readable arrival board. | Strong fit for QR and older/low-literacy users. | QR opens a distraction-free stop view: stop name, large next 3 arrivals, one-tap Listen, contrast/text controls, accessible facility/emergency details. Persist for quick return. | QR deep links and stop IDs, live/schedule API, screen-reader semantics, server-render/deep-link routing desirable. | Medium / Medium / **Strongly recommend** |
| **Issue-correcting data feedback** | Wrong stop location/route information can cause a real missed trip. Generic feedback hides the issue and lacks follow-up. | Improves data quality where it matters. | On a stop/route/bus detail, “Is this information wrong?” pre-fills context. Let user choose category, attach optional location/photo only with clear consent, receive tracking reference. | Moderation/admin workflow, media security/storage, privacy/legal review, status notifications. | Medium / High / **Consider** |
| **Search history and recovery** | People often revisit places or typo long Marathi/English names. | Speeds repeat use and reduces dead ends. | Search shows recents, favorites, popular stops; supports aliases, stop code, Marathi/Devanagari and English/transliterated matching. “Did you mean…” on no results. | Search index/normalization, analytics that respect privacy, local history opt-out. | Medium / Medium / **Strongly recommend** |

### Features that should not be added now

| Do not add | Why it is not justified now | Better focus |
|---|---|---|
| In-app ticket booking/payments | It needs official inventory, payment compliance, refunds, fraud support, seat allocation, legal ownership, and 24/7 service recovery. The current mock creates false expectations. | Deep-link to the official reservation system only after user confirms itinerary; later integrate through an official API. |
| Digital passes in this app | Pass issuance/verification requires a trusted identity and government/MSRTC entitlement system; a local mock “active pass” is unsafe. | Accurate eligibility/counter information and official portal handoff. |
| Social feed, chat, or broad gamification | Adds moderation and abuse risk without helping a passenger decide about a bus. | Narrow structured reports with confidence and expiry. |
| AI travel concierge | It would amplify data inaccuracies and be hard to explain across Marathi/Hindi. | Deterministic search and validated planning first. |
| Real-time crowding prediction | It requires ticketing/occupancy sensors and calibration. Self-reports alone would be noisy. | First show clearly sourced current bus type/capacity or optional bounded “crowded” reports. |
| Full staff dashboard inside commuter navigation | Operators and commuters have distinct permissions, data sensitivity, workflows, and support models. | Separate secure operations web app once a real feed exists. |
| Broad map-first discovery | Map tiles are expensive on weak connections and most commuters want arrival decisions, not exploratory mapping. | Map as context after a stop, route, or bus selection. |

## Part 3 — Modern product quality / category expectations

The product already has several expected patterns (location, search, route cards, map, QR, language choice). The critical missing expectations are not more visual widgets; they are reliability contracts:

1. **Truthful real-time:** timestamp, source, freshness, stale behavior, alert provenance, and fallbacks.
2. **A complete planning loop:** origin + destination + time → validated options → transfer guidance → track/watch the selected leg.
3. **Low-connectivity continuity:** clearly bounded cached information, download/sync control, and queued low-risk actions.
4. **Persistent and contextual navigation:** deep links to stop/route/bus; browser back/forward; shareable URLs; no default unrelated bus when pressing Live Map.
5. **Accessible service, not just settings:** large action targets, strong contrast, focus/dialog semantics, screen-reader updates, localization completeness, and daylight readability.
6. **Safe public information:** verified official alerts, report confidence/moderation, privacy-preserving location and account handling.
7. **Instrumentation:** measure search success, planner completion, QR success, data freshness, alert usefulness, and abandoned/error states before expanding the feature set.

## Part 4 — Cohesive design direction: “Transit Signal Maharashtra”

The personality should feel like a dependable public-service tool: clear roadside signage meets a calm regional travel companion. It should not imitate a generic finance dashboard or an iOS demo.

### Visual identity

- **Voice:** direct, calm, accountable. Prefer “Bus is 6 min away · updated 24 sec ago” over “Great news! Your live GPS is active.”
- **Brand colors:** MSRTC vermilion is the identity and incident color, not the primary button color. Use deep railway/indigo blue for route/action navigation, and a warm off-white/very-light stone background to avoid clinical blue-gray.
- **Suggested tokens:** `ink #1E2430`, `paper #F7F5F0`, `surface #FFFFFF`, `indigo #1356C5`, `vermilion #C7352E`, `live #137A45`, `delay #B66300`, `disruption #B42318`, plus AA-tested light tints. Final values require contrast QA in all modes.
- **Route identity:** each route gets a stable accessible code/tag; never rely only on color. Use route lines/dots carefully as an orientation device.

### Type, spacing, and density

- Keep system UI with Noto Sans Devanagari fallback, but define a real type scale: 28/34 page title, 22/28 section title, 18/24 bus or stop title, 16/24 body/action, 14/20 metadata; only 12/16 for nonessential labels.
- Use tabular numerals for ETAs, times, distances, and fares. Give Devanagari lines enough leading; do not squeeze them into chips.
- Adopt a 4 px base unit: screen 16/20 px gutters, card 16 px padding, 12 px component gaps, 24 px section spacing. Compact data rows may use 12 px padding but retain 44 px tap targets.
- Prefer content density that answers one commute decision per card. Long detail belongs in a sheet/detail page, not the overview.

### Components and iconography

- Build a small documented set: App bar, Bottom/side navigation, Primary/secondary/tertiary button, Search, Segmented filter, Route tag, Status, Arrival row, Stop list row, Empty/Error/Loading state, Bottom sheet, Dialog, Toast/live region.
- Icons should be one coherent 20/24 px outline family, paired with visible labels for primary actions. Do not mix emoji with outline SVG for operational information.
- The status component must always pair color with a label and appropriate icon: live dot/location, clock for scheduled/estimated, alert triangle for disruption.

### Navigation and responsive behavior

- Mobile: persistent bottom navigation only for the five primary destinations; child flows have contextual Back. Map routes use a full screen plus bottom sheet, not a dashboard inside a dashboard.
- Tablet/desktop: a left rail replaces the bottom bar; routes use list/detail; tracking uses map + inspector; preserve the same content order and keyboard flow.
- Establish URL routes (`/stop/:id`, `/route/:id`, `/bus/:id`, `/plan`) and browser history, so QR/shared links open directly to the right context.

### Motion and accessibility

- Motion should confirm navigation, sheet expansion, and a changed arrival—not decorate everything. Target 150–200 ms; no continuous attention-seeking animation except an accessible, optional active tracking indicator.
- Test WCAG 2.2 AA (including focus appearance, 44×44 targets, 200% zoom/reflow, labels/errors, live-region announcements), Android TalkBack and iOS VoiceOver. “High contrast,” dark, and large-text modes must be treated as supported product themes, including map overlays.

## Part 5 — Prioritized roadmap

### Phase 0 — Product/data foundations (prerequisite)

| Item | Priority | User benefit | Complexity | Dependencies |
|---|---|---|---|---|
| Define live-data contract: source, timestamp, vehicle/route/stop IDs, freshness, ETA confidence, status taxonomy | Critical | Users can judge whether data is trustworthy | High | MSRTC telemetry/schedule owners, API design |
| Separate prototype/mock data from production data paths; remove fabricated “live” claims in production UI | Critical | Prevents misleading travel decisions | Medium | Data contract, product/legal review |
| Establish privacy/security model for location, reports, notifications, accounts; remove client-side credential storage | Critical | Protects users and enables future features safely | High | Auth/consent/legal/security |
| Refactor rendering boundaries into screen/component/data-service layers and add baseline tests | High | Makes future work safer/faster | High | Technical architecture decision |

### Phase 1 — Essential fixes

| Item | Priority | User benefit | Complexity | Dependencies |
|---|---|---|---|---|
| Reframe information as live/estimated/scheduled with update time and stale fallback everywhere | P0 | Trustworthy arrival decisions | Medium | Phase 0 data contract |
| Simplify primary navigation and make tracking contextual; remove/repurpose duplicate drawer | P0 | Faster, clearer path to the right task | Medium | IA/content decision |
| Replace false offline claim with honest limited state; add offline/permission/error recovery screens | P0 | Prevents confusion on weak networks | Medium | UX copy, network-state layer |
| Remove or clearly label mock booking/pass/admin/account flows; eliminate local password/PIN behavior | P0 | Avoids unsafe misleading flows | Low–Medium | Product ownership decision |
| Build accessible modal, toast/live-region, focus, form validation, and status primitives | P0 | Better access for keyboard/screen reader users | Medium | Component refactor |
| Complete string/localization audit and persist language selection | P0 | Makes three-language promise real | Medium | i18n structure/content translation |

### Phase 2 — High-value improvements

| Item | Priority | User benefit | Complexity | Dependencies |
|---|---|---|---|---|
| Rebuild Home around next arrivals, favorites, and one clear search/plan entry | P1 | Daily use becomes much faster | Medium | Design system, arrival data |
| Build unified search with aliases, transliteration, recent/favorites, no-result recovery | P1 | Finds stops/routes reliably | Medium | Search index/data normalization |
| Rework tracking into map + bottom-sheet hierarchy, with source/freshness details | P1 | Easier live-bus comprehension | Medium | Map/UI refactor, telemetry contract |
| Refactor route card to summary + route detail and improve filters/no-results | P1 | Better route comparison and density | Medium | Route detail URL/data |
| Improve QR and GPS flows with permission preflight, manual fallback, accurate labels | P1 | Higher real-world completion | Medium | Device/browser QA |
| Implement “Transit Signal Maharashtra” tokens and shared components, then desktop rail/split views | P1 | Cohesive, distinctive responsive product | High | Component refactor/design QA |

### Phase 3 — High-value features

| Item | Priority | User benefit | Complexity | Dependencies |
|---|---|---|---|---|
| Stop watch and arrival/disruption alerts | P1 | Less waiting and fewer missed buses | High | Real-time data, notifications, consent |
| Validated From/To planner with direct/transfer alternatives | P1 | Supports complete journeys | High | Timetable/trip data, pathfinding |
| Route/stop service-alert system with provenance and expiry | P1 | Helps users recover from disruption | High | Operations publishing workflow |
| Downloadable offline local travel packs and queued reports | P1 | Useful in rural/poor networks | High | PWA/cache policy, data sync |
| Structured trusted community reports and contextual data-correction feedback | P2 | Better field information/data quality | High | Moderation, safety/privacy |

### Phase 4 — Polish and validation

| Item | Priority | User benefit | Complexity | Dependencies |
|---|---|---|---|---|
| Skeletons, retained refresh state, action pending/success/undo states | P2 | More confidence on slow connections | Medium | Shared state primitives |
| Empty/error language and recovery CTAs across every flow | P2 | Fewer dead ends | Low | UX writing, screen inventory |
| Functional motion and map overlay theme QA | P2 | More polished and less distracting | Low–Medium | Design system |
| Analytics, accessibility audits, multilingual field testing, and usability studies at real bus stops | P1 | Verifies that changes solve actual commuter problems | Medium | Consent/analytics, research recruitment |

### Future / optional

- Official booking/pass integration only with an MSRTC-authorized backend, support process, and legal/security scope.
- Operations console as a separate, role-based product rather than a commuter screen.
- Crowding estimates only after reliable operational inputs/sensors or a validated reporting model.
- Native app wrappers only if push/background/geofencing requirements cannot be delivered reliably through a PWA; do not begin here.

## Implementation acceptance criteria

The coding agent should consider the work ready for product review only when:

1. No screen labels mock/simulated information as live without a visible source and timestamp.
2. A commuter can reach a selected stop’s next arrivals in at most two purposeful actions from Home, with a clear recovery when GPS/data is unavailable.
3. Every primary flow has loading, empty, permission, offline/stale, and error states designed and implemented.
4. Mobile, 768 px tablet, and ≥1024 px desktop layouts are intentional—not stretched variants—with no obscured content behind navigation.
5. English, Marathi, and Hindi user-visible strings, formatting, dynamic states, and assistive labels are complete and fit at large text size.
6. Keyboard, TalkBack/VoiceOver, reduced motion, dark mode, and high contrast pass documented QA for primary journeys.
7. Transactional/admin-looking prototype functions are either backed by secure official services or visibly excluded from commuter production navigation.
8. Search, QR, nearby, route, tracking, and alert/planner funnels have non-sensitive product metrics and error monitoring.

## Repository touchpoint map

| File | Responsibility today | Planned role |
|---|---|---|
| `index.html` | Entire app shell, all screen markup/modals, external script loading | Break into logical screen/component templates or migrate to the chosen UI framework; add semantic structure and route mounting point |
| `app.js` | State, navigation, rendering, device APIs, map, simulation, events | Split into UI components/screens, data services, navigation/router, device adapters, state and accessibility utilities; remove global/mock-only assumptions |
| `data.js` | i18n and bundled mock network/vehicle data | Retain only fixtures/demo data; define typed production API contracts and a normalized cache/search index |
| `styles.css` | Tokens, themes, all components and responsive rules | Retain token intent; replace “Apple HIG” styling with documented Transit Signal system, component styles, and complete responsive/theme coverage |
| `qr_codes/` | Stop QR assets/data | Use canonical signed/deep-link QR payload schema with fallbacks/validation |
| `assets/` | Brand imagery | Preserve logo; add only an approved icon/brand asset system after accessibility and ownership review |
