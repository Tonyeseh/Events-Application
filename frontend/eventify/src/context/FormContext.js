import { createContext, useState, useEffect } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
    const title = {
        0: 'Edit',
        1: 'Banner',
        2: 'Ticketing',
        3: 'review',
    }
    const [page, setPage] = useState(0)
    const [data, setFormData] = useState({
        title: '',
        category: '',
        type: '',
        session: [],
        location: '',
        description: '',
        address: '',
        ticket_type: '',
        tickets: [],
        isPublished: false,
        tags: [],
        cover_img: '',
    })

    const handleChange = e => {
        // const type = e.target.type

        const name = e.target.name

        const value = e.target.value

        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value,
            }
        })
        console.log(data)
    }

    return (
        <FormContext.Provider value={{title, page, setPage, data, setFormData, handleChange}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext
