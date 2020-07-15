public class WeatherStation
{
    public static void main(String[] args) {
        //create our weatherdata object
        WeatherData weatherData=new WeatherData();
        
        CurrentConditionsDisplay currentDisplay=
            new CurrentConditionsDisplay(weatherData);
        //StatisticsDisplay statisticsDisplay=new StatisticsDisplay(weatherData);
        //ForecastDisplay forecastDisplay=new ForecastDisplay(weatherData);
        
        //simulate weather
        weatherData.setMeasurements(80,65,30.4f);
        weatherData.setMeasurements(82,70,29.2f);
        weatherData.setMeasurements(78,90,29.2f);
    }
}
