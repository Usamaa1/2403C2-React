import axios from 'axios'
import React from 'react'

export const Api = axios.create({
    baseURL: "http://localhost:3000/api/v1/",
    withCredentials: true
}
)

