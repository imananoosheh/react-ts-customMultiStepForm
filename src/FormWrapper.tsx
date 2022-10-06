import { ReactNode } from "react"

type FormWrapperProps ={
    title: string
    children: ReactNode
}

export function FormWrapper({title, children}: FormWrapperProps){
    return(
        <div className="form-wrapper">
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}