import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class PokeapiService{
    constructor(private _http:HttpClient){}

    getPokemonByNumber(myNumber : number):Observable<IPokeRoot>{
        return this._http.get<IPokeRoot>("https://www.pokeapi.co/api/v2/pokemon/" + myNumber + "/");
    }

    getPokemonByName(myName : string):Observable<IPokeRoot>{
        return this._http.get<IPokeRoot>("https://www.pokeapi.co/api/v2/pokemon/" + myName + "/");
    }
    

}
    export interface IForm {
        url: string;
        name: string;
    }

    export interface IAbility2 {
        url: string;
        name: string;
    }

    export interface IAbility {
        slot: number;
        is_hidden: boolean;
        ability: IAbility2;
    }

    export interface IStat2 {
        url: string;
        name: string;
    }

    export interface IStat {
        stat: IStat2;
        effort: number;
        base_stat: number;
    }

    export interface IMoveLearnMethod {
        url: string;
        name: string;
    }

    export interface IVersionGroup {
        url: string;
        name: string;
    }

    export interface IVersionGroupDetail {
        move_learn_method: IMoveLearnMethod;
        level_learned_at: number;
        version_group: IVersionGroup;
    }

    export interface IMove2 {
        url: string;
        name: string;
    }

    export interface IMove {
        version_group_details: IVersionGroupDetail[];
        move: IMove2;
    }

    export interface ISprites {
        back_female?: any;
        back_shiny_female?: any;
        back_default: string;
        front_female?: any;
        front_shiny_female?: any;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    }

    export interface IItem {
        url: string;
        name: string;
    }

    export interface IVersion {
        url: string;
        name: string;
    }

    export interface IVersionDetail {
        version: IVersion;
        rarity: number;
    }

    export interface IHeldItem {
        item: IItem;
        version_details: IVersionDetail[];
    }

    export interface ISpecies {
        url: string;
        name: string;
    }

    export interface IVersion2 {
        url: string;
        name: string;
    }

    export interface IGameIndice {
        version: IVersion2;
        game_index: number;
    }

    export interface IType2 {
        url: string;
        name: string;
    }

    export interface IType {
        slot: number;
        type: IType2;
    }

    export interface IPokeRoot {
        forms: IForm[];
        abilities: IAbility[];
        stats: IStat[];
        name: string;
        weight: number;
        moves: IMove[];
        sprites: ISprites;
        held_items: IHeldItem[];
        location_area_encounters: string;
        height: number;
        is_default: boolean;
        species: ISpecies;
        id: number;
        order: number;
        game_indices: IGameIndice[];
        base_experience: number;
        types: IType[];
    }



