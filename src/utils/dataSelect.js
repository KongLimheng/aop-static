import { getRandomAccount } from '.'

export const legalDocType = [
  { value: 'nid', label: 'NID' },
  { value: 'passport', label: 'Passport' },
  { value: 'other', label: 'Other' },
]

export const accountType = [
  {
    value: 'Saving Account',
    label: 'Saving Account',
  },
  {
    value: 'Current Account',
    label: 'Current Account',
  },
  {
    value: 'RGC Payroll Account',
    label: 'RGC Payroll Account',
  },
  {
    value: 'Smart Business Account',
    label: 'Smart Business Account',
  },

  {
    value: 'Teen Account',
    label: 'Teen Account',
  },
  {
    value: 'Wedding Account',
    label: 'Wedding Account',
  },
  {
    value: 'Employee Banking Account',
    label: 'Employee Banking Account (Corporate Payroll)',
  },
]

export const currency = [
  {
    value: 'usd',
    label: 'USD',
  },
  {
    value: 'khr',
    label: 'KHR',
  },
]

export const cardTypes = [
  { value: 'visa', label: 'Visa' },
  { value: 'upi', label: 'UPI' },
  { value: 'atm', label: 'ATM' },
]

export const typeOfCard = [
  {
    value: 'normal',
    label: 'Normal',
  },
  {
    value: 'vip',
    label: 'VIP',
  },
]
export const feeCharge = [
  {
    value: 'monthly',
    label: 'Monthly',
  },
  {
    value: 'yearly',
    label: 'Yearly',
  },
  {
    value: 'wave',
    label: 'Wave',
  },
]

export const maritalStatus = [
  {
    value: 'Single',
    label: 'Single',
  },
  {
    value: 'Divorced',
    label: 'Divorced',
  },
  {
    value: 'Separated',
    label: 'Separated',
  },
  {
    value: 'Widowed',
    label: 'Widowed',
  },
]

export const pickBranchs = [
  { value: 'KH0010001', label: 'Main Branch' },
  { value: 'KH0010002', label: 'Olympic Branch' },
  { value: 'KH0010003', label: ' Sihanouk Ville Branch' },

  { value: 'KH0010004', label: 'Battambang Branch' },
  { value: 'KH0010005', label: 'Kampong Cham Branch' },
  { value: 'KH0010006', label: 'Charles De Gaulle Branch' },

  { value: 'KH0010007', label: 'Pailin Branch' },
  { value: 'KH0010008', label: 'Siem Reap Sky Branch' },

  { value: 'KH0010009', label: 'Poi Pet Branch' },
]

export const staffs = [
  {
    label: 'Khan Chansreyrath',
    value: getRandomAccount(6),
  },
  {
    label: 'Kong Limheng',
    value: getRandomAccount(6),
  },
  {
    label: 'Khou Pheakdey',
    value: getRandomAccount(6),
  },
  {
    label: 'Ny Clinton',
    value: getRandomAccount(6),
  },
  {
    label: 'Nhim Monica',
    value: getRandomAccount(6),
  },
  {
    label: 'Reth Soklin',
    value: getRandomAccount(6),
  },
  {
    label: 'Sroy Thol',
    value: getRandomAccount(6),
  },
  {
    label: 'Kheut Kunthea',
    value: getRandomAccount(6),
  },
  {
    label: 'Khorl Sokleab',
    value: getRandomAccount(6),
  },
  {
    label: 'Huy Chantha',
    value: getRandomAccount(6),
  },
]

export const countries = [
  {
    code: 'AD',
    name: 'Andorra',
  },
  {
    code: 'AE',
    name: 'U.A.E',
  },
  {
    code: 'AF',
    name: 'Afghanistan',
  },
  {
    code: 'AG',
    name: 'Antigua',
  },
  {
    code: 'AI',
    name: 'Anguilla',
  },
  {
    code: 'AL',
    name: 'Albania',
  },
  {
    code: 'AM',
    name: 'Armenia',
  },
  {
    code: 'AN',
    name: 'Neth Ant.',
  },
  {
    code: 'AO',
    name: 'Angola',
  },
  {
    code: 'AQ',
    name: 'Antarctica',
  },
  {
    code: 'AR',
    name: 'Argentina',
  },
  {
    code: 'AS',
    name: 'American Samoa',
  },
  {
    code: 'AT',
    name: 'Austria',
  },
  {
    code: 'AU',
    name: 'Australia',
  },
  {
    code: 'AW',
    name: 'Aruba',
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
  },
  {
    code: 'BA',
    name: 'Bosnia-Herz',
  },
  {
    code: 'BB',
    name: 'Barbados',
  },
  {
    code: 'BD',
    name: 'Bangladesh',
  },
  {
    code: 'BE',
    name: 'Belgium',
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
  },
  {
    code: 'BG',
    name: 'Bulgaria',
  },
  {
    code: 'BH',
    name: 'Bahrain',
  },
  {
    code: 'BI',
    name: 'Burundi',
  },
  {
    code: 'BJ',
    name: 'Benin',
  },
  {
    code: 'BM',
    name: 'Bermuda',
  },
  {
    code: 'BN',
    name: 'Brunei',
  },
  {
    code: 'BO',
    name: 'Bolivia',
  },
  {
    code: 'BR',
    name: 'Brazil',
  },
  {
    code: 'BS',
    name: 'Bahamas',
  },
  {
    code: 'BT',
    name: 'Bhutan',
  },
  {
    code: 'BV',
    name: 'Bouvet Island',
  },
  {
    code: 'BW',
    name: 'Botswana',
  },
  {
    code: 'BY',
    name: 'Belarus',
  },
  {
    code: 'BZ',
    name: 'Belize',
  },
  {
    code: 'CA',
    name: 'Canada',
  },
  {
    code: 'CC',
    name: 'Cocos Islands',
  },
  {
    code: 'CD',
    name: 'Congo',
  },
  {
    code: 'CF',
    name: 'Cent Afr',
  },
  {
    code: 'CG',
    name: 'Congo',
  },
  {
    code: 'CH',
    name: 'Switzerland',
  },
  {
    code: 'CI',
    name: 'Ivory',
  },
  {
    code: 'CK',
    name: 'Cook Islands',
  },
  {
    code: 'CL',
    name: 'Chile',
  },
  {
    code: 'CM',
    name: 'Cameroon',
  },
  {
    code: 'CN',
    name: 'China',
  },
  {
    code: 'CO',
    name: 'Columbia',
  },
  {
    code: 'CR',
    name: 'Costa Rica',
  },
  {
    code: 'CU',
    name: 'Cuba',
  },
  {
    code: 'CV',
    name: 'Cape Verde',
  },
  {
    code: 'CX',
    name: 'Christmas Is.',
  },
  {
    code: 'CY',
    name: 'Cyprus',
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
  },
  {
    code: 'DE',
    name: 'Germany',
  },
  {
    code: 'DJ',
    name: 'Djibouti',
  },
  {
    code: 'DK',
    name: 'Denmark',
  },
  {
    code: 'DM',
    name: 'Dominica',
  },
  {
    code: 'DO',
    name: 'Dominican',
  },
  {
    code: 'DZ',
    name: 'Algeria',
  },
  {
    code: 'EC',
    name: 'Ecuador',
  },
  {
    code: 'EE',
    name: 'Estonia',
  },
  {
    code: 'EG',
    name: 'Egypt',
  },
  {
    code: 'EH',
    name: 'Western Sahara',
  },
  {
    code: 'ER',
    name: 'Eritrea',
  },
  {
    code: 'ES',
    name: 'Spain',
  },
  {
    code: 'ET',
    name: 'Ethiopia',
  },
  {
    code: 'EU',
    name: 'EUR Countries',
  },
  {
    code: 'FI',
    name: 'Finland',
  },
  {
    code: 'FJ',
    name: 'Fiji',
  },
  {
    code: 'FK',
    name: 'Falkland Is.',
  },
  {
    code: 'FM',
    name: 'Micronesia',
  },
  {
    code: 'FO',
    name: 'Faroe Islands',
  },
  {
    code: 'FR',
    name: 'France',
  },
  {
    code: 'GA',
    name: 'Gabon',
  },
  {
    code: 'GB',
    name: 'G.B.',
  },
  {
    code: 'GD',
    name: 'Grenada',
  },
  {
    code: 'GE',
    name: 'Georgia',
  },
  {
    code: 'GF',
    name: 'French Guiana',
  },
  {
    code: 'GG',
    name: 'Channel Islands',
  },
  {
    code: 'GH',
    name: 'Ghana',
  },
  {
    code: 'GI',
    name: 'Gibraltar',
  },
  {
    code: 'GL',
    name: 'Greenland',
  },
  {
    code: 'GM',
    name: 'Gambia',
  },
  {
    code: 'GN',
    name: 'Guinea',
  },
  {
    code: 'GO',
    name: 'GOLD',
  },
  {
    code: 'GP',
    name: 'Guadeloupe',
  },
  {
    code: 'GQ',
    name: 'Equ. Guinea',
  },
  {
    code: 'GR',
    name: 'Greece',
  },
  {
    code: 'GS',
    name: 'S Georgia',
  },
  {
    code: 'GT',
    name: 'Guatemala',
  },
  {
    code: 'GU',
    name: 'Guam',
  },
  {
    code: 'GW',
    name: 'Guinea-Bissau',
  },
  {
    code: 'GY',
    name: 'Guyana',
  },
  {
    code: 'HK',
    name: 'H.K.',
  },
  {
    code: 'HM',
    name: 'Heard .McDonald',
  },
  {
    code: 'HN',
    name: 'Honduras',
  },
  {
    code: 'HR',
    name: 'Croatia',
  },
  {
    code: 'HT',
    name: 'Haiti',
  },
  {
    code: 'HU',
    name: 'Hungary',
  },
  {
    code: 'ID',
    name: 'Indonesia',
  },
  {
    code: 'IE',
    name: 'Ireland',
  },
  {
    code: 'IL',
    name: 'Israel',
  },
  {
    code: 'IM',
    name: 'Isle of Man',
  },
  {
    code: 'IN',
    name: 'India',
  },
  {
    code: 'IO',
    name: 'Br Ind. Oc. Ter',
  },
  {
    code: 'IQ',
    name: 'Iraq',
  },
  {
    code: 'IR',
    name: 'Iran',
  },
  {
    code: 'IS',
    name: 'Iceland',
  },
  {
    code: 'IT',
    name: 'Italy',
  },
  {
    code: 'JE',
    name: 'Jersey',
  },
  {
    code: 'JM',
    name: 'Jamaica',
  },
  {
    code: 'JO',
    name: 'Jordan',
  },
  {
    code: 'JP',
    name: 'Japan',
  },
  {
    code: 'KE',
    name: 'Kenya',
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan',
  },
  {
    code: 'KH',
    name: 'Cambodia',
  },
  {
    code: 'KI',
    name: 'Kiribati',
  },
  {
    code: 'KM',
    name: 'Comoro',
  },
  {
    code: 'KN',
    name: 'St Kitts .Nevis',
  },
  {
    code: 'KP',
    name: 'Korea',
  },
  {
    code: 'KR',
    name: 'Korea, Rep. of',
  },
  {
    code: 'KW',
    name: 'Kuwait',
  },
  {
    code: 'KY',
    name: 'Cayman Islands',
  },
  {
    code: 'KZ',
    name: 'Kazakstan',
  },
  {
    code: 'LA',
    name: 'Lao',
  },
  {
    code: 'LB',
    name: 'Lebanon',
  },
  {
    code: 'LC',
    name: 'St. Lucia',
  },
  {
    code: 'LI',
    name: 'Liecht',
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
  },
  {
    code: 'LR',
    name: 'Liberia',
  },
  {
    code: 'LS',
    name: 'Lesotho',
  },
  {
    code: 'LT',
    name: 'Lithuania',
  },
  {
    code: 'LU',
    name: 'Luxembourg',
  },
  {
    code: 'LV',
    name: 'Latvia',
  },
  {
    code: 'LY',
    name: 'Libya',
  },
  {
    code: 'MA',
    name: 'Morocco',
  },
  {
    code: 'MC',
    name: 'Monaco',
  },
  {
    code: 'MD',
    name: 'Moldova, Rep of',
  },
  {
    code: 'MG',
    name: 'Madagascar',
  },
  {
    code: 'MH',
    name: 'Marshall Is.',
  },
  {
    code: 'MK',
    name: 'Macedonia',
  },
  {
    code: 'ML',
    name: 'Mali',
  },
  {
    code: 'MM',
    name: 'Myanmar',
  },
  {
    code: 'MN',
    name: 'Mongolia',
  },
  {
    code: 'MO',
    name: 'Macau',
  },
  {
    code: 'MP',
    name: 'N. Mariana Is.',
  },
  {
    code: 'MQ',
    name: 'Martinique',
  },
  {
    code: 'MR',
    name: 'Mauritania',
  },
  {
    code: 'MS',
    name: 'Monserrat',
  },
  {
    code: 'MT',
    name: 'Malta',
  },
  {
    code: 'MU',
    name: 'Mauritius',
  },
  {
    code: 'MV',
    name: 'Maldives',
  },
  {
    code: 'MW',
    name: 'Malawi',
  },
  {
    code: 'MX',
    name: 'Mexico',
  },
  {
    code: 'MY',
    name: 'Malaysia',
  },
  {
    code: 'MZ',
    name: 'Mozambique',
  },
  {
    code: 'NA',
    name: 'Namibia',
  },
  {
    code: 'NC',
    name: 'New Caledonia',
  },
  {
    code: 'NE',
    name: 'Niger',
  },
  {
    code: 'NF',
    name: 'Norfolk Island',
  },
  {
    code: 'NG',
    name: 'Nigeria',
  },
  {
    code: 'NI',
    name: 'Nicaragua',
  },
  {
    code: 'NL',
    name: 'Netherlands',
  },
  {
    code: 'NO',
    name: 'Norway',
  },
  {
    code: 'NP',
    name: 'Nepal',
  },
  {
    code: 'NR',
    name: 'Nauru',
  },
  {
    code: 'NU',
    name: 'Niue',
  },
  {
    code: 'NZ',
    name: 'N.Z.',
  },
  {
    code: 'OM',
    name: 'Oman',
  },
  {
    code: 'OT',
    name: 'Non-Resident',
  },
  {
    code: 'PA',
    name: 'Panama',
  },
  {
    code: 'PE',
    name: 'Peru',
  },
  {
    code: 'PF',
    name: 'Fr. Polynesia',
  },
  {
    code: 'PG',
    name: 'Pap. New Guinea',
  },
  {
    code: 'PH',
    name: 'Philippines',
  },
  {
    code: 'PI',
    name: 'PLATINUM',
  },
  {
    code: 'PK',
    name: 'Pakistan',
  },
  {
    code: 'PL',
    name: 'Poland',
  },
  {
    code: 'PM',
    name: 'St. Pierre',
  },
  {
    code: 'PN',
    name: 'Pitcairn',
  },
  {
    code: 'PR',
    name: 'Puerto Rico',
  },
  {
    code: 'PT',
    name: 'Portugal',
  },
  {
    code: 'PW',
    name: 'Palau',
  },
  {
    code: 'PY',
    name: 'Paraguay',
  },
  {
    code: 'QA',
    name: 'Qatar',
  },
  {
    code: 'RE',
    name: 'Reunion',
  },
  {
    code: 'RO',
    name: 'Romania',
  },
  {
    code: 'RS',
    name: 'Serbia',
  },
  {
    code: 'RU',
    name: 'Russian Fed',
  },
  {
    code: 'RW',
    name: 'Rwanda',
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
  },
  {
    code: 'SB',
    name: 'Solomon Islands',
  },
  {
    code: 'SC',
    name: 'Seychelles',
  },
  {
    code: 'SD',
    name: 'Sudan',
  },
  {
    code: 'SE',
    name: 'Sweden',
  },
  {
    code: 'SG',
    name: 'Singapore',
  },
  {
    code: 'SH',
    name: 'St. Helena',
  },
  {
    code: 'SI',
    name: 'Slovenia',
  },
  {
    code: 'SJ',
    name: 'Svalbard',
  },
  {
    code: 'SK',
    name: 'Slovakia',
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
  },
  {
    code: 'SM',
    name: 'San Marino',
  },
  {
    code: 'SN',
    name: 'Senegal',
  },
  {
    code: 'SO',
    name: 'Somalia',
  },
  {
    code: 'SR',
    name: 'Suriname',
  },
  {
    code: 'SS',
    name: 'SILVER',
  },
  {
    code: 'ST',
    name: 'Sao Tome',
  },
  {
    code: 'SV',
    name: 'El Salvador',
  },
  {
    code: 'SY',
    name: 'Syria',
  },
  {
    code: 'SZ',
    name: 'Swaziland',
  },
  {
    code: 'TC',
    name: 'Turks . Caicos',
  },
  {
    code: 'TD',
    name: 'Chad',
  },
  {
    code: 'TF',
    name: 'Fr. S. Territ.',
  },
  {
    code: 'TG',
    name: 'Togo',
  },
  {
    code: 'TH',
    name: 'Thailand',
  },
  {
    code: 'TJ',
    name: 'Tajikistan',
  },
  {
    code: 'TK',
    name: 'Tokelau',
  },
  {
    code: 'TM',
    name: 'Turkmenistan',
  },
  {
    code: 'TN',
    name: 'Tunisia',
  },
  {
    code: 'TO',
    name: 'Tonga',
  },
  {
    code: 'TP',
    name: 'East Timor',
  },
  {
    code: 'TR',
    name: 'Turkey',
  },
  {
    code: 'TT',
    name: 'Trinidad Tobago',
  },
  {
    code: 'TV',
    name: 'Tuvalu',
  },
  {
    code: 'TW',
    name: 'Taiwan',
  },
  {
    code: 'TZ',
    name: 'Tanzania',
  },
  {
    code: 'UA',
    name: 'Ukraine',
  },
  {
    code: 'UG',
    name: 'Uganda',
  },
  {
    code: 'UK',
    name: 'U.K',
  },
  {
    code: 'UM',
    name: 'US Minor Out Is',
  },
  {
    code: 'US',
    name: 'USA',
  },
  {
    code: 'UY',
    name: 'Uruguay',
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
  },
  {
    code: 'VA',
    name: 'Vatican',
  },
  {
    code: 'VC',
    name: 'St. Vincent',
  },
  {
    code: 'VE',
    name: 'Venezuala',
  },
  {
    code: 'VG',
    name: 'Virgin Islands',
  },
  {
    code: 'VI',
    name: 'Virgin Islands',
  },
  {
    code: 'VN',
    name: 'Vietnam',
  },
  {
    code: 'VU',
    name: 'Vanuatu',
  },
  {
    code: 'WF',
    name: 'Wallis .Futuna',
  },
  {
    code: 'WS',
    name: 'Samoa',
  },
  {
    code: 'XA',
    name: 'XAU and XAG',
  },
  {
    code: 'XE',
    name: 'Europa',
  },
  {
    code: 'XG',
    name: 'Gold',
  },
  {
    code: 'XP',
    name: 'XPD AND XPT',
  },
  {
    code: 'XS',
    name: 'Silver',
  },
  {
    code: 'XX',
    name: 'Worldwide',
  },
  {
    code: 'YE',
    name: 'Yemen',
  },
  {
    code: 'YT',
    name: 'Mayotte',
  },
  {
    code: 'YU',
    name: 'Yugoslavia',
  },
  {
    code: 'ZA',
    name: 'South Afr',
  },
  {
    code: 'ZM',
    name: 'Zambia',
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
  },
]
