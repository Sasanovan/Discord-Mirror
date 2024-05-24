import { MirrorClient } from "./client";
import { Config } from "./config";

const config = new Config("config.yml");
const client = new MirrorClient(config);


client.login(process.env.TOKEN); //login bot using token
