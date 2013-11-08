package com.siva.test.app.commonutil;

import org.junit.Assert;

import com.siva.test.app.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.PendingException;

public class coomonutil {

	WebConnector selenium = WebConnector.getInstance();
	
	
	@And ("^I click on \"([^\"]*)\"$")
	//@And ("^I click on loginButton$")
	public void I_click_on(String objectName){
		System.out.println(objectName);
		selenium.click(objectName);		
	}
	
	@And ("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object, String text){
		System.out.println("Entering in " + object + " value " + text);
		selenium.type(object, text);
	}
	
	@Given ("^I am logged in Salesforce on \"([^\"]*)\"$")
	public void I_am_logged_in_Salesforce(String Browser){
		selenium.openBrowser(Browser);
		if (!selenium.isLoggedin())
			selenium.doDefaultLogin();		
	}
	
	@Given ("^Runmode is \"([^\"]*)\"$")
	public void Runmode_is(String runmode){
		if (runmode.equals("N"))
			throw new PendingException("Skipping the test as Runmode is No");
	}
	
	@Then ("^\"([^\"]*)\" element should be present$")
	public void element_should_be_present(String objectName){
		selenium.log("Verification element after logged into site");
		
		boolean result = selenium.verifyElementExists(objectName);
		Assert.assertTrue(result);
		
	}
	
	@Given ("^browser is \"([^\"]*)\"$")
	public void browser_is(String browser){
		selenium.openBrowser(browser);
	}
	
}
