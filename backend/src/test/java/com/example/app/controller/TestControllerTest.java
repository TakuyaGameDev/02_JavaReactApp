package com.example.app.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.example.app.entity.TestTable;
import com.example.app.service.TestService;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class TestControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    TestService service;

    @Test
    void GET_testTo200() throws Exception {
        when(service.findAll()).thenReturn(List.of());

        mockMvc.perform(get("/api/test")).andExpect(status().isOk());
    }

    @Test
    void POST_testSuccess() throws Exception {
        TestTable test = new TestTable();
        test.setId(1L);
        test.setName("API");

        when(service.create("API")).thenReturn(test);

        String json = """
                { "name": "API" }
                """;

        mockMvc.perform(post("/api/test")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("API"));
    }
}
