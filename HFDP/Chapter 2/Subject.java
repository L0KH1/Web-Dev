
/**
 * Write a description of interface Subject here.
 *
 * @author Luke Alli
 * @version 7/7/20
 */
public interface Subject
{
    public void registerObserver(Observer o);
    public void removeObserver(Observer o);
    public void notifyObservers();
}
