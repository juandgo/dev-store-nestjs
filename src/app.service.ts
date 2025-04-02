import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('PG') private clientPg: Client,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private congfigService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apiKey = this.congfigService.apiKey;
    const name = this.congfigService.database.name;
    return `Hello World! ${apiKey} ${name}`;
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
