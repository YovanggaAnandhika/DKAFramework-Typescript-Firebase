import {FirebaseOptions} from "@firebase/app";
import { FirebaseAppSettings } from "firebase/app";


export interface ConstructorInterfaces {
    NameInstances : string | undefined,
    FirebaseOptions : FirebaseOptions,
    settings ?: FirebaseAppSettings | undefined
}

export default ConstructorInterfaces