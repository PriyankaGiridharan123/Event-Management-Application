package com.example.rest.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest.Entity.EventEntity;
import com.example.rest.Repository.EventInterRepo;
@RestController
@CrossOrigin("*")
@RequestMapping("/event")
public class EventController {
	 @Autowired
	    private EventInterRepo er;
	 @GetMapping(value="/get")
	    public Iterable<EventEntity> getAll(){
	        return er.findAll();
	    }
	    @GetMapping(value="/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
	    public Page<EventEntity> getData(@PathVariable(value="currentPage") int page,
	                                              @PathVariable(value= "itemsPerPage") int size,
	                                              @PathVariable(value= "sortBy") String field,
	                                              @PathVariable(value= "sortOrder") String direction) {
	    	Pageable paging;
	   if(direction.equals("asc")) {
	   paging=PageRequest.of(page-1, size).withSort(Sort.by(field));
	   }
	   else {
		   paging=PageRequest.of(page-1, size).withSort(Sort.by(field).descending());       
	   }
	       return  er.findAll(paging);
	    }
	    @PostMapping
	    public EventEntity createEmployee(@RequestBody EventEntity  employee) {
	        return er.save(employee);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Optional<EventEntity>> getEmployeeById(@PathVariable  int id){
	        Optional<EventEntity> employee = er.findById(id);
	        return ResponseEntity.ok(employee);
	    }

	    @PutMapping("/{id}")
		public EventEntity updateDetails(@RequestBody EventEntity  b)
		{
			System.out.println("Changes Made Have Been Successfully Updated");
			return er.save(b);		
		}
	    @DeleteMapping("/{id}")
		public String deleteDetails(@PathVariable int id)
		{
			er.deleteById(id);
			return "Id : "+id+" is deleted";
		}
	    @DeleteMapping
	    public String deleteAllDetails()
	    {
	    	er.deleteAll();
	    	return "All employees deleted";
	    }
}
