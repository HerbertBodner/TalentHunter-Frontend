﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.11.0.0 (NJsonSchema v9.9.0.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

@Injectable()
export class CandidatesServiceClient {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:4444";
    }

    get(): Observable<CandidateDto[] | null> {
        let url_ = this.baseUrl + "/api/Candidates";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGet(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGet(response_);
                } catch (e) {
                    return <Observable<CandidateDto[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<CandidateDto[] | null>><any>Observable.throw(response_);
        });
    }

    protected processGet(response: Response): Observable<CandidateDto[] | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(CandidateDto.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<CandidateDto[] | null>(<any>null);
    }
}

@Injectable()
export class ValuesServiceClient {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:4444";
    }

    getAll(): Observable<string[] | null> {
        let url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAll(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAll(response_);
                } catch (e) {
                    return <Observable<string[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<string[] | null>><any>Observable.throw(response_);
        });
    }

    protected processGetAll(response: Response): Observable<string[] | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(item);
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<string[] | null>(<any>null);
    }

    post(value: string | null): Observable<void> {
        let url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(value);
        
        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processPost(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processPost(response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processPost(response: Response): Observable<void> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    get(id: number): Observable<string | null> {
        let url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGet(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGet(response_);
                } catch (e) {
                    return <Observable<string | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<string | null>><any>Observable.throw(response_);
        });
    }

    protected processGet(response: Response): Observable<string | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<string | null>(<any>null);
    }

    put(id: number, value: string | null): Observable<void> {
        let url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(value);
        
        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processPut(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processPut(response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processPut(response: Response): Observable<void> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    delete(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDelete(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDelete(response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDelete(response: Response): Observable<void> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

export class CandidateDto implements ICandidateDto {
    id: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    birthday: Date;
    assessmentCategory: AssessmentCategoryEnum;
    attachments?: AttachmentDto[] | undefined;

    constructor(data?: ICandidateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.firstName = data["firstName"];
            this.lastName = data["lastName"];
            this.birthday = data["birthday"] ? new Date(data["birthday"].toString()) : <any>undefined;
            this.assessmentCategory = data["assessmentCategory"];
            if (data["attachments"] && data["attachments"].constructor === Array) {
                this.attachments = [];
                for (let item of data["attachments"])
                    this.attachments.push(AttachmentDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): CandidateDto {
        let result = new CandidateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["birthday"] = this.birthday ? this.birthday.toISOString() : <any>undefined;
        data["assessmentCategory"] = this.assessmentCategory;
        if (this.attachments && this.attachments.constructor === Array) {
            data["attachments"] = [];
            for (let item of this.attachments)
                data["attachments"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ICandidateDto {
    id: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    birthday: Date;
    assessmentCategory: AssessmentCategoryEnum;
    attachments?: AttachmentDto[] | undefined;
}

export enum AssessmentCategoryEnum {
    NONE = 0, 
    DOES_NOT_MEET_HIRING_STANDARDS = 10, 
    PARTIALLY_MEETS_HIRING_STANDARDS = 20, 
    MEETS_MINIMUM_HIRING_STANDARDS = 30, 
    IDEALLY_MEETS_HIRING_STANDARDS = 40, 
    EXCEEDS_HIRING_STANDARDS = 50, 
}

export class AttachmentDto implements IAttachmentDto {
    id: number;
    fileName?: string | undefined;
    path?: string | undefined;
    previewImagePath?: string | undefined;

    constructor(data?: IAttachmentDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.fileName = data["fileName"];
            this.path = data["path"];
            this.previewImagePath = data["previewImagePath"];
        }
    }

    static fromJS(data: any): AttachmentDto {
        let result = new AttachmentDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["fileName"] = this.fileName;
        data["path"] = this.path;
        data["previewImagePath"] = this.previewImagePath;
        return data; 
    }
}

export interface IAttachmentDto {
    id: number;
    fileName?: string | undefined;
    path?: string | undefined;
    previewImagePath?: string | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = function() { 
                observer.next(this.result);
                observer.complete();
            }
            reader.readAsText(blob); 
        }
    });
}