import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { ErrorService } from "../services";
import { catchError, throwError } from "rxjs";

export const ErrorInterceptor: HttpInterceptorFn =(req,next) =>{
const errorService = inject(ErrorService)

    return next(req).pipe(
        catchError((error: HttpErrorResponse) =>{
            let errorMessage = 'An error occure'

            if(error.error instanceof ErrorEvent){
                //Client side error
                errorMessage = error.error.message
            }else{
                errorMessage = error.error?.message || error.error
            }

            errorService.setError(errorMessage)
            return throwError(()=> error)
        })
    )
}