import profiles from "../data/profiles.json";

export function getAllProfiles() {
  return profiles;
}

export function getProfileBySlug(slug) {
  return profiles.find((profile) => profile.slug === slug) || null;
}

export function getAllProfileSlugs() {
  return profiles.map((profile) => profile.slug);
}

export function getSampleProfileSlug() {
  const first = profiles[0];
  return first ? first.slug : null;
}
