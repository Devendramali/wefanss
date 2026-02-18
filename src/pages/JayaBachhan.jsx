import { Bookmark, Share } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ImageContent from "../component/profile/ImageContent";
import FilmSongContent from "../component/profile/FilmSongContent";
import ProfileContent from "../component/profile/ProfileContent";
import Subheading from "../component/Subheading";
import MediaContent from "../component/profile/MediaContent";
import NewsContent from "../component/profile/NewsContent";
import Podcast from "../component/profile/Podcast";
import ActorTabs from "../component/profile/ActorTabs";
// import { ChevronDown } from "lucide-react";

export const sidebarData = [
  {
    id: 1,
    type: "profile",
    title: "Jaya Bachchan",
    sections: [
      "Biography",
      "Timeline",
      "Films",
      "Career Entry",
      "Family",
      "FilmFare Awards",
      "Trivia",
      "Songs",
      "Wife",
      "Brands"
    ]
  },

  {
    id: 2,
    type: "topFilms",
    title: "Top Films",
    items: [
      {
        id: 1,
        name: "Kabhi Khushi Kabhie Gham",
        subtitle: "2021",
        image: "/movies/Kabhi Khushi Kabhie Gham.png"
      },
      {
        id: 2,
        name: "Chupke Chupke",
        subtitle: "2012",
        image: "/movies/Chupke Chupke.png"
      },
      {
        id: 3,
        name: "Baghban",
        subtitle: "2008",
        image: "/movies/Baghban.png"
      }
    ]
  },

  {
    id: 3,
    type: "hitSongs",
    title: "Hit Songs",
    items: [
      {
        id: 1,
        name: "Tip Tip Barsa Paani",
        subtitle: "Mohra",
        image: "/song/Tip Tip Barsa Paani.png"
      },
      {
        id: 2,
        name: "Chura Ke Dil Mera",
        subtitle: "Main Khiladi Tu Anari",
        image: "/song/Chura Ke Dil Mera.png"
      },
      {
        id: 3,
        name: "Main Khiladi Tu Anari",
        subtitle: "Main Khiladi Tu Anari",
        image: "/song/Main Khiladi Tu Anari.png"
      }
    ]
  },
  {
     id: 4,
  title: "Initiatives",
  type: "Initiatives",
  items: [
    {
      id: 1,
      title:
        "Jaya Bachchan Advocates for Gender Equality in Local Governance",
      dis: "Enhancing Women's Representation through Grassroots Initiatives"
    },
    {
      id: 2,
      title:
        "Jaya Bachchan's Campaign for Cultural Preservation in Rural Areas",
      dis: "Jaya Bachchan's Push for Sustainable Development in the Arts"
    },
  ],
  },
    {
     id: 5,
  title: "Development Work",
  type: "Initiatives",
  items: [
    {
      id: 1,
      title:
        "Jaya Bachchan Advocates for Enhanced Healthcare Services in Thane with New Hospital Initiative.",
    },
    {
      id: 2,
      title:
        "Ravi Kumar Launches Eco-Friendly Initiative to Reduce Plastic Waste in Mumbai.",
    },
       {
      id: 3,
      title:
        "Sita Verma Proposes Innovative Education Programs for Underprivileged Children in Pune.",
    },
  ],
  },
  {
     id: 6,
      title: "Social Work",
      type: "Initiatives",
      items: [
        {
          id: 1,
          title:
            "Eknath Shinde Initiates Skill Development Programs for Youth Empowerment",
        },
        {
          id: 2,
          title:
            "Eknath Shinde Reveals Strategy for Enhancing Digital Connectivity in Rural Areas.",
        },
          
      ],
      },
        {
    id: 7,
    type: "profile",
    title: "References",
    sections: [
      "Biography",
      "Timeline",
      "Films",
      "Career Entry",
      "Family",
      "FilmFare Awards",
      "Trivia",
      "Songs",
      "Wife",
      "Brands"
    ]
  },
  {
    id: 2,
    type: "topFilms",
    title: "Related Personalities",
    items: [
      {
        id: 1,
        name: "Kabhi Khushi Kabhie Gham",
        subtitle: "Chief Minister of Maharashtra",
        image: "/actor/cm.png"
      },
      {
        id: 2,
        name: "Nitesh Rane",
        subtitle: "Cabinet minister in Government of Maharashtra",
        image: "/actor/nitesh.png"
      },
    
    ]
  },
 

];

const profileData = [
  {
    id: 1,
    title: "Basic Info",
    type: "basicInfo",
    items: [
      { label: "Born", value: "9 September 1967 (age 58), Delhi, India" },
      { label: "Died", value: "9 September 1967 (age 58), Delhi, India" },
      { label: "Occupations", value: "Actress, Politician" },
      { label: "Citizenship", value: "Indian (until 2011), Canadian (2011–2023)" },
      { label: "subtitles Active", value: "1991 – Present" },
      { label: "Spouse", value: "Twinkle Khanna (m. 2001)" },
      { label: "Children", value: "Shweta Bachchan Nanda, Abhishek Bachchan" }
    ]
  },


];

const ActorData = {



  id: 1,
  title: "Personal Details",
  type: "personalDetails",
  Name: "Jaya Bachchan",
  Roles: ["Actress", " Politician"],
  Rank: "22",
  Languages: ["English", "Marathi"],
  BirthDate: "9 September 1967",
  BirthPlace: "Amritsar, Punjab, India"


};
const watchData = {
  id: 1,
  title: "Watch",
  type: "watch",
  items: [
    {
      id: 1,
      image: "/watch1.png",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: true,
    },
    {
      id: 2,
      image: "/watch2.png",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: true,
    },
  ],
  seeMore: true,
};
const readData = {
  id: 3,
  title: "Read",
  type: "read",
  items: [
    {
      id: 1,
      image: "/read1.png",
      source: "Source • 02-01-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
    },
    {
      id: 2,
      image: "/read2.png",
      source: "Source • 02-01-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
    },
  ],
};

const MediaInterviewsPress = {
  id: 1,
  title: "Media Interviews & Press",
  type: "watch",
  items: [
    {
      id: 1,
      image: "/jay1.png",
      title:
        "Jaya Bachchan Launches Initiative to Support Local Artisans in Mumbai",
        source: "Source • 02-01-2026",
      isVideo: true,
    },
    {
      id: 2,
      image: "/jay2.png",
      title:
        "Jaya Bachchan Says Success Changed His Career Track: 'Now I Can Choose Quality'",
        source: "Source • 02-01-2026",
      isVideo: true,
    },
  ],
  seeMore: true,
};
const Speeches = {
  id: 3,
  title: "Speeches ",
  type: "read",
  items: [
    {
      id: 1,
      image: "/jay3.png",
      source: "Source • 02-01-2026",
      title:
        "Jaya Bachchan Says Success Changed His Career Track: 'Now I Can Choose Quality'",
    },
    {
      id: 2,
      image: "/jay4.png",
      source: "Source • 02-01-2026",
      title:
        "Jaya Bachchan Says Success Changed His Career Track: 'Now I Can Choose Quality'",
    },
  ],
};
const controversiesData = {
  id: 3,
  title: "Read",
  type: "read",
  items: [
    {
      id: 1,
      source: "Source • 02-01-2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
    {
      id: 2,
      image: "/read2.png",
      source: "Source • 02-01-2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
  ],
};
const PublicCampaignsData = {
  id: 3,
  title: "Read",
  type: "read",
  items: [
    {
      id: 1,
      source: "2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      // dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
    {
      id: 2,
      source: "2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      // dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
  ],
};
const ListenData = {
  id: 3,
  title: "Read",
  type: "read",
  items: [
    {
      id: 1,
      source: "Podcast • 2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
    {
      id: 2,
      source: "Podcast • 2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
  ],
};

const grid = [
  {
    id: 1,
    img: "/actor/ak1.png",
    disk: "Description",
    name: "Jaya Bachchan"
  },
  {
    id: 2,
    img: "/actor/ak2.png",
    disk: "Description",
    name: "Jaya Bachchan"
  },
  {
    id: 3,
    img: "/actor/ak3.png",
    disk: "Description",
    name: "Jaya Bachchan"
  },
  {
    id: 4,
    img: "/actor/ak4.png",
    disk: "Description",
    name: "Jaya Bachchan"
  },
  {
    id: 5,
    img: "/actor/ak5.png",
    disk: "Description",
    name: "Jaya Bachchan"
  },
  {
    id: 6,
    img: "/actor/ak6.png",
    disk: "Description",
    name: "Jaya Bachchan"
  },
  {
    id: 7,
    img: "/actor/ak7.png",
    disk: "Description",
    name: "Jaya Bachchan"
  },
  {
    id: 8,
    img: "/actor/ak8.png",
    disk: "Description",
    name: "Jaya Bachchan"
  },
]
const media = [
  {
    id: 1,
    img: "/actor/ak1.png",
    disk: "Description",
    name: "Jaya Bachchan",
    type: "img"
  },
  {
    id: 2,
    img: "/actor/ak2.png",
    disk: "Description",
    name: "Jaya Bachchan",
    type: "img"
  },
  {
    id: 3,
    img: "/actor/ak3.png",
    disk: "Description",
    name: "Jaya Bachchan",
    type: "video"
  },
  {
    id: 4,
    img: "/actor/ak4.png",
    disk: "Description",
    name: "Jaya Bachchan",
    type: "img"
  },
  {
    id: 5,
    img: "/actor/ak5.png",
    disk: "Description",
    name: "Jaya Bachchan",
    type: "img"
  },
  {
    id: 6,
    img: "/actor/ak6.png",
    disk: "Description",
    name: "Jaya Bachchan",
    type: "video"
  },
  {
    id: 7,
    img: "/actor/ak7.png",
    disk: "Description",
    name: "Jaya Bachchan",
    type: "img"
  },
  {
    id: 8,
    img: "/actor/ak8.png",
    disk: "Description",
    name: "Jaya Bachchan",
    type: "img"
  },
];



export default function JayaBachhan() {
  const [openIndexes, setOpenIndexes] = useState(
    sidebarData.map((_, index) => index) // all open by default
  );
  const [openRight, setOpenRight] = useState(null);


  const toggleRight = (id) => {
    setOpenRight(openRight === id ? null : id);
  };

  const toggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };




  return (
    <div
      className="py-[20px] px-[0px] bg-cover bg-center"
      style={{ backgroundImage: 'url("/profilebg.png")' }}
    >

      <div className="grid grid-cols-12 gap-4" >
        <div className="col-span-12 p-4 md:hidden block">
          <div className="flex  gap-6 relative  rounded-2xl ">
            <img
              src="/actor/Jaya Bachchan.png"
              className="w-[124px] h-[186px] rounded-[8px] object-cover"
              alt=""
            />
            <div className="flex flex-col justify-between h-auto">
              <div>
                {
                  ActorData.Roles.map((item, index) => (
                    <span
                      key={index}
                      className={`text-[12px] text-[#fff] primary-font relative inline-flex items-center ${index !== ActorData.Roles.length - 1
                        ? "mr-2 after:content-[''] after:inline-block after:h-[4px] after:w-[4px] after:bg-white after:rounded-full after:ml-2"
                        : ""
                        }`}
                    >
                      {item}
                    </span>
                  ))
                }
                <h1 className="text-3xl mt-1 font-bold text-[#fff] berlin">{ActorData.Name}</h1>

                {
                  ActorData.Languages.map((item, index) => (
                    <span
                      key={index}
                      className={`text-[12px] text-[#fff] primary-font relative inline-flex items-center ${index !== ActorData.Languages.length - 1
                        ? "mr-2 after:content-[''] after:inline-block after:h-[4px] after:w-[4px] after:bg-white after:rounded-full after:ml-2"
                        : ""
                        }`}
                    >
                      {item}
                    </span>
                  ))
                }

                <div className="mt-6 flex justify-start items-center gap-[10px]">
                  <Link className="px-5 py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#4285F4]">follow <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></Link>
                  <Link className="px-4 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff]"> <Bookmark color="#4285F4" /></Link>
                  <Link className="px-4 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff]"> <Share color="#4285F4" /></Link>
                </div>

                {/* <Bookmark /> */}
              </div>


            </div>
            {/* <Link className="absolute top-2 right-2 z-10">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" fill="white" fill-opacity="0.2" />
                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="white" />
                <path d="M19.0002 22C19.4297 22.5741 19.9776 23.0491 20.6067 23.3929C21.2359 23.7367 21.9317 23.9411 22.6468 23.9923C23.362 24.0435 24.0798 23.9403 24.7515 23.6897C25.4233 23.4392 26.0333 23.047 26.5402 22.54L29.5402 19.54C30.451 18.597 30.955 17.3339 30.9436 16.023C30.9322 14.712 30.4063 13.4579 29.4793 12.5309C28.5523 11.6038 27.2982 11.078 25.9872 11.0666C24.6762 11.0552 23.4132 11.5592 22.4702 12.47L20.7502 14.18M23.0002 20C22.5707 19.4258 22.0228 18.9508 21.3936 18.607C20.7645 18.2633 20.0687 18.0588 19.3535 18.0076C18.6384 17.9564 17.9206 18.0596 17.2489 18.3102C16.5771 18.5608 15.9671 18.9529 15.4602 19.46L12.4602 22.46C11.5494 23.403 11.0454 24.666 11.0568 25.977C11.0682 27.288 11.5941 28.542 12.5211 29.4691C13.4481 30.3961 14.7022 30.9219 16.0132 30.9333C17.3242 30.9447 18.5872 30.4408 19.5302 29.53L21.2402 27.82" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link> */}
          </div>
          <div className="mt-3">
            <p className="line-clamp-4 text-[16px] primary-font text-[#fff]">Jaya Bachchan (born September 9, 1967, Amritsar, Punjab, India) is an Indian actor and producer, chiefly known for his work in Bollywood comedies and action films. Kumar, whose career spans more than three decades, has starred in more than 100 films more    and is one of the most popular Bollywood actors in India. He was awarded the Padma Shri, one of the highest Indian civilian honors, in 2009.</p>
          </div>
        </div>

        {/* LEFT SIDEBAR */}
        <div className="md:col-span-3 col-span-12 px-[20px] py-[20px] h-fit rounded-[8px] space-y-4 bg-[#fff]">

          {sidebarData.map((section, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div
                key={section.id}
                className="bg-[#F4FBFF] rounded-[8px] p-4 transition-all duration-300"
              >
                {/* Header */}
                <div
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="primary-font text-[16px] font-[600]">
                    {section.title}
                  </h3>

                  <span
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3441 3.25901L8.20109 7.56344C7.86421 7.84533 7.43731 8 6.99615 8C6.55499 8 6.12809 7.84533 5.79121 7.56344L0.64818 3.25901C0.461965 3.09956 0.309309 2.90536 0.19893 2.68752C0.0885513 2.46968 0.02261 2.23245 0.00487154 1.98939C-0.012867 1.74633 0.0179447 1.50219 0.0955473 1.27091C0.17315 1.03963 0.296024 0.825742 0.457153 0.641458C0.618282 0.457174 0.814512 0.306102 1.03464 0.196867C1.25476 0.087633 1.49447 0.0223755 1.74008 0.00482099C1.98569 -0.0127335 2.23239 0.0177588 2.46609 0.0945566C2.6998 0.171354 2.91593 0.292953 3.10214 0.452412L7.01819 3.74617L10.9342 0.452412C11.3103 0.136156 11.7979 -0.0192984 12.2898 0.0202453C12.7817 0.059789 13.2376 0.291092 13.5572 0.66327C13.8768 1.03545 14.0338 1.51802 13.9939 2.00481C13.9539 2.49161 13.7202 2.94276 13.3441 3.25901Z" fill="#4285F4" />
                    </svg>
                  </span>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">

                    {/* Profile Links */}
                     {section.type === "profile" && (
                      <ProfileContent sections={section.sections} />
                    )}

                    {(section.type === "topFilms" ||
                      section.type === "hitSongs") && (
                      <FilmSongContent items={section.items} />
                    )}

                    {section.type === "images" && (
                      <ImageContent items={section.items} />
                    )}
                    {
                      section.type === "Initiatives" && (
                       
                          <NewsContent item={section.items}/>
                       
                      )
                    }






                    {section.type !== "profile" && (
                      <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-2 cursor-pointer hover:underline">
                        see more
                      </p>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-[#F4FBFF] rounded-[8px] p-4 transition-all duration-300 flex">
            <p className="text-[16px] primary-font font-[500] pr-1">Lorem ipsum dolor sit amet consectetur. lectus integer mattis id</p>
            <div className="bg-[#4285F4] gap-1 rounded-[4px] w-[180px] flex justify-center items-center flex-col "><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9146 9.10144L12.3574 16.4434L1.30443 12.7964C0.925866 12.6761 0.595416 12.4384 0.360908 12.1177C0.1264 11.7971 0 11.4102 0 11.0129C0 10.6157 0.1264 10.2287 0.360908 9.9081C0.595416 9.58747 0.925866 9.34977 1.30443 9.2294L29.5528 0.0958877C29.8829 -0.0135637 30.2369 -0.0296604 30.5756 0.0493745C30.9143 0.128409 31.2246 0.299502 31.4722 0.543766C31.7165 0.791382 31.8876 1.10168 31.9666 1.4404C32.0457 1.77912 32.0296 2.13309 31.9201 2.46324L22.8346 30.6956C22.7142 31.0741 22.4765 31.4046 22.1559 31.6391C21.8352 31.8736 21.4483 32 21.0511 32C20.6538 32 20.2669 31.8736 19.9462 31.6391C19.6256 31.4046 19.3879 31.0741 19.2675 30.6956L15.5566 19.6106L22.9146 9.10144Z" fill="#E5E7EB" />
            </svg>
              <p className="text-[14px] text-white">Claim Now</p>
            </div>
          </div>


        </div>


        {/* CENTER CONTENT */}
        <div className="md:col-span-6 col-span-12 space-y-6">
          {/*bg-white/10 backdrop-blur-lg shadow-xl*/}

          <div className="md:flex hidden  gap-6 relative  rounded-2xl ">
            <img
              src="/actor/Jaya Bachchan.png"
              className="w-[209px] h-[314px] rounded-[8px] object-cover"
              alt=""
            />
            <div className="flex flex-col justify-between h-auto">
              <div>
                {
                  ActorData.Roles.map((item, index) => (
                    <span
                      key={index}
                      className={`text-[12px] text-[#fff] primary-font relative inline-flex items-center ${index !== ActorData.Roles.length - 1
                        ? "mr-2 after:content-[''] after:inline-block after:h-[4px] after:w-[4px] after:bg-white after:rounded-full after:ml-2"
                        : ""
                        }`}
                    >
                      {item}
                    </span>
                  ))
                }
                <h1 className="text-3xl mt-1 font-bold text-[#fff] berlin">{ActorData.Name}</h1>

                {
                  ActorData.Languages.map((item, index) => (
                    <span
                      key={index}
                      className={`text-[12px] text-[#fff] primary-font relative inline-flex items-center ${index !== ActorData.Languages.length - 1
                        ? "mr-2 after:content-[''] after:inline-block after:h-[4px] after:w-[4px] after:bg-white after:rounded-full after:ml-2"
                        : ""
                        }`}
                    >
                      {item}
                    </span>
                  ))
                }

                <div className="mt-6 flex justify-start items-center gap-[10px]">
                  <Link className="px-5 py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#4285F4]">follow <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></Link>
                  <Link className="px-4 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff]"> <Bookmark color="#4285F4" /></Link>
                  <Link className="px-4 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff]"> <Share color="#4285F4" /></Link>
                </div>

                {/* <Bookmark /> */}
              </div>
              <div>
                <p className="line-clamp-4 text-[16px] primary-font text-[#fff]">Jaya Bachchan (born September 9, 1967, Amritsar, Punjab, India) is an Indian actor and producer, chiefly known for his work in Bollywood comedies and action films. Kumar, whose career spans more than three decades, has starred in more than 100 films more    and is one of the most popular Bollywood actors in India. He was awarded the Padma Shri, one of the highest Indian civilian honors, in 2009.</p>
              </div>

            </div>
            <Link className="absolute top-2 right-2 z-10">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" fill="white" fill-opacity="0.2" />
                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="white" />
                <path d="M19.0002 22C19.4297 22.5741 19.9776 23.0491 20.6067 23.3929C21.2359 23.7367 21.9317 23.9411 22.6468 23.9923C23.362 24.0435 24.0798 23.9403 24.7515 23.6897C25.4233 23.4392 26.0333 23.047 26.5402 22.54L29.5402 19.54C30.451 18.597 30.955 17.3339 30.9436 16.023C30.9322 14.712 30.4063 13.4579 29.4793 12.5309C28.5523 11.6038 27.2982 11.078 25.9872 11.0666C24.6762 11.0552 23.4132 11.5592 22.4702 12.47L20.7502 14.18M23.0002 20C22.5707 19.4258 22.0228 18.9508 21.3936 18.607C20.7645 18.2633 20.0687 18.0588 19.3535 18.0076C18.6384 17.9564 17.9206 18.0596 17.2489 18.3102C16.5771 18.5608 15.9671 18.9529 15.4602 19.46L12.4602 22.46C11.5494 23.403 11.0454 24.666 11.0568 25.977C11.0682 27.288 11.5941 28.542 12.5211 29.4691C13.4481 30.3961 14.7022 30.9219 16.0132 30.9333C17.3242 30.9447 18.5872 30.4408 19.5302 29.53L21.2402 27.82" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
          </div>


          {/* <div className="bg-white rounded-[8px] p-6 shadow-xl">

            <div className="flex gap-4 mb-6 bg-[#F0F0F0] rounded-[100px]">
              <button className="px-4 w-[25%] primary-font py-2 bg-[#4285F4] rounded-[100px] text-[#fff] text-[16px] font-[500]">
                Biography
              </button>
              <button className="px-4 w-[25%] primary-font py-2 bg-white/10 rounded-lg text-[16px] font-[500]">
                Timeline
              </button>
            
              <button className="px-4 w-[25%] primary-font py-2 bg-white/10 rounded-lg text-[16px] font-[500]">
                Trivia
              </button>
            </div>
            <div className="filter">
              <div className=" mt-4  Biography">
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Early Life</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Rajiv Hari "Jaya Bachchan" Om Bhatia was born on September 09, 1967, in Amritsar, Punjab to Aruna Bhatia and Hari Om Bhatia. He is an Indian actor, film producer, former model, and television personality. He went to Bangkok to learn how to use a sword and also worked as a waiter in a restaurant. He studied martial arts in Hong Kong. It was a student who that he should try modeling. Because of his success as model, he was offered films. Along with his good looks and excellent martial art skills, he was always</p>
                <hr className="my-4 text-[#4285F429]" />
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Education</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">He received his school education from Don Bosco High School in Matunga,[25] simultaneously learning Karate. He enrolled in the Guru Nanak Khalsa College of Arts, Science & Commerce of the University of Mumbai for higher education, but dropped out as he was not interested in studies. He requested his father to send him to Thailand to further learn martial arts. Kumar lived in Bangkok for five subtitles, learning Thai Boxing.[22][26] He also has a sister....</p>
                <hr className="my-4 text-[#4285F429]" />
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Career Entry</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor opposite Raakhee and Shantipriya in Saugandh (1991). In the same subtitle, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following subtitle he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described  in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
                <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                  more...
                </p>
              </div>
              <div className=" mt-4  Timeline">
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Early Life</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Rajiv Hari "Jaya Bachchan" Om Bhatia was born on September 09, 1967, in Amritsar, Punjab to Aruna Bhatia and Hari Om Bhatia. He is an Indian actor, film producer, former model, and television personality. He went to Bangkok to learn how to use a sword and also worked as a waiter in a restaurant. He studied martial arts in Hong Kong. It was a student who that he should try modeling. Because of his success as model, he was offered films. Along with his good looks and excellent martial art skills, he was always</p>
                <hr className="my-4 text-[#4285F429]" />
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Education</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">He received his school education from Don Bosco High School in Matunga,[25] simultaneously learning Karate. He enrolled in the Guru Nanak Khalsa College of Arts, Science & Commerce of the University of Mumbai for higher education, but dropped out as he was not interested in studies. He requested his father to send him to Thailand to further learn martial arts. Kumar lived in Bangkok for five subtitles, learning Thai Boxing.[22][26] He also has a sister....</p>
                <hr className="my-4 text-[#4285F429]" />
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Career Entry</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor opposite Raakhee and Shantipriya in Saugandh (1991). In the same subtitle, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following subtitle he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described  in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
                <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                  more...
                </p>
              </div>
              <div className=" mt-4  Trivia">
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Early Life</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Rajiv Hari "Jaya Bachchan" Om Bhatia was born on September 09, 1967, in Amritsar, Punjab to Aruna Bhatia and Hari Om Bhatia. He is an Indian actor, film producer, former model, and television personality. He went to Bangkok to learn how to use a sword and also worked as a waiter in a restaurant. He studied martial arts in Hong Kong. It was a student who that he should try modeling. Because of his success as model, he was offered films. Along with his good looks and excellent martial art skills, he was always</p>
                <hr className="my-4 text-[#4285F429]" />
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Education</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">He received his school education from Don Bosco High School in Matunga,[25] simultaneously learning Karate. He enrolled in the Guru Nanak Khalsa College of Arts, Science & Commerce of the University of Mumbai for higher education, but dropped out as he was not interested in studies. He requested his father to send him to Thailand to further learn martial arts. Kumar lived in Bangkok for five subtitles, learning Thai Boxing.[22][26] He also has a sister....</p>
                <hr className="my-4 text-[#4285F429]" />
                <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">Career Entry</h3>
                <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor opposite Raakhee and Shantipriya in Saugandh (1991). In the same subtitle, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following subtitle he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described  in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
                <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                  more...
                </p>
              </div>
            </div>

          </div> */}
          <ActorTabs/>
          <div className="px-[20px] py-[20px] rounded-[8px] space-y-4 bg-[#fff]">
            <div>
              <h3 className="flex gap-2 items-center berlin text-[#1E1E1E] text-[24px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Relationships and family</h3>
              <img src="/fam.png" alt="" className="py-4" />
              <p className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">During late 90s, Kumar was in a relationship with actress Raveena Tandon. Although they were engaged, they later parted ways.[301][302] Later from 1997 to 2000, Kumar was in a relationship with actress Shilpa Shetty.[303]</p>
              <p className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">
                Kumar met actress Twinkle Khanna, the daughter of actors Rajesh Khanna and Dimple Kapadia, during a photo session for Filmfare magazine.[304] Kumar married Khanna on 17 January 2001. Together have a son (Aarav, born 2002) and a daughter (Nitara, born 2012).[305][306] He is known as a protective father and keeps his children away from the media. He stated that he wants to "give them a normal childhood."[307] Kumar often credits Khanna for his success.[308][309]</p>
              <p className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">
                In 2009, while performing at a show for Levis at Lakme Fashion Week, Kumar asked Twinkle to unbutton his jeans. This incident sparked a controversy which led to a police case being filed against them.[310]</p>
              <hr className="my-4 text-[#4285F429]" />

            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] text-[24px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Religion</h3>
              <p className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">Kumar was initially religious, till 2017 being a practising Shaiva Hindu who regularly visited shrines and temples across the country, including the famed Vaishno Devi Mandir,[311][312][313][294] while in 2018 he said "there is only one God" and was against bringing religion into politics,[314] but in March 2020 he stated, "I don't believe in any religion. I only believe in being Indian".[315]</p>
              <hr className="my-4 text-[#4285F429]" />
            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] text-[24px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Statistics</h3>
              <table className="max-w-[900px] border border-[#1E1E1E] rounded-[8px] overflow-hidden border-collapse">
                <thead className="bg-[#F4FBFF] text-left">
                  <tr>
                    <th className="p-3 px-8">Team</th>
                    <th className="p-3 px-8">From</th>
                    <th className="p-3 px-8">To</th>
                    <th className="p-3 px-8">Record</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Deccan Chargers</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                </tbody>
              </table>
              <hr className="my-4 text-[#4285F429]" />


            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] text-[24px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Other work</h3>
              <h4 className="primary-font text-[18px] text-[#1E1E1E] font-[500] pb-2">Television</h4>
              <ul className="pl-5">
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">In 2004, Kumar presented seven-part miniseries Seven Deadly Arts with Jaya Bachchan for free,[276] played master and learner as he introduces viewers to each of the seven part of martial arts-kalaripayattu, Shaolin Kung Fu, karate, taekwondo, aikido, Muay Thai, capoeira,[277] the show aired on every following Sunday.[278] The following subtitle Kumar was awarded the highest Japanese honour of "Katana" and a sixth degree black belt in Kuyukai Gōjū-ryū karate.</li>
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">Since 2008, Kumar started India's stunt/action reality game show – "Fear Factor: Khatron Ke Khiladi". He hosted Season 1, Season 2 and Season 4.[279] The show was widely accepted and appreciated, became hugely successful in popular culture.[280] It is still being run by Rohit Shetty.</li>
              </ul>

              <hr className="my-4 text-[#4285F429]" />
            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] text-[24px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Fitness work and stage performances</h3>
              <ul className="pl-5">
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">Kumar promotes health fitness and exercising, stays in shape with a combination of kickboxing, basketball, swimming and Parkour as well as working out. While in standard eighth he had started practising Karate. He intended to open a martial arts school and the state government of Maharashtra allotted land for the school in Bhayandar.[291]</li>
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">He helped Khanna with editing the drafts of her debut book Mrs Funnybones.[292] He is a teetotaller[293] but has endorsed for a liquor brand in the past. Half of the sum was given for daan (charity work), of which he has been doing more of in recent times.</li>
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">On 9 August 2014, Kumar performed at his 500th live show. The show was held in O2 Arena in London as part of the inaugural function of the World Kabaddi League. His first live show was held in 1991 in Delhi. Kumar owns Bengal Warriors a team in the Indian Kabbadi League.[291][299] Jaya Bachchan sets himself on fire at his upcoming The End series launch with Prime Video, says he's a stuntman first and actor later.[300]</li>
              </ul>

              <hr className="my-4 text-[#4285F429]" />
            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] text-[24px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Grid</h3>
              <div className="grid gap-[20px] grid-cols-4">
                {
                  grid.map((item) => (
                    <div id={item.id} className="col-span-1">
                      <figure>
                        <img src={item.img} alt="" className="w-full h-full" />
                      </figure>
                      <h3 className="mt-1">{item.disk}</h3>
                    </div>
                  ))
                }
              </div>
              <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                view more
              </p>


              <hr className="my-4 text-[#4285F429]" />
            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] text-[24px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Listing</h3>
              <div className="grid gap-[20px] grid-cols-4 mt-4">
                {
                  grid.map((item) => (
                    <div id={item.id} className="col-span-4 flex gap-3">
                      <figure>
                        <img src={item.img} alt="" className="w-[100px] h-[100px] border border-1 border-[#00000040] rounded-[4px]" />
                      </figure>
                      <div>

                        <h3 className="mt-1 primary-font text-[#1E1E1E] font-[500]">{item.name}</h3>
                        <p className="mt-1 text-[14px] text-[#757575]">{item.disk}</p>

                      </div>
                    </div>
                  ))
                }
              </div>
              <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                view more
              </p>

              <hr className="my-4 text-[#4285F429]" />
            </div>

            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] text-[24px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Media</h3>
              <div className=" mt-4">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination]}
                  className="overflow-hidden"
                >
                  {media.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="w-full h-[288px] flex items-center justify-center">

                        {item.type === "img" ? (
                          <div>
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            /> <h3 className="mt-1 primary-font text-[#1E1E1E] font-[500]">{item.name}</h3></div>

                        ) : (
                          <div className="relative">
                            {/* <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    /> */}
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            <h3 className="mt-1 primary-font text-[#1E1E1E] font-[500]">{item.name}</h3>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/80 rounded-full flex justify-center items-center">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.8" />
                                  <path d="M21.4602 15.4402C19.6602 14.4102 18.2002 15.2502 18.2002 17.3302V32.6702C18.2002 34.7502 19.6602 35.5902 21.4602 34.5602L34.8702 26.8702C36.6702 25.8702 36.6702 24.1602 34.8702 23.1302L21.4602 15.4402Z" fill="#4285F4" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                view more
              </p>


              <hr className="my-4 text-[#4285F429]" />
            </div>
          </div>


        </div>

        {/* RIGHT SIDEBAR */}
        <div className="md:col-span-3 col-span-12 px-[20px] py-[20px] rounded-[8px] space-y-4 bg-[#fff]">
         

    

            
              
              
              <MediaContent item={MediaInterviewsPress}/>
           


       
               <MediaContent item={Speeches}/>
     


            
              
              
              <MediaContent item={watchData}/>
           



       
               <MediaContent item={readData}/>
     

         
          <div className="bg-white rounded-xl p-4 space-y-4 border-[#4285F429] border-b ">
            
            <Subheading data="Controversies"/>

            {/* {controversiesData.items.map((item) => ( */}
              <NewsContent item={controversiesData.items}/>
            
            <div className="text-center">
              <button className="text-blue-500 text-[14px] font-medium">
                see more
              </button>
            </div>

          </div>
          <div className="bg-white rounded-xl p-4 space-y-4 border-[#4285F429] border-b ">
            
             <Subheading data="Public Campaigns"/>

             
               <NewsContent item={PublicCampaignsData.items}/>
           
            <div className="text-center">
              <button className="text-blue-500 text-[14px] font-medium">
                see more
              </button>
            </div>

          </div>
          <div className="bg-white rounded-xl p-4 space-y-4 border-[#4285F429] border-b ">
          
             <Subheading data="Listen"/>

              <Podcast item={ListenData.items}/>
            <div className="text-center">
              <button className="text-blue-500 text-[14px] font-medium">
                see more
              </button>
            </div>

          </div>


        </div>





      </div>
    </div>
  );
}
