import { Injectable } from '@nestjs/common';
import { CODEGEN_MAPPINGS } from "../assets/codegen.mappings";
import { IApiCodegenRequest, IApiCodegenResponse } from "../models/codegen.model";

@Injectable()
export class CodegenService {
  getOptions() {
    return Object.keys(CODEGEN_MAPPINGS);
  }

  generateData(req: IApiCodegenRequest): IApiCodegenResponse {
    const data: string[] = [];
    for (let i = 0; i < req.times; i++) {
      let tmp = req.str;
      req.variables.forEach(v => {
        const generated = CODEGEN_MAPPINGS[v.type]();
        tmp = tmp.replace(v.rawValue, `${ generated }`);
      });
      data.push(tmp);
    }
    return { data: data };
  }
}
