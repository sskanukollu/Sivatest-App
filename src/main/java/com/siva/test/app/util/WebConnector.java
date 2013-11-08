package com.siva.test.app.util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.apache.log4j.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;



public class WebConnector {
	
	//initialize properties file
	//logging
	//selenium layer - selenium commands
    
	Logger App_Log = Logger.getLogger("devpinoyLogger");
	
	Properties OR = null;
	Properties CONFIG=null;
	WebDriver driver = null;
	WebDriver firefox = null;
	WebDriver chrome = null;
	WebDriver ie = null;
	static WebConnector w;
	
	private WebConnector(){
		
		if(OR==null){
			try{
				//initialize OR
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\java\\com\\siva\\test\\app\\config\\OR.properties");
				OR.load(fs);
				
				//initialize config
				CONFIG = new Properties();
				fs = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\java\\com\\siva\\test\\app\\config\\"+OR.getProperty("testEnv")+"_config.properties");
				CONFIG.load(fs);
				
			//	System.out.println(OR.getProperty("loginUsername"));
			//	System.out.println(CONFIG.getProperty("LoginURL"));
				
				
			}   
			catch(Exception e){
				System.out.println("error on initilaizing properties files");
			}
		}
	}
	
	
	// ********************  Application Dependent methods *************************
	
	public boolean isLoggedin(){
		if (verifyElementExists("LoggedinSearch"))
			return true;
		else
			return false;
	}
	

	public void doDefaultLogin() {
		log("*** Default Login ***");
		navigate("LoginURL");
		type("loginUsername",CONFIG.getProperty("defaultUsername"));
		type("loginPassword",CONFIG.getProperty("defaultPassword"));
		click("loginButton");		
	}
	
	
	// ******************** Singleton **********************************************
	public static WebConnector  getInstance(){
		if (w==null)
				w = new WebConnector();
		
				return w;
		
	}
	
	
	// ********************  Application Independent methods ***********************
	
	//Opening Browser
	public void openBrowser(String browserType){
		log("*** Opening Browser ***");
		if (browserType.equals("firefox") && firefox==null){
			driver = new FirefoxDriver();
			firefox = driver;
		} else if (browserType.equals("firefox") && firefox != null){
			driver = firefox;
		}
		
		else if (browserType.equals("chrome") && chrome==null){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\ChromeDriver\\chromedriver.exe");
			driver = new ChromeDriver();
			chrome=driver;
		} else if (browserType.equals("chrome") && chrome!=null){
			driver=chrome;
		}
		
		else if (browserType.equals("ie") && ie==null){
			System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"\\ChromeDriver\\IEDriverServer.exe");
			driver= new InternetExplorerDriver();
			ie=driver;
		} else if (browserType.equals("ie") && ie!=null){
			driver=ie;
		}
			
		//miximize browser
		log("*** Maximize browser ***");
		driver.manage().window().maximize();
		//implicit wait() -- for only that object.
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
	}
	
	public void navigate(String URL){
		log("*** Navigate to URL ***");
		driver.get(CONFIG.getProperty(URL));
	}
		
	public void click(String ObjectName){
		log("*** Click on element ***");
		driver.findElement(By.xpath(OR.getProperty(ObjectName))).click();
	}
	
	public void type(String ObjectName, String text){
		log("*** Enter Text ***");
		driver.findElement(By.xpath(OR.getProperty(ObjectName))).sendKeys(text);
	}	

	public void select(String ObjectName, String text){
		log("*** Selelct a value from dropdown ***");
		driver.findElement(By.xpath(OR.getProperty(ObjectName))).sendKeys(text);
	}
	
	public boolean isElementPresent(String objectName){
		log("*** Verifying element presence ***");
		int count = driver.findElements(By.xpath(OR.getProperty(objectName))).size();
		
		return true;
		
	}
	
	public boolean verifyElementExists(String objectName) {
		log("*** Verifying element existance ***");
		boolean found = false;
		try {
			driver.findElement(By.xpath(OR.getProperty(objectName)));
			found = true;
		}
		catch (NoSuchElementException e) {
			found = false;
		}
		return found;
	}

	//************************* Logging *************************
	public void log(String msg){
		App_Log.debug(msg);
	}

}
