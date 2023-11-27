package com.example.rest.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.rest.Entity.SignupEntity;
import com.example.rest.Service.SignupService;
@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/login")
public class LoginController {
	//@Autowired
	//private LoginService ls;
	//@GetMapping("/login")
	//public List<LoginEntity> getLoginDetails(){
		//return ls.getDetail();
	//}
	
	//@PostMapping("/lpost")
	//public void saveDetail(@RequestBody LoginEntity le) {
		//ls.saveDetails(le);
	//}
	@Autowired 
	SignupService ser;
	@GetMapping("/get")
	private Iterable<SignupEntity> GetUsers(){
		return ser.GetAll();
	}
}
