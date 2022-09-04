import {FirebaseApp} from "firebase/app";


export interface Classes {

    getInstance(NameInstance : string) : FirebaseApp;
    getInstances() : Array<FirebaseApp>;

}