# 🌐 **[ThreatOrbit](https://a2awais.github.io/ThreatOrbit)** — Nation-State APT Intelligence Globe

> An interactive 3D globe mapping nation-state threat actor operations, attack arcs, targets, and full intelligence profiles. Single HTML file. No server. No dependencies to install.

![ThreatOrbit Preview](https://img.shields.io/badge/APT%20Groups-40-blue?style=flat-square) ![Last Updated](https://img.shields.io/badge/Last%20Updated-2025-green?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square) ![Open Source](https://img.shields.io/badge/Open%20Source-OSINT-orange?style=flat-square)

---

## Motivation

If you work in threat intelligence or threat hunting, you know the drill. APT groups spread across dozens of browser tabs, spreadsheets, and bookmarked PDFs that go stale the moment you close them. I built ThreatOrbit to fix that for myself, and decided to open it for the community.
It renders **40 nation-state APT groups across 12 countries** on an interactive 3D globe with directed attack arcs, motivation filtering, and full group dossiers.

Everything runs in a single browser tab. No API keys, no backend, no npm install.

---

## Coverage

| Nation | Groups | Notable Actors |
|--------|--------|----------------|
| 🇷🇺 Russia | 8 | Fancy Bear (APT28), Sandworm (APT44), Cozy Bear (APT29), Turla, COLDRIVER, RomCom |
| 🇨🇳 China | 11 | Volt Typhoon, Salt Typhoon, Double Dragon (APT41), APT31, APT40, BlackTech |
| 🇰🇵 North Korea | 5 | Lazarus Group, BlueNoroff (APT38), Kimsuky, Andariel (APT45), ScarCruft |
| 🇮🇷 Iran | 7 | Charming Kitten (APT35), OilRig (APT34), MuddyWater, Agrius, APT33, APT39 |
| 🇻🇳 Vietnam | 1 | OceanLotus (APT32) |
| 🇮🇳 India | 1 | SideWinder |
| 🇵🇰 Pakistan | 2 | Transparent Tribe (APT36), SideCopy |
| 🇹🇷 Turkey | 1 | StrongPity (PROMETHIUM) |
| 🇧🇾 Belarus | 1 | Ghostwriter (UNC1151) |
| 🇮🇱 Israel | 1 | Unit 8200 Operators (Stuxnet/Flame lineage) |
| 🇱🇧 Lebanon | 1 | Lebanese Cedar |
| 🇵🇸 Palestine | 1 | Two-tailed Scorpion (APT-C-23) |

---

## Features

**Globe**
- Directed attack arcs from origin country to known target nations
- Animated pulse markers, size-scaled by group count
- Floating country labels with live group counts
- Click any marker → country drill-down with all group cards
- Motivation filter chips (Espionage / Financial / Destructive / Mixed)
- Full-text search across names, aliases, malware, CVEs, and sectors

**Per-group intelligence dossier**
- Attribution: agency/unit, active years, confidence level
- MITRE ATT&CK TTPs with tactic colour-coding and direct links to `attack.mitre.org`
- Malware and tool inventory with type and platform
- CVE table with CVSS scores, severity pills, and NVD links
- Government advisories - CISA, NSA, DoJ, FBI, Five Eyes
- Known indicted/sanctioned members with status badges

---

## How to Add or Edit Groups

The entire dataset lives in one clearly labelled block at the top of the file. No build step required.

```html
<!-- Find this line (~line 50): -->
const APT_GROUPS = [
  {
    "name": "Group Name",
    "apt": "APT##",                        // designation or ""
    "aka": "Alias1 · Alias2 · Alias3",
    "country": "Russia",                   // must match COUNTRY_COORDS key
    "agency": "GRU Unit 26165",
    "motivation": "espionage",             // espionage | financial | destructive | mixed
    "active_since": 2004,
    "last_seen": 2025,
    "confidence": "high",                  // high | medium | low
    "sectors": ["Government", "Military"],
    "targets": ["USA", "Ukraine"],         // must match COUNTRY_COORDS keys
    "description": "One paragraph summary.",
    "ttps": [
      ["T1566.001", "Spearphishing Attachment", "initial-access"]
    ],
    "malware": [
      ["ToolName", "RAT", "Windows"]
    ],
    "cves": [
      ["CVE-2023-23397", 9.8, "Microsoft Outlook", 2023]
    ],
    "detections": [
      ["CISA", "Advisory title", "https://..."]
    ],
    "members": [
      ["Full Name", "Role description", "indicted"]  // indicted | sanctioned | identified
    ]
  },
  // ...
```
---

## Data Sources

All intelligence is drawn exclusively from public, authoritative sources:

- [CISA Cybersecurity Advisories](https://www.cisa.gov/news-events/cybersecurity-advisories) — US government joint advisories
- [US Department of Justice Indictments](https://www.justice.gov/national-security/cyber-crime) — criminal charges and attribution
- [FBI Internet Crime Complaint Center](https://www.ic3.gov) — alerts and public statements
- [MITRE ATT&CK](https://attack.mitre.org) — technique framework
- [NVD / NIST](https://nvd.nist.gov) — CVE database
- [Mandiant / Google Threat Intelligence](https://www.mandiant.com/resources) — APT reports
- [ESET Research](https://www.welivesecurity.com) — malware analysis
- [Microsoft MSTIC](https://www.microsoft.com/en-us/security/blog) — threat actor tracking
- [Kaspersky ICS-CERT](https://ics-cert.kaspersky.com) — ICS/SCADA research

---

## Companion Tool

For a deeper analytical workflow, cluster graph, Diamond Model, TTP heatmap, and sector pivot - see **[ThreatNexus](https://a2awais.github.io/ThreatNexus/)**, the analyst workbench companion to this globe.

---

## Contributing

Pull requests welcome for:
- New APT group entries with cited sources
- CVE or TTP updates for existing groups
- Attribution corrections (with source links)
- New target country coordinates

Please include a public source reference for any intelligence additions.

---

## Disclaimer

All data is compiled from **open-source, publicly available sources only**. This tool contains no classified or proprietary intelligence. Attribution assessments reflect public government and vendor reporting and carry inherent uncertainty. Confidence levels are included accordingly.

---

## License

MIT — free to use, fork, and redistribute with attribution.
