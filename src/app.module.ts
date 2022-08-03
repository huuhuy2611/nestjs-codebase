import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import * as config from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
