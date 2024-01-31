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
    <div className="bg-gradient-to-b from-cyan-100 to-cyan-400 p-6">
      <h1 className="m-2 text-2xl	p-4 text-neutral-800 font-bold text-center">
        Search Your Dream Job
      </h1>
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
