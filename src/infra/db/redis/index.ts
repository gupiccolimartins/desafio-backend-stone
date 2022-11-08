import Redis from 'ioredis';

export default class RedisConnection {

  private connection = null;

  async makeConnection() {
    if (!this.connection) {
      this.connection = new Redis({
        host: '127.0.0.1',
        port: 6379
      });
    }
    return this.connection;
  }
}