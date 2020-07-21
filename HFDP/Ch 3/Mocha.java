public class Mocha extends CondimentDecorator{
	Beverage beverage;

	public Mocha(Beverage beverage){
		this.beverage=beverage;
	}

	public String getDescription(){
		return beverage.getDescription()+", Mocha";
	}

	public double cost(){
		/*cost is first delegated to the object we're
		decorating, which will compute the cost. Then
		we add the cost of Mocha (.20)*/
		return beverage.cost()+.20;
	}
}