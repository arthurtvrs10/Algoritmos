public class Conta {
     private String titular;
     private double saldo;
     private int numero;

     public void depositar( double valor){
         this.saldo+=valor;
     }

     public boolean sacar( double valor){
         if(this.saldo>=valor){
             this.saldo-=valor;
             return true;
         }
         return false;
     }

     //getters and setters
    public void setTitular(String titular) {
        this.titular = titular;
    }
    public String getTitular() {
         return titular;
    }
    public void setNumero(int numero) {
         this.numero = numero;
    }
    public double getNumero(){
         return numero;
    }
    public double getSaldo(){
        return saldo;
    }
}
