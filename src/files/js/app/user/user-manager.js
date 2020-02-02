import Router from "../../libs/rumble/router.js";
import UserModel from "./user-model.js";

export default class UserManager {
    user = new UserModel();
    accessControlMap = null;

    constructor(){
        const me = this;

        Router.register({
            'login': {
                model: this.user,
                viewClass: LoginView
            },
            'logout': {
                render: me.logout.bind(me)
            }
        });
    }

    async logout() {
        this.user.logout();
        this.user = new UserModel();

        Router.goTo("login");
    }

    isAuthorised(){
        if(this.id !== ""){
            return true;
        }

        return false;
    }
}