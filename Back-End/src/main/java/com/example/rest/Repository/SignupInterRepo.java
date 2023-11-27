package com.example.rest.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.rest.Entity.SignupEntity;
@Repository
public interface SignupInterRepo extends JpaRepository<SignupEntity,Integer>{
	@Query("select cre.password from SignupEntity cre where cre.username=?1")
	Iterable<SignupEntity> findAllUsernamePassword( String username);
}
