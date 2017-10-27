import { NgModule } from '@angular/core';

import * as ApiServiceClients from './service-client.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [HttpModule],
    providers: [
        ApiServiceClients.CandidatesServiceClient,
        ApiServiceClients.ValuesServiceClient
    ]
})
export class ServiceClientModule { }