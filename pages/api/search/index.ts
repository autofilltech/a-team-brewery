import type { NextApiRequest, NextApiResponse } from 'next';
import { BreweryDBService } from '../../../lib/http/BreweryDBService'
import { ISearchBreweryData } from '../../../lib/search/types';


interface IApiSearchRequest extends NextApiRequest {
    body: { searchTerm?: string };
}

export type IApiSearchResponseData = ISearchBreweryData[];

let breweryDBService!: BreweryDBService;

export default function handler(
    req: IApiSearchRequest,
    res: NextApiResponse<IApiSearchResponseData>
) {
    if (req.method === 'POST') {
        breweryDBService = BreweryDBService.getInstance()
        breweryDBService.getBreweriesData().then(data => {
            res.status(200).json(data);
        })
    } else {
        res.status(400).json([]);
    }
}