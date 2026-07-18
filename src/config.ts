export const siteConfig = {
  name: "Mohamed Mohamed",
  title: "Student & STEM Explorer",
  description: "Portfolio website of Mohamed Mohamed",
  accentColor: "#1d4ed8",

  social: {
    email: "subermohamed8@gmail.com",
    linkedin: "",
    twitter: "",
    github: "",
  },

  aboutMe:
    "I am a high school student passionate about neuroscience, biomedical engineering, and hands-on STEM learning. I’ve explored clinical dermatology, medical device innovation, and customer service roles that strengthened my communication and leadership skills.",

  skills: [
    "Communication",
    "Leadership",
    "Mentoring",
    "Attention to Detail",
    "Conflict Resolution",
    "Git",
    "VS Code",
    "Python",
    "HTML",
    "CSS"
  ],

  projects: [
    {
      name: "Personal Website",
      description:
        "A portfolio website built using the DevPortfolio template and customized with my academic background, STEM experiences, and projects.",
      link: "",
      skills: ["Astro", "HTML", "CSS", "Git"],
    },
    {
      name: "Medtronic Biomedical Explorer",
      description:
        "Participated in Medtronic’s Biomedical Explorer program, learning biomedical engineering concepts and medical device innovation.",
      link: "",
      skills: ["Biomedical Engineering", "STEM", "Medical Technology"],
    },
    {
      name: "Dermatology Internship",
      description:
        "Completed 50 hours of clinical shadowing with a Dermatology PA, observing patient care, diagnostics, biopsies, excisions, and skin cancer screenings.",
      link: "",
      skills: ["Clinical Experience", "Healthcare", "HIPAA Compliance"],
    },
    {
      name: "Math Team Leadership",
      description:
        "Captain and founder of the Math Team, organizing practices, leading competitions, and supporting peer learning.",
      link: "",
      skills: ["Leadership", "Problem Solving", "Teamwork"],
    }
  ],

  experience: [
    {
      company: "Domino's Pizza",
      role: "Customer Service Representative",
      period: "May 2025 – Present",
      description:
        "Managed high-volume orders, resolved customer concerns, processed payments, and maintained a clean workspace.",
      bullets: [
        "Handled high-volume customer orders during peak hours",
        "Resolved customer issues with professionalism and care",
        "Maintained cleanliness and organization in the workspace",
      ],
    },
    {
      company: "Medtronic",
      role: "Biomedical Engineering Explorer",
      period: "Oct 2025 – Apr 2026",
      description:
        "Explored biomedical engineering concepts and medical device innovation through hands-on activities.",
      bullets: [
        "Participated in hands-on biomedical engineering activities",
        "Learned about medical device design and innovation",
        "Collaborated with peers in STEM-focused projects",
      ],
    },
    {
      company: "Schweiger Dermatology",
      role: "Dermatology Intern",
      period: "Feb 2026 – Mar 2026",
      description:
        "Completed 50 hours of clinical shadowing observing patient care, diagnostics, biopsies, excisions, and skin cancer screenings.",
      bullets: [
        "Observed patient consultations and dermatologic procedures",
        "Learned about biopsies, excisions, and skin cancer screenings",
        "Gained exposure to clinical workflows and patient care",
      ],
    }
  ],

  education: [
    {
      school: "Park Center Senior High School",
      degree: "High School Diploma (Expected June 2027)",
      dateRange: "2023 – 2027",          // ⭐ matches edu.dateRange
      achievements: [                    // ⭐ matches edu.achievements.map
        "GPA: 3.986",
        "International Baccalaureate Candidate",
        "Top 1% of class",
        "Strong STEM and humanities coursework",
      ],
    }
  ],
};
