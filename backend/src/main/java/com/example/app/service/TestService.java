package com.example.app.service;

import org.springframework.stereotype.Service;
import com.example.app.entity.TestTable;
import com.example.app.repository.TestRepository;

import java.util.List;

@Service
public class TestService {

    private final TestRepository repository;

    public TestService(TestRepository repository) {
        this.repository = repository;
    }

    public List<TestTable> findAll() {
        return repository.findAll();
    }

    public TestTable create(String name) {
        TestTable test = new TestTable();
        test.setName(name);
        return repository.save(test);
    }

    public TestTable findOrThrow(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Not Found"));
    }
}
