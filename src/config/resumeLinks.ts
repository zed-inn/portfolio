// lowercased comments per rule 8
// centralized google drive resume link (paste your public "anyone with the link -> viewer" url below)
// recommended upload: resumes_elite/with_rr/Kartikey_Kumar_Backend_NodeJS.pdf
export const PRIMARY_RESUME = {
  title: "Backend Engineer Resume",
  url: "https://drive.google.com/file/d/1apPBNcRgudcf2WxJNIyVLYs2zmk7xjIu/view",
} as const;

// schema-validated track map (defaults to primary resume url)
export const RESUME_DRIVE_LINKS = {
  software_engineer: {
    trackId: "software_engineer",
    shortLabel: "SWE",
    title: "Software Engineer Resume",
    url: PRIMARY_RESUME.url,
  },
  backend_nodejs: {
    trackId: "backend_nodejs",
    shortLabel: "Backend",
    title: PRIMARY_RESUME.title,
    url: PRIMARY_RESUME.url,
  },
  backend_python: {
    trackId: "backend_python",
    shortLabel: "Python",
    title: "Backend Python Resume",
    url: PRIMARY_RESUME.url,
  },
  fullstack_engineer: {
    trackId: "fullstack_engineer",
    shortLabel: "Full-Stack",
    title: "Full-Stack Engineer Resume",
    url: PRIMARY_RESUME.url,
  },
  devops_cloud: {
    trackId: "devops_cloud",
    shortLabel: "DevOps",
    title: "DevOps & Cloud Resume",
    url: PRIMARY_RESUME.url,
  },
  data_engineer: {
    trackId: "data_engineer",
    shortLabel: "Data",
    title: "Data Engineer Resume",
    url: PRIMARY_RESUME.url,
  },
  automation_engineer: {
    trackId: "automation_engineer",
    shortLabel: "Automation",
    title: "Automation Engineer Resume",
    url: PRIMARY_RESUME.url,
  },
  distributed_ai_infra: {
    trackId: "distributed_ai_infra",
    shortLabel: "Systems",
    title: "Backend Systems Resume",
    url: PRIMARY_RESUME.url,
  },
} as const;
