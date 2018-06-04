import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class GameapiService{
    constructor(private _http:HttpClient){}

    GetAllGamesInOrder(gen:string="", sort:string="releasedate",  dir:string="asc"):Observable<IGameRoot[]>{
        return this._http.get<IGameRoot[]>("http://localhost:16283/api/v1/games?page=0&gen=" + gen + "&sort=" + sort + "&dir=" + dir + "/" );
    }

    GetGameByName(name:string):Observable<IGameRoot>{
        return this._http.get<IGameRoot>("http://localhost:16283/api/v1/games/" + name + "/" );
    }

    PostGame(gameToPost:IGameRoot):Observable<IGameRoot>{
        return this._http.post<IGameRoot>("http://localhost:16283/api/v1/games", gameToPost);
    }

    GetAllGamesConsoles():Observable<Iconsole[]>{
        return this._http.get<Iconsole[]>("http://localhost:16283/api/v1/consoles/");
    }
    
    GetConsoleByName(name:string):Observable<Iconsole>{
        return this._http.get<Iconsole>("http://localhost:16283/api/v1/consoles/" + name + "/");
    }
    
    

}


export interface IGameRoot {
    Id: number;
    Title: string;
    Releasedate: string;
    MyConsole: Iconsole;
    MyConsoleId:number;
    Generation: number;
    BoxImageUrl: string;
}
  
export interface Iconsole {
    Id: number;
    Name: string;
    ImageUrl: string;
}

