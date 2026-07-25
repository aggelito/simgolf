export const site = {
  name: 'Golfoteket',
  url: 'https://aggelito.github.io/simgolf/',
  productionUrl: 'https://golfoteket.se',
  bookingUrl: 'https://book.sweetspot.io/clubs/golfoteket/2553/tee-sheet',
  membershipsUrl: 'https://book.sweetspot.io/clubs/golfoteket/memberships',
  passesUrl: 'https://book.sweetspot.io/clubs/golfoteket/passes',
  mapsUrl: 'https://maps.google.com/?q=Åsögatan+87+118+29+Stockholm',
  email: 'info@golfoteket.se',
  address: 'Åsögatan 87',
  postalCode: '118 29',
  city: 'Stockholm',
  hours: '06–23 varje dag',
  socials: {
    instagram: 'https://www.instagram.com/golfoteket/',
    tiktok: 'https://www.tiktok.com/@golfoteket',
    facebook: 'https://www.facebook.com/profile.php?id=61591085562830',
  },
};

export const prices = [
  ['Mån–fre 06:00–14:00', '299 kr'],
  ['Mån–fre 14:00–23:00', '399 kr'],
  ['Lör–sön hela dagen', '399 kr'],
];

export const memberships = [
  { name: 'Platinum', price: '2 495 kr', hours: '5 fria timmar', discount: '20% rabatt' },
  { name: 'Guld', price: '1 250 kr', hours: '3 fria timmar', discount: '15% rabatt' },
  { name: 'Silver', price: '995 kr', hours: '2 fria timmar', discount: '10% rabatt' },
];

export const campaign = {
  opens: '17 augusti 2026',
  validThrough: '1 oktober 2026',
  offers: [
    ['Första timmen', '99 kr', 'Medlemskap 1 kr'],
    ['10-timmarspass', '1 995 kr', 'Upp till 50%'],
    ['5-timmarspass', '1 295 kr', 'Upp till 30%'],
  ],
};

export const addressSchema = {
  '@type': 'PostalAddress',
  streetAddress: site.address,
  postalCode: site.postalCode,
  addressLocality: site.city,
  addressRegion: 'Stockholm',
  addressCountry: 'SE',
};

export function localBusinessSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation'],
    '@id': `${site.url}#golfoteket`,
    name: site.name,
    description,
    url: site.url,
    email: site.email,
    address: addressSchema,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '23:00',
      validFrom: '2026-08-17',
    },
    areaServed: [{ '@type': 'Place', name: 'Södermalm' }, { '@type': 'City', name: 'Stockholm' }],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '6 Trackman iO simulatorer', value: true },
      { '@type': 'LocationFeatureSpecification', name: '4K laserprojektorer och skärmar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Ping G440-klubbor och bollar ingår', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Self-service med dörrkod', value: true },
    ],
    potentialAction: { '@type': 'ReserveAction', target: site.bookingUrl, name: 'Boka simulatorgolf via Sweetspot' },
  };
}

export function faqSchema(faqs: string[][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
