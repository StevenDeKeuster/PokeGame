import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class PokeapiService{
    constructor(private _http:HttpClient){}

    getPokemon1(myRandom : Number):Observable<IPokeRoot>{
        return this._http.get<IPokeRoot>("https://www.pokeapi.co/api/v2/pokemon/" + myRandom);
    }
    
    getPokemon2(myRandom : Number):Observable<IPokeRoot>{
        return this._http.get<IPokeRoot>("https://www.pokeapi.co/api/v2/pokemon/" + myRandom);
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
        stat: Stat2;
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
        move_learn_method: MoveLearnMethod;
        level_learned_at: number;
        version_group: VersionGroup;
    }

    export interface IMove2 {
        url: string;
        name: string;
    }

    export interface IMove {
        version_group_details: VersionGroupDetail[];
        move: Move2;
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
        version: Version;
        rarity: number;
    }

    export interface IHeldItem {
        item: Item;
        version_details: VersionDetail[];
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
        version: Version2;
        game_index: number;
    }

    export interface IType2 {
        url: string;
        name: string;
    }

    export interface IType {
        slot: number;
        type: Type2;
    }

    export interface IPokeRoot {
        forms: Form[];
        abilities: Ability[];
        stats: Stat[];
        name: string;
        weight: number;
        moves: Move[];
        sprites: Sprites;
        held_items: HeldItem[];
        location_area_encounters: string;
        height: number;
        is_default: boolean;
        species: Species;
        id: number;
        order: number;
        game_indices: GameIndice[];
        base_experience: number;
        types: Type[];
    }



