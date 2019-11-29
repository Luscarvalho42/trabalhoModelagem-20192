import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ServicoUsuario } from '../services/usuario.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(public usuarios: ServicoUsuario) {}
 
  canActivate(): boolean {
    return (this.usuarios.getId() != -1);
  }
}
