package cucumberdatatable;

import java.awt.List;
import java.util.Map;

import gherkin.ast.DataTable;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepdefinition {
	@Given("I have {word} cricket bats of")
	public void input(String a,io.cucumber.datatable.DataTable d)
	{
		java.util.List<Map<String, String>> data= d.asMaps(String.class,String.class);
		System.out.println("I have "+a+" cricket bats"+data.get(0).get("brand"));
		System.out.println("I have "+a+" cricket bats"+data.get(1).get("brand"));
		System.out.println("I have "+a+" cricket bats"+data.get(2).get("brand"));
		System.out.println("I have "+a+" cricket bats"+data.get(3).get("brand"));
	}
	
}