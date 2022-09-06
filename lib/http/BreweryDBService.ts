import { HTTPBaseService } from "./HTTPBaseService";

export class BreweryDBService extends HTTPBaseService {
    private static classInstance?: BreweryDBService;

    constructor() {
        super('https://api.openbrewerydb.org')
    }

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new BreweryDBService();
        }
        return this.classInstance;
    }

    public getBreweriesData = () => this.instance.get('breweries?per_page=30').then(response => {
        if (response) {
            return response.data;
        }
    })
    public getBreweriesDataByName = (name:string)=>this.instance.get(`breweries?by_name=${name}&per_page=30`).then(response => {
        if (response) {
            return response.data;
        }
    })
}