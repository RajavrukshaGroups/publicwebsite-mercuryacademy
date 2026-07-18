export const siteConfig = {
    name: "Mercury Academy",

    shortName: "Mercury",

    description:
        "Explore trusted online and distance education universities, courses, specializations, fees, eligibility and admission support with Mercury Academy.",

    url:
        process.env.NEXT_PUBLIC_SITE_URL ||
        "http://localhost:3000",

    contact: {
        email: "info@mercuryacademy.in",
        phone: "+91 98765 43210",
        whatsapp: "919876543210",
    },

    address: {
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
    },

    socialLinks: {
        facebook: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
} as const;