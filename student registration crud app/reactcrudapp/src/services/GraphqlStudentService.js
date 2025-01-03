import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

export function getAllStudentListQuery(){
    return client
  .query({
    query: gql`
    query getlistofstudents{
        getStudents{
          studentRollNo
          studentName
          studentEmail
        }
      }
    `,
  })
}

export default client;