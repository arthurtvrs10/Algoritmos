import java.util.Scanner;

public class Teste {
     static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        Conta c = new Conta();

        //atributos
        c.setTitular("Rafah");
        c.setNumero(23);

        //métodos
         c.depositar(100);
        System.out.println("Seu getSaldo:"+ c.getSaldo());
        boolean resultado = c.sacar(200);
        if(resultado == true){
            System.out.println("Saque efetuado");
        } else{
            System.out.println("Saque nao efetuado");
        }
        System.out.println("Seu titular:"+ c.getTitular());
        System.out.println("Seu getNumero:"+ c.getNumero());
    }
}