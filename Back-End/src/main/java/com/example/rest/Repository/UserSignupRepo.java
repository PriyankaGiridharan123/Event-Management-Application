package com.example.rest.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.rest.Entity.SignupEntity;
import com.example.rest.Entity.UserSignupEntity;
@Repository
public interface UserSignupRepo extends JpaRepository<UserSignupEntity,Integer>{
	@Query("select cre.password from SignupEntity cre where cre.username=?1")
	Iterable<UserSignupEntity> findAllUsernamePassword( String username);
}
