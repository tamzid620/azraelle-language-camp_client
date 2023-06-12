import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = ` ${title} - Handy Toy `;
    }, [title])
}

export default useTitle;
