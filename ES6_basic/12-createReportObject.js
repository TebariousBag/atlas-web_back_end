export default function createReportObject(employeesList) {
  return {
      allEmployees: {
        ...employeesList },
        // just spread the list
        getNumberOfDepartments() {
          return Object.keys(employeesList).length;
          // just the length of the list after sprreading
    }
  }
}
