import { Module } from '@nestjs/common';
import { CodegenController } from './controllers/codegen.controller';
import { CodegenService } from './services/codegen.service';

@Module({
  imports: [],
  controllers: [CodegenController],
  providers: [CodegenService]
})
export class AppModule {
}
