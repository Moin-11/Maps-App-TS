import faker from "faker"
import {Mappable} from "./map"


export class Company implements Mappable{

    companyName : string;

    catchPhrase:  string;

    location: {
        lat : number,
        long: number;
    } 

    color: string = "blue";

constructor(){

    this.companyName= faker.name.firstName();

    this.catchPhrase = faker.company.catchPhrase();
this.location = {

    lat: parseFloat(faker.address.latitude()),
    long: parseFloat(faker.address.longitude()),
}





}

markerContent() : string{


    return `
    <div>
    <h1> Company Name is ${this.companyName} </h1>
    <h3> CatchPhrase is ${this.catchPhrase} </h3>
    </div>
    `

}

}