import java.util.Scanner;

class Conta{
    public double saldo;
    public double valor;
}


public class Main {
    public static void main(String[] args){
        Conta c = new Conta();

        c.saldo = 35.4;
        c.valor = 35.4;

        for(int i = 0; i<10; i++){
            System.out.println(i+" - "+ c.saldo);
            c.saldo += c.valor;
        }


    }
}
