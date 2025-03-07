export default function getListStudentIds(sIds) {
  // check if it is array
  if (Array.isArray(sIds)) {
    return sIds.map((sIds) => sIds.id);
  }
  // if not return empty array
  return [];
}
