import { ApolloClient, ApolloClientOptions, InMemoryCache } from "@apollo/client";
import { appConfig } from "./config";

/**
 *
 * Class to return the (only) instance of the ApolloClient
 *
 * The documentation for integrating apollographql is to wrap the application (in other words, the root component?)
 * with the ApolloProvider component and provide the ApolloClient as a property.
 * However due to this project using React Native Navigator where you can have mulitple roots,
 * you would end up creating multiple instances of the client for each root where a query is required.
 *
 * I thought it best to just create the ApolloClient via singleton pattern to avoid multiple instances.
 *
 **/
export class ApolloClientSingleton {
  private static instance: ApolloClient<any>;

  private static clientOptions: ApolloClientOptions<any> = {
    uri: appConfig.API_URL,
    cache: new InMemoryCache(),
  };

  /**
   * The Singleton's constructor should always be private to prevent direct construction calls with the `new` operator.
   */
  // eslint-disable-next-line no-console
  private constructor() {}

  /*
   * Get instance via lazy loading if necessary
   **/
  public static getInstance(): ApolloClient<any> {
    if (!ApolloClientSingleton.instance) {
      ApolloClientSingleton.instance = new ApolloClient(ApolloClientSingleton.clientOptions);
    }

    return ApolloClientSingleton.instance;
  }
}
