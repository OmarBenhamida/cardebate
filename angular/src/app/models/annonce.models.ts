import { Compte } from './Compte.models';

export class Annonce {



    id: number;
    Marque: string;
    Model: string;
    Prix: number;
    Km: number;
    Description: string;
    anneeModel: number;
    carburant: string;
    idUser: number;
    compte: Compte;


}