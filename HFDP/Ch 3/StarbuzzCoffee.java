public class StarbuzzCoffee{
	// This class simulates coffees being processed and served

	public static void main(String args[]){

		Beverage beverage=new Decaf();
		System.out.println(beverage.getDescription()+" $"+beverage.cost());

		//Tests
		// All base coffee prices are correct

		//Testing condiment prices
		

		// Make the DarkRoast object then wrap it up
		Beverage beverage2=new DarkRoast();
		beverage2=new Mocha(beverage2);
		System.out.println(beverage2.getDescription()+" $"+beverage2.cost());
		System.out.println("Expect 1.19");
		beverage2=new Mocha(beverage2);
		System.out.println(beverage2.getDescription()+" $"+beverage2.cost());
		System.out.println("Expect 1.39");
		// observed behavior - 1.539999 instead of 1.49
		//beverage2=new Whip(beverage2);
		//System.out.println(beverage2.getDescription()+" $"+beverage2.cost());
		//System.out.println("Expect 1.49");
		beverage2=new SteamedMilk(beverage2);
		System.out.println(beverage2.getDescription()+" $"+beverage2.cost());
		System.out.println("Expect 1.49");
		beverage2=new SteamedMilk(beverage2);
		System.out.println(beverage2.getDescription()+" $"+beverage2.cost());
		System.out.println("Expect 1.59");
		//no problems from doing double steamedmilk, problem must be with mocha

	}
}