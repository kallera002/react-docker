import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { MdTimeline } from "react-icons/md";
import { RiMapPinTimeLine } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { SiChainlink } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";

const timelineDetails = [
  {
    timeline_title: "fastn Roadshow Bangalore",
    timeline_description: "",
    timeline_icon: <SiChainlink />,
    timeline_place: "Bangalore",
    timeline_date: "19th August 2023",
    timeline_day: "Saturday",
    timeline_hostedby: "Ayush Soni",
    timeline_event_link: "https://twitter.com/ayushsoni1010",
    timeline_tags: [
      { tag: "fastn" },
      { tag: "Framework" },
      { tag: "Open Source" },
      { tag: "Portfolio" },
      { tag: "FifthTry" },
      { tag: "Events" },
      { tag: "DevRel" },
      { tag: "Roadshow" },
    ],
    timeline_card_color: "orange.400",
  },
  {
    timeline_title: "fastn Roadshow Kolkata",
    timeline_description: "",
    timeline_icon: <VscSymbolEvent />,
    timeline_place: "Indore",
    timeline_date: "12th August 2023",
    timeline_day: "Saturday",
    timeline_hostedby: "Ayush Soni",
    timeline_event_link: "https://twitter.com/ayushsoni1010",
    timeline_tags: [
      { tag: "fastn" },
      { tag: "Framework" },
      { tag: "Open Source" },
      { tag: "Portfolio" },
      { tag: "FifthTry" },
      { tag: "Events" },
      { tag: "DevRel" },
      { tag: "Roadshow" },
    ],
    timeline_card_color: "red.400",
  },
];

export { timelineDetails };
