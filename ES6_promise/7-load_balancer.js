export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race takes mutiple promises and returns the first one to settle
  // whichever settles first, the first one to resolve or reject
  return Promise.race([chinaDownload, USDownload]);
}
