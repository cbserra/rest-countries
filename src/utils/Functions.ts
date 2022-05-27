import { Country } from "./CountryTypes";

export function getFlagImage(country: Country): string {
    if (country.flags) {
        return country.flags.svg || country.flags.png
    }

    return country.flag
}