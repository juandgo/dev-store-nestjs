import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private congfigService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apiKey = this.congfigService.apiKey;
    const name = this.congfigService.database.name;
    return `Hello World! ${apiKey} ${name}`;
  }
}
