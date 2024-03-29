const countries = [
  {
    id: 1,
    name: "Afghanistan",
    name_es: "Afganistán",
    code: "AF",
  },
  {
    id: 2,
    name: "Aland Islands",
    name_es: "Alandia",
    code: "",
  },
  {
    id: 11,
    name: "Argentina",
    name_es: "Argentina",
    code: "AR",
  },
  {
    id: 100,
    name: "Iceland",
    name_es: "Islandia",
    code: "IS",
  },
  {
    id: 101,
    name: "India",
    name_es: "India",
    code: "IN",
  },
  {
    id: 102,
    name: "Indonesia",
    name_es: "Indonesia",
    code: "ID",
  },
  {
    id: 103,
    name: "Iran",
    name_es: "Iran",
    code: "IR",
  },
  {
    id: 104,
    name: "Iraq",
    name_es: "Irak",
    code: "IQ",
  },
  {
    id: 105,
    name: "Ireland",
    name_es: "Irlanda",
    code: "IE",
  },
  {
    id: 106,
    name: "Israel",
    name_es: "Israel",
    code: "IL",
  },
  {
    id: 107,
    name: "Italy",
    name_es: "Italia",
    code: "IT",
  },
  {
    id: 108,
    name: "Jamaica",
    name_es: "Jamaica",
    code: "JM",
  },
  {
    id: 109,
    name: "Japan",
    name_es: "Japón",
    code: "JP",
  },
  {
    id: 12,
    name: "Armenia",
    name_es: "Armenia",
    code: "AM",
  },
  {
    id: 110,
    name: "Jersey",
    name_es: "Jersey",
    code: "JE",
  },
  {
    id: 111,
    name: "Jordan",
    name_es: "Jordania",
    code: "JO",
  },
  {
    id: 112,
    name: "Kazakhstan",
    name_es: "Kazajistán",
    code: "KZ",
  },
  {
    id: 113,
    name: "Kenya",
    name_es: "Kenia",
    code: "KE",
  },
  {
    id: 114,
    name: "Kiribati",
    name_es: "Kiribati",
    code: "KI",
  },
  {
    id: 248,
    name: "Kosovo",
    name_es: "",
    code: "XK",
  },
  {
    id: 117,
    name: "Kuwait",
    name_es: "Kuwait",
    code: "KW",
  },
  {
    id: 118,
    name: "Kyrgyzstan",
    name_es: "Kirguizistán",
    code: "KG",
  },
  {
    id: 119,
    name: "Laos",
    name_es: "Laos",
    code: "LA",
  },
  {
    id: 120,
    name: "Latvia",
    name_es: "Letonia",
    code: "LV",
  },
  {
    id: 13,
    name: "Aruba",
    name_es: "Aruba",
    code: "",
  },
  {
    id: 121,
    name: "Lebanon",
    name_es: "Líbano",
    code: "AW",
  },
  {
    id: 122,
    name: "Lesotho",
    name_es: "Lesotho",
    code: "LS",
  },
  {
    id: 123,
    name: "Liberia",
    name_es: "Liberia",
    code: "LR",
  },
  {
    id: 124,
    name: "Libya",
    name_es: "Libia",
    code: "LY",
  },
  {
    id: 125,
    name: "Liechtenstein",
    name_es: "Liechtenstein",
    code: "LI",
  },
  {
    id: 126,
    name: "Lithuania",
    name_es: "Lituania",
    code: "LT",
  },
  {
    id: 127,
    name: "Luxembourg",
    name_es: "Luxemburgo",
    code: "LU",
  },
  {
    id: 128,
    name: "Macau S.A.R.",
    name_es: "Macao",
    code: "MO",
  },
  {
    id: 129,
    name: "Macedonia",
    name_es: "Macedonia",
    code: "MK",
  },
  {
    id: 130,
    name: "Madagascar",
    name_es: "Madagascar",
    code: "MG",
  },
  {
    id: 14,
    name: "Australia",
    name_es: "Australia",
    code: "AU",
  },
  {
    id: 131,
    name: "Malawi",
    name_es: "Malawi",
    code: "",
  },
  {
    id: 132,
    name: "Malaysia",
    name_es: "Malasia",
    code: "MY",
  },
  {
    id: 133,
    name: "Maldives",
    name_es: "Maldivas",
    code: "MV",
  },
  {
    id: 134,
    name: "Mali",
    name_es: "Mali",
    code: "ML",
  },
  {
    id: 135,
    name: "Malta",
    name_es: "Malta",
    code: "MT",
  },
  {
    id: 136,
    name: "Man (Isle of)",
    name_es: "Isla de Man",
    code: "",
  },
  {
    id: 137,
    name: "Marshall Islands",
    name_es: "Islas Marshall",
    code: "MH",
  },
  {
    id: 138,
    name: "Martinique",
    name_es: "Martinica",
    code: "",
  },
  {
    id: 139,
    name: "Mauritania",
    name_es: "Mauritania",
    code: "MR",
  },
  {
    id: 140,
    name: "Mauritius",
    name_es: "Mauricio",
    code: "MU",
  },
  {
    id: 15,
    name: "Austria",
    name_es: "Austria",
    code: "AT",
  },
  {
    id: 141,
    name: "Mayotte",
    name_es: "Mayotte",
    code: "YT",
  },
  {
    id: 142,
    name: "Mexico",
    name_es: "México",
    code: "MX",
  },
  {
    id: 143,
    name: "Micronesia",
    name_es: "Micronesia",
    code: "FM",
  },
  {
    id: 144,
    name: "Moldova",
    name_es: "Moldavia",
    code: "MD",
  },
  {
    id: 145,
    name: "Monaco",
    name_es: "Mónaco",
    code: "MC",
  },
  {
    id: 146,
    name: "Mongolia",
    name_es: "Mongolia",
    code: "MN",
  },
  {
    id: 147,
    name: "Montenegro",
    name_es: "Montenegro",
    code: "ME",
  },
  {
    id: 148,
    name: "Montserrat",
    name_es: "Montserrat",
    code: "MS",
  },
  {
    id: 149,
    name: "Morocco",
    name_es: "Marruecos",
    code: "MA",
  },
  {
    id: 150,
    name: "Mozambique",
    name_es: "Mozambique",
    code: "MZ",
  },
  {
    id: 16,
    name: "Azerbaijan",
    name_es: "Azerbaiyán",
    code: "AZ",
  },
  {
    id: 151,
    name: "Myanmar",
    name_es: "Myanmar",
    code: "MM",
  },
  {
    id: 152,
    name: "Namibia",
    name_es: "Namibia",
    code: "",
  },
  {
    id: 153,
    name: "Nauru",
    name_es: "Nauru",
    code: "NA",
  },
  {
    id: 154,
    name: "Nepal",
    name_es: "Nepal",
    code: "NP",
  },
  {
    id: 156,
    name: "Netherlands",
    name_es: "Países Bajos",
    code: "NL",
  },
  {
    id: 157,
    name: "New Caledonia",
    name_es: "Nueva Caledonia",
    code: "NC",
  },
  {
    id: 158,
    name: "New Zealand",
    name_es: "Nueva Zelanda",
    code: "NZ",
  },
  {
    id: 159,
    name: "Nicaragua",
    name_es: "Nicaragua",
    code: "NI",
  },
  {
    id: 160,
    name: "Niger",
    name_es: "Níger",
    code: "NE",
  },
  {
    id: 161,
    name: "Nigeria",
    name_es: "Nigeria",
    code: "NG",
  },
  {
    id: 18,
    name: "Bahrain",
    name_es: "Bahrein",
    code: "BH",
  },
  {
    id: 162,
    name: "Niue",
    name_es: "Niue",
    code: "NU",
  },
  {
    id: 163,
    name: "Norfolk Island",
    name_es: "Isla de Norfolk",
    code: "",
  },
  {
    id: 115,
    name: "North Korea",
    name_es: "Corea del Norte",
    code: "KP",
  },
  {
    id: 164,
    name: "Northern Mariana Islands",
    name_es: "Islas Marianas del Norte",
    code: "MP",
  },
  {
    id: 165,
    name: "Norway",
    name_es: "Noruega",
    code: "NO",
  },
  {
    id: 166,
    name: "Oman",
    name_es: "Omán",
    code: "OM",
  },
  {
    id: 167,
    name: "Pakistan",
    name_es: "Pakistán",
    code: "PK",
  },
  {
    id: 168,
    name: "Palau",
    name_es: "Palau",
    code: "PW",
  },
  {
    id: 169,
    name: "Palestinian Territory Occupied",
    name_es: "Palestina",
    code: "PS",
  },
  {
    id: 170,
    name: "Panama",
    name_es: "Panamá",
    code: "PA",
  },
  {
    id: 19,
    name: "Bangladesh",
    name_es: "Bangladesh",
    code: "BD",
  },
  {
    id: 171,
    name: "Papua new Guinea",
    name_es: "Papúa Nueva Guinea",
    code: "PG",
  },
  {
    id: 172,
    name: "Paraguay",
    name_es: "Paraguay",
    code: "PY",
  },
  {
    id: 173,
    name: "Peru",
    name_es: "Perú",
    code: "PE",
  },
  {
    id: 174,
    name: "Philippines",
    name_es: "Filipinas",
    code: "PH",
  },
  {
    id: 175,
    name: "Pitcairn Island",
    name_es: "Islas Pitcairn",
    code: "PN",
  },
  {
    id: 176,
    name: "Poland",
    name_es: "Polonia",
    code: "PL",
  },
  {
    id: 177,
    name: "Portugal",
    name_es: "Portugal",
    code: "PT",
  },
  {
    id: 178,
    name: "Puerto Rico",
    name_es: "Puerto Rico",
    code: "PR",
  },
  {
    id: 179,
    name: "Qatar",
    name_es: "Catar",
    code: "QA",
  },
  {
    id: 180,
    name: "Reunion",
    name_es: "Reunión",
    code: "RE",
  },
  {
    id: 20,
    name: "Barbados",
    name_es: "Barbados",
    code: "BB",
  },
  {
    id: 181,
    name: "Romania",
    name_es: "Rumania",
    code: "RO",
  },
  {
    id: 182,
    name: "Russia",
    name_es: "Rusia",
    code: "RU",
  },
  {
    id: 183,
    name: "Rwanda",
    name_es: "Ruanda",
    code: "RW",
  },
  {
    id: 184,
    name: "Saint Helena",
    name_es: "Santa Helena",
    code: "SH",
  },
  {
    id: 185,
    name: "Saint Kitts And Nevis",
    name_es: "San Cristóbal y Nieves",
    code: "KN",
  },
  {
    id: 186,
    name: "Saint Lucia",
    name_es: "Santa Lucía",
    code: "LC",
  },
  {
    id: 187,
    name: "Saint Pierre and Miquelon",
    name_es: "San Pedro y Miquelón",
    code: "PM",
  },
  {
    id: 188,
    name: "Saint Vincent And The Grenadines",
    name_es: "San Vicente y Granadinas",
    code: "VC",
  },
  {
    id: 189,
    name: "Saint-Barthelemy",
    name_es: "San Bartolomé",
    code: "BL",
  },
  {
    id: 190,
    name: "Saint-Martin (French part)",
    name_es: "Saint Martin",
    code: "MF",
  },
  {
    id: 21,
    name: "Belarus",
    name_es: "Bielorrusia",
    code: "BY",
  },
  {
    id: 191,
    name: "Samoa",
    name_es: "Samoa",
    code: "WS",
  },
  {
    id: 192,
    name: "San Marino",
    name_es: "San Marino",
    code: "SM",
  },
  {
    id: 193,
    name: "Sao Tome and Principe",
    name_es: "Santo Tomé y Príncipe",
    code: "ST",
  },
  {
    id: 194,
    name: "Saudi Arabia",
    name_es: "Arabia Saudí",
    code: "SA",
  },
  {
    id: 195,
    name: "Senegal",
    name_es: "Senegal",
    code: "SN",
  },
  {
    id: 196,
    name: "Serbia",
    name_es: "Serbia",
    code: "RS",
  },
  {
    id: 197,
    name: "Seychelles",
    name_es: "Seychelles",
    code: "SC",
  },
  {
    id: 198,
    name: "Sierra Leone",
    name_es: "Sierra Leone",
    code: "SL",
  },
  {
    id: 199,
    name: "Singapore",
    name_es: "Singapur",
    code: "SG",
  },
  {
    id: 250,
    name: "Sint Maarten (Dutch part)",
    name_es: "",
    code: "SX",
  },
  {
    id: 3,
    name: "Albania",
    name_es: "Albania",
    code: "AL",
  },
  {
    id: 22,
    name: "Belgium",
    name_es: "Bélgica",
    code: "BE",
  },
  {
    id: 200,
    name: "Slovakia",
    name_es: "República Eslovaca",
    code: "SK",
  },
  {
    id: 201,
    name: "Slovenia",
    name_es: "Eslovenia",
    code: "SI",
  },
  {
    id: 202,
    name: "Solomon Islands",
    name_es: "Islas Salomón",
    code: "SB",
  },
  {
    id: 203,
    name: "Somalia",
    name_es: "Somalia",
    code: "SO",
  },
  {
    id: 204,
    name: "South Africa",
    name_es: "República de Sudáfrica",
    code: "ZA",
  },
  {
    id: 205,
    name: "South Georgia",
    name_es: "Islas Georgias del Sur y Sandwich del Sur",
    code: "",
  },
  {
    id: 116,
    name: "South Korea",
    name_es: "Corea del Sur",
    code: "KR",
  },
  {
    id: 206,
    name: "South Sudan",
    name_es: "Sudán del Sur",
    code: "SS",
  },
  {
    id: 207,
    name: "Spain",
    name_es: "España",
    code: "ES",
  },
  {
    id: 208,
    name: "Sri Lanka",
    name_es: "Sri Lanka",
    code: "LK",
  },
  {
    id: 23,
    name: "Belize",
    name_es: "Belice",
    code: "BZ",
  },
  {
    id: 209,
    name: "Sudan",
    name_es: "Sudán",
    code: "SD",
  },
  {
    id: 210,
    name: "Suriname",
    name_es: "Surinam",
    code: "SR",
  },
  {
    id: 211,
    name: "Svalbard And Jan Mayen Islands",
    name_es: "Islas Svalbard y Jan Mayen",
    code: "SJ",
  },
  {
    id: 212,
    name: "Swaziland",
    name_es: "Suazilandia",
    code: "SZ",
  },
  {
    id: 213,
    name: "Sweden",
    name_es: "Suecia",
    code: "SE",
  },
  {
    id: 214,
    name: "Switzerland",
    name_es: "Suiza",
    code: "CH",
  },
  {
    id: 215,
    name: "Syria",
    name_es: "Siria",
    code: "SY",
  },
  {
    id: 216,
    name: "Taiwan",
    name_es: "Taiwán",
    code: "TW",
  },
  {
    id: 217,
    name: "Tajikistan",
    name_es: "Tayikistán",
    code: "YJ",
  },
  {
    id: 218,
    name: "Tanzania",
    name_es: "Tanzania",
    code: "TZ",
  },
  {
    id: 24,
    name: "Benin",
    name_es: "Benín",
    code: "BJ",
  },
  {
    id: 219,
    name: "Thailand",
    name_es: "Tailandia",
    code: "TH",
  },
  {
    id: 17,
    name: "The Bahamas",
    name_es: "Bahamas",
    code: "BS",
  },
  {
    id: 220,
    name: "Togo",
    name_es: "Togo",
    code: "TG",
  },
  {
    id: 221,
    name: "Tokelau",
    name_es: "Islas Tokelau",
    code: "TK",
  },
  {
    id: 222,
    name: "Tonga",
    name_es: "Tonga",
    code: "TO",
  },
  {
    id: 223,
    name: "Trinidad And Tobago",
    name_es: "Trinidad y Tobago",
    code: "TT",
  },
  {
    id: 224,
    name: "Tunisia",
    name_es: "Túnez",
    code: "TN",
  },
  {
    id: 225,
    name: "Turkey",
    name_es: "Turquía",
    code: "TR",
  },
  {
    id: 226,
    name: "Turkmenistan",
    name_es: "Turkmenistán",
    code: "TM",
  },
  {
    id: 227,
    name: "Turks And Caicos Islands",
    name_es: "Islas Turks y Caicos",
    code: "TC",
  },
  {
    id: 25,
    name: "Bermuda",
    name_es: "Bermudas",
    code: "BM",
  },
  {
    id: 228,
    name: "Tuvalu",
    name_es: "Tuvalu",
    code: "TV",
  },
  {
    id: 229,
    name: "Uganda",
    name_es: "Uganda",
    code: "UG",
  },
  {
    id: 230,
    name: "Ukraine",
    name_es: "Ucrania",
    code: "UA",
  },
  {
    id: 231,
    name: "United Arab Emirates",
    name_es: "Emiratos Árabes Unidos",
    code: "AE",
  },
  {
    id: 232,
    name: "United Kingdom",
    name_es: "Reino Unido",
    code: "GB",
  },
  {
    id: 233,
    name: "United States",
    name_es: "Estados Unidos",
    code: "US",
  },
  {
    id: 234,
    name: "United States Minor Outlying Islands",
    name_es: "Islas Ultramarinas Menores de Estados Unidos",
    code: "",
  },
  {
    id: 235,
    name: "Uruguay",
    name_es: "Uruguay",
    code: "UY",
  },
  {
    id: 236,
    name: "Uzbekistan",
    name_es: "Uzbekistán",
    code: "UZ",
  },
  {
    id: 237,
    name: "Vanuatu",
    name_es: "Vanuatu",
    code: "VU",
  },
  {
    id: 26,
    name: "Bhutan",
    name_es: "Bután",
    code: "BT",
  },
  {
    id: 238,
    name: "Vatican City State (Holy See)",
    name_es: "Santa Sede",
    code: "VA",
  },
  {
    id: 239,
    name: "Venezuela",
    name_es: "Venezuela",
    code: "VE",
  },
  {
    id: 240,
    name: "Vietnam",
    name_es: "Vietnam",
    code: "VN",
  },
  {
    id: 241,
    name: "Virgin Islands (British)",
    name_es: "Islas Vírgenes del Reino Unido",
    code: "",
  },
  {
    id: 242,
    name: "Virgin Islands (US)",
    name_es: "Islas Vírgenes de los Estados Unidos",
    code: "",
  },
  {
    id: 243,
    name: "Wallis And Futuna Islands",
    name_es: "Wallis y Futuna",
    code: "WF",
  },
  {
    id: 244,
    name: "Western Sahara",
    name_es: "Sahara Occidental",
    code: "EH",
  },
  {
    id: 245,
    name: "Yemen",
    name_es: "Yemen",
    code: "YE",
  },
  {
    id: 246,
    name: "Zambia",
    name_es: "Zambia",
    code: "ZM",
  },
  {
    id: 247,
    name: "Zimbabwe",
    name_es: "Zimbabue",
    code: "ZW",
  },
  {
    id: 27,
    name: "Bolivia",
    name_es: "Bolivia",
    code: "BO",
  },
  {
    id: 155,
    name: "Bonaire, Sint Eustatius and Saba",
    name_es: "",
    code: "",
  },
  {
    id: 28,
    name: "Bosnia and Herzegovina",
    name_es: "Bosnia y Herzegovina",
    code: "BA",
  },
  {
    id: 29,
    name: "Botswana",
    name_es: "Botswana",
    code: "BW",
  },
  {
    id: 30,
    name: "Bouvet Island",
    name_es: "Isla Bouvet",
    code: "",
  },
  {
    id: 4,
    name: "Algeria",
    name_es: "Argelia",
    code: "DZ",
  },
  {
    id: 31,
    name: "Brazil",
    name_es: "Brasil",
    code: "BR",
  },
  {
    id: 32,
    name: "British Indian Ocean Territory",
    name_es: "Territorio Británico del Océano Índico",
    code: "",
  },
  {
    id: 33,
    name: "Brunei",
    name_es: "Brunei",
    code: "BN",
  },
  {
    id: 34,
    name: "Bulgaria",
    name_es: "Bulgaria",
    code: "BG",
  },
  {
    id: 35,
    name: "Burkina Faso",
    name_es: "Burkina Faso",
    code: "BF",
  },
  {
    id: 36,
    name: "Burundi",
    name_es: "Burundi",
    code: "BI",
  },
  {
    id: 37,
    name: "Cambodia",
    name_es: "Camboya",
    code: "KH",
  },
  {
    id: 38,
    name: "Cameroon",
    name_es: "Camerún",
    code: "CM",
  },
  {
    id: 39,
    name: "Canada",
    name_es: "Canadá",
    code: "CA",
  },
  {
    id: 40,
    name: "Cape Verde",
    name_es: "Cabo Verde",
    code: "CV",
  },
  {
    id: 5,
    name: "American Samoa",
    name_es: "Samoa Americana",
    code: "WS",
  },
  {
    id: 41,
    name: "Cayman Islands",
    name_es: "Islas Caimán",
    code: "KY",
  },
  {
    id: 42,
    name: "Central African Republic",
    name_es: "República Centroafricana",
    code: "CF",
  },
  {
    id: 43,
    name: "Chad",
    name_es: "Chad",
    code: "TD",
  },
  {
    id: 44,
    name: "Chile",
    name_es: "Chile",
    code: "CL",
  },
  {
    id: 45,
    name: "China",
    name_es: "China",
    code: "CN",
  },
  {
    id: 46,
    name: "Christmas Island",
    name_es: "Isla de Navidad",
    code: "CX",
  },
  {
    id: 47,
    name: "Cocos (Keeling) Islands",
    name_es: "Islas Cocos o Islas Keeling",
    code: "CC",
  },
  {
    id: 48,
    name: "Colombia",
    name_es: "Colombia",
    code: "CO",
  },
  {
    id: 49,
    name: "Comoros",
    name_es: "Comoras",
    code: "KM",
  },
  {
    id: 50,
    name: "Congo",
    name_es: "Congo",
    code: "CD",
  },
  {
    id: 6,
    name: "Andorra",
    name_es: "Andorra",
    code: "AD",
  },
  {
    id: 52,
    name: "Cook Islands",
    name_es: "Islas Cook",
    code: "CK",
  },
  {
    id: 53,
    name: "Costa Rica",
    name_es: "Costa Rica",
    code: "CR",
  },
  {
    id: 54,
    name: "Cote D'Ivoire (Ivory Coast)",
    name_es: "Costa de Marfil",
    code: "CI",
  },
  {
    id: 55,
    name: "Croatia",
    name_es: "Croacia",
    code: "HR",
  },
  {
    id: 56,
    name: "Cuba",
    name_es: "Cuba",
    code: "CU",
  },
  {
    id: 249,
    name: "Curaçao",
    name_es: "",
    code: "CW",
  },
  {
    id: 57,
    name: "Cyprus",
    name_es: "Chipre",
    code: "CY",
  },
  {
    id: 58,
    name: "Czech Republic",
    name_es: "República Checa",
    code: "CZ",
  },
  {
    id: 51,
    name: "Democratic Republic of the Congo",
    name_es: "Congo (Rep. Dem.)",
    code: "CD",
  },
  {
    id: 59,
    name: "Denmark",
    name_es: "Dinamarca",
    code: "DK",
  },
  {
    id: 7,
    name: "Angola",
    name_es: "Angola",
    code: "AO",
  },
  {
    id: 60,
    name: "Djibouti",
    name_es: "Yibuti",
    code: "DJ",
  },
  {
    id: 61,
    name: "Dominica",
    name_es: "Dominica",
    code: "DM",
  },
  {
    id: 62,
    name: "Dominican Republic",
    name_es: "República Dominicana",
    code: "DO",
  },
  {
    id: 63,
    name: "East Timor",
    name_es: "Timor Oriental",
    code: "TL",
  },
  {
    id: 64,
    name: "Ecuador",
    name_es: "Ecuador",
    code: "EC",
  },
  {
    id: 65,
    name: "Egypt",
    name_es: "Egipto",
    code: "EG",
  },
  {
    id: 66,
    name: "El Salvador",
    name_es: "El Salvador",
    code: "SV",
  },
  {
    id: 67,
    name: "Equatorial Guinea",
    name_es: "Guinea Ecuatorial",
    code: "GQ",
  },
  {
    id: 68,
    name: "Eritrea",
    name_es: "Eritrea",
    code: "ER",
  },
  {
    id: 69,
    name: "Estonia",
    name_es: "Estonia",
    code: "EE",
  },
  {
    id: 8,
    name: "Anguilla",
    name_es: "Anguilla",
    code: "AI",
  },
  {
    id: 70,
    name: "Ethiopia",
    name_es: "Etiopía",
    code: "ET",
  },
  {
    id: 71,
    name: "Falkland Islands",
    name_es: "Islas Malvinas",
    code: "FK",
  },
  {
    id: 72,
    name: "Faroe Islands",
    name_es: "Islas Faroe",
    code: "FO",
  },
  {
    id: 73,
    name: "Fiji Islands",
    name_es: "Fiyi",
    code: "FJ",
  },
  {
    id: 74,
    name: "Finland",
    name_es: "Finlandia",
    code: "FI",
  },
  {
    id: 75,
    name: "France",
    name_es: "Francia",
    code: "FR",
  },
  {
    id: 76,
    name: "French Guiana",
    name_es: "Guayana Francesa",
    code: "GY",
  },
  {
    id: 77,
    name: "French Polynesia",
    name_es: "Polinesia Francesa",
    code: "",
  },
  {
    id: 78,
    name: "French Southern Territories",
    name_es: "Tierras Australes y Antárticas Francesas",
    code: "",
  },
  {
    id: 79,
    name: "Gabon",
    name_es: "Gabón",
    code: "GA",
  },
  {
    id: 9,
    name: "Antarctica",
    name_es: "Antártida",
    code: "AQ",
  },
  {
    id: 80,
    name: "Gambia The",
    name_es: "Gambia",
    code: "GM",
  },
  {
    id: 81,
    name: "Georgia",
    name_es: "Georgia",
    code: "GE",
  },
  {
    id: 82,
    name: "Germany",
    name_es: "Alemania",
    code: "DE",
  },
  {
    id: 83,
    name: "Ghana",
    name_es: "Ghana",
    code: "GH",
  },
  {
    id: 84,
    name: "Gibraltar",
    name_es: "Gibraltar",
    code: "GI",
  },
  {
    id: 85,
    name: "Greece",
    name_es: "Grecia",
    code: "GR",
  },
  {
    id: 86,
    name: "Greenland",
    name_es: "Groenlandia",
    code: "GL",
  },
  {
    id: 87,
    name: "Grenada",
    name_es: "Grenada",
    code: "GD",
  },
  {
    id: 88,
    name: "Guadeloupe",
    name_es: "Guadalupe",
    code: "",
  },
  {
    id: 89,
    name: "Guam",
    name_es: "Guam",
    code: "GU",
  },
  {
    id: 10,
    name: "Antigua And Barbuda",
    name_es: "Antigua y Barbuda",
    code: "AG",
  },
  {
    id: 90,
    name: "Guatemala",
    name_es: "Guatemala",
    code: "GT",
  },
  {
    id: 91,
    name: "Guernsey and Alderney",
    name_es: "Guernsey",
    code: "GG",
  },
  {
    id: 92,
    name: "Guinea",
    name_es: "Guinea",
    code: "GN",
  },
  {
    id: 93,
    name: "Guinea-Bissau",
    name_es: "Guinea-Bisáu",
    code: "GW",
  },
  {
    id: 94,
    name: "Guyana",
    name_es: "Guyana",
    code: "GY",
  },
  {
    id: 95,
    name: "Haiti",
    name_es: "Haiti",
    code: "HT",
  },
  {
    id: 96,
    name: "Heard Island and McDonald Islands",
    name_es: "Islas Heard y McDonald",
    code: "",
  },
  {
    id: 97,
    name: "Honduras",
    name_es: "Honduras",
    code: "HN",
  },
  {
    id: 98,
    name: "Hong Kong S.A.R.",
    name_es: "Hong Kong",
    code: "HK",
  },
  {
    id: 99,
    name: "Hungary",
    name_es: "Hungría",
    code: "HU",
  },
];
export default countries;
