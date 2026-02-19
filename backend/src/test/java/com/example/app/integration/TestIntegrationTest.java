package com.example.app.integration;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import com.example.app.entity.TestTable;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class TestIntegrationTest {

    @Autowired
    TestRestTemplate rest;

    @Test
    void canCreateAndGet() {
        Map<String, String> req = Map.of("name", "Integration");

        ResponseEntity<TestTable> res = rest.postForEntity("/api/test", req, TestTable.class);

        assertThat(res.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(res.getBody().getName()).isEqualTo("Integration");
    }
}
