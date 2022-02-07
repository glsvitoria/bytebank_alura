/*
Ser autenticavel significa ter o método autenticar

ducky typing - "não importa se ele é realmente um pato, o que importa é que ele anda e faz quack como um pato"
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
         autenticavel.autenticar instanceof Function
    }
}