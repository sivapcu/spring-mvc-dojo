package com.avisit.helloworld.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.avisit.helloworld.domain.Employee;

@Controller
public class HelloWorldController {
	private final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);
	
	@RequestMapping(value = {"/hello", "/"})
    public String hello(Model model) {
        model.addAttribute("greeting", "Hello Spring MVC");
        return "hello";
    }
	
	@RequestMapping(value="/hellojson", method = RequestMethod.GET, produces="application/json")
    public @ResponseBody Employee jsonGet() {
		logger.debug("request = /hellojson, method = get, produces = json");
		Employee employee = new Employee();
		employee.setName("Siva Sankar");
		employee.setAge(29);
        return employee;
    }
	
	@RequestMapping(value="/hellojson", method = RequestMethod.POST, produces="application/json")
    public @ResponseBody Employee jsonPost() {
		logger.debug("request = /hellojson, method = post, produces = json");
		Employee employee = new Employee();
		employee.setName("Siva Sankar");
		employee.setAge(29);
        return employee;
    }
}
