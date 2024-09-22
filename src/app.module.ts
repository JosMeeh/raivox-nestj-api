import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { createClient } from '@supabase/supabase-js';
import { UserService } from "./Aplicacion/Servicios/Users/UserService";
import { UserController } from "./Infraestructura/Controladores/UserController";

//TANTO EL URL COMO LA KEY SON LAS DE SU BASE DE DATOS, NO ES NECESARIO CREAR UN ARCHIVO .ENV
const supabaseUrl = 'https://saledwruaricyunxvkfk.supabase.co'; // URL de Supabase
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhbGVkd3J1YXJpY3l1bnh2a2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMzEwNTEsImV4cCI6MjA0MjYwNzA1MX0.4Lo68y2oMG8WVg7Sx2aJgKxcFPxRBbUAA43SPLYg4d8"; // Clave anónima

export const supabase = createClient(supabaseUrl, supabaseKey);

@Module({
  imports: [],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
