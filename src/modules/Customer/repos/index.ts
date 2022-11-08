import RedisConnection from "../../../infra/db/redis/index";
import { CustomerRepo } from "./implementations/CustomerRepo";

const redisConnection = new RedisConnection();
const customerRepo = new CustomerRepo(redisConnection);

export { customerRepo };