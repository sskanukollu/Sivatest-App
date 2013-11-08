package com.siva.test.app.menu;

import java.util.List;

import org.junit.Assert;

import com.siva.test.app.util.WebConnector;


import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.PendingException;

public class menu {
	
	WebConnector selenium = WebConnector.getInstance();
	
	@Given ("^I am logged in \"([^\"]*)\"$")
	public void I_am_logged_in(String browser){
		// check if logged in browser.
		selenium.openBrowser(browser);
		selenium.log("Opening browser & logging in as default user");
		if (!selenium.isLoggedin()){
			// then default login
			selenium.doDefaultLogin();
		}
	}
	
	@Then ("^all tabs on menu should be present$")
	public void all_tabs_on_menu_should_be_present(DataTable table){
	selenium.log("Verifying all the tabs on menu");
	List<String> names = table.asList(String.class);
	System.out.println("***************************************************************");
	System.out.println("Names of the List " + names.toString());
	for (int i=0;i<names.size();i++){
		selenium.log("checking  "+ names.get(i));
		Assert.assertTrue("Element not found in Menu " + names.get(i), selenium.verifyElementExists(names.get(i)));
	}
	}
	
	/*
	@And ("^I click on \"([^\"]*)\"$")
	//@And ("^I click on loginButton$")
	public void I_click_on(String objectName){
		System.out.println(objectName);
		selenium.click(objectName);		
	}
	*/
	
}
