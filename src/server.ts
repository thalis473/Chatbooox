import {http} from "./http"
import "./websocket/client"

http.listen(5000,()=> console.log("server is running on port 5000"));