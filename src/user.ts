import faker from "faker"
import {Mappable} from "./map"

export class User implements Mappable{

    name : string;
    location: {
        lat : number,
        long: number;
    } 
color: string = "green";

    constructor(){
this.name = faker.name.firstName();

this.location = {

    lat: parseFloat(faker.address.latitude()),
    long: parseFloat(faker.address.longitude()),
}


    }

markerContent() : string{


    return `User Name is ${this.name}`
}

}

