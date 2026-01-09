package atividade1;
import java.util.Scanner;
public class Atividade1 {

    public static void main(String[] args) {
        int i;
        int[] pessoa = new int[10];
        
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("Digite 10 numeros:\n");
        for(i=0;i<10;i++){
            System.out.print("Digite o "+(i+1)+"º eh:  ");
            pessoa[i] = entrada.nextInt();
        }
        System.out.println("-------------------------------------");
        for(i=0;i<10;i++){
            System.out.println((i+1)+"ª = "+ pessoa[i]);
        }
    }
    
}
