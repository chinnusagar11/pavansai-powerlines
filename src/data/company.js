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
  description: "Pavan Sai Power Lines (PSPL) is a premier supplier and stockist of high-quality HT/LT overhead line materials, transformer spares, AB switches, AAAC & ACSR conductors, earthing materials, industrial electricals, and all MS & GI towers based in Secunderabad, Telangana.",
  
  // Official Production Website URL (Configurable for SEO & Canonical links)
  website: "https://www.pavansaipowerlines.com",
  
  // Primary Location (Exact Registered Address from Official Visiting Card)
  location: {
    city: "Secunderabad",
    district: "Hyderabad",
    state: "Telangana",
    country: "India",
    pincode: "500003",
    street: "6-6-269/159, Bansilalpet Road",
    fullAddress: "6-6-269/159, Bansilalpet Road, Secunderabad - 500003, Telangana (T.G.), India",
    shortAddress: "6-6-269/159, Bansilalpet Road, Secunderabad - 500003",
    landmark: "Bansilalpet Road Commercial Corridor",
    geo: {
      latitude: 17.4360662,
      longitude: 78.4975513
    },
    serviceAreas: [
      "Hyderabad",
      "Secunderabad",
      "Telangana",
      "Andhra Pradesh"
    ],
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4952445657497!2d78.4975513!3d17.4360662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a21e0586e99%3A0x63ea01878893d5f5!2sBansilalpet%2C%20Secunderabad%2C%20Telangana%20500003!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=6-6-269/159,+Bansilalpet+Road,+Secunderabad+500003+Telangana"
  },

  // Contact Information (Exact Details from Official Visiting Card)
  contact: {
    // Phone numbers (Click-to-call)
    primaryPhone: "+91 97004 49684",
    primaryPhoneRaw: "+919700449684",
    secondaryPhone: "+91 97004 49684",
    secondaryPhoneRaw: "+919700449684",
    
    // WhatsApp direct click-to-chat
    whatsappNumber: "+919700449684",
    whatsappDisplay: "+91 97004 49684",
    
    // Email address (from visiting card)
    primaryEmail: "pavansaipowerlines@gmail.com",
    salesEmail: "pavansaipowerlines@gmail.com",
    
    // Key Representative (from official visiting card)
    representativeName: "V. Nagamalleswara Rao",
    designation: "Proprietor",
    visitingCardImage: "/images/pspl-visiting-card.jpg"
  },

  // Business Hours
  businessHours: [
    { days: "Monday - Saturday", hours: "9:30 AM - 7:30 PM IST" },
    { days: "Sunday", hours: "Emergency / Project Inquiries via WhatsApp" }
  ],

  // Commercial / Regulatory Reference
  commercial: {
    gstin: "Available upon commercial enquiry / quotation",
    businessType: "Electrical Transmission & Distribution Material Supplier / Stockist",
    serviceRegion: "Telangana, Andhra Pradesh & Pan-India Supply Logistics"
  },

  // Core Product Categories strictly matching official visiting card specifications
  categories: [
    {
      id: "overhead-lines",
      slug: "ht-lt-overhead-line-materials",
      name: "HT/LT Overhead Line Materials",
      shortDesc: "Complete hardware fittings, polymer & porcelain pin/disc insulators, stay sets, and GI cross arms for High Tension & Low Tension lines.",
      icon: "Zap"
    },
    {
      id: "transformer-spares",
      slug: "transformer-spares",
      name: "Transformer Spares",
      shortDesc: "Comprehensive spares including HT/LT bushings, silica gel breathers, cork & nitrile gaskets (RC70C), explosion vents, and oil level indicators.",
      icon: "Cpu"
    },
    {
      id: "ab-switches",
      slug: "ab-switches",
      name: "AB Switches (Air Break)",
      shortDesc: "11kV & 33kV outdoor gang-operated triple pole Air Break switches, Horn Gap fuse units, and replacement contacts.",
      icon: "ToggleRight"
    },
    {
      id: "conductors",
      slug: "aaac-acsr-conductors",
      name: "AAAC & ACSR Conductors",
      shortDesc: "All Aluminium Alloy Conductors (AAAC) and Aluminium Conductor Steel Reinforced (ACSR) conforming to IS 398 in all standard sizes.",
      icon: "Activity"
    },
    {
      id: "earthing",
      slug: "earthing-materials",
      name: "Earthing Materials",
      shortDesc: "Molecular copper-bonded electrodes, perforated GI earthing pipes, cast iron pipes, galvanized earth flats, and bare copper wire coils.",
      icon: "ShieldAlert"
    },
    {
      id: "industrial-electricals",
      slug: "industrial-electricals",
      name: "Industrial Electricals",
      shortDesc: "Industrial switchgear, LT distribution boxes, cable glands, lugs, HRC fuses, and industrial electrical supplies.",
      icon: "Sliders"
    },
    {
      id: "towers",
      slug: "all-ms-gi-towers",
      name: "All MS & GI Towers",
      shortDesc: "Hot-dip galvanized lattice transmission towers, substation structures, MS angles, GI poles, and fabricated steel infrastructure.",
      icon: "Maximize"
    }
  ]
};

