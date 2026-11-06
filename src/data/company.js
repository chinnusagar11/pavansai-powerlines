/**
 * Company Information Configuration for Pavan Sai Power Lines (PSPL)
 * 
 * Note for Owner/Administrator:
 * You can easily update phone numbers, addresses, emails, and GSTIN
 * in this single file. Any changes here will reflect across the entire website.
 */

export const COMPANY_INFO = {
  name: "Pavan Sai Power Lines",
  shortName: "PSPL",
  tagline: "Reliable Electrical Power Transmission & Distribution Materials Supplier",
  description: "Pavan Sai Power Lines (PSPL) is a premier supplier and stockist of high-quality HT/LT overhead line materials, transformer spares, AB switches, conductors, earthing materials, industrial electricals, and GI towers based in Secunderabad, Telangana.",
  
  // Primary Location (from Company Reference)
  location: {
    city: "Secunderabad",
    state: "Telangana",
    country: "India",
    pincode: "500003", // Standard central Secunderabad PIN; update if specific postal area differs
    // Structured Address placeholder ready to match exact visiting card line by line
    street: "Ranigunj / Subhash Road Commercial Hub",
    fullAddress: "Secunderabad, Hyderabad Urban Agglomeration, Telangana - 500003, India",
    landmark: "Central Electrical & Industrial Distribution Zone",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60906.945591321744!2d78.47352378850785!3d17.43992953288425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99df5e95c1c7%3A0xc3b865bd20c5780!2sSecunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709740000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Secunderabad,Telangana,India"
  },

  // Contact Information (Clear editable placeholders based on visiting card)
  contact: {
    // Phone numbers (Click-to-call)
    primaryPhone: "+91 98490 12345", // [Update with primary contact from visiting card]
    primaryPhoneRaw: "+919849012345",
    secondaryPhone: "+91 98480 67890", // [Update with alternate mobile/landline]
    secondaryPhoneRaw: "+919848067890",
    
    // WhatsApp direct click-to-chat
    whatsappNumber: "+919849012345", // Format with country code without spaces: +919849012345
    whatsappDisplay: "+91 98490 12345",
    
    // Email addresses
    primaryEmail: "pavansaipowerlines@gmail.com", // [Update with exact email on visiting card]
    salesEmail: "sales.pspl.hyd@gmail.com",
    
    // Key Representative (Update if proprietor/contact name is on the visiting card)
    representativeName: "Authorized Business Representative",
    designation: "Proprietor / Managing Representative"
  },

  // Business Hours
  businessHours: [
    { days: "Monday - Saturday", hours: "9:30 AM - 7:30 PM IST" },
    { days: "Sunday", hours: "Closed / Emergency Inquiries via WhatsApp" }
  ],

  // Commercial / Regulatory Reference (Keep placeholder for verified card data)
  commercial: {
    gstin: "36XXXXXXXXXX1Z5 (Available upon commercial enquiry)",
    businessType: "Electrical Transmission & Distribution Material Supplier / Stockist",
    serviceRegion: "Telangana, Andhra Pradesh & Pan-India Supply Logistics"
  },

  // Core Product Categories strictly matching company specs
  categories: [
    {
      id: "overhead-lines",
      slug: "ht-lt-overhead-line-materials",
      name: "HT/LT Overhead Line Materials",
      shortDesc: "Complete hardware fittings, pin insulators, disc insulators, stay sets, and cross arms for High Tension & Low Tension lines.",
      icon: "Zap"
    },
    {
      id: "transformer-spares",
      slug: "transformer-spares",
      name: "Transformer Spares",
      shortDesc: "Comprehensive spares including bushings, silica gel breathers, conservator parts, gaskets, and explosion vents.",
      icon: "Cpu"
    },
    {
      id: "ab-switches",
      slug: "ab-switches",
      name: "AB Switches (Air Break)",
      shortDesc: "11kV & 33kV Air Break switches, gang operated isolators, horn gap fuses, and heavy-duty contact assemblies.",
      icon: "ToggleRight"
    },
    {
      id: "conductors",
      slug: "aaac-acsr-conductors",
      name: "AAAC & ACSR Conductors",
      shortDesc: "All Aluminium Alloy Conductors (AAAC) and Aluminium Conductor Steel Reinforced (ACSR) in all standard conductor sizes.",
      icon: "Activity"
    },
    {
      id: "earthing",
      slug: "earthing-materials",
      name: "Earthing Materials",
      shortDesc: "GI / Copper-bonded earth electrodes, earthing pipes, flats, earthing chemical compound, and heavy clamps.",
      icon: "ShieldAlert"
    },
    {
      id: "industrial-electricals",
      slug: "industrial-electricals",
      name: "Industrial Electricals",
      shortDesc: "Industrial switchgear, LT distribution boards, cable glands, lugs, power cables, and motor control components.",
      icon: "Sliders"
    },
    {
      id: "towers",
      slug: "aims-gi-towers",
      name: "AIMS & GI Towers",
      shortDesc: "Hot-dip galvanized steel towers, transmission tower members, lattice structures, sub-station structures, and AIMS assemblies.",
      icon: "Maximize"
    }
  ]
};

