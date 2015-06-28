package com.avisit.helloworld.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.avisit.helloworld.service.IndexService;

@Controller
public class IndexController {
	private final Logger logger = LoggerFactory.getLogger(IndexController.class);
	
	@Autowired
	private IndexService indexService;
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index(Map<String, Object> model) {
		logger.debug("index() is executed!");
		model.put("title", indexService.getTitle(""));
		model.put("msg", indexService.getDesc());
		return "index";
	}
	
	@RequestMapping(value = "/index/{name:.+}", method = RequestMethod.GET)
	public ModelAndView indexWithPathVariable(@PathVariable("name") String name) {
		logger.debug("indexWithPathVariable() is executed - $name {}", name);
 
		ModelAndView model = new ModelAndView();
		model.setViewName("index");
		model.addObject("title", indexService.getTitle(name));
		model.addObject("msg", indexService.getDesc());
		return model;
	}
}
