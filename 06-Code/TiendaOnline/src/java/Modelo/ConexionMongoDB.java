package Modelo;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoSocketOpenException;
public class ConexionMongoDB {
    protected MongoClient mongo;
    protected DB db;
    public MongoClient getMongo(){
        MongoClient mongo=null;
        try{
            mongo=new MongoClient("localhost",27017);
            if(mongo!=null){
                db=mongo.getDB("TiendaOnline");
            }
            System.out.println("Conexion MongoDB...");
        }catch(MongoSocketOpenException e){
            System.out.println("Error al conectarse a la base de datos...");
        }
        return mongo;
    }
}