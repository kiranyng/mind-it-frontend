import UserManager from "./user/user-manager.js";
import NotesManager from "./notes/notes-manager.js";
import Router from "../libs/rumble/router.js";

class Application {
    user;
    notesManager;
    
    constructor(){
        const me = this;

        // register routes
        Router.register({
            'home': {
                default: true,
                // modelClass: ArticleListModel,
                render: me.home.bind(me),
                // viewClass: ListArticlesView
            }
        });

        this.user = new UserManager();
        this.notesManager = new NotesManager();
    }

    // default starting point
    // @route
    home(){
        // check if user is authorised
        if(user.isAuthorised()){
            // show dashboard
            Router.goTo('notes/list');
        }else{
            // if not, show login screen
            Router.gotTo('login');
        }
    }
}

Router.goTo('home');