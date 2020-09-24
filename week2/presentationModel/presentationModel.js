
import { Observable } from "../observable/observable.js";
import { id }         from "../church/church.js";

export { Attribute }

const Attribute = value => {

    const valueObs = Observable(value); // Kappselt den Value
    const validObs = Observable(true);

    let   converter = id;
    const setConverter = newConverter => {
        converter = newConverter;
        valueObs.setValue(converter(valueObs.getValue()));
    }

    const setConvertedValue = newValue =>
        valueObs.setValue(converter(newValue));


    const setValidator = validator =>
        valueObs.onChange(val => validObs.setValue(validator(val)));


    return { valueObs, validObs, setConverter, setValidator, setConvertedValue }
};

// Methode als normale Funktion

function setConvertedValue2(newValue){
    valueObs.setValue(converter(newValue));
}



