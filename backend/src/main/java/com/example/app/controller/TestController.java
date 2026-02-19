package com.example.app.controller;

import com.example.app.entity.TestTable;
import com.example.app.service.TestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:5173" }) // Reactがlocalhost:3000とlocalhost:5173の場合
public class TestController {

    private final TestService service;

    public TestController(TestService service) {
        this.service = service;
    }

    @GetMapping
    public List<TestTable> getAll() {
        return service.findAll();
    }

    @PostMapping
    public TestTable create(@RequestBody TestTable body) {
        return service.create(body.getName());
    }
}
