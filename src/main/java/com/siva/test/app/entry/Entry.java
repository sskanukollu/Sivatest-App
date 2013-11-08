package com.siva.test.app.entry;



import org.junit.Assert;
import com.siva.test.app.util.WebConnector;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


//Step file
public class Entry {

	//WebConnector selenium = new WebConnector();
	//Singleton Implementation
	WebConnector selenium = WebConnector.getInstance();
		
	@Given ("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_Go_To_Salesforce(String URL, String browser) {
		System.out.println("I am going to " + URL + " on browser " + browser);
		selenium.openBrowser(browser);
		selenium.navigate(URL);
	}

	/*
	@And ("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object, String text){
		System.out.println("Entering in " + object + " value " + text);
		selenium.type(object, text);
	}
	*/
	
	/*
	//@And ("^I click on \"([^\"]*)\"$")
	@And ("^I click on loginButton$")
	public void I_click_on(String objectName){
		System.out.println(objectName);
		selenium.click(objectName);		
	}
	*/
	@Then ("^login should be \"([^\"]*)\"$")
	public void login_should_be(String expectedResult){
		System.out.println("Login - " +  expectedResult);
		boolean result = selenium.verifyElementExists("LoggedinSearch");
		String actualResult = null;
		if (result)
			actualResult = "success";
		else
			actualResult = "failure";
		
		Assert.assertEquals(expectedResult, actualResult);
		System.out.println("Result -- " + actualResult);
	}
}