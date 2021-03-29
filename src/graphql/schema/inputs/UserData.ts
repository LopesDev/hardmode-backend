import { gql } from 'apollo-server-express';

const INPUT_USER = gql`
    input UserData {
        fullName: String!
        nickName: String!
        email: String!
        password: String!
        profileImage: Upload
        cellphone: String
        steamUrl: String
        instagramUrl: String
        facebookUrl: String
        githubUrl: String
    }
`;

export default INPUT_USER;
