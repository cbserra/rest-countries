export interface Country {
    "name": string,
    "topLevelDomain": string[],
    // "alpha2Code": string,
    "alpha3Code": string,
    // "callingCodes": string[],
    "capital": string,
    // "altSpellings": string[],
    "region": string,
    "subregion"?: string,
    "continent": string,
    "population": number,
    // "latlng": [
    //     number, number
    // ],
    // "demonym": string,
    // "area": number,
    // "gini": number,
    // "timezones": string[],
    "borders"?: string[],
    "nativeName": string,
    // "numericCode": string,
    "currencies": [
        {
        "code": string,
        "name": string,
        "symbol": string
        }
    ],
    "languages": [
        {
        "iso639_1": string,
        "iso639_2": string,
        "name": string,
        "nativeName": string
        }
    ],
    // "translations": {
    //     "br": string,
    //     "pt": string,
    //     "nl": string,
    //     "hr": string,
    //     "fa": string,       
    //     "de": string,
    //     "es": string,
    //     "fr": string,
    //     "ja": string,      
    //     "it": string,
    //     "hu": string,    
    // },
    "flag": string,
    "flags": {
        "svg": string,
        "png": string
    },
    // "regionalBlocs": [
    //     {
    //     "acronym": string,
    //     "name": string,
    //     "otherNames": [
    //         string
    //     ]
    //     },
    //     {
    //     "acronym": string,
    //     "name": string,
    //     "otherAcronyms": string[],
    //     "otherNames": string[]
    //     }
    // ],
    // "cioc": string,
    // "independent": boolean
}

export type CountryOption = {
    value: Country,
    label: string
}