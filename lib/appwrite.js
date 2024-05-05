import 'react-native-url-polyfill/auto';
import { Client, Account, ID, Avatars } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.hibanim.vibe',
    project: '663780e40022ab62e7e1',
    databaseId: '6637835a0001cb1559b2',
    userCollectionId: '663783c900004bf20cb5',
    videoCollectionId: '663784050033c6d51b38',
    storageId: '663786e4002e0e3ac7ad'

}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);
    

const account = new Account(client);
const avatars = new Avatars(client);

// Register User

export const createUser = async (email, password, username) => {
    try {
        
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,
        )

        if(!newAccount) {
            throw Error;
        }

        const avatarUrl = avatars.getInitials(username)

        await SignIn(email, password)

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
   
export async function SignIn(email, password) {
    try {
        const session = await account.creaateEmailSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
      }
    }
