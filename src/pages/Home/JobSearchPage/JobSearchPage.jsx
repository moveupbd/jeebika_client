import SearchBar from "../SearchBar/SearchBar";
import searchBG from "/images/search-bg.jpg";

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
    <div
      className="p-6"
      style={{
        backgroundImage: `url(${searchBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="m-2 text-2xl	p-4 text-white font-bold text-center ">
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
