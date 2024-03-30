import Slide1Image from "../assets/images/slide1.jpeg";
import Slide2Image from "../assets/images/slide2.jpeg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import InstagramIcon from "../assets/icons/instagram.svg";

import AnalyticsIcon from "../assets/icons/why-us/analytics.svg";
import CMSIcon from "../assets/icons/why-us/cms.svg";
import RocketIcon from "../assets/icons/why-us/rocket.svg";
import MobileAppIcon from "../assets/icons/why-us/mobile-app.svg";
import TimerIcon from "../assets/icons/why-us/timer.svg";
import WebSearchIcon from "../assets/icons/why-us/web-search.svg";

import HomeBannerImage from "../assets/images/home_banner.webp";
import HomeSecondBannerImage from "../assets/images/home_banner_2.webp";

export const COMPANY_NAME = "M&B Remodeling";

export const HOME_BANNER = {
  id: "home_banner",
  backgroundImage: HomeBannerImage,
  title: "Exceptional Home Remodeling & Renovations",
  buttonText: "Get a Free Estimate",
  buttonUrl: "/contact-us",
};

export const HOME_SECOND_BANNER = {
  id: "home_banner_2",
  backgroundImage: HomeSecondBannerImage,
  title: "The Leading Bay Area Remodeling Company",
  subtitle: `Renovation excellence awaits at ${COMPANY_NAME}. From kitchen makeovers to complete home transformations, trust us for unmatched quality and customer satisfaction.The Leading Bay Area Remodeling Company`,
  buttonText: "More About Us",
  buttonUrl: "/about-us",
};

export const Services = [
  {
    id: "kitchens",
    mediaUrl: "/images/services/kitchens.jpeg",
    homeMediaUrl: "/images/services/kitchens_home.webp",
    title: "Kitchens",
    description:
      "Revitalize your kitchen with modern amenities and personalized touches for a functional and stylish space.",
    detailedDescription:
      "Transform your kitchen into the heart of your home with our professional renovation services. Whether you're looking to update outdated fixtures, expand your space, or completely redesign the layout, our team is here to bring your vision to life. From custom cabinetry and modern countertops to stylish backsplashes and state-of-the-art appliances, we'll create a kitchen that's both functional and beautiful.",
    type: "design",
    url: "services/kitchens",
    subServices: [
      {
        id: 1,
        title: "Kitchen Images",
        mediaUrl: "/images/services/kitchens/K1.webp",
      },
      {
        id: 2,
        title: "Kitchen Images",
        mediaUrl: "/images/services/kitchens/K2.webp",
      },
      {
        id: 3,
        title: "Kitchen Images",
        mediaUrl: "/images/services/kitchens/K3.webp",
      },
      {
        id: 4,
        title: "Kitchen Images",
        mediaUrl: "/images/services/kitchens/K4.webp",
      },
      {
        id: 5,
        title: "Kitchen Images",
        mediaUrl: "/images/services/kitchens/K5.webp",
      },
      {
        id: 6,
        title: "Kitchen Images",
        mediaUrl: "/images/services/kitchens/K6.webp",
      },
    ],
  },
  {
    id: "bathrooms",
    mediaUrl: "/images/services/bathrooms.webp",
    homeMediaUrl: "/images/services/bathrooms_home.webp",
    title: "Bathrooms",
    description:
      "Transform your bathroom into a spa-like sanctuary with modern fixtures, elegant finishes, and functional design elements.",
    detailedDescription:
      "Transform your bathroom into a spa-like retreat with our professional renovation services. Whether you're looking to update fixtures, install a luxurious bathtub, or create a sleek new shower, our team will work with you to design a bathroom that's both stylish and functional. From modern vanities and tile accents to energy-efficient fixtures and smart storage solutions, we'll create a space that meets your needs and exceeds your expectations.",
    url: "services/bathrooms",
    subServices: [
      {
        id: 1,
        title: "Bathroom Images",
        mediaUrl: "/images/services/bathrooms/B1.webp",
      },
      {
        id: 2,
        title: "Bathroom Images",
        mediaUrl: "/images/services/bathrooms/B2.webp",
      },
      {
        id: 3,
        title: "Bathroom Images",
        mediaUrl: "/images/services/bathrooms/B3.webp",
      },
      {
        id: 4,
        title: "Bathroom Images",
        mediaUrl: "/images/services/bathrooms/B4.webp",
      },
      {
        id: 5,
        title: "Bathroom Images",
        mediaUrl: "/images/services/bathrooms/B5.webp",
      },
      {
        id: 6,
        title: "Bathroom Images",
        mediaUrl: "/images/services/bathrooms/B6.webp",
      },
    ],
  },
  {
    id: "interiors",
    mediaUrl: "/images/services/interiors.webp",
    homeMediaUrl: "/images/services/interiors_home.webp",
    title: "Interiors",
    description:
      "Refresh your home's interior with new paint, flooring, and fixtures tailored to your taste and lifestyle.",
    detailedDescription:
      "Elevate the style and comfort of your interior spaces with our comprehensive renovation solutions. From refreshing paint colors and replacing flooring to updating trim work and enhancing lighting, we'll help you achieve the look and feel you desire for your home. Our attention to detail and commitment to quality craftsmanship ensure stunning results that exceed your expectations.",
    url: "services/interiors",
    subServices: [
      {
        id: 1,
        title: "Interiors Images",
        mediaUrl: "/images/services/interiors/I1.webp",
      },
      {
        id: 2,
        title: "Interiors Images",
        mediaUrl: "/images/services/interiors/I2.webp",
      },
      {
        id: 3,
        title: "Interiors Images",
        mediaUrl: "/images/services/interiors/I3.webp",
      },
      {
        id: 4,
        title: "Interiors Images",
        mediaUrl: "/images/services/interiors/I4.webp",
      },
      {
        id: 5,
        title: "Interiors Images",
        mediaUrl: "/images/services/interiors/I5.webp",
      },
      {
        id: 6,
        title: "Interiors Images",
        mediaUrl: "/images/services/interiors/I6.webp",
      },
    ],
  },
  {
    id: "additions",
    mediaUrl: "/images/services/additions.webp",
    title: "Additions",
    description:
      "Explore our range of custom solutions, from sunrooms that bring nature indoors to luxurious bathroom renovations.",
    url: "services/additions",
    detailedDescription:
      "In addition to our core renovation offerings, we provide a range of additional services to address specific needs and preferences. Whether it's adding a sunroom for extra living space, remodeling your bathroom for improved functionality, or tackling a custom project, our team is equipped to handle any renovation challenge. Let us bring your ideas to life and create a home that reflects your unique style and personality.",
    subServices: [
      {
        id: 1,
        title: "Additions Images",
        mediaUrl: "/images/services/additions/A1.webp",
      },
      {
        id: 2,
        title: "Additions Images",
        mediaUrl: "/images/services/additions/A2.webp",
      },
      {
        id: 3,
        title: "Additions Images",
        mediaUrl: "/images/services/additions/A3.webp",
      },
      {
        id: 4,
        title: "Additions Images",
        mediaUrl: "/images/services/additions/A4.webp",
      },
      {
        id: 5,
        title: "Additions Images",
        mediaUrl: "/images/services/additions/A5.webp",
      },
      {
        id: 6,
        title: "Additions Images",
        mediaUrl: "/images/services/additions/A6.webp",
      },
    ],
  },
  {
    id: "exteriors",
    mediaUrl: "/images/services/exteriors.jpeg",
    title: "Exteriors",
    description:
      "Boost your home's curb appeal with updated siding, windows, and entryways tailored to your home's style.",
    url: "services/exteriors",
    detailedDescription:
      "Enhance your home's curb appeal and durability with our expert exterior renovation services. Whether you need to repair damaged siding, replace outdated windows, or refresh your entryway with a new door, our team has the skills and experience to transform the exterior of your home. With durable materials and meticulous installation, we'll ensure your home looks its best while standing up to the elements.",
    subServices: [
      {
        id: 1,
        title: "Exterior Images",
        mediaUrl: "/images/services/exteriors/E1.webp",
      },
      {
        id: 2,
        title: "Exterior Images",
        mediaUrl: "/images/services/exteriors/E2.webp",
      },
      {
        id: 3,
        title: "Exterior Images",
        mediaUrl: "/images/services/exteriors/E3.webp",
      },
      {
        id: 4,
        title: "Exterior Images",
        mediaUrl: "/images/services/exteriors/E4.webp",
      },
      {
        id: 5,
        title: "Exterior Images",
        mediaUrl: "/images/services/exteriors/E5.webp",
      },
      {
        id: 6,
        title: "Exterior Images",
        mediaUrl: "/images/services/exteriors/E6.webp",
      },
    ],
  },
  {
    id: "sunrooms",
    mediaUrl: "/images/services/sunrooms.webp",
    title: "Sunrooms",
    description:
      "Create a serene retreat with a custom-designed sunroom, blending indoor comfort with outdoor views and tranquility.",
    url: "services/sunrooms",
    detailedDescription:
      "Bring the beauty of the outdoors inside with a custom sunroom designed and built by our experienced team. Whether you're looking for a bright and airy space to relax with a book or a versatile room for entertaining guests, we'll create a sunroom that meets your needs and enhances your lifestyle. With high-quality materials and expert craftsmanship, you can enjoy your sunroom for years to come.",
    subServices: [
      {
        id: 1,
        title: "Sunroom Images",
        mediaUrl: "/images/services/sunrooms/S1.webp",
      },
      {
        id: 2,
        title: "Sunroom Images",
        mediaUrl: "/images/services/sunrooms/S2.webp",
      },
      {
        id: 3,
        title: "Sunroom Images",
        mediaUrl: "/images/services/sunrooms/S3.webp",
      },
      {
        id: 4,
        title: "Sunroom Images",
        mediaUrl: "/images/services/sunrooms/S4.webp",
      },
      {
        id: 5,
        title: "Sunroom Images",
        mediaUrl: "/images/services/sunrooms/S5.webp",
      },
      {
        id: 6,
        title: "Sunroom Images",
        mediaUrl: "/images/services/sunrooms/S6.webp",
      },
    ],
  },
];

export const HeaderItems = [
  {
    id: 1,
    title: "Home",
    url: "",
  },
  {
    id: 2,
    title: "About",
    url: "about-us",
  },
  {
    id: 2,
    title: "Services",
    url: "services",
  },
  {
    id: 2,
    title: "Work",
    url: "work",
  },
  {
    id: 4,
    title: "Contact",
    url: "contact-us",
  },
];

export const FooterDescription = `${COMPANY_NAME} offers fully managed IT Services to low end business. Belives in providing solutions to every problem and deriving results for the better future.`;

export const SocialLinks = [
  {
    id: 1,
    title: "Facebook",
    selector: "facebook",
    url: "https://www.facebook.com",
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    title: "LinkedIn",
    selector: "linkedin",
    url: "https://www.linkedin.com/company",
    icon: <LinkedinIcon />,
  },
  {
    id: 3,
    title: "Twitter",
    selector: "twitter",
    url: "https://twitter.com/",
    icon: <TwitterIcon />,
  },
  {
    id: 4,
    title: "Instagram",
    selector: "instagram",
    url: "https://www.instagram.com/",
    icon: <InstagramIcon />,
  },
];

export const OFFICIAL_MAIL = "Qprovibe.24@gmail.com";

export const COPYRIGHT = `${new Date().getFullYear()} © All rights reserved | ${COMPANY_NAME}`;

// Home Page
export const CarouselItems = [
  {
    id: 1,
    backgroundImage: Slide1Image,
    title: "We are The best",
    description: "We are ready To IT Solution Work.",
  },
  {
    id: 2,
    backgroundImage: Slide2Image,
    title: "We are Dedicated",
    description: "Making IT a part of your business.",
  },
];

export const Designs = [
  "UX/UI",
  "Web design",
  "Interactive design",
  "Motion design",
];

export const langs = [
  {
    id: 1,
    mediaUrl: "/images/langs/java.png",
    width: 77,
  },
  {
    id: 1,
    mediaUrl: "/images/langs/node.png",
    width: 63,
  },
  {
    id: 1,
    mediaUrl: "/images/langs/react.png",
    width: 104,
  },
  {
    id: 1,
    mediaUrl: "/images/langs/vue.png",
    width: 92,
  },
];

export const TestingResults = [
  {
    title: "20+",
    subtitle: "Tested projects",
  },
  { title: "40+", subtitle: "Happy customers" },
];

export const WHY_US_DESCRIPTION = `We work with organizations to design, implement, maintain, and upgrade their technology systems. We choose ${COMPANY_NAME} for their outsources IT Services becuase we make it easy.`;

export const WHY_US_CARDS = [
  {
    id: 1,
    title: "Easy Financing",
    description: `Renovate with ease! Our easy financing options make it simple to bring your dream home to life. At ${COMPANY_NAME}, we believe in making quality renovations accessible to everyone.`,
  },
  {
    id: 2,
    title: "Free, At Home Consultations",
    description:
      "Explore your renovation possibilities with our experts at the comfort of your home. Our free, at-home consultations ensure personalized advice tailored to your space and vision.",
  },
  {
    id: 3,
    title: "Award Winning Service",
    description:
      "Experience the excellence that sets us apart. Our award-winning renovation services are a testament to our commitment to quality, innovation, and customer satisfaction.",
  },
  {
    id: 4,
    title: "Licensed & Insured",
    description:
      "Rest easy knowing your renovation project is in safe hands. Our licensed and insured team is dedicated to delivering top-notch craftsmanship, adhering to the highest industry standards.",
  },
];

export const SUPPORT_GET_IN_TOUCH_TITLE = "Get in Touch";
export const SUPPORT_GET_IN_TOUCH_DESC =
  "Fill out the form, or call us to set up a free in-home consultation.";

export const ABOUT_US_TITLE = "Who we are?";
export const ABOUT_US_SUB_HEADLINE =
  "With years of expertise in the renovation industry, our team brings a unique blend of creativity and expertise to every project we undertake. From kitchen remodels to comprehensive interior and exterior renovations, we strive to exceed expectations, delivering exceptional results that inspire and delight.";
export const ABOUT_US_IMAGE = "/images/about_us_banner.webp";
export const ABOUT_US_WHO_WE_ARE =
  "With a commitment to quality craftsmanship and personalized service, we are your trusted partner in bringing your dream home to life. Welcome to our world of renovation excellence. From initial consultation to final walkthrough, we prioritize clear communication and collaboration, ensuring your vision is realized with precision and care.";

export const HOW_WE_ARE = [
  {
    id: 1,
    mediaUrl: "/images/process/p1.webp",
    title: "Preconstruction Design",
    description:
      "Detailed planning sessions to craft your project's blueprint, ensuring every aspect aligns with your vision and requirements.",
  },
  {
    id: 2,
    mediaUrl: "/images/process/p2.webp",
    title: "Design & Construction Estimate",
    description:
      "Comprehensive cost breakdowns and detailed plans to bring your vision to life affordably and efficiently.",
  },
  {
    id: 3,
    mediaUrl: "/images/process/p3.webp",
    title: "On-Site Consultations",
    description:
      "Expert advice and support provided directly at your project site, ensuring smooth execution and addressing any concerns.",
  },
  {
    id: 4,
    mediaUrl: "/images/process/p4.webp",
    title: "The Finishing Touches",
    description:
      "Adding final flourishes and details to your project, elevating its aesthetic appeal and ensuring perfection in every aspect.",
  },
];

export const GUARANTEES = [
  `At ${COMPANY_NAME}, our Quality Guarantee is more than just a promise—it's a cornerstone of our commitment to excellence. We pride ourselves on delivering top-notch craftsmanship and superior service with every project we undertake. From the initial consultation to the final touches, our dedicated team ensures that every aspect of your renovation meets the highest standards of quality and craftsmanship.`,
  `We understand that your home is a reflection of your personal style and aspirations. That's why we go above and beyond to ensure that every detail of your project is executed with precision and care. Our team of experienced professionals combines industry expertise with a passion for perfection, resulting in stunning transformations that exceed expectations.`,
  `With our Quality Guarantee, you can rest assured that your renovation project is in good hands. We stand behind the quality of our workmanship and materials, and we are committed to your complete satisfaction. From concept to completion, we are here to make your vision a reality and to ensure that your home is not just renovated, but transformed into a space you'll love for years to come.`,
];

export const TESTIMONIALS = [
  {
    id: 1,
    testimony: `I can't express how grateful I am to have partnered with  ${COMPANY_NAME} for our company's technology needs. From the moment we engaged with their team, we've experienced nothing short of exceptional service and expertise.`,
    name: "Vishnu Singh",
  },
  {
    id: 2,
    testimony: `One of the standout features of our collaboration has been their responsiveness. Whether it's a minor issue or a critical emergency,  ${COMPANY_NAME} has consistently been there to provide support. Their technicians are not only highly skilled but also excellent communicators, making complex tech jargon easy to understand for someone like me, who isn't tech-savvy.`,
    name: "Unnati Sabarwal",
  },
  {
    id: 3,
    testimony: `I can confidently say that  ${COMPANY_NAME} has been an invaluable partner in our journey towards IT excellence. Their dedication, expertise, and unwavering commitment to our success are commendable. I wholeheartedly recommend them to any business seeking top-notch IT solutions and support.`,
    name: "Harshit",
  },
];

export const JOB_OPENING = {
  id: 1,
  mediaUrl: "images/job_opening.png",
  title: "Interested in joining our team?",
  type: "button",
  url: "https://ca.indeed.com/cmp/Sharav-Infotech-Inc./jobs",
  mainDescription:
    "If you have a passion for creating meaningful software applications we would love to hear from you. We pride ourselves in being an equal opportunity employer dedicated to shaping the future of healthcare technology. We embrace all unique stories, skillsets and fresh perspectives.",
};

export const TEAM = [
  // {
  //   id: 1,
  //   mediaUrl: "/images/team/MyPic.jpeg",
  //   name: "Shaveta Garg",
  //   position: "Founder",
  //   socialLinks: [
  //     {
  //       id: 1,
  //       type: "linkedin",
  //       url: "https://www.linkedin.com/in/shaveta-garg",
  //     },
  //     {
  //       id: 2,
  //       type: "facebook",
  //       url: "https://www.facebook.com",
  //     },
  //     {
  //       id: 3,
  //       type: "twitter",
  //       url: "https://twitter.com/",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   mediaUrl: "/images/team/team_member.jpeg",
  //   name: "Shaveta Garg",
  //   position: "Founder",
  //   socialLinks: [
  //     {
  //       id: 1,
  //       type: "linkedin",
  //       url: "https://www.linkedin.com/in/shaveta-garg",
  //     },
  //     {
  //       id: 2,
  //       type: "facebook",
  //       url: "https://www.facebook.com",
  //     },
  //     {
  //       id: 3,
  //       type: "twitter",
  //       url: "https://twitter.com/",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   mediaUrl: "/images/team/team_member.jpeg",
  //   name: "Shaveta Garg",
  //   position: "Founder",
  //   socialLinks: [
  //     {
  //       id: 1,
  //       type: "linkedin",
  //       url: "https://www.linkedin.com/in/shaveta-garg",
  //     },
  //     {
  //       id: 2,
  //       type: "facebook",
  //       url: "https://www.facebook.com",
  //     },
  //     {
  //       id: 3,
  //       type: "twitter",
  //       url: "https://twitter.com/",
  //     },
  //   ],
  // },
];

export const IT_CONSULTING_TITLE = "We Are Consultants";
export const IT_CONSULTING_HEADING =
  " ${COMPANY_NAME} saves you time by providing experienced IT professionals across all your locations.saves you time and money by providing experienced IT professionals across all your locations.";
export const IT_CONSULTING_ASPECTS_DESCRIPTION =
  "IT consultants at   ${COMPANY_NAME} work closely with businesses and organizations to offer guidance, expertise, and solutions to their IT-related challenges and needs. Here are some key aspects of our IT consulting:";
export const IT_CONSULTING_ASPECTS_ENDING =
  "IT consulting is a diverse field, and Our consultants are specialized in various areas, including Application development and maintenance, data analytics, software development, and more. The ultimate goal of our IT consulting is to help organizations leverage technology to improve their efficiency, competitiveness, and overall success in their respective industries.";
export const IT_CONSULTING_ASPECTS = [
  {
    id: 1,
    title: "Assessment and Analysis",
    description:
      "We begin by assessing the client's current IT infrastructure, processes, and goals. We analyze existing systems, identify issues, and determine areas for improvement.",
  },
  {
    id: 2,
    title: "Strategic Planning",
    description:
      "After assessing the client's needs and goals, Our IT consultants develop a strategic plan that outlines how technology can be used to meet those objectives. This plan may include recommendations for hardware, software, network configurations, security measures, and more.",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Our IT consultants often play a significant role in implementing the recommended solutions. This may involve setting up new hardware or software, configuring networks, or integrating various systems to work seamlessly.",
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "For larger IT projects, our consultants will manage the entire project, ensuring it stays on schedule and within budget. They coordinate with various stakeholders and vendors to ensure a successful implementation.",
  },
  {
    id: 5,
    title: "Training and Support",
    description:
      "Our IT consultants will provide training to the client's employees to ensure they can effectively use the new technology. They also offer ongoing support and troubleshooting services to address any issues that may arise.",
  },
  {
    id: 6,
    title: "Security and Compliance",
    description:
      "Our IT consultants often focus on ensuring the security of a client's IT systems and ensuring compliance with relevant regulations and standards, such as GDPR, HIPAA, or industry-specific requirements.",
  },
  {
    id: 7,
    title: "Cost Optimization",
    description:
      "Our Consultants help organizations optimize their IT spending by identifying areas where cost savings can be achieved without compromising performance or security.",
  },
  {
    id: 8,
    title: "Technology Trends",
    description:
      "Staying up-to-date with the latest technology trends and innovations is crucial for IT consultants. Our Consultants advise their clients on how emerging technologies can benefit their business.",
  },
  {
    id: 9,
    title: "Technology Trends",
    description:
      "Our IT consultants tailor their recommendations and solutions to meet the specific needs of each client. They consider factors such as the size of the organization, industry, budget constraints, and long-term goals.",
  },
  {
    id: 10,
    title: "Vendor Selection",
    description:
      "When new hardware or software is needed, consultants assist in selecting the right vendors and products based on their client's requirements.",
  },
];
