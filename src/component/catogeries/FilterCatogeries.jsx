import { ArrowUpDown, Search, SlidersHorizontal } from 'lucide-react'
import React, { useState } from "react";
import CatogeriesCard from './CatogeriesCard';


const FilterCatogeries = () => {
    const [search, setSearch] = useState("");
    const allLanguages = ["Hindi", "English", "Marathi"];
    const [showFilters, setShowFilters] = useState(false);
    const [sortOrder, setSortOrder] = useState(null);




    const actorsData = [
  {
    id: 1,
    name: "Chris Evans",
    gender: "Male",
    language: ["English"],
    age: 42,
    totalMovies: 38,
    cardcalss:"lg:col-span-1 md:col-span-2 col-span-4",
    totalAwards: 15,
    img: "/catogary/cat1.jpg",
    link:"/profiles"
  },
  {
    id: 2,
    name: "Florence Pugh",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:col-span-2 col-span-4",
    language: ["Hindi", "English"],
    age: 38,
    totalMovies: 30,
    totalAwards: 25,
     img: "/catogary/cat2.jpg",
      link:"/profiles"
  },
  {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:col-span-2 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:col-span-2 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 5,
    name: "Scarlett Johansson",
    gender: "Female",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
     cardcalss:"lg:col-span-1 md:col-span-2 col-span-4",
    totalAwards: 28,
     img: "/catogary/cat3.jpg",
      link:"/profiles"
  },
  {
    id: 6,
    name: "Chris Hemsworth",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:col-span-2 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat6.jpg",
      link:"/profiles"
  },
   {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:col-span-2 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:col-span-2 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },

      ];
    const [gender, setGender] = useState("All");
  const [languages, setLanguages] = useState([]);
const [searchLang, setSearchLang] = useState("");

  const [selectedAge, setSelectedAge] = useState([]);

  const ageOptions = [
    "60 & Above",
    "50 to 60 years",
    "40 to 50 years",
    "30 to 40 years",
    "20 to 30 years",
    "20 & below",
  ];
  const addLanguage = (lang) => {
  if (!languages.includes(lang)) {
    setLanguages([...languages, lang]);
  }
};

const filteredLanguageOptions = allLanguages.filter(
  (lang) =>
    lang.toLowerCase().includes(searchLang.toLowerCase()) &&
    !languages.includes(lang)
);


  const toggleAge = (age) => {
    if (selectedAge.includes(age)) {
      setSelectedAge(selectedAge.filter((a) => a !== age));
    } else {
      setSelectedAge([...selectedAge, age]);
    }
  };

  const removeLanguage = (lang) => {
    setLanguages(languages.filter((l) => l !== lang));
  };

  // Convert age range string to number range
const checkAgeRange = (actorAge) => {
  if (selectedAge.length === 0) return true;

  return selectedAge.some((range) => {
    if (range === "60 & Above") return actorAge >= 60;
    if (range === "50 to 60 years") return actorAge >= 50 && actorAge <= 60;
    if (range === "40 to 50 years") return actorAge >= 40 && actorAge <= 50;
    if (range === "30 to 40 years") return actorAge >= 30 && actorAge <= 40;
    if (range === "20 to 30 years") return actorAge >= 20 && actorAge <= 30;
    if (range === "20 & below") return actorAge <= 20;
    return false;
  });
};

const filteredActors = actorsData
.filter((actor) => {
  // Gender filter
  const genderMatch =
    gender === "All" || actor.gender === gender;

  // Language filter
  const languageMatch =
    languages.length === 0 ||
    actor.language.some((lang) => languages.includes(lang));

  // Age filter
  const ageMatch = checkAgeRange(actor.age);

  const searchMatch =
  actor.name.toLowerCase().includes(search.toLowerCase());

return genderMatch && languageMatch && ageMatch && searchMatch;
})  .sort((a, b) => {
    if (!sortOrder) return 0;

    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

 




  return (
    <>
        <div className="px-6 py-5 bg-[#fff] ">
            <div className={` flex md:justify-start  justify-between gap-3`}>
                <div className={`flex gap-3 transition-all duration-500 ${
                        showFilters ? "md:min-w-[250px] md:w-[250px]    opacity-100" : " "
                    }`}>
                    <button className='h-[56px] w-[56px] rounded-[8px] flex justify-center border-[#B2B2B2] border items-center'   onClick={() => setShowFilters(!showFilters)}>
                        {/* <SlidersHorizontal/> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M1.30078 1.3V2.9C1.30078 3.1 1.40078 3.3 1.50078 3.4L7.60078 10.3V18.7C7.60078 19 7.80078 19.3 8.00078 19.4C8.10078 19.5 8.20078 19.5 8.40078 19.5C8.60078 19.5 8.70078 19.4 8.90078 19.3L12.1008 16.9C12.3008 16.8 12.4008 16.5 12.4008 16.3V10.3L18.5008 3.4C18.6008 3.3 18.7008 3.1 18.7008 2.9V1.3C18.7008 0.9 18.3008 0.5 17.9008 0.5H2.10078C1.60078 0.5 1.30078 0.9 1.30078 1.3Z" fill="#2C2C2C"/>
                            </svg>
                    </button>
                    <button  onClick={() =>
                        setSortOrder((prev) =>
                        prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
                        )
                    }  className='h-[56px] w-[56px] rounded-[8px] flex justify-center border-[#B2B2B2] border items-center'>
                        {/* <ArrowUpDown/>   */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4992 18C14.4992 18 15.2992 17.2 15.2992 16.2V9.40004C15.2992 9.30005 15.3992 9.30005 15.3992 9.40004L16.7992 10.8C17.4992 11.5 18.5992 11.5 19.2992 10.8C19.9992 10.1 19.9992 9.00005 19.2992 8.30005L12.9992 1.80005C12.4992 1.30005 11.6992 1.60005 11.6992 2.30005V16.2C11.7992 17.2 12.5992 18 13.4992 18Z" fill="#2C2C2C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29922 1.5C5.29922 1.5 4.59922 2.3 4.59922 3.2V10.1C4.59922 10.2 4.49922 10.2 4.49922 10.1L3.09922 8.8C2.39922 8.1 1.29922 8.1 0.599219 8.8C-0.100781 9.5 -0.100781 10.6 0.599219 11.3L6.79922 17.8C7.29922 18.3 8.09922 18 8.09922 17.3V3.3C8.09922 2.3 7.29922 1.5 6.29922 1.5Z" fill="#2C2C2C"/>
                          </svg>
                       
                    </button>

                </div>
                <div className="search group  bg-[#4285F4] rounded-[100px] relative">
                    <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[154px] hover:w-[250px] outline-none transition-all duration-500 placeholder-white h-[56px] placeholder:text-[20px] primary-font p-4 px-[24px] font-[400] text-[#fff]"
                    placeholder="Search"
                    />
                    <span  className='absolute top-0 right-0 -translate-x-5 translate-y-4'>
                    <Search color='#fff'/>

                    </span>
                </div>
            </div>
            <div className="flex md:gap-3 mt-5">
                <div   className={`flex flex-col bg-[#fff] gap-4 py-4 transition-all duration-500 overflow-hidden ${
                        showFilters ? "md:min-w-[250px] min-w-[100%] md:w-[250px] w-[100%] md:relative fixed top-0 left-0 z-40 md:p-0 p-3 opacity-100" : "min-w-0 w-0 opacity-0"
                    }`}>
                    {/* Gender */}
                    <button className='absolute md:hidden block top-3 right-3 z-50' onClick={() => setShowFilters(!showFilters)}>
                      X
                    </button>
                    <div>
                        <h3 className="text-[#757575] font-[400] text-[16px] primary-font mb-3">Gender</h3>
                        <div className="flex gap-3">
                        {["All", "Male", "Female"].map((item) => (
                            <button
                            key={item}
                            onClick={() => setGender(item)}
                            className={`px-4 py-2 rounded-full border transition primary-font text-[16px]
                            ${
                                gender === item
                                ? "bg-blue-500 text-white border-blue-500"
                                : "border-blue-500 text-blue-500 bg-white"
                            }`}
                            >
                            {item}
                            </button>
                        ))}
                        </div>
                    </div>

                    {/* Languages */}
                {/* Languages */}
                    <div className="relative">
                    <h3 className="text-[#757575] font-[400] text-[16px] primary-font mb-3">
                        Languages
                    </h3>

                    {/* Input */}
                    <div className="relative">
                        <input
                        placeholder="Select"
                        type="text"
                        value={searchLang}
                        onChange={(e) => setSearchLang(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        />
                        <Search
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        {/* Dropdown */}
                        {searchLang && (
                        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-md z-20 max-h-40 overflow-y-auto">
                            {allLanguages
                            .filter(
                                (lang) =>
                                lang.toLowerCase().includes(searchLang.toLowerCase()) &&
                                !languages.includes(lang)
                            )
                            .map((lang) => (
                                <div
                                key={lang}
                                onClick={() => {
                                    addLanguage(lang);
                                    setSearchLang("");
                                }}
                                className="px-6 text-[14px] font-primary py-2 hover:bg-blue-100 cursor-pointer"
                                >
                                {lang}
                                </div>
                            ))}
                        </div>
                        )}
                    </div>

                    {/* Selected Chips */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {languages.map((lang) => (
                        <div
                            key={lang}
                            className="flex items-center px-6 text-[14px] font-primary gap-2 border border-gray-400 rounded-full py-2 text-xs bg-[#F5F5F5]"
                        >
                            {lang}
                            <button
                            onClick={() => removeLanguage(lang)}
                            className="text-gray-500 hover:text-black"
                            >
                            ✕
                            </button>
                        </div>
                        ))}
                    </div>
                    </div>


                    {/* Age */}
                    <div>
                        <h3 className="text-[#757575] font-[400] text-[16px] primary-font mb-3">Age</h3>
                        <div className="space-y-2">
                        {ageOptions.map((age) => (
                            <label key={age} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedAge.includes(age)}
                                onChange={() => toggleAge(age)}
                                className="accent-blue-500"
                            />
                            <span className="text-gray-700">{age}</span>
                            </label>
                        ))}
                        </div>
                    </div>
                </div>
                <div className={`grid grid-cols-4 gap-3  flex-wrap  ${
                        showFilters ? "" : "justify-center"
                    }`}>
                {filteredActors.length > 0 ? (
                    filteredActors.map((item) => (
                    <CatogeriesCard key={item.id} data={item} />
                    ))
                ) : (
                    <h3 className="text-gray-500 text-lg font-medium">
                    No Result Found
                    </h3>
                )}
                </div>

            </div>
        </div>
    </>
  )
}

export default FilterCatogeries