package com.example.app.controller;

import com.example.app.entity.TestTable;
import com.example.app.repository.TestTableRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "http://localhost:3000") // Reactがlocalhost:3000の場合
public class TestController {

    private final TestTableRepository repository;

    public TestController(TestTableRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<TestTable> getAll() {
        return repository.findAll();
    }
}
