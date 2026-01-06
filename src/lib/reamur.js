import { reamurToKelvin } from "./reamur-to-kelvin.js"
import { reamurToCelcius } from "./reamur-to-celcius.js"
import { reamurToFahrenheit } from "./reamur-to-fahrenhei.js"

export const reamur = (temp) => { 
    return{
        toKelvin : reamurToKelvin(temp), 
        toCelcius : reamurToCelcius(temp), 
        toFahrenheit : reamurToFahrenheit(temp)
    }
}