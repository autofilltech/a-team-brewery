import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export abstract class HTTPBaseService {
    protected instance: AxiosInstance;
    protected readonly baseURL: string;

    public constructor(baseURL: string) {
        this.baseURL = baseURL;
        this.instance = axios.create({
            baseURL
        });

        this.initializeRequestInterceptor();
        this.initializeResponseInterceptor();
    }

    private initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(this.handleRequest);
    };

    private initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(response => {
            return response;
        }, this.handleError);
    }

    private handleRequest = (config: AxiosRequestConfig) => {
        return config;
    };

    private handleError = async (error: AxiosError) => {

    }
}