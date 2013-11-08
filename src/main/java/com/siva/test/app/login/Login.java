package com.siva.test.app.login;



import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {



@Given ("I have launched the firefox browser")
public void I_have_launched_the_firefox_browser(DataTable table) {
	 List<Map<String,String>> data = table.asMaps();
	
	 System.out.println("Size of the list " + data.size());
	 
	 System.out.println("Size of the list " + data.toString());
	 
	 
	 int count = data.size();
	 for (int i =0;i<count; i++){
		 System.out.println((i+1) + " value from Industry column -- " + data.get(i).get("industry"));
		 System.out.println((i+1) + " value from country column -- " + data.get(i).get("country"));
		 System.out.println((i+1) + " value from city column -- " + data.get(i).get("city"));
	 }
	 /*
	 System.out.println("First value from Industry column -- " + data.get(0).get("industry"));
	 System.out.println("Second value from Industry column -- " + data.get(1).get("industry"));
	 System.out.println("First value from country column -- " + data.get(0).get("country"));
	 System.out.println("Second value from country column -- " + data.get(1).get("country"));
	*/ 
	System.out.println("Given - I have launched the firefox browser");
}


@When ("I submit the url")

public void I_submit_the_url(DataTable table){
	System.out.println("When - I submit the url");
	List<String> list = 	table.asList(String.class);
	System.out.println("Size of the list  " + list.size());
	System.out.println(list.toString());
	int countList =list.size();
	for (int j=0;j<countList;j++){
		System.out.println(j+1 + "Value is " + list.get(j));
	}
}


@Then ("I want to see homepage")
public void I_want_to_see_homepage() {
	
	System.out.println("Then - I want to see homepage");
}

@And ("want to see weather forecast")
public void want_to_see_weather_forecast() {
	
	System.out.println("And - want to see weather forecast");
}

@But ("the page not opened")

public void the_page_not_opened() {
	
	System.out.println("But - the page not opened");
	
}

}
