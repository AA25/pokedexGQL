// TODO: Use env library
export const appConfig = {
  // The API url for the service is hidden, this hidden API service is a Kotlin GQL application
  // that I built and have running in AWS.
  // If you want to know how it was built checkout see https://github.com/AA25/GraphQL-API
  API_URL: "http://ec2-54-154-250-153.eu-west-1.compute.amazonaws.com:8088/graphql",
  USE_LOCAL_DATA: false,
};
