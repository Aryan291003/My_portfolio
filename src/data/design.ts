export interface DesignWork {
  id: string;
  title: string;
  role: string; 
  image: string;
  description: string;
  longDescription?: string;
  tools: string[];
  caseStudyLink?: string; 
  extraImages?: string[];
  video?: string;
}

const designs: DesignWork[] = [
  {
    id: "design-1",
    title: "Fintech Mobile App design ",
    role: "UI/UX Design",
    image: "/image/zeroda.png",
    description:
      "This was my personal prject where I designed a mobile app for an app I was working on, focusing on user-friendly interfaces and seamless navigation. I tried my best to keep it minimalistic and modern ",
    longDescription:
      "I creared a mobile app design for a fintech application, focusing on intuitive user interfaces and smooth navigation. The design aimed to enhance user experience by implementing a clean and modern aesthetic, ensuring that users can easily access financial tools and information. The project involved wireframing, prototyping, and iterating based on user feedback to achieve a final design that is both functional and visually appealing.",
    tools: ["Figma"],
    caseStudyLink: "https://www.figma.com/deck/97kuhcn8AWq3Op985Uf5NN",
    extraImages: ["/image/zeroda.png"  ]
  },
  {
    id: "design-2",
    title: "cosemtic E-commerce Website",
    role: "UI/UX Design",
    image: "/image/aurora .png",
    description:
      "This case study focuses on designing a modern, elegant, and user-friendly e-commerce experience for a cosmetics store. The goal is to create a visually appealing interface that showcases beauty products, simplifies product discovery, and provides a seamless shopping experience.",
    tools: ["Figma"],
    caseStudyLink: "https://www.figma.com/deck/noHUAi7D0aNpCJCF4SHn4R",
     extraImages: ["/image/aurora .png"  ]
  },
  
];

export default designs;