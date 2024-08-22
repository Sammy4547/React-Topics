import conf from "../conf/conf";

import {Client,Account,ID} from "appwrite"

export class AuthService {
    client=new Client()
    account

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)

    }

    async createAccount({email,password,name}){
      try {
        const userAccount=await this.account.create
        (ID.unique(),email,password,name)
        if (userAccount) {
            
        } else {
            return userAccount
        }
      } catch (error) {
        console.log(error);
      }
    }

    async login({email,password}){
        try {
            await this.account
        } catch (error) {
            throw error;
        }
    }
}

const authService =new AuthService()

export default authService

