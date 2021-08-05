// For the default version
import algoliasearch from 'algoliasearch';

const client = algoliasearch('35DSL2Q3D1', 'e26ff93b65cdc2c8a85086f5fa06b05e');
const index = client.initIndex('diseases');

const algoliaConfig = index;
export default algoliaConfig;