import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;

class MyList<E> implements Iterable<E> {

    @Override
    public Iterator<E> iterator() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'iterator'");
    }
    
}

public class App{
    public static void main(String[] args) {
        
        ArrayList<String> list1 = new ArrayList<>();
        for (String item : list1) {
        }

        LinkedList<String> list2 = new LinkedList<>();
        for (String item : list2) {
        }
        
        MyList<String> list3 = new MyList<>();
        for (String item : list3) {
        }

    }
}