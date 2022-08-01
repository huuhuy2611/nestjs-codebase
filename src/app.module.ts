import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import config from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule],
  // for export modules
  exports: [UsersModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
