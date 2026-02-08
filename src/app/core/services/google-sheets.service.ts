import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GoogleSheetsService {
    /**
     * GCP Cloud Function URL
     */
    private readonly CLOUD_FUNCTION_URL = 'https://aarogyaghar-google-sheet-427845853084.asia-south1.run.app';

    constructor(private http: HttpClient) { }

    submitForm(formData: any): Observable<any> {
        // Mapping frontend fields to Cloud Function expected schema
        const payload = {
            fullName: formData.name,
            phoneNumber: formData.phone,
            age: formData.age,
            email: formData.email || 'N/A',
            assistanceType: formData.assistanceType
        };

        // Adding Authorization header as required by the Cloud Function
        // Replace 'YOUR_TOKEN_HERE' with a valid identity token if needed for production
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.CLOUD_FUNCTION_URL, payload, { headers });
    }
}
