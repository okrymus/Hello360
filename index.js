import { AppRegistry } from "react-360";
import TopPosts from "./TopPosts";
import CurrentPost from "./CurrentPost";
import ModelView from "./ModelView";
import * as Store from "./Store";
Store.initialize("AIzaSyAxuCKOb_uB-J35dmZiX7bLyPw7-ww4Y_8");

AppRegistry.registerComponent("TopPosts", () => TopPosts);
AppRegistry.registerComponent("CurrentPost", () => CurrentPost);
AppRegistry.registerComponent("ModelView", () => ModelView);
