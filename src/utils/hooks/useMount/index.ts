import { useEffect } from "react";

type callback = () => any;

export const useMount = (callback: callback) => {
    useEffect(callback,[]);
}
