import { AbstractControl } from "@angular/forms";

/* Validação customizada de match da senha e confirmação de senha */
export class PasswordMatchValidator{
  static MatchPassword(abstractControl: AbstractControl){
    //capturar campo senha se existe
    let senha = abstractControl.get('senha')?.value;
    // capturar campo confirma senha se existe
    let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;


  //verificar se os campos esao com valores diferentes
    if (senha != senhaConfirmacao){
      abstractControl.get('senhaConfirmacao')?.setErrors({
        //nome do erro gerado é criado pelo programador.
        matchPassword:true
      })
    }
    return null // vazio não gera erro

  }
}
