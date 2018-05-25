import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PokeapiService{
    constructor(private _http:HttpClient){}

    get Lijst():Observable<IRycycleCentreRoot>{
        return this._http.get<IRycycleCentreRoot>("http://data.be/data.json");
    }

}
    
    export interface IPaging {
        records: number;
        pages: number;
    }

    export interface ICentre {
        id: number;
        naam: string;
        straat: string;
        huisnummer: string;
    }

    export interface IRycycleCentreRoot {
        paging: IPaging;
        data: ICentre[];    
    }
