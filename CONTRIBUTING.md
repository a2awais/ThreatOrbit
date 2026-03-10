# Contributing to ThreatNexus / ThreatOrbit

Both tools share the same data format. Adding a new group to one means you can add it to both with a copy-paste.

---

## Adding a New APT Group

All group data lives in **`data/groups.json`** — a single JSON array.

### Step 1 — Open `data/groups.json`

In VS Code, Notepad++, or any text editor. The file is a standard JSON array:

```json
[
  { ...group 1... },
  { ...group 2... },
  ...
]
```

### Step 2 — Copy `data/template.json`

Open `data/template.json`, copy the entire block, and paste it as a new entry in the array. Make sure you add a comma after the previous entry.

```json
  { ...last existing group... },  ← add comma here
  {
    "name": "Your New Group",
    ...
  }
]
```

### Step 3 — Fill in the fields

| Field | Type | Notes |
|-------|------|-------|
| `name` | string | Display name, e.g. `"Fancy Bear"` |
| `apt` | string | Designation e.g. `"APT28"`, or `""` if none |
| `aka` | string | Aliases separated by ` · ` |
| `country` | string | Must match a key in `js/config.js` → `NATION_COLORS` |
| `agency` | string | Attribution unit e.g. `"GRU Unit 26165"` |
| `motivation` | string | `espionage` \| `financial` \| `destructive` \| `mixed` |
| `active_since` | number | Year, e.g. `2012` |
| `last_seen` | number | Year of last confirmed activity |
| `confidence` | string | `high` \| `medium` \| `low` |
| `sectors` | array | Targeted industries |
| `targets` | array | Target countries/regions |
| `description` | string | One paragraph, plain text |
| `ttps` | array | See format below |
| `malware` | array | See format below |
| `cves` | array | See format below |
| `detections` | array | See format below |
| `members` | array | Leave `[]` if unknown |

### TTPs format
```json
"ttps": [
  ["T1566.001", "Spearphishing Attachment", "initial-access"],
  ["T1059.001", "PowerShell",               "execution"]
]
```
Valid tactic keys: `initial-access` · `execution` · `persistence` · `privilege-escalation` · `defense-evasion` · `credential-access` · `discovery` · `lateral-movement` · `collection` · `exfiltration` · `command-and-control` · `impact`

### Malware format
```json
"malware": [
  ["ToolName",  "RAT",       "Windows"],
  ["Loader",    "Loader",    "Windows/Linux"],
  ["Backdoor",  "Backdoor",  "macOS"]
]
```

### CVEs format
```json
"cves": [
  ["CVE-2023-23397", 9.8, "Microsoft Outlook", 2023],
  ["CVE-2021-44228", 10.0, "Apache Log4j",     2021]
]
```

### Detections format
```json
"detections": [
  ["CISA", "AA23-198A — Advisory Title", "https://www.cisa.gov/..."],
  ["DoJ",  "Indictment — Actor Name",    "https://www.justice.gov/..."]
]
```

### Members format
```json
"members": [
  ["Full Name", "Role description", "indicted"],
  ["Full Name", "Role description", "sanctioned"],
  ["Full Name", "Role description", "identified"]
]
```

### Step 4 — Validate JSON

Paste your updated `groups.json` into [jsonlint.com](https://jsonlint.com) to check for syntax errors before pushing.

### Step 5 — Push

```bash
git add data/groups.json
git commit -m "data: add [GroupName]"
git push
```

Netlify will auto-deploy within ~30 seconds. Cluster graph edges are computed automatically from shared malware and CVEs — no manual edge editing needed.

---

## Updating an Existing Group

Find the group in `groups.json` by name, edit the relevant fields, and push. Common updates:

- **New malware discovered** → add to `malware` array
- **New CVE exploited** → add to `cves` array
- **New CISA advisory** → add to `detections` array
- **Group still active** → update `last_seen` year
- **New TTP observed** → add to `ttps` array

---

## Adding a New Nation-State

If you're adding a group from a country not already in the tool:

1. Add a colour entry to `js/config.js` → `NATION_COLORS`:
```js
'New Country': '#hexcolor',
```

2. For ThreatOrbit, also add globe coordinates to `COUNTRY_COORDS`:
```js
'New Country': { lat: 00.0, lng: 00.0 },
```

---

## Source Requirements

Every addition must link to at least one public, authoritative source in the `detections` array:
- US Government: CISA, DoJ, FBI, NSA
- Five Eyes: NCSC-UK, ASD-Australia, CCCS-Canada, GCSB-NZ
- Vendor research: Mandiant, Microsoft MSTIC, ESET, Palo Alto Unit 42, CrowdStrike

No anonymous blogs, unverified pastebin links, or speculative attribution.

---

## Questions

Open an issue or reach out to [@a2awais](https://github.com/a2awais).
