public class Whip extends CondimentDecorator{
	Beverage beverage;

	public Whip(Beverage beverage){
		this.beverage=beverage;
	}

	public String getDescription(){
		return beverage.getDescription()+", Whip";
	}

	public double cost(){
		/*cost is first delegated to the object we're
		decorating, which will compute the cost. Then
		we add the cost of Mocha (.20)*/
		return beverage.cost()+.15;
	}
}