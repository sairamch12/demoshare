package cucumberdatatable;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"html:src/test/java/cucumberdatatable/testoutput/cucumberdatatable-html-report",
				"json:src/test/java/cucumberdatatable/testoutput/cucumberdatatable.json"}
		
		
		
		
		
		)

public class runnerfile {

}
