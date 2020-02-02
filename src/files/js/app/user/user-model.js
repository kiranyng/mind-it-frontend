import { UserService } from "../";
import BaseModel from "../../libs/rumble/base-model.js";

export default class UserModel extends BaseModel{
    id;
    email;
    name;
    role;
    accessControl;

    service = new UserService();

    // note: form attr > data-submit-type = login
    async login(data){
        // TODO validate input

        try{
            const resp = await this.service.login(data.email, data.password);

            this.id = resp.id;
            this.email = resp.email;
            this.name = resp.name;
            this.role = resp.role;
            this.accessControl = resp.accessControl;

            this.triggerChange();
        }catch(e){
            console.error(e);
        }
    }

    logout(){
        this.service.logout();
    }
}