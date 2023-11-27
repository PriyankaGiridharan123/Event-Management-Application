package com.example.rest.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rest.Entity.SignupEntity;
import com.example.rest.Repository.SignupInterRepo;
@Service
public class SignupService {
	@Autowired 
	SignupInterRepo repo;
	
	public Iterable<SignupEntity> GetAll() {
		return repo.findAll();
	}

}
