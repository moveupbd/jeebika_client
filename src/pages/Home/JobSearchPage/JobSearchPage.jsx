import SearchBar from "../SearchBar/SearchBar";

const JobSearchPage = () => {
  // Sample data for demonstration purposes
  const jobData = [
    {
      id: 1,
      jobType: "Software Developer",
      organizationType: "Private",
      organizationName: "Tech Corp",
      location: "New York",
    },
    // Add more job data as needed
  ];

  const organizationTypes = ["Private", "Government", "Non-Profit"]; // Sample organization types
  const locations = ["New York", "San Francisco", "Los Angeles"]; // Sample locations

  return (
    <div className="bg-gray-50 p-6">
      <h1 className="m-2 text-neutral-800 font-bold">Search Your Dream Job</h1>
      <SearchBar
        data={jobData}
        organizationTypes={organizationTypes}
        locations={locations}
      />
      {/* Other components or content related to job search page */}
    </div>
  );
};

export default JobSearchPage;
