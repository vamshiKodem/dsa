const fetchWithRetry = async (url, retries) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    if (retries > 0) {
      return fetchWithRetry(url, retries - 1);
    } else {
      throw new Error(`Failed after ${retries} retries: ${error.message}`);
    }
  }
};

// Usage example
fetchWithRetry("https://api.example.com/data", 3)
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.log("Fetch error:", error));
