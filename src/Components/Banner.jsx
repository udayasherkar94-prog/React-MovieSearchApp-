import React, { useState, useEffect } from "react";

function Banner() {
  const movies = [
     
    {
      title: "Oppenheimer",
      image: "https://images.wallpapersden.com/image/download/cillian-murphy-in-oppenheimer-movie_bW1taGaUmZqaraWkpJRobWllrWdma2U.jpg",
    },

    {
      title: "Interstellar",
      image: "https://wallpapercave.com/wp/wp1817978.jpg",
    },
   {
    title:"Dhurandhar",
    image:"https://cdn.district.in/movies-assets/images/cinema/_HorizontalDhurandhar-1b8dc980-ce83-11f0-af8c-6926695421f1.jpg?im=Resize,width=720"
   }
    ,
    {
      title:"Disclosure Day",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANFqFuk-5VJb279Chm6i1tQGYaB66rAJv1Dueu6DtAg&s=10"
    },

    {
      title:"Obsession",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBu4KcU39b4uYX97ODRZiCPqPLFHTdOxnjL1KfZe1j_g&s=10"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);  // works on mounting
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // works on unounting components
  }, [movies.length]);//dependency array

  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${movies[current].image})` }}
    >
      <div className="text-white text-xl w-full text-center py-3 bg-black/40">
        {movies[current].title}
      </div>
    </div>
  );
}

export default Banner;