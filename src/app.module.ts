/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './common/modules/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './common/modules/product.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://tanpro1998:3593@nest.mevtv.mongodb.net/nest?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
