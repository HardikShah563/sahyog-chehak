// importing from react
import React from "react";
import { RouterProvider } from "react-router-dom";
// importing from config
import router from './config/router';

export default function App() {
    return (
        <>
            <RouterProvider
                router={router}
            />
        </>
    );
};
