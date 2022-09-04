import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore, collection, getDoc } from "firebase/firestore/lite"
import {isArray, isObject, merge} from "lodash";
import ConstructorInterfaces from "./Interfaces/ConstructorInterfaces";
import {ConfigConstructorDefault} from "./Const/ConfigConst";
import {ConfigConstructor} from "./Types/Constructor";
import {Classes} from "./Interfaces/Classes";
import firebase from "firebase/compat";

export class Firebase implements Classes {

    static get CurrentInstance(): FirebaseApp | undefined {
        return this._CurrentInstance;
    }

    static set CurrentInstance(value: FirebaseApp | undefined) {
        this._CurrentInstance = value;
    }

    get mConfig(): ConfigConstructor {
        return this._mConfig;
    }

    set mConfig(value: ConfigConstructor) {
        this._mConfig = value;
    }

    private _mConfig : ConfigConstructor = [];

    private static _CurrentInstance : FirebaseApp | undefined = undefined;

    constructor(config : ConfigConstructor = ConfigConstructorDefault) {
        this.mConfig = merge(ConfigConstructorDefault, config);

        if (isArray(this.mConfig)){
            this.mConfig.forEach(async (config) => {
                Firebase.CurrentInstance = initializeApp(config.FirebaseOptions, config.NameInstances);
            });
        }else if (isObject(this.mConfig)){
            Firebase.CurrentInstance = initializeApp(this.mConfig.FirebaseOptions, this.mConfig.settings)
        }
    }

    getInstance(NameInstance : string) : FirebaseApp {
        return getApp(NameInstance);
    }

    getInstances() : Array<FirebaseApp> {
        return getApps()
    }

}

export default Firebase;