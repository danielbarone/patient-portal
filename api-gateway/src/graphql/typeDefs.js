import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type User {
    contactId: String!
    firstName: String!
    lastName: String!
    email: String!
    id: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    createUser(contactId: String!, firstName: String!, lastName: String!, email: String!, password: String!): User!
    updateUserPassword(email: String!, password: String!): UserSession!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }

  type Query {
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;




