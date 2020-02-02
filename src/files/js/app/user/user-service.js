import Service from "./service.js";

export const UserService = new class {
    async login(email, password){
        try {
            const data = {
                email,
                password
            };
            const resp = await Service.post('login', data);

            Service.setAuthToken(resp.authToken);

            return resp;
        } catch(e) {
            throw e;
        }
    }

    async logout(){
        Service.clearAuthToken();
        return await Service.get('logout');
    }
}