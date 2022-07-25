import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  // for export modules
  exports: [UsersModule],
})
export class AppModule {}
