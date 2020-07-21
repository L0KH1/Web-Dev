public class SteamedMilk extends CondimentDecorator{
	Beverage beverage;

	public SteamedMilk(Beverage beverage){
		this.beverage=beverage;
	}

	public String getDescription(){
		return beverage.getDescription()+", Steamed Milk";
	}

	public double cost(){
		/*cost is first delegated to the object we're
		decorating, which will compute the cost. Then
		we add the cost of Mocha (.20)*/
		return beverage.cost()+.10;
	}
}