export const practice = {
  name: 'Dental Care on Yellow Bluff',
  shortName: 'Yellow Bluff',
  city: 'Jacksonville, FL',
  tagline: 'Comprehensive care for your overall wellness.',
  description:
    "You deserve a healthy, beautiful smile — the team at Dental Care on Yellow Bluff provides personalized care solutions to help you get the smile you've always wanted.",
  phoneDisplay: '(904) 204-7496',
  phoneHref: 'tel:+19042047496',
  addressLine1: '12517 Yellow Bluff Rd',
  addressLine2: 'Jacksonville, FL 32226',
  mapsQuery: '12517 Yellow Bluff Rd, Jacksonville, FL 32226',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=12517%20Yellow%20Bluff%20Rd%2C%20Jacksonville%2C%20FL%2032226&z=15&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=12517+Yellow+Bluff+Rd,+Jacksonville,+FL+32226',
  reviews: {
    rating: 4.6,
    count: 871,
    source: 'Google',
  },
  affiliation: 'A member of the Orahh Care Dental Community',
  aarp:
    'Orahh Care Dental Community was selected by AARP® for its commitment to accessible, comprehensive care and exceptional patient experiences. Care provided by local, independent practices.',
  timezone: 'America/New_York',
  hours: [
    { day: 'Monday', short: 'Mon', weekday: 'Mon', open: '8:00 AM', close: '5:00 PM', openMinutes: 8 * 60, closeMinutes: 17 * 60, closed: false },
    { day: 'Tuesday', short: 'Tues', weekday: 'Tue', open: '9:00 AM', close: '5:00 PM', openMinutes: 9 * 60, closeMinutes: 17 * 60, closed: false },
    { day: 'Wednesday', short: 'Wed', weekday: 'Wed', open: '8:00 AM', close: '5:00 PM', openMinutes: 8 * 60, closeMinutes: 17 * 60, closed: false },
    { day: 'Thursday', short: 'Thurs', weekday: 'Thu', open: '8:00 AM', close: '5:00 PM', openMinutes: 8 * 60, closeMinutes: 17 * 60, closed: false },
    { day: 'Friday', short: 'Fri', weekday: 'Fri', open: '8:00 AM', close: '5:00 PM', openMinutes: 8 * 60, closeMinutes: 17 * 60, closed: false },
    { day: 'Saturday', short: 'Sat', weekday: 'Sat', open: null, close: null, openMinutes: null, closeMinutes: null, closed: true },
    { day: 'Sunday', short: 'Sun', weekday: 'Sun', open: null, close: null, openMinutes: null, closeMinutes: null, closed: true },
  ],
}

function jacksonvilleParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: practice.timezone,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date)

  const get = (type) => parts.find((part) => part.type === type)?.value
  return {
    weekday: get('weekday'),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  }
}

export function getOpenStatus(date = new Date()) {
  const { weekday, minutes } = jacksonvilleParts(date)
  const today = practice.hours.find((entry) => entry.weekday === weekday)
  const nextOpen = practice.hours.find((entry) => !entry.closed)

  if (!today || today.closed) {
    return {
      isOpen: false,
      label: `Closed · Opens ${nextOpen.short} at ${nextOpen.open}`,
      today,
    }
  }

  if (minutes < today.openMinutes) {
    return {
      isOpen: false,
      label: `Closed · Opens today at ${today.open}`,
      today,
    }
  }

  if (minutes >= today.closeMinutes) {
    const todayIndex = practice.hours.findIndex((entry) => entry.weekday === weekday)
    const upcoming =
      practice.hours.slice(todayIndex + 1).find((entry) => !entry.closed) || nextOpen
    return {
      isOpen: false,
      label: `Closed · Opens ${upcoming.short} at ${upcoming.open}`,
      today,
    }
  }

  return {
    isOpen: true,
    label: `Open · Closes at ${today.close}`,
    today,
  }
}
