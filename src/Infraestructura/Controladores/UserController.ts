import { Controller, Get } from '@nestjs/common';
import { UserService } from "../../Aplicacion/Servicios/Users/UserService";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/names')
  private async getHello(): Promise<any> {
    return await this.userService.getNames();
  }
}
