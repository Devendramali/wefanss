import React from 'react'
import MoviesDetails from './MoviesDetails'

const MoviesCotext = {
    Contenttype:"Webseries",
    MoviesSliderdata: {
        type:"banner",
        bannerSlider:[
            {
                id: 1,
                name: "Mission Impossible",
                img: "/md.png",
                year: "2019",
                category: "Thriller",
                language: ["Marathi", "Hindi", "English", "More"],
                status:"ongoing",
                platform:"Jio Hotstar",
                season: {
                    season1: {
                        totalEp: 32
                    },
                    season2: {
                        totalEp: 36
                    },
                    season3: {
                        totalEp: 43
                    },
                    season4: {
                        totalEp: 20
                    }
                },
                
                rating: [
                    {
                        img: "/rating/1.png",
                        per: 7.2,
                        site: "IMDb"

                    },
                    {

                        img: "/rating/2.png",
                        per: 7,
                        site: "Wefanss"
                    }
                ],
                dis: '"Mission Impossible" follows Ethan Hunt, a secret agent framed for the murder of his team. To clear his name, he must undertake a series of high-stakes missions, using cutting-edge technology and his exceptional skills to outsmart his enemies and uncover the truth.',
                cast: "Alex Carter, Mia Chen, Jordan Lee, Sofia Martinez, Liam O'Connor, Zoe Kim, Marcus Reed ,Alex Carter, Mia Chen, Jordan Lee, Sofia Martinez, Liam O'Connor, Zoe Kim, Marcus Reed"
            },

        ]
    },

    Thriller: {
        title: "Thriller",
        type: "suggestion",
        mainclass: "",
        movies: [
            {
                id: 1,
                title: "Star Wars Rogue One",
                img: "/md.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 2,
                title: "Star Wars Rogue One",
                img: "/md.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 3,
                title: "Star Wars Rogue One",
                img: "/md.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 4,
                title: "Star Wars Rogue One",
                img: "/md.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
        ]
    },

    Adventure: {
        title: "Adventure",
        mainclass: "bg-[#fff]",
        type: "suggestion",
        movies: [
            {
                id: 1,
                title: "Star Wars Rogue One",
                img: "/md.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 2,
                title: "Star Wars Rogue One",
                img: "/md.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 3,
                title: "Star Wars Rogue One",
                img: "/md.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 4,
                title: "Star Wars Rogue One",
                img: "/md.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
        ]
    },
    Documentaries: {
        title: "Documentaries",
        mainclass: "bg-[#fff]",
        type: "suggestion",
        movies: [
            {
                id: 1,
                title: "Star Wars Rogue One",
                img: "/doc.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 2,
                title: "Star Wars Rogue One",
                img: "/doc.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 3,
                title: "Star Wars Rogue One",
                img: "/doc.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 4,
                title: "Star Wars Rogue One",
                img: "/doc.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
        ]
    },
    Comedy: {
        title: "Comedy",
        mainclass: "bg-[#F4FBFF]",
        type: "suggestion",
        movies: [
            {
                id: 1,
                title: "Star Wars Rogue One",
                img: "/comedy.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 2,
                title: "Star Wars Rogue One",
                img: "/comedy.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 3,
                title: "Star Wars Rogue One",
                img: "/comedy.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 4,
                title: "Star Wars Rogue One",
                img: "/comedy.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
        ]
    },
    Action: {
        title: "Action",
        mainclass: "bg-[#F4FBFF]",
        type: "suggestion",
        movies: [
            {
                id: 1,
                title: "Star Wars Rogue One",
                img: "/action.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 2,
                title: "Star Wars Rogue One",
                img: "/action.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 3,
                title: "Star Wars Rogue One",
                img: "/action.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 4,
                title: "Star Wars Rogue One",
                img: "/action.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
        ]
    },
}

const Webseries = () => {
  return (
     <MoviesDetails context={MoviesCotext}/>
  )
}

export default Webseries