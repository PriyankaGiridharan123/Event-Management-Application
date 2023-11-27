package com.example.rest.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rest.Entity.SignupEntity;
import com.example.rest.Entity.UserSignupEntity;
import com.example.rest.Repository.SignupInterRepo;
import com.example.rest.Repository.UserSignupRepo;
@Service
public class UserSignupService {
	@Autowired 
	UserSignupRepo repo;
	
	public Iterable<UserSignupEntity> GetAll() {
		return repo.findAll();
	}
}
