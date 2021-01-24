
import {User} from "./user";
import  {Company} from "./company"



export interface Mappable{

    location: {
        lat : number,
        long: number;
    } 
,

markerContent(): string;
color : string;


}
export class Map {

    private googleMap: google.maps.Map;





        constructor(Id: string) {
            this.googleMap = new google.maps.Map(document.getElementById(Id), {
              center: { lat: 0, lng: 0 },
              zoom: 1
            });
          }


//Methods


addMarker (mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long,
      }
    })

    marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: mappable.markerContent()
        });
        infoWindow.open(this.googleMap, marker);
      });


}

}
