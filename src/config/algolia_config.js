// For the default version
import algoliasearch from "algoliasearch";

const client = algoliasearch("4JUHLDA2RV", "9c6b5e6365cf2b8192ebc84ce43f4a1f");
const index = client.initIndex("diseases");

const algoliaConfig = index;
export default algoliaConfig;
