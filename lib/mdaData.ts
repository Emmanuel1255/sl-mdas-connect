export type LeadershipProfile = {
  name: string
  title: string
  bio: string
  imageUrl: string
  appointmentDate: string
  education: string[]
  responsibilities: string[]
}

export interface Agency {
  id: string
  name: string
  category: "Utilities" | "Healthcare" | "Education" | "Transportation" | "Security" | "Information" | "Agriculture" | "Finance" | "Environment" | "Defence" | "Employment" | "Energy" | "Fisheries" | "Foreign Affairs" | "Gender" | "Lands" | "Local Government" | "Mines" | "Planning" | "Political Affairs" | "Social Welfare" | "Sports" | "Technical Education" | "Tourism" | "Trade" | "Water Resources" | "Works" | "Youth Affairs"
  description: string
  contact: {
    phone: string
    email: string
    address: string
    website: string
  }
  operatingHours: {
    weekday: string
    weekend: string
    note: string
  }
  leadership: LeadershipProfile
}

export const mdaData: Agency[] = [
  {
    id: "edsa",
    name: "Electricity Distribution and Supply Authority (EDSA)",
    category: "Utilities",
    description: "National electricity distribution and supply authority responsible for providing reliable electricity services across Sierra Leone.",
    contact: {
      phone: "+23278322870",
      email: "info@edsa.sl",
      address: "Siaka Stevens Street, Freetown",
      website: "https://www.edsa.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. James Rogers",
      title: "Managing Director",
      bio: "Experienced Chief Executive Officer with a demonstrated history of working in the utilities industry. Skilled in Gas, Energy, PSS/E, Renewable Energy, and Smart Grid. Strong business development professional with a Master of Business Administration (M.B.A.) focused in Business Administration and Management, General from SCHOOL OF SOCIAL SCIENCE ,NU.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Electrical Engineering, University of Sierra Leone",
        "BSc in Power Systems, Fourah Bay College"
      ],
      responsibilities: [
        "Overseeing electricity distribution",
        "Ensuring reliable power supply",
        "Managing utility infrastructure"
      ]
    }
  },
  {
    id: "guma",
    name: "Guma Valley Water Company (GUMA)",
    category: "Utilities",
    description: "Primary water utility company providing clean and safe water supply to Freetown and surrounding areas.",
    contact: {
      phone: "+232 79 513400",
      email: "info@gumavalley.sl",
      address: "Lamina Sankoh Street, Freetown",
      website: "https://gumavalley.sl/"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Hon. Mrs. Bintu Myers",
      title: "General Manager",
      bio: "Mrs. Bangura has a strong background in water resource management and utility operations.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Water Resource Management, University of Sierra Leone",
        "BSc in Environmental Science, Njala University"
      ],
      responsibilities: [
        "Ensuring clean water supply",
        "Managing water distribution systems",
        "Promoting water conservation"
      ]
    }
  },
  {
    id: "mocti",
    name: "Ministry of Communication, Technology and Innovation (MOCTI)",
    category: "Information",
    description: "Responsible for the development and regulation of communication, technology, and innovation in Sierra Leone.",
    contact: {
      phone: "+232 22 222217",
      email: "info@mocti.gov.sl",
      address: "8th Floor Youyi Building, Freetown",
      website: "https://mocti.gov.sl/"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Ms. Salima Bah",
      title: "Minister of Communication, Technology and Innovation",
      bio: `She was appointed on 16 July 2023 and took the oath of office from the President of Sierra Leone, Retired Brigadier Dr. Julius Maada Bio on 31 July 2023 as the first person to head the newly-created ministry and also the youngest Cabinet Minister.

Madam Haja Salima Monorma Bah gained her LLB law degree from the University of Wales, United Kingdom, from 2011 to 2013 and later went through the Law in Sierra Leone where she obtained her licence to practise. Prior to her appointment as the Minister of Communication Technology and Innovation by Retired Brigadier Dr. Julius Maada Bio, she served as a State Counsel at the Law Officers Department from where she was seconded to the Directorate of Science, Technology and Innovation (DSTI) as the Policy Lead and head of projects, Leading all UNICEF project portfolios. Her passion for technology and Innovation grew while in DSTI as a lawyer that sits and worked with software Engineers, Data Scientists  and product managers, she went to pursue advanced studies by earning a Masters degree (Hons) in Intellectual Property and Tech Law from Columbia Law School, New York in 2023. Her accomplishments provide her with the knowledge, transferable skills, and expertise needed to create a significant influence on Sierra Leone’s tech sector, ensuring that government services are accessible and user-friendly for all.
Madam Haja Salima Monorma Bah’s contributions have garnered global recognition. She was invited to Co-present with the co-founder of Giga to explore cutting edge SDG digital solutions, served as a panellist on an high level roundtable session on the USA Africa Business Week, Invited to the SDG Digital Event, Meta INC Conversation, Microsoft and American Tower Corporation Event, Nigeria Government Industry Trade and Investment and the Digital Economy Ministers Event, Collaborated with the Digital department of the African Development Bank Group, Digital Capacity Building Cooperation program in China, Joined other leaders in the Technology sector to discuss digital tools that can modernise public services at the 2024 digital Almaty in Kazakhstan, led a delegation to Nigeria for Technology Collaboration and was interviewed by Arise News Television and channels Television in Nigeria. 

Madam Salima Bah brings a wealth of knowledge and experience in Innovation, Technology and leadership to her role. Her mandate for the ministry is to lead the President’s vision to use digital tools to empower Sierra Leone, propelling the nation to middle-income status by 2023. This will be achieved by engaging and developing national bills, policies, and strategies to promote communication, technology, and innovation. With a dedication to Monitor and evaluate these instruments and programs to ensure their effectiveness. `,
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Information Technology, University of Sierra Leone",
        "BSc in Computer Science, Njala University"
      ],
      responsibilities: [
        "Promoting digital innovation",
        "Regulating communication technologies",
        "Enhancing ICT infrastructure"
      ]
    }
  },
  {
    id: "mbsse",
    name: "Ministry of Basic and Senior Secondary Education (MBSSE)",
    category: "Education",
    description: `The Ministry of Basic and Senior Secondary Education (MBSSE) was established in 2018 after the erstwhile Ministry of Education, Science and Technology was separated into the Ministry of Basic and Senior Secondary Education and the Ministry of Technical and Higher Education.`,
    contact: {
      phone: "+232 22 222216",
      email: "info@mbsse.gov.sl",
      address: "New England Ville, Freetown",
      website: "https://www.mbsse.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Hon. Mr. Conrad Sackey",
      title: "Minister of Basic and Senior Secondary Education",
      bio: `Mr. Sackey holds an MA in Education from the University College London, Institute of Education; a B.Sc. (Econ) Hons from Fourah Bay College, University of Sierra Leone; and was awarded the status of Chartered Director by the Institute of Directors, United Kingdom. He also holds several professional qualifications in educational management, teaching, careers guidance and business management. Mr. Sackey has held prominent positions in Education, both locally and internationally, which helped to prepare him to serve as Minister. These include Chair of the Sierra Leone Teaching Service Commission, Chief Executive of the Windsor Fellowship, a national education charity in the UK, Head of Information and Advice at Anglia Ruskin University, Strategic Manager of the London East Connexion Partnership (LECP), a sub-regional partnership which coordinated integrated support for students in education.`,
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "PhD in Biomedical Engineering, Harvard University",
        "MSc in Mechanical Engineering, MIT",
        "BSc in Mechanical Engineering, Fourah Bay College"
      ],
      responsibilities: [
        "Overseeing education policy implementation",
        "Promoting access to quality education",
        "Enhancing teacher training programs"
      ]
    }
  },
  {
    id: "mthe",
    name: "Ministry of Technical and Higher Education (MTHE)",
    category: "Education",
    description: `The Ministry of Technical and Higher Education (MTHE)was established in 2018 to provide the enabling environment to build the capacity of individuals with the relevant knowledge and skills to meet the social and economic needs of families, communities, and the society. MTHE oversees all higher educational institutions and strives for excellence, professionalism and integrity in tertiary education in Sierra Leone.`,
    contact: {
      phone: "+232 22 222232",
      email: "info@mthe.gov.sl",
      address: "New England Ville, Freetown",
      website: "https://www.mthe.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Dr. Haja Ramatulai Wurie",
      title: "Minister of Technical and Higher Education",
      bio: "Dr. Gbakima has a strong background in higher education and research.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "PhD in Education, University of Sierra Leone",
        "MSc in Educational Management, Njala University"
      ],
      responsibilities: [
        "Overseeing higher education policies",
        "Promoting technical education programs",
        "Enhancing research and innovation"
      ]
    }
  },
  {
    id: "slra",
    name: "Sierra Leone Roads Authority (SLRA)",
    category: "Transportation",
    description: "Government agency responsible for road construction and maintenance across Sierra Leone.",
    contact: {
      phone: "+232 88 345678",
      email: "info@slra.gov.sl",
      address: "Tower Hill, Freetown",
      website: "https://www.slra.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Ibrahim Sannoh",
      title: "Executive Director",
      bio: "Mr. Sannoh has extensive experience in civil engineering and road infrastructure development.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Civil Engineering, University of Sierra Leone",
        "BSc in Engineering, Fourah Bay College"
      ],
      responsibilities: [
        "Overseeing road construction projects",
        "Ensuring road maintenance",
        "Promoting road safety"
      ]
    }
  },
  {
    id: "maf",
    name: "Ministry of Agriculture and Forestry (MAF)",
    category: "Agriculture",
    description: `The Ministry of Agriculture and Food Security (MAFS) is mandated to grow and develop the country’s Agricultural sector through improving agricultural production and productivity by providing the enabling environment for farmers. MAF promotes appropriate research, extension, input delivery and market systems, thereby improving rural incomes, reducing poverty and maintaining the natural environment.`,
    contact: {
      phone: " +232 79 146533",
      email: "info@maf.gov.sl",
      address: "Youyi Building, Brookfields, Freetown",
      website: "https://www.maf.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "HON. DR. HENRY MUSA KPAKA Ph.D",
      title: "Minister of Agriculture and Food Security",
      bio: `Dr. Henry Musa Kpaka, the Minister of Agriculture for Sierra Leone is a Harvard University alumnus and London School of Economics trained economist. His profound knowledge and extensive experience in multinational development institutions and across the African continent uniquely position him for this pivotal role.

Before his appointment, Dr. Kpaka contributed his expertise to the Office of the President as Chief Technical Advisor, being an integral part of the Tony Blair Global Institute (TBI) Advisory Team in Sierra Leone. He also provided effective leadership as an Agriculture Advisor to the Minister of Agriculture.

Prior to his endeavors in Sierra Leone, Dr. Kpaka demonstrated his commitment to sustainable agriculture at the 
International Institute of Tropical Agriculture (IITA). Here, he co-managed a ten-million-dollar project in partnership with 
the governments of Tanzania and Uganda, developing new strategies to deliver agricultural technologies to smallholder farmers efficiently. Dr. Kpaka’s distinguished career includes impactful roles at the Bill and Melinda Gates Foundation and the World Bank. At the Gates Foundation, he handled a substantial 
agriculture sector portfolio spanning West and East Africa and India. At the World Bank, his focus was on devising effective policy interventions that could improve the ease of doing business in developing and emerging economies. Having earned his Ph.D. from the London School of Economics and 
Political Science (LSE) and a BSc in Economics, Dr. Kpaka is also a Public Policy Fellow at the Woodrow Wilson School at Princeton University. As the new Minister of Agriculture, Dr. Kpaka is poised to drive significant transformation in Sierra Leone’s agriculture sector, drawing from his wealth of professional experience and academic excellence.`,
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "PhD in Agricultural Economics, University of Sierra Leone",
        "MSc in Agronomy, Njala University",
        "BSc in Agriculture, Njala University"
      ],
      responsibilities: [
        "Overseeing agricultural policy implementation",
        "Promoting sustainable farming practices",
        "Enhancing food security initiatives"
      ]
    }
  },


  {
    id: "mod",
    name: "Ministry of Defence (MOD)",
    category: "Defence",
    description: "The Ministry of Defence is established to formulate, implement, monitor and evaluate strategic defence policy for the Republic of Sierra Leone Armed Forces that is effective and fostered within a framework of democratic governance.",
    contact: {
      phone: "+232 88 799102",
      email: "info@mod.gov.sl",
      address: "Independence Avenue,Tower Hill, Freetown",
      website: "https://www.mod.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "	Col (Rtd) Muana Brima Massaquoi",
      title: "Deputy Minister of Defence",
      bio: "Deputy Minister of Defence, Rtd. Colonel Muana Brima Massaquoi, has been honored with the Climate Security Award of the Year by Shout Climate Change Africa for his unwavering commitment to environmental preservation in Sierra Leone. The recognition was bestowed during the 8th Edition Environmental Care Awards, held at the Radisson Blu Hotel in Freetown. ",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Defence Studies, University of Sierra Leone",
        "BSc in Military Science, Njala University"
      ],
      responsibilities: [
        "Overseeing national defence strategies",
        "Coordinating with international defence organizations",
        "Ensuring national security"
      ]
    }
  },
  {
    id: "moe",
    name: "Ministry of Energy (MOE)",
    category: "Energy",
    description: "The main responsibility of the Ministry is to formulate and implement policies, projects, and programmes on energy and also provide oversight functions across the energy supply chain for all sub-sector agencies such as electricity production, transmission, distribution and supply, and other forms of energy supply and utilization. Electricity generation is the responsibility of the Electricity Generation and Transmission Company (EGTC) whilst distribution and supply of electricity is the responsibility of the Electricity Distribution and Supply Authority (EDSA).",
    contact: {
      phone: "+23276362654",
      email: "info@energy.gov.sl",
      address: " 36 Siaka Stevens Street Electricity House, Freetown",
      website: "http://www.energy.gov.sl/"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Dr. Eldred Tunde Taylor",
      title: "Deputy Minister of Energy",
      bio: "Dr. Taylor has extensive experience in energy policy and resource management.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Energy Management, University of Sierra Leone",
        "BSc in Electrical Engineering, Fourah Bay College"
      ],
      responsibilities: [
        "Developing energy policies",
        "Regulating energy resources",
        "Promoting renewable energy initiatives"
      ]
    }
  },
  {
    id: "mof",
    name: "Ministry of Finance (MOF)",
    category: "Finance",
    description: "The Ministry of Finance is a Key arm of the Government of Sierra Leone mandated to formulate and implement sound economic policies and public financial management, ensure efficient allocation of public resources to promote stable economic growth and development in the context of a stable macroeconomic environment. A robust, effective and efficient Ministry of Finance with demonstrable capacity to efficiently manage public resources, ensure stable economic environment and attain the highest rate of economic transformation and poverty reduction worthy of emulation by other developing economies.",
    contact: {
      phone: "+232 22 222212",
      email: "info@mof.gov.sl",
      address: "Treasury Building, George St, Freetown",
      website: "https://www.mof.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Sheku Ahmed Fantamadi Bangura",
      title: "Minister of Finance",
      bio: `Mr, Bangura, the Minister of Finance (Designate) of the Republic of Sierra Leone brings 30 years of experience on economic and development management issues at national, regional and international institutional levels.

He was Deputy Minister of Finance 1 and 2 from January 2020 – January 2023, Chairman, National COVID-19 Response (April 2021 – January 2022) and Deputy National Coordinator (Admin and Finance) COVID-19 Response for the Republic of Sierra Leone (May 2020 – April 2021).

He served as Senior Advisor on the Executive Board of the World Bank Group in Washington DC, USA for a decade (2007 – 2017) providing fiduciary and corporate level advisory on economic development programs. He was also Consultant on development effectiveness of World Bank interventions in Sub Saharan Africa at the Africa Region Vice Presidency for 2 years (August 2017 – December 2019). He was Principal Economist (2003 – 2006) and Senior Economist (July 2001 – December 2002) at the West African Monetary Institute, Accra, Ghana during the period of July 2001 – January 2006 providing regional surveillance and management advisory to the West Africa regional monetary integration program.

Mr Bangura has track record in public finance management and economic governance at the national level serving as Director of Fiscal Decentralisation in the Ministry of Finance in 2006-2007 and Economist managing public debt in the earlier part of his career in 1993 – 1999 at the Ministry of Finance, World Bank and the International Monetary Fund. Mr. Bangura interned at the International Monetary Fund with the Policy Development and Review Department in October 1998 and April 1999 working on external debt management and HIPC Initiative.`,
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MBA in Finance, Harvard Business School",
        "BSc in Economics, Fourah Bay College"
      ],
      responsibilities: [
        "Formulating fiscal policies",
        "Managing national budget and expenditures",
        "Overseeing financial regulations"
      ]
    }
  },
  {
    id: "mfmr",
    name: "Ministry of Fisheries and Marine Resources (MFMR)",
    category: "Fisheries",
    description: "Responsible for the sustainable management of fisheries and marine resources in Sierra Leone.",
    contact: {
      phone: "+232 22 222222",
      email: "info@mfmr.gov.sl",
      address: "Fisheries Wharf, Freetown",
      website: "https://www.mfmr.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mrs. Emma Kowa",
      title: "Minister of Fisheries and Marine Resources",
      bio: "Mrs. Kowa has extensive experience in marine resource management.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Marine Biology, University of Sierra Leone",
        "BSc in Fisheries, Njala University"
      ],
      responsibilities: [
        "Overseeing fisheries policies",
        "Promoting sustainable fishing practices",
        "Managing marine resources"
      ]
    }
  },
  {
    id: "mofa",
    name: "Ministry of Foreign Affairs and International Cooperation (MOFAIC)",
    category: "Foreign Affairs",
    description: "Responsible for managing Sierra Leone's international relations and diplomatic engagements.",
    contact: {
      phone: "+232 22 222223",
      email: "info@mofa.gov.sl",
      address: "State House, Freetown",
      website: "https://www.mofa.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mrs. Nabeela Tunis",
      title: "Minister of Foreign Affairs and International Cooperation",
      bio: "Mrs. Tunis is a seasoned diplomat with extensive experience in international relations.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in International Relations, University of Sierra Leone",
        "BA in Political Science, Fourah Bay College"
      ],
      responsibilities: [
        "Managing diplomatic relations",
        "Overseeing international cooperation programs",
        "Promoting Sierra Leone's interests abroad"
      ]
    }
  },
  {
    id: "mogca",
    name: "Ministry of Gender and Children's Affairs (MOGCA)",
    category: "Gender",
    description: "Responsible for promoting gender equality and the welfare of children in Sierra Leone.",
    contact: {
      phone: "+232 22 222224",
      email: "info@mogca.gov.sl",
      address: "Youyi Building, Brookfields, Freetown",
      website: "https://www.mogca.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mrs. Manty Tarawalli",
      title: "Minister of Gender and Children's Affairs",
      bio: "Mrs. Tarawalli is a strong advocate for gender equality and children's rights.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Gender Studies, University of Sierra Leone",
        "BA in Sociology, Fourah Bay College"
      ],
      responsibilities: [
        "Promoting gender equality",
        "Protecting children's rights",
        "Overseeing gender-based violence prevention programs"
      ]
    }
  },
  {
    id: "moh",
    name: "Ministry of Health (MOH)",
    category: "Healthcare",
    description: "Ensures the provision of quality healthcare services to the people of Sierra Leone.",
    contact: {
      phone: "+232 22 222213",
      email: "info@moh.gov.sl",
      address: "New England Ville, Freetown",
      website: "https://www.moh.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Dr. Austin Demby",
      title: "Minister of Health",
      bio: "Dr. Demby is a seasoned healthcare professional with a focus on public health.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MD, University of Sierra Leone",
        "MPH, Johns Hopkins University"
      ],
      responsibilities: [
        "Overseeing public health initiatives",
        "Implementing healthcare policies",
        "Managing healthcare infrastructure"
      ]
    }
  },
  {
    id: "moice",
    name: "Ministry of Information and Civic Education (MOICE)",
    category: "Information",
    description: "Responsible for disseminating public information and promoting civic education in Sierra Leone.",
    contact: {
      phone: "+232 22 222214",
      email: "info@moice.gov.sl",
      address: "Youyi Building, Brookfields, Freetown",
      website: "https://www.moice.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Chernor Bah",
      title: "Minister of Information and Civic Education",
      bio: "Mr. Bah has a background in journalism and public communication.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "BA in Mass Communication, Fourah Bay College",
        "Diploma in Public Relations, London School of Journalism"
      ],
      responsibilities: [
        "Overseeing government communication strategies",
        "Promoting public access to information",
        "Enhancing civic education programs"
      ]
    }
  },
  {
    id: "mia",
    name: "Ministry of Internal Affairs (MIA)",
    category: "Security",
    description: "Oversees internal security and law enforcement agencies to maintain public safety in Sierra Leone.",
    contact: {
      phone: "+232 22 222215",
      email: "info@mia.gov.sl",
      address: "Gloucester Street, Freetown",
      website: "https://www.mia.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Morie Lenghor",
      title: "Minister of Internal Affairs",
      bio: "Mr. Lenghor has extensive experience in public administration and security management.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in International Relations, University of Sierra Leone",
        "BA in Political Science, Njala University"
      ],
      responsibilities: [
        "Overseeing internal security operations",
        "Coordinating with law enforcement agencies",
        "Developing policies for public safety"
      ]
    }
  },
  {
    id: "mlhcp",
    name: "Ministry of Lands, Housing and Country Planning (MLHCP)",
    category: "Lands",
    description: "Responsible for land management, housing development, and country planning in Sierra Leone.",
    contact: {
      phone: "+232 22 222225",
      email: "info@mlhcp.gov.sl",
      address: "George Street, Freetown",
      website: "https://www.mlhcp.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Turad Senesie",
      title: "Minister of Lands, Housing and Country Planning",
      bio: "Mr. Senesie has a background in urban planning and land management.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Urban Planning, University of Sierra Leone",
        "BSc in Geography, Njala University"
      ],
      responsibilities: [
        "Overseeing land management policies",
        "Promoting housing development",
        "Planning urban and rural development"
      ]
    }
  },
  {
    id: "mlgca",
    name: "Ministry of Local Government and Community Affairs (MLGCA)",
    category: "Local Government",
    description: "Responsible for local governance and community development in Sierra Leone.",
    contact: {
      phone: "+232 22 222226",
      email: "info@mlgca.gov.sl",
      address: "Youyi Building, Brookfields, Freetown",
      website: "https://www.mlgca.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Tamba Lamina",
      title: "Minister of Local Government and Community Affairs",
      bio: "Mr. Lamina has extensive experience in local governance and community development.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Public Administration, University of Sierra Leone",
        "BA in Political Science, Fourah Bay College"
      ],
      responsibilities: [
        "Overseeing local governance structures",
        "Promoting community development initiatives",
        "Enhancing public service delivery"
      ]
    }
  },
  {
    id: "mmmr",
    name: "Ministry of Mines and Mineral Resources (MMMR)",
    category: "Mines",
    description: "Responsible for the regulation and development of the mining sector in Sierra Leone.",
    contact: {
      phone: "+232 22 222227",
      email: "info@mmmr.gov.sl",
      address: "Tower Hill, Freetown",
      website: "https://www.mmmr.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Timothy Kabba",
      title: "Minister of Mines and Mineral Resources",
      bio: "Mr. Kabba has a strong background in mineral resource management.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Mineral Engineering, University of Sierra Leone",
        "BSc in Geology, Njala University"
      ],
      responsibilities: [
        "Regulating mining activities",
        "Promoting sustainable mining practices",
        "Managing mineral resources"
      ]
    }
  },
  {
    id: "moped",
    name: "Ministry of Planning and Economic Development (MOPED)",
    category: "Planning",
    description: "Responsible for national planning and economic development in Sierra Leone.",
    contact: {
      phone: "+232 22 222228",
      email: "info@moped.gov.sl",
      address: "George Street, Freetown",
      website: "https://www.moped.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Dr. Francis Kaikai",
      title: "Minister of Planning and Economic Development",
      bio: "Dr. Kaikai has extensive experience in economic planning and development.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "PhD in Economics, University of Sierra Leone",
        "MSc in Development Studies, Njala University"
      ],
      responsibilities: [
        "Formulating national development plans",
        "Overseeing economic development programs",
        "Coordinating with international development partners"
      ]
    }
  },
  {
    id: "mopapa",
    name: "Ministry of Political and Public Affairs (MOPAPA)",
    category: "Political Affairs",
    description: "Responsible for political affairs and public engagement in Sierra Leone.",
    contact: {
      phone: "+232 22 222229",
      email: "info@mopapa.gov.sl",
      address: "State House, Freetown",
      website: "https://www.mopapa.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Foday Yumkella",
      title: "Minister of Political and Public Affairs",
      bio: "Mr. Yumkella is a seasoned politician with a focus on public engagement.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Political Science, University of Sierra Leone",
        "BA in Public Administration, Fourah Bay College"
      ],
      responsibilities: [
        "Overseeing political affairs",
        "Promoting public engagement",
        "Enhancing political dialogue"
      ]
    }
  },
  {
    id: "msw",
    name: "Ministry of Social Welfare (MSW)",
    category: "Social Welfare",
    description: "Responsible for social welfare programs and services in Sierra Leone.",
    contact: {
      phone: "+232 22 222230",
      email: "info@msw.gov.sl",
      address: "Youyi Building, Brookfields, Freetown",
      website: "https://www.msw.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mrs. Baindu Dassama",
      title: "Minister of Social Welfare",
      bio: "Mrs. Dassama has a strong background in social work and welfare services.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Social Work, University of Sierra Leone",
        "BA in Sociology, Njala University"
      ],
      responsibilities: [
        "Overseeing social welfare programs",
        "Promoting social protection initiatives",
        "Enhancing community support services"
      ]
    }
  },
  {
    id: "mos",
    name: "Ministry of Sports (MOS)",
    category: "Sports",
    description: "Responsible for the development and promotion of sports in Sierra Leone.",
    contact: {
      phone: "+232 22 222231",
      email: "info@mos.gov.sl",
      address: "National Stadium, Freetown",
      website: "https://www.mos.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Ibrahim Nyelenkeh",
      title: "Minister of Sports",
      bio: "Mr. Nyelenkeh is a former athlete with a passion for sports development.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Sports Management, University of Sierra Leone",
        "BA in Physical Education, Fourah Bay College"
      ],
      responsibilities: [
        "Promoting sports development",
        "Overseeing national sports programs",
        "Enhancing sports infrastructure"
      ]
    }
  },

  {
    id: "mtca",
    name: "Ministry of Tourism and Cultural Affairs (MTCA)",
    category: "Tourism",
    description: "Responsible for promoting tourism and cultural heritage in Sierra Leone.",
    contact: {
      phone: "+232 22 222233",
      email: "info@mtca.gov.sl",
      address: "Lumley Beach Road, Freetown",
      website: "https://www.mtca.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mrs. Memunatu Pratt",
      title: "Minister of Tourism and Cultural Affairs",
      bio: "Mrs. Pratt is a cultural enthusiast with a focus on tourism development.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Tourism Management, University of Sierra Leone",
        "BA in Cultural Studies, Fourah Bay College"
      ],
      responsibilities: [
        "Promoting tourism development",
        "Preserving cultural heritage",
        "Enhancing cultural tourism initiatives"
      ]
    }
  },
  {
    id: "mti",
    name: "Ministry of Trade and Industry (MTI)",
    category: "Trade",
    description: "Responsible for trade and industrial development in Sierra Leone.",
    contact: {
      phone: "+232 22 222234",
      email: "info@mti.gov.sl",
      address: "George Street, Freetown",
      website: "https://www.mti.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Edward Hinga Sandy",
      title: "Minister of Trade and Industry",
      bio: "Mr. Sandy has extensive experience in trade and industrial policy.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in International Trade, University of Sierra Leone",
        "BA in Economics, Fourah Bay College"
      ],
      responsibilities: [
        "Promoting trade policies",
        "Overseeing industrial development",
        "Enhancing trade relations"
      ]
    }
  },
  {
    id: "mta",
    name: "Ministry of Transport and Aviation (MTA)",
    category: "Transportation",
    description: "Responsible for the regulation and development of transport and aviation in Sierra Leone.",
    contact: {
      phone: "+232 22 222235",
      email: "info@mta.gov.sl",
      address: "Lungi Airport, Freetown",
      website: "https://www.mta.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Kabineh Kallon",
      title: "Minister of Transport and Aviation",
      bio: "Mr. Kallon has a strong background in transport and aviation management.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Transport Management, University of Sierra Leone",
        "BA in Logistics, Fourah Bay College"
      ],
      responsibilities: [
        "Regulating transport and aviation",
        "Promoting transport infrastructure development",
        "Enhancing aviation safety"
      ]
    }
  },
  {
    id: "mwrs",
    name: "Ministry of Water Resources and Sanitation (MWRS)",
    category: "Water Resources",
    description: "Responsible for the management of water resources and sanitation in Sierra Leone.",
    contact: {
      phone: "+232 22 222236",
      email: "info@mwrs.gov.sl",
      address: "George Street, Freetown",
      website: "https://www.mwrs.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Philip Karimu",
      title: "Minister of Water Resources and Sanitation",
      bio: "Mr. Karimu has extensive experience in water resource management.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Water Resource Management, University of Sierra Leone",
        "BSc in Environmental Science, Njala University"
      ],
      responsibilities: [
        "Managing water resources",
        "Promoting sanitation initiatives",
        "Enhancing water supply systems"
      ]
    }
  },
  {
    id: "mowpa",
    name: "Ministry of Works and Public Assets (MOWPA)",
    category: "Works",
    description: "Responsible for public works and asset management in Sierra Leone.",
    contact: {
      phone: "+232 22 222237",
      email: "info@mowpa.gov.sl",
      address: "George Street, Freetown",
      website: "https://www.mowpa.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Peter Bayuku Konteh",
      title: "Minister of Works and Public Assets",
      bio: "Mr. Konteh has a strong background in civil engineering and public works.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MSc in Civil Engineering, University of Sierra Leone",
        "BSc in Engineering, Fourah Bay College"
      ],
      responsibilities: [
        "Overseeing public works projects",
        "Managing public assets",
        "Enhancing infrastructure development"
      ]
    }
  },
  {
    id: "moya",
    name: "Ministry of Youth Affairs (MOYA)",
    category: "Youth Affairs",
    description: "Responsible for youth development and empowerment in Sierra Leone.",
    contact: {
      phone: "+232 22 222238",
      email: "info@moya.gov.sl",
      address: "Youyi Building, Brookfields, Freetown",
      website: "https://www.moya.gov.sl"
    },
    operatingHours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed",
      note: "Public holidays may affect these hours",
    },
    leadership: {
      name: "Mr. Mohamed Orman Bangura",
      title: "Minister of Youth Affairs",
      bio: "Mr. Bangura is a youth advocate with a focus on youth empowerment.",
      imageUrl: "/user-avatar.png",
      appointmentDate: "10 July 2023",
      education: [
        "MA in Youth Development, University of Sierra Leone",
        "BA in Sociology, Fourah Bay College"
      ],
      responsibilities: [
        "Promoting youth development programs",
        "Empowering young people",
        "Enhancing youth participation in governance"
      ]
    }
  }
]

export const categories = ["All", "Utilities", "Healthcare", "Education", "Information", "Transportation", "Security", "Agriculture", "Finance", "Environment", "Defence", "Employment", "Energy", "Fisheries", "Foreign Affairs", "Gender", "Lands", "Local Government", "Mines", "Planning", "Political Affairs", "Social Welfare", "Sports", "Technical Education", "Tourism", "Trade", "Water Resources", "Works", "Youth Affairs"] as const