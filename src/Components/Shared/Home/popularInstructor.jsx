import PhotoAlbum from "react-photo-album";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { useState } from "react";
import { useEffect } from "react";

const PopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const [instructors, setInstructors] = useState([]);

    const photos = [
        { src: "https://marvel-b1-cdn.bc0a.com/f00000000283318/faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/20190620_meuller_eb_002.jpg?itok=wqOUxg0p", width: 800, height: 600 },
        { src: "http://eyesurgeons.com.sg/assets/Dr-Heng-Li-Wei.jpg", width: 800, height: 600 },
        { src: "https://aging.brown.edu/sites/default/files/Screen%20Shot%202022-08-14%20at%202.23.10%20PM.png", width: 800, height: 600 },
        { src: "https://www.celebrityspeakers.com.au/content/uploads/2020/12/Dr-John-Smith-1-website.jpeg", width: 800, height: 600 },
        { src: "https://faculty.mdanderson.org/content/dam/mdanderson/images/fis/alma_rodriguez.jpg.resize.405.575.high.jpg", width: 800, height: 600 },
        { src: "https://www.pretpro.fr/wp-content/uploads/2021/03/Giulia-BIANCHI-.jpg", width: 800, height: 600 },
    ];

    useEffect(() => {
        axiosSecure
            .get('/course')
            .then((res) => setInstructors(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure]);

    return (
        <div className="my-20">
            <h1 className="flex justify-center font-bold text-3xl text-blue-900 uppercase">Popular Instructor</h1>
            <div className='mt-10'>
            <PhotoAlbum photos={photos} layout="rows" />
            </div>
        </div>
    );
};

export default PopularInstructor;