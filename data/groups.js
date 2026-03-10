// data/groups.js
// Add a new group by copying template.json and pasting as a new object in this array

export const GROUPS = [
  {
    "name": "Fancy Bear",
    "apt": "APT28",
    "aka": "Forest Blizzard \u00b7 STRONTIUM \u00b7 Sofacy",
    "country": "Russia",
    "agency": "GRU Unit 26165",
    "motivation": "espionage",
    "active_since": 2004,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Military",
      "Defense",
      "Think Tanks",
      "Media",
      "Political Orgs"
    ],
    "targets": [
      "USA",
      "Ukraine",
      "Germany",
      "France",
      "UK",
      "NATO"
    ],
    "description": "GRU Unit 26165 \u2014 hack-and-leak specialist. 2016 DNC hack, French election interference, Bundestag compromise. GooseEgg (2024) exploited CVE-2022-38028 for SYSTEM access.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1003.001",
        "LSASS Memory",
        "credential-access"
      ],
      [
        "T1048",
        "Exfiltration Over Alt Protocol",
        "exfiltration"
      ],
      [
        "T1071.001",
        "Web Protocols C2",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "X-Agent (CHOPSTICK)",
        "RAT",
        "Windows/Linux"
      ],
      [
        "GooseEgg",
        "Exploit Launcher",
        "Windows"
      ],
      [
        "HATVIBE",
        "Loader",
        "Windows"
      ],
      [
        "Zebrocy",
        "Downloader",
        "Windows"
      ],
      [
        "Komplex",
        "RAT",
        "macOS"
      ]
    ],
    "cves": [
      [
        "CVE-2023-23397",
        9.8,
        "Microsoft Outlook",
        2023
      ],
      [
        "CVE-2022-38028",
        7.8,
        "Windows Print Spooler",
        2022
      ],
      [
        "CVE-2020-40444",
        7.8,
        "MSHTML",
        2020
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA23-198A \u2014 APT28 Exploiting CVE-2023-23397",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-198a"
      ],
      [
        "DoJ",
        "Indictment \u2014 Unit 26165 Officers",
        "https://www.justice.gov/file/1080281/download"
      ]
    ],
    "members": [
      [
        "Viktor Netyksho",
        "CO Unit 26165",
        "indicted"
      ],
      [
        "Dmitriy Badin",
        "Spearphishing/C2",
        "indicted"
      ],
      [
        "Nikolay Kozachek",
        "Malware dev (X-Agent)",
        "indicted"
      ]
    ]
  },
  {
    "name": "Cozy Bear",
    "apt": "APT29",
    "aka": "Midnight Blizzard \u00b7 NOBELIUM \u00b7 The Dukes",
    "country": "Russia",
    "agency": "SVR (Foreign Intelligence Service)",
    "motivation": "espionage",
    "active_since": 2008,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Think Tanks",
      "Defense",
      "Healthcare",
      "Technology"
    ],
    "targets": [
      "USA",
      "UK",
      "EU",
      "NATO",
      "Ukraine"
    ],
    "description": "SVR's premier cyber arm. SUNBURST/SolarWinds (2020) breached 18,000 orgs. In 2024 compromised Microsoft corporate email via password spray and exploited JetBrains TeamCity pipelines.",
    "ttps": [
      [
        "T1195.002",
        "Supply Chain Compromise",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1550.002",
        "Pass the Hash",
        "lateral-movement"
      ],
      [
        "T1573",
        "Encrypted Channel",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "SUNBURST",
        "Supply-chain Backdoor",
        "Windows"
      ],
      [
        "WINELOADER",
        "Modular Backdoor",
        "Windows"
      ],
      [
        "ROOTSAW",
        "HTML Dropper",
        "Windows"
      ],
      [
        "GraceWire",
        "Backdoor",
        "Windows"
      ],
      [
        "CozyDuke",
        "RAT (legacy)",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2023-42793",
        9.8,
        "JetBrains TeamCity",
        2023
      ],
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ],
      [
        "CVE-2018-13379",
        9.8,
        "Fortinet FortiOS",
        2018
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA20-352A \u2014 SolarWinds Supply Chain",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a"
      ],
      [
        "CISA",
        "AA24-038A \u2014 SVR Exploiting JetBrains TeamCity",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a"
      ]
    ],
    "members": []
  },
  {
    "name": "Sandworm",
    "apt": "APT44",
    "aka": "Seashell Blizzard \u00b7 Voodoo Bear \u00b7 Telebots",
    "country": "Russia",
    "agency": "GRU Unit 74455",
    "motivation": "destructive",
    "active_since": 2009,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Energy & ICS",
      "Critical Infrastructure",
      "Government",
      "Military"
    ],
    "targets": [
      "Ukraine",
      "USA",
      "EU",
      "NATO"
    ],
    "description": "Most destructive cyberwarfare unit on record. Ukraine power grid attacks (2015-16), NotPetya (~$10B), Industroyer2 (2022 HV substations). Wiper deployments coordinate with kinetic military ops.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1059.003",
        "Windows Command Shell",
        "execution"
      ],
      [
        "T1485",
        "Data Destruction",
        "impact"
      ],
      [
        "T1486",
        "Data Encrypted for Impact",
        "impact"
      ],
      [
        "T1561.002",
        "Disk Structure Wipe",
        "impact"
      ]
    ],
    "malware": [
      [
        "NotPetya",
        "Wiper",
        "Windows"
      ],
      [
        "Industroyer2",
        "ICS Wiper",
        "ICS"
      ],
      [
        "CaddyWiper",
        "Disk Wiper",
        "Windows"
      ],
      [
        "HermeticWiper",
        "Disk Wiper",
        "Windows"
      ],
      [
        "BlackEnergy",
        "Toolkit",
        "Windows/Linux"
      ]
    ],
    "cves": [
      [
        "CVE-2017-0144",
        9.3,
        "SMBv1 (NotPetya)",
        2017
      ],
      [
        "CVE-2022-42475",
        9.3,
        "Fortinet FortiOS",
        2022
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA22-076A \u2014 Destructive Malware Ukraine",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-076a"
      ],
      [
        "DoJ",
        "Indictment \u2014 Six GRU Officers (NotPetya)",
        "https://www.justice.gov/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware"
      ]
    ],
    "members": [
      [
        "Yuriy Andrienko",
        "Malware dev",
        "indicted"
      ],
      [
        "Pavel Frolov",
        "Malware dev",
        "indicted"
      ],
      [
        "Anatoliy Kovalev",
        "Spearphishing ops",
        "indicted"
      ]
    ]
  },
  {
    "name": "Turla",
    "apt": "",
    "aka": "Secret Blizzard \u00b7 Snake \u00b7 Uroburos \u00b7 Venomous Bear",
    "country": "Russia",
    "agency": "FSB Center 16",
    "motivation": "espionage",
    "active_since": 1996,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Military",
      "Defense",
      "Diplomatic"
    ],
    "targets": [
      "EU",
      "Ukraine",
      "Middle East",
      "NATO"
    ],
    "description": "FSB's most sophisticated cyber unit \u2014 25+ years continuous ops. Snake P2P kernel rootkit in 50+ countries. Hijacked Iranian APT34 infrastructure for false-flag ops. Operation MEDUSA (2023) dismantled Snake globally.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1547",
        "Boot/Logon Autostart",
        "persistence"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ],
      [
        "T1573",
        "Encrypted Channel (P2P)",
        "command-and-control"
      ],
      [
        "T1102",
        "Web Service (satellite C2)",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "Snake/Uroburos",
        "Kernel Rootkit",
        "Windows"
      ],
      [
        "Kazuar",
        "Backdoor (.NET)",
        "Windows"
      ],
      [
        "Carbon",
        "Modular Backdoor",
        "Windows"
      ],
      [
        "TinyTurla",
        "Lightweight Backdoor",
        "Windows"
      ],
      [
        "ComRAT v4",
        "File-system RAT",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2023-36884",
        7.8,
        "Microsoft Office OLE",
        2023
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA23-129A \u2014 Hunting Snake Malware (Five Eyes)",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-129a"
      ]
    ],
    "members": []
  },
  {
    "name": "Gamaredon",
    "apt": "",
    "aka": "Primitive Bear \u00b7 Shuckworm \u00b7 Aqua Blizzard \u00b7 UAC-0010",
    "country": "Russia",
    "agency": "FSB \u2014 Crimea-based unit",
    "motivation": "espionage",
    "active_since": 2013,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Military",
      "Critical Infrastructure"
    ],
    "targets": [
      "Ukraine"
    ],
    "description": "Highest-volume FSB unit targeting Ukrainian government and military \u2014 thousands of phishing campaigns monthly. FSB officers in occupied Crimea, five publicly identified by Ukraine SSU in 2021.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1547.001",
        "Registry Run Keys",
        "persistence"
      ],
      [
        "T1105",
        "Ingress Tool Transfer",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "Pterodo/Pteranodon",
        "Worm/Backdoor",
        "Windows"
      ],
      [
        "GammaLoad",
        "Loader",
        "Windows"
      ],
      [
        "GammaSteel",
        "Info Stealer",
        "Windows"
      ],
      [
        "QuietSieve",
        "Info Stealer",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2022-30190",
        7.8,
        "Microsoft MSDT Follina",
        2022
      ],
      [
        "CVE-2017-11882",
        7.8,
        "Office Equation Editor",
        2017
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA23-198A \u2014 Russian Cyber Actors",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-198a"
      ]
    ],
    "members": [
      [
        "Sklianko Oleksandr",
        "FSB officer, Crimea",
        "identified"
      ],
      [
        "Chernykh Mykola",
        "FSB officer, Crimea",
        "identified"
      ]
    ]
  },
  {
    "name": "Cadet Blizzard",
    "apt": "",
    "aka": "Ember Bear \u00b7 UNC2589 \u00b7 UAC-0056 \u00b7 DEV-0586",
    "country": "Russia",
    "agency": "GRU Unit 161",
    "motivation": "destructive",
    "active_since": 2020,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Critical Infrastructure",
      "Technology"
    ],
    "targets": [
      "Ukraine",
      "EU",
      "NATO",
      "USA"
    ],
    "description": "GRU unit responsible for WhisperGate wiper (Jan 2022) \u2014 first destructive malware deployed before Russia's invasion. Compromised global IT providers to reach NATO/EU targets. Four members indicted 2024.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1485",
        "Data Destruction",
        "impact"
      ],
      [
        "T1561",
        "Disk Wipe",
        "impact"
      ]
    ],
    "malware": [
      [
        "WhisperGate",
        "Multi-stage Wiper",
        "Windows"
      ],
      [
        "CaddyWiper",
        "Disk Wiper",
        "Windows"
      ],
      [
        "POEMGATE",
        "Credential Harvester",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2021-26084",
        9.8,
        "Atlassian Confluence OGNL",
        2021
      ],
      [
        "CVE-2022-26134",
        9.8,
        "Atlassian Confluence RCE",
        2022
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA22-057A \u2014 Destructive Malware Ukraine",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-057a"
      ],
      [
        "DoJ",
        "Indictment \u2014 Four GRU Officers (2024)",
        "https://www.justice.gov/opa/pr/four-russian-government-employees-charged-two-historical-hacking-campaigns-targeting-critical"
      ]
    ],
    "members": [
      [
        "Amin Stigal",
        "GRU contractor",
        "indicted"
      ],
      [
        "Mikhail Tolstykh",
        "GRU officer",
        "indicted"
      ]
    ]
  },
  {
    "name": "COLDRIVER",
    "apt": "",
    "aka": "Star Blizzard \u00b7 SEABORGIUM \u00b7 Callisto Group \u00b7 TA446",
    "country": "Russia",
    "agency": "FSB Centre 18",
    "motivation": "espionage",
    "active_since": 2015,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Think Tanks",
      "Government",
      "Defense",
      "Academia",
      "NGO"
    ],
    "targets": [
      "USA",
      "UK",
      "EU",
      "NATO",
      "Ukraine"
    ],
    "description": "FSB Centre 18 credential phishing against Western think tanks, academics, and politicians. Masquerades as journalists. US/UK disrupted operations and sanctioned operator Andrey Korinets (Dec 2023).",
    "ttps": [
      [
        "T1566.002",
        "Spearphishing Link",
        "initial-access"
      ],
      [
        "T1598.003",
        "Spearphishing for Credentials",
        "credential-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ]
    ],
    "malware": [
      [
        "SPICA",
        "Backdoor (Rust)",
        "Windows"
      ],
      [
        "LOSTKEYS",
        "Info Stealer",
        "Windows"
      ]
    ],
    "cves": [],
    "detections": [
      [
        "CISA",
        "AA23-341A \u2014 Star Blizzard Spear-Phishing",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-341a"
      ]
    ],
    "members": [
      [
        "Andrey Korinets",
        "FSB Centre 18",
        "sanctioned"
      ],
      [
        "Ruslan Peretyatko",
        "FSB Centre 18",
        "sanctioned"
      ]
    ]
  },
  {
    "name": "RomCom",
    "apt": "",
    "aka": "Storm-0978 \u00b7 Tropical Scorpius \u00b7 UNC2596 \u00b7 Void Rabisu",
    "country": "Russia",
    "agency": "GRU-adjacent / criminal nexus",
    "motivation": "mixed",
    "active_since": 2022,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Defense",
      "Healthcare",
      "Critical Infrastructure"
    ],
    "targets": [
      "Ukraine",
      "USA",
      "UK",
      "EU",
      "NATO"
    ],
    "description": "Dual-purpose group \u2014 Cuba ransomware (financial) and state espionage. In 2024 chained two zero-days (CVE-2024-9680 + CVE-2024-49039) for zero-interaction code execution.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1486",
        "Data Encrypted for Impact",
        "impact"
      ]
    ],
    "malware": [
      [
        "RomCom RAT",
        "Modular Backdoor",
        "Windows"
      ],
      [
        "Cuba Ransomware",
        "Ransomware",
        "Windows"
      ],
      [
        "PEAPOD",
        "Backdoor",
        "Windows"
      ],
      [
        "SnipBot",
        "Multi-stage Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2024-9680",
        9.8,
        "Firefox Use-After-Free (0day)",
        2024
      ],
      [
        "CVE-2024-49039",
        8.8,
        "Windows Task Scheduler (0day)",
        2024
      ],
      [
        "CVE-2023-36884",
        7.8,
        "Microsoft Office OLE",
        2023
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA23-061A \u2014 Cuba Ransomware",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-061a"
      ]
    ],
    "members": []
  },
  {
    "name": "Double Dragon",
    "apt": "APT41",
    "aka": "BARIUM \u00b7 Brass Typhoon \u00b7 Wicked Panda \u00b7 Winnti",
    "country": "China",
    "agency": "MSS \u2014 Chengdu 404 Network Technology",
    "motivation": "mixed",
    "active_since": 2012,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Healthcare",
      "Telecom",
      "Technology",
      "Financial",
      "Government",
      "Defense",
      "Cryptocurrency"
    ],
    "targets": [
      "USA",
      "India",
      "Japan",
      "South Korea",
      "Taiwan",
      "Southeast Asia"
    ],
    "description": "China's dual-mission APT \u2014 MSS espionage plus financial cybercrime simultaneously. ShadowPad is their primary RAT, shared across China's intel community. Five members indicted by DoJ September 2020.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1195",
        "Supply Chain Compromise",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ]
    ],
    "malware": [
      [
        "ShadowPad",
        "Modular RAT",
        "Windows"
      ],
      [
        "PlugX",
        "Modular RAT",
        "Windows"
      ],
      [
        "KeyPlug",
        "Backdoor",
        "Windows/Linux"
      ],
      [
        "CROSSWALK",
        "Modular Backdoor",
        "Windows"
      ],
      [
        "Cobalt Strike",
        "Post-exploitation",
        "Windows/Linux"
      ]
    ],
    "cves": [
      [
        "CVE-2021-44228",
        10.0,
        "Apache Log4Shell",
        2021
      ],
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ],
      [
        "CVE-2019-19781",
        9.8,
        "Citrix ADC",
        2019
      ]
    ],
    "detections": [
      [
        "DoJ",
        "Indictment \u2014 Five APT41 Members (2020)",
        "https://www.justice.gov/opa/pr/seven-international-cyber-defendants-including-apt41-actors-charged-connection-computer"
      ],
      [
        "CISA",
        "AA21-200A \u2014 Chinese State-Sponsored Activity",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-200a"
      ]
    ],
    "members": [
      [
        "Zhang Haoran",
        "MSS contractor, Chengdu 404",
        "indicted"
      ],
      [
        "Tan Dailin",
        "MSS contractor",
        "indicted"
      ],
      [
        "Jiang Lizhi",
        "MSS contractor",
        "indicted"
      ]
    ]
  },
  {
    "name": "Volt Typhoon",
    "apt": "",
    "aka": "BRONZE SILHOUETTE \u00b7 Vanguard Panda \u00b7 Dev-0391",
    "country": "China",
    "agency": "PLA/MSS \u2014 Critical Infrastructure Pre-positioning",
    "motivation": "destructive",
    "active_since": 2021,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Critical Infrastructure",
      "Energy & ICS",
      "Telecom",
      "Government",
      "Defense"
    ],
    "targets": [
      "USA",
      "Taiwan",
      "Australia"
    ],
    "description": "Pre-positioned inside US critical infrastructure for disruptive attacks in a Taiwan conflict scenario. Exclusively uses LotL techniques and SOHO botnets. Maintained access 5+ years before discovery.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1059.003",
        "Windows Command Shell (LOLBins)",
        "execution"
      ],
      [
        "T1036",
        "Masquerading",
        "defense-evasion"
      ],
      [
        "T1070",
        "Indicator Removal",
        "defense-evasion"
      ],
      [
        "T1021.001",
        "Remote Desktop Protocol",
        "lateral-movement"
      ]
    ],
    "malware": [
      [
        "KV Botnet",
        "SOHO Router Botnet",
        "Embedded Linux"
      ],
      [
        "BRICKSTORM",
        "ESXi Backdoor",
        "Linux/ESXi"
      ],
      [
        "LOLBins (wmic/netsh)",
        "Living off the Land",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2023-20198",
        10.0,
        "Cisco IOS XE Web UI",
        2023
      ],
      [
        "CVE-2024-3400",
        10.0,
        "Palo Alto PAN-OS",
        2024
      ],
      [
        "CVE-2022-42475",
        9.3,
        "Fortinet FortiOS",
        2022
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA23-144A \u2014 Volt Typhoon US Critical Infrastructure",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-144a"
      ],
      [
        "CISA",
        "AA24-038A \u2014 PRC Actors Compromise US Critical Infrastructure",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a"
      ]
    ],
    "members": []
  },
  {
    "name": "Salt Typhoon",
    "apt": "",
    "aka": "Earth Estries \u00b7 GhostEmperor \u00b7 FamousSparrow",
    "country": "China",
    "agency": "MSS",
    "motivation": "espionage",
    "active_since": 2019,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Telecom",
      "Government",
      "Defense",
      "Technology"
    ],
    "targets": [
      "USA",
      "UK",
      "Australia",
      "Canada",
      "India",
      "Southeast Asia"
    ],
    "description": "Most significant US telecom breach in history \u2014 compromised Verizon, AT&T, T-Mobile, Lumen in 2024. Accessed lawful intercept (CALEA wiretap) infrastructure. Exploits Cisco IOS vulnerabilities extensively.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1021.001",
        "Remote Desktop Protocol",
        "lateral-movement"
      ],
      [
        "T1560",
        "Archive Collected Data",
        "collection"
      ],
      [
        "T1071.001",
        "Web Protocols C2",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "GhostSpider",
        "Backdoor",
        "Windows"
      ],
      [
        "SNAPPYBEE (Deed RAT)",
        "Modular Backdoor",
        "Windows"
      ],
      [
        "SparrowDoor",
        "Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2023-20198",
        10.0,
        "Cisco IOS XE Web UI",
        2023
      ],
      [
        "CVE-2018-0171",
        9.8,
        "Cisco Smart Install",
        2018
      ],
      [
        "CVE-2023-20273",
        7.2,
        "Cisco IOS XE Priv Esc",
        2023
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA24-038A \u2014 Enhanced Guidance for Salt Typhoon Telecom Victims",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a"
      ]
    ],
    "members": []
  },
  {
    "name": "Flax Typhoon",
    "apt": "",
    "aka": "Ethereal Panda \u00b7 RedJuliett",
    "country": "China",
    "agency": "MSS \u2014 Integrity Technology Group (front co.)",
    "motivation": "espionage",
    "active_since": 2021,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Critical Infrastructure",
      "Technology",
      "Defense"
    ],
    "targets": [
      "Taiwan",
      "USA",
      "Southeast Asia"
    ],
    "description": "Taiwan-focused MSS unit operating via Integrity Technology front company. Built 260,000-device SOHO/IoT botnet disrupted by US in 2024. Minimal footprint, long-term persistent access.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1059.003",
        "Windows Command Shell",
        "execution"
      ],
      [
        "T1036",
        "Masquerading",
        "defense-evasion"
      ]
    ],
    "malware": [
      [
        "Chinoxy",
        "Backdoor",
        "Windows"
      ],
      [
        "SoftEther VPN",
        "Tunnel (legitimate abuse)",
        "Windows/Linux"
      ]
    ],
    "cves": [
      [
        "CVE-2022-30525",
        9.8,
        "Zyxel Firewall OS Command Injection",
        2022
      ],
      [
        "CVE-2021-28799",
        9.8,
        "QNAP NAS RCE",
        2021
      ]
    ],
    "detections": [
      [
        "FBI",
        "Court Order \u2014 Flax Typhoon Botnet Disruption (2024)",
        "https://www.justice.gov/opa/pr/us-government-disrupts-botnet-peoples-republic-china-used-conceal-hacking-operations"
      ]
    ],
    "members": []
  },
  {
    "name": "Comment Crew",
    "apt": "APT1",
    "aka": "Shanghai Group \u00b7 Comment Panda \u00b7 Byzantine Candor",
    "country": "China",
    "agency": "PLA Unit 61398",
    "motivation": "espionage",
    "active_since": 2006,
    "last_seen": 2016,
    "confidence": "high",
    "sectors": [
      "Defense",
      "Energy & ICS",
      "Aerospace",
      "Technology",
      "Financial"
    ],
    "targets": [
      "USA",
      "UK",
      "Canada"
    ],
    "description": "PLA Unit 61398 \u2014 Mandiant's 2013 APT1 report. Stole hundreds of terabytes from 141 US companies over 7 years. Five PLA officers indicted by DoJ in 2014 \u2014 first-ever state cyber indictments.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.003",
        "Windows Command Shell",
        "execution"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ],
      [
        "T1021.002",
        "SMB/Admin Shares",
        "lateral-movement"
      ]
    ],
    "malware": [
      [
        "WEBC2",
        "Backdoor",
        "Windows"
      ],
      [
        "GH0ST RAT",
        "RAT",
        "Windows"
      ],
      [
        "GREENCAT",
        "Backdoor",
        "Windows"
      ]
    ],
    "cves": [],
    "detections": [
      [
        "DoJ",
        "Indictment \u2014 Five PLA Unit 61398 Officers (2014)",
        "https://www.justice.gov/opa/pr/us-charges-five-chinese-military-hackers-cyber-espionage-against-us-corporations-and-labor"
      ],
      [
        "Mandiant",
        "APT1 Report \u2014 Exposing China's Espionage Unit",
        "https://www.mandiant.com/sites/default/files/2022-02/mandiant-apt1-report.pdf"
      ]
    ],
    "members": [
      [
        "Wang Dong (UglyGorilla)",
        "PLA Unit 61398",
        "indicted"
      ],
      [
        "Sun Kailiang",
        "PLA Unit 61398",
        "indicted"
      ],
      [
        "Wen Xinyu",
        "PLA Unit 61398",
        "indicted"
      ]
    ]
  },
  {
    "name": "Zirconium",
    "apt": "APT31",
    "aka": "Judgment Panda \u00b7 Bronze Vinewood \u00b7 Hurricane Panda",
    "country": "China",
    "agency": "MSS Hubei \u2014 contractor Wuhan XRZ",
    "motivation": "espionage",
    "active_since": 2010,
    "last_seen": 2024,
    "confidence": "high",
    "sectors": [
      "Government",
      "Political Orgs",
      "Think Tanks",
      "Defense",
      "Technology"
    ],
    "targets": [
      "USA",
      "France",
      "Germany",
      "UK",
      "EU",
      "Australia"
    ],
    "description": "MSS-attributed group targeting political figures and election campaigns globally. US/UK/EU/Australia sanctioned APT31 March 2024 \u2014 DoJ indicted seven Wuhan XRZ hackers, the largest Chinese cyber indictment.",
    "ttps": [
      [
        "T1566.002",
        "Spearphishing Link",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ]
    ],
    "malware": [
      [
        "RAWDOOR",
        "Backdoor",
        "Windows"
      ],
      [
        "PlugX",
        "Modular RAT",
        "Windows"
      ],
      [
        "ShadowPad",
        "Modular RAT",
        "Windows"
      ],
      [
        "Cobalt Strike",
        "Post-exploitation",
        "Windows/Linux"
      ]
    ],
    "cves": [
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ],
      [
        "CVE-2021-40539",
        9.8,
        "Zoho ManageEngine ADSelfService",
        2021
      ]
    ],
    "detections": [
      [
        "DoJ",
        "Indictment \u2014 Seven Wuhan XRZ Hackers / APT31 (2024)",
        "https://www.justice.gov/opa/pr/seven-hackers-associated-chinese-government-charged-computer-intrusions-targeting-perceived"
      ]
    ],
    "members": [
      [
        "Ni Gaobin",
        "Wuhan XRZ contractor",
        "indicted"
      ],
      [
        "Weng Ming",
        "Wuhan XRZ contractor",
        "indicted"
      ],
      [
        "Zhao Guangzong",
        "Wuhan XRZ contractor",
        "indicted"
      ]
    ]
  },
  {
    "name": "Mustang Panda",
    "apt": "TA416",
    "aka": "RedDelta \u00b7 Bronze President \u00b7 Earth Preta \u00b7 Camaro Dragon",
    "country": "China",
    "agency": "MSS (assessed)",
    "motivation": "espionage",
    "active_since": 2012,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Diplomatic",
      "NGO",
      "Religious Orgs",
      "Media"
    ],
    "targets": [
      "Southeast Asia",
      "EU",
      "Vatican",
      "Taiwan",
      "India"
    ],
    "description": "MSS-attributed group targeting SE Asia govts, Vatican, and NGOs. Trojanises legitimate apps (NVIDIA driver, Interpol notices) as PlugX delivery. Targeted EU diplomatic entities pre-Ukraine invasion 2022.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1036",
        "Masquerading",
        "defense-evasion"
      ]
    ],
    "malware": [
      [
        "PlugX/Korplug",
        "Modular RAT",
        "Windows"
      ],
      [
        "Cobalt Strike",
        "Post-exploitation",
        "Windows/Linux"
      ],
      [
        "TONESHELL",
        "Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2017-11882",
        7.8,
        "Office Equation Editor",
        2017
      ]
    ],
    "detections": [
      [
        "ESET",
        "ESET Research: Mustang Panda Targets Europe",
        "https://www.welivesecurity.com/2022/03/23/mustang-pandas-hodur-old-tricks-new-korplug-variant/"
      ]
    ],
    "members": []
  },
  {
    "name": "Velvet Ant",
    "apt": "APT40",
    "aka": "BRONZE MOHAWK \u00b7 Leviathan \u00b7 TEMP.Periscope \u00b7 GADOLINIUM",
    "country": "China",
    "agency": "MSS \u2014 Hainan State Security Dept.",
    "motivation": "espionage",
    "active_since": 2013,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Military",
      "Defense",
      "Maritime",
      "Aviation",
      "Government"
    ],
    "targets": [
      "USA",
      "UK",
      "Australia",
      "EU",
      "Southeast Asia"
    ],
    "description": "MSS Hainan APT focused on maritime, defense, and naval research intel. Rapid CVE exploitation. Four officers indicted July 2021. 2024 Five Eyes advisory: active exploitation of end-of-life SOHO devices.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ]
    ],
    "malware": [
      [
        "AIRBREAK",
        "JavaScript Backdoor",
        "Windows"
      ],
      [
        "BADFLICK",
        "RAT",
        "Windows"
      ],
      [
        "ScanBox",
        "Browser Recon Framework",
        "JavaScript"
      ],
      [
        "China Chopper",
        "Web Shell",
        "Web Servers"
      ]
    ],
    "cves": [
      [
        "CVE-2021-44228",
        10.0,
        "Apache Log4Shell",
        2021
      ],
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ],
      [
        "CVE-2021-26084",
        9.8,
        "Atlassian Confluence",
        2021
      ]
    ],
    "detections": [
      [
        "DoJ",
        "Indictment \u2014 Four MSS Hainan Officers (2021)",
        "https://www.justice.gov/opa/pr/four-chinese-nationals-working-ministry-state-security-indicted-global-computer-intrusion"
      ],
      [
        "CISA",
        "AA24-190A \u2014 Five Eyes APT40 Advisory (2024)",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-190a"
      ]
    ],
    "members": [
      [
        "Ding Xiaoyang",
        "MSS Hainan",
        "indicted"
      ],
      [
        "Cheng Qingmin",
        "MSS Hainan",
        "indicted"
      ]
    ]
  },
  {
    "name": "Stone Panda",
    "apt": "APT10",
    "aka": "Cicada \u00b7 MenuPass \u00b7 Cloud Hopper \u00b7 Bronze Riverside",
    "country": "China",
    "agency": "MSS \u2014 Tianjin State Security Bureau",
    "motivation": "espionage",
    "active_since": 2009,
    "last_seen": 2024,
    "confidence": "high",
    "sectors": [
      "Technology",
      "Healthcare",
      "Government",
      "Defense",
      "Financial",
      "Telecom"
    ],
    "targets": [
      "USA",
      "Japan",
      "Australia",
      "UK",
      "EU"
    ],
    "description": "Operation Cloud Hopper \u2014 compromised MSPs globally for downstream client access. Two members indicted December 2018. Joint attribution by Japan, Australia, UK, EU, and US.",
    "ttps": [
      [
        "T1199",
        "Trusted Relationship (MSP)",
        "initial-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ],
      [
        "T1048",
        "Exfiltration Over Alt Protocol",
        "exfiltration"
      ]
    ],
    "malware": [
      [
        "PlugX",
        "Modular RAT",
        "Windows"
      ],
      [
        "QuasarRAT",
        "Open-source RAT",
        "Windows"
      ],
      [
        "RedLeaves",
        "Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2018-13379",
        9.8,
        "Fortinet FortiOS SSL VPN",
        2018
      ],
      [
        "CVE-2019-11510",
        10.0,
        "Pulse Connect Secure SSL VPN",
        2019
      ]
    ],
    "detections": [
      [
        "DoJ",
        "Indictment \u2014 Two MSS Tianjin Officers, Cloud Hopper (2018)",
        "https://www.justice.gov/opa/pr/two-chinese-hackers-associated-ministry-state-security-charged-global-computer-intrusion"
      ]
    ],
    "members": [
      [
        "Zhu Hua",
        "MSS Tianjin contractor",
        "indicted"
      ],
      [
        "Zhang Shilong",
        "MSS Tianjin contractor",
        "indicted"
      ]
    ]
  },
  {
    "name": "Ke3chang",
    "apt": "APT15",
    "aka": "Vixen Panda \u00b7 GREF \u00b7 Nickel \u00b7 Royal APT",
    "country": "China",
    "agency": "PLA/MSS \u2014 diplomatic-focus unit",
    "motivation": "espionage",
    "active_since": 2010,
    "last_seen": 2024,
    "confidence": "high",
    "sectors": [
      "Government",
      "Diplomatic",
      "Think Tanks",
      "Defense",
      "Energy & ICS"
    ],
    "targets": [
      "EU",
      "UK",
      "Latin America",
      "Middle East",
      "Africa"
    ],
    "description": "Long-running APT targeting diplomatic missions, foreign ministries, and embassies. Active against Latin American and African governments rarely covered by threat intel. Custom Okrum and MirageFox malware.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1547.001",
        "Registry Run Keys",
        "persistence"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ],
      [
        "T1071.001",
        "Web Protocols C2",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "Okrum",
        "Backdoor",
        "Windows"
      ],
      [
        "MirageFox",
        "Backdoor",
        "Windows"
      ],
      [
        "BS2005",
        "RAT",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2020-0688",
        8.8,
        "Exchange Validation Key",
        2020
      ]
    ],
    "detections": [
      [
        "Microsoft",
        "MSTIC: NICKEL Targeting Government Orgs in Latin America and Europe",
        "https://www.microsoft.com/en-us/security/blog/2021/12/06/nickel-targeting-government-organizations-across-latin-america-and-europe/"
      ]
    ],
    "members": []
  },
  {
    "name": "BlackTech",
    "apt": "",
    "aka": "Palmerworm \u00b7 Circuit Panda \u00b7 TEMP.Overboard",
    "country": "China",
    "agency": "MSS (Taiwan-focused unit)",
    "motivation": "espionage",
    "active_since": 2010,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Defense",
      "Technology",
      "Telecom",
      "Electronics"
    ],
    "targets": [
      "Taiwan",
      "Japan",
      "USA",
      "Southeast Asia"
    ],
    "description": "MSS unit deep-focused on Taiwan, Japan, and US defense industrial base. In 2023 NSA/CISA revealed BlackTech modifies Cisco router firmware to create covert backdoors surviving reboots. Unique hardware-level persistence.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1542.001",
        "System Firmware Modification",
        "persistence"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ]
    ],
    "malware": [
      [
        "PLEAD",
        "Backdoor",
        "Windows"
      ],
      [
        "TSCookie",
        "Backdoor",
        "Windows"
      ],
      [
        "Custom Cisco Router Implant",
        "Firmware Backdoor",
        "Cisco IOS"
      ]
    ],
    "cves": [
      [
        "CVE-2019-1649",
        6.7,
        "Cisco Router Thrangrycat",
        2019
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA23-144B \u2014 BlackTech Targets Routers US/Japan",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-144b"
      ]
    ],
    "members": []
  },
  {
    "name": "Lazarus Group",
    "apt": "",
    "aka": "HIDDEN COBRA \u00b7 Guardians of Peace \u00b7 Zinc \u00b7 TEMP.Hermit",
    "country": "North Korea",
    "agency": "RGB Bureau 121",
    "motivation": "mixed",
    "active_since": 2009,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Cryptocurrency",
      "Defense",
      "Aerospace",
      "Government",
      "Financial",
      "Healthcare"
    ],
    "targets": [
      "USA",
      "South Korea",
      "Japan",
      "Global (Crypto)"
    ],
    "description": "World's most prolific state-sponsored financial threat. Sony (2014), $81M SWIFT heist, WannaCry, $3B+ crypto theft funding DPRK WMD programs. 2024: Operation DreamJob (nuclear sector) and Operation 99 (Web3 via fake LinkedIn).",
    "ttps": [
      [
        "T1566.002",
        "Spearphishing Link (DreamJob lures)",
        "initial-access"
      ],
      [
        "T1195",
        "Supply Chain Compromise",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1027",
        "Obfuscated Files",
        "defense-evasion"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ],
      [
        "T1486",
        "Data Encrypted for Impact",
        "impact"
      ]
    ],
    "malware": [
      [
        "CookiePlus",
        "Backdoor",
        "Windows"
      ],
      [
        "MagicRAT",
        "RAT (Qt)",
        "Windows"
      ],
      [
        "NukeSped",
        "RAT",
        "Windows"
      ],
      [
        "AppleJeus",
        "Crypto-theft Trojan",
        "macOS/Windows"
      ],
      [
        "WannaCry",
        "Ransomware Worm",
        "Windows"
      ],
      [
        "ELECTRICFISH",
        "Tunneling",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2021-44228",
        10.0,
        "Apache Log4Shell",
        2021
      ],
      [
        "CVE-2023-46604",
        10.0,
        "Apache ActiveMQ RCE",
        2023
      ],
      [
        "CVE-2024-3400",
        10.0,
        "Palo Alto PAN-OS",
        2024
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA22-108A \u2014 TraderTraitor: DPRK Targets Blockchain",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-108a"
      ],
      [
        "DoJ",
        "Indictment \u2014 Park Jin Hyok (2018) & Jon Chang Hyok (2021)",
        "https://www.justice.gov/opa/pr/three-north-korean-military-hackers-indicted-wide-ranging-scheme-commit-cyberattacks-and"
      ]
    ],
    "members": [
      [
        "Park Jin Hyok",
        "RGB Bureau 121",
        "indicted"
      ],
      [
        "Jon Chang Hyok",
        "RGB Bureau 121",
        "indicted"
      ],
      [
        "Kim Il",
        "RGB Bureau 121",
        "indicted"
      ]
    ]
  },
  {
    "name": "BlueNoroff",
    "apt": "APT38",
    "aka": "Stardust Chollima \u00b7 BeagleBoyz \u00b7 NICKEL GLADSTONE",
    "country": "North Korea",
    "agency": "RGB \u2014 Financial crimes sub-unit",
    "motivation": "financial",
    "active_since": 2014,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Financial",
      "Cryptocurrency",
      "Banking"
    ],
    "targets": [
      "Global (Crypto)",
      "South Korea",
      "USA",
      "Southeast Asia"
    ],
    "description": "DPRK dedicated financial theft unit \u2014 $2B+ from SWIFT banks and crypto. FASTCash ATM cash-out across 30+ countries. ByBit exchange hack (Feb 2025) attributed \u2014 $1.5B stolen. Revenue funds DPRK nuclear program.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1055",
        "Process Injection",
        "defense-evasion"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ],
      [
        "T1485",
        "Data Destruction (post-theft)",
        "impact"
      ]
    ],
    "malware": [
      [
        "FASTCash",
        "ATM/SWIFT Malware",
        "AIX/Windows"
      ],
      [
        "FULLHOUSE",
        "Backdoor",
        "Windows"
      ],
      [
        "Hermes",
        "Ransomware/Wiper (cover)",
        "Windows"
      ],
      [
        "ELECTRICFISH",
        "Tunneling",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2022-30190",
        7.8,
        "Microsoft MSDT Follina",
        2022
      ],
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA20-239A \u2014 FASTCash 2.0 DPRK ATM Campaign",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-239a"
      ],
      [
        "FBI",
        "PSA250226 \u2014 North Korea ByBit $1.5B Hack",
        "https://www.ic3.gov/Media/Y2025/PSA250226"
      ]
    ],
    "members": []
  },
  {
    "name": "Kimsuky",
    "apt": "",
    "aka": "Velvet Chollima \u00b7 Emerald Sleet \u00b7 THALLIUM \u00b7 Springtail",
    "country": "North Korea",
    "agency": "RGB (Reconnaissance General Bureau)",
    "motivation": "espionage",
    "active_since": 2012,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Defense",
      "Think Tanks",
      "Nuclear",
      "Academia",
      "Media"
    ],
    "targets": [
      "South Korea",
      "USA",
      "Japan",
      "EU"
    ],
    "description": "DPRK intelligence collection unit gathering foreign policy, nuclear, and defense intel for regime decision-making. Impersonates journalists and academics in long-term social engineering campaigns.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1566.002",
        "Spearphishing Link",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1056.001",
        "Keylogging",
        "credential-access"
      ],
      [
        "T1560",
        "Archive Collected Data",
        "collection"
      ]
    ],
    "malware": [
      [
        "BabyShark",
        "PowerShell RAT",
        "Windows"
      ],
      [
        "AppleSeed",
        "Backdoor",
        "Windows"
      ],
      [
        "KONNI",
        "RAT",
        "Windows"
      ],
      [
        "GoldDragon",
        "Backdoor cluster",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ],
      [
        "CVE-2022-30190",
        7.8,
        "Microsoft MSDT Follina",
        2022
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA20-301A \u2014 North Korean Kimsuky Overview",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-301a"
      ]
    ],
    "members": []
  },
  {
    "name": "Andariel",
    "apt": "APT45",
    "aka": "Onyx Sleet \u00b7 Silent Chollima \u00b7 Stonefly \u00b7 PLUTONIUM",
    "country": "North Korea",
    "agency": "RGB Lab 110",
    "motivation": "mixed",
    "active_since": 2009,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Defense",
      "Healthcare",
      "Critical Infrastructure",
      "Government"
    ],
    "targets": [
      "South Korea",
      "USA",
      "Japan",
      "India"
    ],
    "description": "RGB Lab 110 conducting both espionage and ransomware. Targeted US healthcare with Maui ransomware (2021-22). In 2024 expanded nuclear espionage globally. Rim Jong Hyok indicted by DoJ.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1486",
        "Data Encrypted for Impact",
        "impact"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ]
    ],
    "malware": [
      [
        "Maui",
        "Ransomware",
        "Windows"
      ],
      [
        "Dtrack",
        "RAT",
        "Windows"
      ],
      [
        "TigerRAT",
        "RAT",
        "Windows"
      ],
      [
        "NukeSped",
        "RAT",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2021-44228",
        10.0,
        "Apache Log4Shell",
        2021
      ],
      [
        "CVE-2022-47966",
        9.8,
        "Zoho ManageEngine unauthenticated RCE",
        2022
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA22-187A \u2014 North Korea Maui Ransomware Targeting Healthcare",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-187a"
      ],
      [
        "DoJ",
        "Indictment \u2014 Rim Jong Hyok (Andariel 2024)",
        "https://www.justice.gov/opa/pr/north-korean-government-hacker-charged-involvement-ransomware-attacks-us-hospitals"
      ]
    ],
    "members": [
      [
        "Rim Jong Hyok",
        "RGB Lab 110",
        "indicted"
      ]
    ]
  },
  {
    "name": "ScarCruft",
    "apt": "APT37",
    "aka": "Reaper \u00b7 Group123 \u00b7 InkySquid \u00b7 Ricochet Chollima",
    "country": "North Korea",
    "agency": "Ministry of State Security (MSS-NK)",
    "motivation": "espionage",
    "active_since": 2012,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Defense",
      "Media",
      "Think Tanks",
      "Diplomatic"
    ],
    "targets": [
      "South Korea",
      "Japan",
      "EU",
      "Middle East"
    ],
    "description": "MSS-NK unit targeting South Korean government, defectors, and foreign policy entities. Exploits Hangul Word Processor (HWP) vulnerabilities. RokRAT uses OneDrive/Dropbox as C2 channels.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment (HWP)",
        "initial-access"
      ],
      [
        "T1203",
        "Exploitation for Client Execution",
        "execution"
      ],
      [
        "T1102",
        "Web Service C2 (cloud storage)",
        "command-and-control"
      ],
      [
        "T1560",
        "Archive Collected Data",
        "collection"
      ]
    ],
    "malware": [
      [
        "RokRAT",
        "Cloud-based RAT",
        "Windows"
      ],
      [
        "Goldbackdoor",
        "Backdoor",
        "Windows"
      ],
      [
        "DOGCALL",
        "Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2021-26411",
        8.8,
        "Internet Explorer Memory Corruption",
        2021
      ],
      [
        "CVE-2022-41128",
        8.8,
        "Windows Scripting Languages RCE",
        2022
      ]
    ],
    "detections": [
      [
        "Mandiant",
        "APT37: North Korea's Overlooked Threat Actor",
        "https://www.mandiant.com/resources/blog/apt37-overlooked-north-korean-actor"
      ]
    ],
    "members": []
  },
  {
    "name": "Charming Kitten",
    "apt": "APT35",
    "aka": "Mint Sandstorm \u00b7 PHOSPHORUS \u00b7 Magic Hound \u00b7 TA453",
    "country": "Iran",
    "agency": "IRGC (Islamic Revolutionary Guard Corps)",
    "motivation": "espionage",
    "active_since": 2014,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Think Tanks",
      "Defense",
      "Academia",
      "Media",
      "Healthcare"
    ],
    "targets": [
      "USA",
      "Israel",
      "UK",
      "EU",
      "Middle East",
      "Saudi Arabia"
    ],
    "description": "IRGC unit targeting dissidents, journalists, and officials. Extended rapport as fake journalists before delivering malware. Exploited Log4Shell within hours of public disclosure. NokNok backdoor targets macOS.",
    "ttps": [
      [
        "T1566.002",
        "Spearphishing Link",
        "initial-access"
      ],
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1056.001",
        "Keylogging",
        "credential-access"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ]
    ],
    "malware": [
      [
        "POWERSTAR/CharmPower",
        "PowerShell Backdoor",
        "Windows"
      ],
      [
        "HYPERSCRAPE",
        "Email Data Stealer",
        "Windows"
      ],
      [
        "NokNok",
        "Backdoor",
        "macOS"
      ],
      [
        "BellaCiao",
        "Web Shell",
        "Windows"
      ],
      [
        "BASICSTAR",
        "Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2021-44228",
        10.0,
        "Apache Log4Shell",
        2021
      ],
      [
        "CVE-2022-47966",
        9.8,
        "Zoho ManageEngine",
        2022
      ],
      [
        "CVE-2023-3519",
        9.8,
        "Citrix NetScaler RCE",
        2023
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA24-241A \u2014 Iran Cyber Actors Targeting Critical Infrastructure",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-241a"
      ],
      [
        "CISA",
        "AA22-257A \u2014 IRGC-Affiliated Cyber Actors",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-257a"
      ]
    ],
    "members": []
  },
  {
    "name": "OilRig",
    "apt": "APT34",
    "aka": "Helix Kitten \u00b7 COBALT GYPSY \u00b7 Crambus \u00b7 EUROPIUM",
    "country": "Iran",
    "agency": "MOIS (Ministry of Intelligence and Security)",
    "motivation": "espionage",
    "active_since": 2014,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Energy & ICS",
      "Government",
      "Financial",
      "Telecom",
      "Defense"
    ],
    "targets": [
      "Middle East",
      "Saudi Arabia",
      "UAE",
      "Israel",
      "Iraq",
      "USA"
    ],
    "description": "MOIS unit targeting Middle East governments and energy sector. Heavily uses DNS tunnelling C2 (DNSExfiltrator, DNSpionage). Tools leaked on Telegram in 2019. Operates alongside APT33 across oil/gas sector.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1071.004",
        "DNS Tunnelling C2",
        "command-and-control"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1047",
        "WMI Execution",
        "execution"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ],
      [
        "T1560",
        "Archive Collected Data",
        "collection"
      ]
    ],
    "malware": [
      [
        "RDAT",
        "Exchange-based Backdoor",
        "Windows"
      ],
      [
        "BONDUPDATER",
        "DNS Tunnelling Backdoor",
        "Windows"
      ],
      [
        "DNSpionage",
        "DNS Tunnelling Tool",
        "Windows"
      ],
      [
        "SideTwist",
        "Backdoor",
        "Windows"
      ],
      [
        "Saitama",
        "Outlook-based Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ],
      [
        "CVE-2020-0688",
        8.8,
        "Exchange Validation Key",
        2020
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA21-321A \u2014 Iranian Government-Sponsored APT Actors",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-321a"
      ]
    ],
    "members": []
  },
  {
    "name": "MuddyWater",
    "apt": "",
    "aka": "Static Kitten \u00b7 MERCURY \u00b7 Seedworm \u00b7 TA450 \u00b7 Yellow Nix",
    "country": "Iran",
    "agency": "MOIS (Ministry of Intelligence and Security)",
    "motivation": "espionage",
    "active_since": 2017,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Government",
      "Telecom",
      "Defense",
      "Energy & ICS",
      "Financial"
    ],
    "targets": [
      "Middle East",
      "USA",
      "EU",
      "Israel",
      "Saudi Arabia",
      "Turkey"
    ],
    "description": "MOIS unit deploying legitimate RMM tools (AnyDesk, SimpleHelp) as C2 to blend with normal IT traffic. PhonyC2 is their custom PowerShell C2 framework. BugSleep backdoor deployed against Israel post-October 7.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1047",
        "WMI Execution",
        "execution"
      ],
      [
        "T1219",
        "Remote Access Software (AnyDesk)",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "PhonyC2",
        "PowerShell C2 Framework",
        "Windows"
      ],
      [
        "BugSleep",
        "Custom Backdoor",
        "Windows"
      ],
      [
        "DarkBit",
        "Ransomware (Israel ops)",
        "Windows"
      ],
      [
        "PowGoop",
        "Loader",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2020-0688",
        8.8,
        "Exchange Validation Key",
        2020
      ],
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA22-055A \u2014 Iranian Government-Sponsored Actors",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-055a"
      ]
    ],
    "members": []
  },
  {
    "name": "Refined Kitten",
    "apt": "APT33",
    "aka": "Peach Sandstorm \u00b7 HOLMIUM \u00b7 Elfin \u00b7 Magnallium",
    "country": "Iran",
    "agency": "IRGC \u2014 aerospace and energy focus",
    "motivation": "mixed",
    "active_since": 2013,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Energy & ICS",
      "Aviation",
      "Defense",
      "Government",
      "Financial"
    ],
    "targets": [
      "Saudi Arabia",
      "USA",
      "South Korea",
      "EU",
      "Middle East"
    ],
    "description": "IRGC unit focused on energy, aviation, and defense. Deployed Shamoon 2 wiper against Saudi petrochemical companies. 2023: massive password spray campaign. 2024: UAE aviation sector compromised.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1110.003",
        "Password Spraying",
        "credential-access"
      ],
      [
        "T1078",
        "Valid Accounts",
        "persistence"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1485",
        "Data Destruction (Shamoon)",
        "impact"
      ]
    ],
    "malware": [
      [
        "DROPSHOT/SHAPESHIFT",
        "Dropper/Wiper",
        "Windows"
      ],
      [
        "Shamoon 2/DistTrack",
        "Destructive Wiper",
        "Windows"
      ],
      [
        "TURNEDUP",
        "Backdoor",
        "Windows"
      ],
      [
        "NANOCORE",
        "RAT",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2023-3519",
        9.8,
        "Citrix NetScaler RCE",
        2023
      ],
      [
        "CVE-2022-47966",
        9.8,
        "Zoho ManageEngine",
        2022
      ]
    ],
    "detections": [
      [
        "CISA",
        "AA23-290A \u2014 Peach Sandstorm Password Spray Campaign",
        "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-290a"
      ]
    ],
    "members": []
  },
  {
    "name": "APT39",
    "apt": "APT39",
    "aka": "Chafer \u00b7 Remix Kitten \u00b7 ITG07 \u00b7 COBALT HICKMAN",
    "country": "Iran",
    "agency": "MOIS \u2014 telecom/travel targeting",
    "motivation": "espionage",
    "active_since": 2014,
    "last_seen": 2024,
    "confidence": "high",
    "sectors": [
      "Telecom",
      "Travel",
      "Government",
      "Technology",
      "Healthcare"
    ],
    "targets": [
      "Middle East",
      "USA",
      "EU",
      "Australia",
      "South Korea"
    ],
    "description": "MOIS unit tracking individuals via telecom and travel sector compromise. Gains CDR (call detail records), geolocation, and travel booking access. Sanctioned by US Treasury alongside APT34 in 2020.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1003",
        "OS Credential Dumping",
        "credential-access"
      ],
      [
        "T1530",
        "Data from Cloud Storage",
        "collection"
      ]
    ],
    "malware": [
      [
        "SEAWEED",
        "Backdoor",
        "Windows"
      ],
      [
        "CACHEMONEY",
        "Backdoor",
        "Windows"
      ],
      [
        "POWBAT",
        "PowerShell Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2018-13379",
        9.8,
        "Fortinet FortiOS SSL VPN",
        2018
      ]
    ],
    "detections": [
      [
        "Mandiant",
        "APT39: Iranian Group Focused on Personal Information",
        "https://www.mandiant.com/resources/blog/apt39-iranian-cyber-espionage-group-focused-on-personal-information"
      ]
    ],
    "members": []
  },
  {
    "name": "Agrius",
    "apt": "",
    "aka": "Pink Sandstorm \u00b7 Agonizing Serpens \u00b7 DEV-0227",
    "country": "Iran",
    "agency": "IRGC (assessed)",
    "motivation": "destructive",
    "active_since": 2020,
    "last_seen": 2024,
    "confidence": "high",
    "sectors": [
      "Technology",
      "Academia",
      "Government",
      "Defense"
    ],
    "targets": [
      "Israel",
      "UAE",
      "South Africa"
    ],
    "description": "Iran-attributed wiper group focused on Israeli targets, deploying destructive malware disguised as ransomware. Fantasy wiper targeted diamond industry across South Africa, Israel, Hong Kong. Moneybird ransomware (2023) used as wiper.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1485",
        "Data Destruction",
        "impact"
      ],
      [
        "T1486",
        "Data Encrypted for Impact (fake ransomware)",
        "impact"
      ]
    ],
    "malware": [
      [
        "Fantasy",
        "Wiper",
        "Windows"
      ],
      [
        "Moneybird",
        "Wiper disguised as ransomware",
        "Windows"
      ],
      [
        "DEADWOOD",
        "Wiper",
        "Windows"
      ],
      [
        "IPsec Helper",
        "Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2018-13379",
        9.8,
        "Fortinet FortiOS SSL VPN",
        2018
      ]
    ],
    "detections": [
      [
        "ESET",
        "ESET Research: Agrius Fantasy Wiper \u2014 Diamond Industry",
        "https://www.welivesecurity.com/2022/05/03/new-eset-research-agrius-group-malware-diamond-industry/"
      ]
    ],
    "members": []
  },
  {
    "name": "OceanLotus",
    "apt": "APT32",
    "aka": "SeaLotus \u00b7 Canvas Cyclone \u00b7 BISMUTH \u00b7 Cobalt Kitty",
    "country": "Vietnam",
    "agency": "Vietnamese Government \u2014 Ministry of Public Security",
    "motivation": "espionage",
    "active_since": 2014,
    "last_seen": 2024,
    "confidence": "high",
    "sectors": [
      "Government",
      "Automotive",
      "Technology",
      "Media",
      "Civil Society"
    ],
    "targets": [
      "China",
      "Southeast Asia",
      "USA",
      "Germany"
    ],
    "description": "Vietnamese state APT targeting ASEAN govts, foreign companies in Vietnam, and journalists. Targeted BMW and Hyundai (2019) for automotive IP. Uses Facebook and cloud services as C2 channels.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1102",
        "Web Service C2 (Facebook)",
        "command-and-control"
      ],
      [
        "T1036",
        "Masquerading",
        "defense-evasion"
      ]
    ],
    "malware": [
      [
        "KerrDown",
        "Downloader",
        "Windows"
      ],
      [
        "OceanSalt",
        "Backdoor",
        "Windows"
      ],
      [
        "Cobalt Strike",
        "Post-exploitation",
        "Windows/Linux"
      ],
      [
        "METALJACK",
        "Backdoor",
        "macOS"
      ]
    ],
    "cves": [
      [
        "CVE-2017-11882",
        7.8,
        "Office Equation Editor",
        2017
      ],
      [
        "CVE-2018-8174",
        7.5,
        "Windows VBScript Engine",
        2018
      ]
    ],
    "detections": [
      [
        "Mandiant",
        "APT32 and the Threat to Global Corporations",
        "https://www.mandiant.com/resources/blog/cyber-espionage-apt32"
      ]
    ],
    "members": []
  },
  {
    "name": "Transparent Tribe",
    "apt": "APT36",
    "aka": "COPPER FIELDSTONE \u00b7 Mythic Leopard \u00b7 APT-C-56",
    "country": "Pakistan",
    "agency": "Pakistani ISI (assessed)",
    "motivation": "espionage",
    "active_since": 2013,
    "last_seen": 2025,
    "confidence": "high",
    "sectors": [
      "Military",
      "Government",
      "Defense",
      "Education"
    ],
    "targets": [
      "India",
      "Afghanistan",
      "USA"
    ],
    "description": "Pakistan-attributed group almost exclusively targeting Indian military and government. Distributes CrimsonRAT via fake Indian government job portals and honeytrap apps. Expanded to Linux and Android platforms.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1204.002",
        "Malicious File Execution",
        "execution"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1071.001",
        "Web Protocols C2",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "CrimsonRAT",
        "RAT",
        "Windows"
      ],
      [
        "ObliqueRAT",
        "RAT",
        "Windows"
      ],
      [
        "CAPRAT",
        "Android RAT",
        "Android"
      ]
    ],
    "cves": [
      [
        "CVE-2017-11882",
        7.8,
        "Office Equation Editor",
        2017
      ]
    ],
    "detections": [
      [
        "Mandiant",
        "Transparent Tribe (APT36): Pakistani Threat Actor",
        "https://www.mandiant.com/resources/blog/proactive-threat-identification-neutralizes-remote-access-trojan-in-south-asia"
      ]
    ],
    "members": [
      [
        "Haroon Baig",
        "Identified member",
        "identified"
      ],
      [
        "Faizan Anwer",
        "Identified member",
        "identified"
      ]
    ]
  },
  {
    "name": "SideCopy",
    "apt": "",
    "aka": "",
    "country": "Pakistan",
    "agency": "Pakistani Government \u2014 mirrors Transparent Tribe TTPs",
    "motivation": "espionage",
    "active_since": 2019,
    "last_seen": 2025,
    "confidence": "medium",
    "sectors": [
      "Military",
      "Government",
      "Defense"
    ],
    "targets": [
      "India",
      "Afghanistan"
    ],
    "description": "Named for copying SideWinder's infection chain. Targets Indian defence personnel with HTA-based delivery chains and malicious APK apps impersonating DoD/MoD portals. Deploys AllaKore RAT alongside CrimsonRAT.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1071.001",
        "Web Protocols C2",
        "command-and-control"
      ]
    ],
    "malware": [
      [
        "AllaKore RAT",
        "RAT",
        "Windows"
      ],
      [
        "CrimsonRAT",
        "RAT",
        "Windows"
      ],
      [
        "MargulasRAT",
        "RAT",
        "Windows"
      ]
    ],
    "cves": [],
    "detections": [
      [
        "Seqrite",
        "SideCopy APT: Targeting Indian Defence Forces",
        "https://www.seqrite.com/blog/sidecopy-apt-targeting-indian-defence/"
      ]
    ],
    "members": []
  },
  {
    "name": "SideWinder",
    "apt": "APT-C-17",
    "aka": "Rattlesnake \u00b7 T-APT-04 \u00b7 HoneyMyte \u00b7 Razor Tiger",
    "country": "India",
    "agency": "Indian Government \u2014 Military Intelligence (assessed)",
    "motivation": "espionage",
    "active_since": 2012,
    "last_seen": 2025,
    "confidence": "medium",
    "sectors": [
      "Military",
      "Government",
      "Defense",
      "Maritime"
    ],
    "targets": [
      "Pakistan",
      "China",
      "Nepal",
      "Sri Lanka",
      "Bangladesh",
      "Afghanistan",
      "Southeast Asia"
    ],
    "description": "India-attributed APT with extremely high-volume spearphishing \u2014 1,000+ attacks/year. In 2023-24 expanded to Middle East, Africa, and maritime organisations. Uses .lnk files and RTF exploits extensively.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ],
      [
        "T1059.005",
        "Visual Basic",
        "execution"
      ],
      [
        "T1036",
        "Masquerading",
        "defense-evasion"
      ]
    ],
    "malware": [
      [
        "ModuleInstaller",
        "Loader",
        "Windows"
      ],
      [
        "WarHawk",
        "Backdoor",
        "Windows"
      ],
      [
        "SFX RAT",
        "Self-extracting Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2017-11882",
        7.8,
        "Office Equation Editor",
        2017
      ],
      [
        "CVE-2021-26855",
        9.8,
        "Exchange ProxyLogon",
        2021
      ]
    ],
    "detections": [
      [
        "Kaspersky",
        "SideWinder APT Group \u2014 Highly Active in 2020",
        "https://securelist.com/sidewinder-apt-group/97608/"
      ]
    ],
    "members": []
  },
  {
    "name": "StrongPity",
    "apt": "",
    "aka": "PROMETHIUM \u00b7 APT-C-41 \u00b7 Magenta Dust",
    "country": "Turkey",
    "agency": "Turkish MIT (assessed)",
    "motivation": "espionage",
    "active_since": 2012,
    "last_seen": 2024,
    "confidence": "medium",
    "sectors": [
      "Government",
      "Telecom",
      "Political Targets",
      "Kurdish Community"
    ],
    "targets": [
      "Turkey",
      "Syria",
      "Italy",
      "Belgium",
      "India"
    ],
    "description": "Turkey-attributed APT targeting Kurdish communities, dissidents, and political opponents. In 2018 abused T\u00fcrk Telekom ISP for HTTP interception. Trojanises legitimate software installers (Notepad++, WinRAR) as delivery.",
    "ttps": [
      [
        "T1566.001",
        "Spearphishing Attachment",
        "initial-access"
      ],
      [
        "T1056.004",
        "Credential API Hooking",
        "credential-access"
      ],
      [
        "T1036.005",
        "Match Legitimate Name",
        "defense-evasion"
      ]
    ],
    "malware": [
      [
        "StrongPity Backdoor",
        "Modular Backdoor",
        "Windows/Android"
      ]
    ],
    "cves": [],
    "detections": [
      [
        "ESET",
        "ESET Research: PROMETHIUM Extends Global Reach",
        "https://www.welivesecurity.com/2020/07/09/promethium-extends-global-reach-europe-asia/"
      ]
    ],
    "members": []
  },
  {
    "name": "Ghostwriter",
    "apt": "UNC1151",
    "aka": "UNC1151 \u00b7 UAC-0051",
    "country": "Belarus",
    "agency": "Belarusian Military Intelligence / Russian coordination",
    "motivation": "espionage",
    "active_since": 2017,
    "last_seen": 2024,
    "confidence": "high",
    "sectors": [
      "Government",
      "Media",
      "Political Orgs",
      "Military"
    ],
    "targets": [
      "Poland",
      "Lithuania",
      "Latvia",
      "Germany",
      "Ukraine",
      "NATO"
    ],
    "description": "Belarusian/Russian joint operation conducting influence operations alongside credential harvesting. Compromises social media and publication platforms to plant false content targeting NATO members.",
    "ttps": [
      [
        "T1566.002",
        "Spearphishing Link",
        "initial-access"
      ],
      [
        "T1598.003",
        "Spearphishing for Credentials",
        "credential-access"
      ],
      [
        "T1059.001",
        "PowerShell",
        "execution"
      ]
    ],
    "malware": [
      [
        "MicroBackdoor",
        "Lightweight Backdoor",
        "Windows"
      ]
    ],
    "cves": [],
    "detections": [
      [
        "EU",
        "EU Declaration Condemning Ghostwriter/UNC1151 (2021)",
        "https://www.consilium.europa.eu/en/press/press-releases/2021/09/24/declaration-by-the-high-representative-on-behalf-of-the-european-union/"
      ]
    ],
    "members": []
  },
  {
    "name": "Unit 8200 Operators",
    "apt": "",
    "aka": "Stuxnet ops \u00b7 Duqu ops \u00b7 Flame ops",
    "country": "Israel",
    "agency": "Unit 8200 (SIGINT) / IDF Intelligence Directorate",
    "motivation": "destructive",
    "active_since": 2007,
    "last_seen": 2015,
    "confidence": "medium",
    "sectors": [
      "Nuclear",
      "Critical Infrastructure",
      "Government"
    ],
    "targets": [
      "Iran",
      "Middle East"
    ],
    "description": "Jointly attributed (with NSA) to developing Stuxnet \u2014 the first publicly-known cyberweapon \u2014 destroying ~1,000 Iranian centrifuges at Natanz. Stuxnet, Duqu, Flame, and Gauss share code-level relationships.",
    "ttps": [
      [
        "T1195",
        "Supply Chain Compromise (USB)",
        "initial-access"
      ],
      [
        "T1542.001",
        "System Firmware Modification",
        "persistence"
      ],
      [
        "T1485",
        "Data Destruction (PLC sabotage)",
        "impact"
      ]
    ],
    "malware": [
      [
        "Stuxnet",
        "ICS/SCADA Cyberweapon",
        "Windows/Siemens PLC"
      ],
      [
        "Duqu",
        "Espionage Platform",
        "Windows"
      ],
      [
        "Flame",
        "Modular Espionage Toolkit",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2010-2568",
        9.3,
        "Windows LNK Shortcut (Stuxnet 0day)",
        2010
      ]
    ],
    "detections": [
      [
        "Kaspersky",
        "Stuxnet Under the Microscope (ICS-CERT)",
        "https://ics-cert.kaspersky.com/wp-content/uploads/sites/6/2021/10/ksb-stuxnet-under-the-microscope.pdf"
      ]
    ],
    "members": []
  },
  {
    "name": "Lebanese Cedar",
    "apt": "",
    "aka": "Volatile Cedar \u00b7 STOMP",
    "country": "Lebanon",
    "agency": "Hezbollah-affiliated / Lebanese State Intelligence",
    "motivation": "espionage",
    "active_since": 2012,
    "last_seen": 2024,
    "confidence": "medium",
    "sectors": [
      "Defense",
      "Telecom",
      "Technology",
      "Government"
    ],
    "targets": [
      "Israel",
      "USA",
      "Saudi Arabia",
      "Egypt",
      "Jordan"
    ],
    "description": "Hezbollah-tied group running global campaigns against defense and telecom in Israel and the Middle East. Uses Explosive RAT and Caterpillar web shells. Targeted US telecoms in 2021.",
    "ttps": [
      [
        "T1190",
        "Exploit Public-Facing App",
        "initial-access"
      ],
      [
        "T1059.003",
        "Windows Command Shell",
        "execution"
      ],
      [
        "T1560",
        "Archive Collected Data",
        "collection"
      ]
    ],
    "malware": [
      [
        "Explosive RAT",
        "RAT",
        "Windows"
      ],
      [
        "Caterpillar",
        "Web Shell",
        "Web Servers"
      ],
      [
        "SharpStage",
        "Backdoor",
        "Windows"
      ]
    ],
    "cves": [
      [
        "CVE-2018-13379",
        9.8,
        "Fortinet FortiOS SSL VPN",
        2018
      ]
    ],
    "detections": [
      [
        "ClearSky",
        "Lebanese Cedar APT Global Espionage Campaign",
        "https://www.clearskysec.com/lebanese-cedar/"
      ]
    ],
    "members": []
  }
];
