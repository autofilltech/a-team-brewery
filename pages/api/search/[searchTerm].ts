import type { NextApiRequest, NextApiResponse } from 'next'
import { BreweryDBService } from '../../../lib/http/BreweryDBService';
import { BrewsData } from '../../../lib/search/types';
let breweryDBService!: BreweryDBService;

export type IApiSearchResponseData = BrewsData[];
export default function userHandler(req: NextApiRequest,
    res: NextApiResponse<IApiSearchResponseData>) {
    const {
        query: { searchTerm }
    } = req

    breweryDBService = BreweryDBService.getInstance()
    if (searchTerm !== undefined) {
        breweryDBService.getBreweriesDataByName(searchTerm.toString()).then(data => {
            res.status(200).json(data);
        })
    } else { res.status(400).json([]); }


}