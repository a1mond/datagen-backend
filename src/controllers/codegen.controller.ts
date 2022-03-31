import { Body, Controller, Get, Post } from '@nestjs/common';
import { CodegenService } from '../services/codegen.service';
import { IApiCodegenRequest } from "../models/codegen.model";

@Controller('/codegen')
export class CodegenController {
  constructor(private readonly appService: CodegenService) {}

  @Get()
  getOptions(): string[] {
    return this.appService.getOptions();
  }

  @Post()
  postCodeGeneration(@Body() body: IApiCodegenRequest): any {
    return this.appService.generateData(body);
  }
}
