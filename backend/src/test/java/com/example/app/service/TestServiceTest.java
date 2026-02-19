package com.example.app.service;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.app.entity.TestTable;
import com.example.app.repository.TestRepository;

@ExtendWith(MockitoExtension.class)
public class TestServiceTest {

    @Mock
    TestRepository repository;

    @InjectMocks
    TestService service;

    @Test
    void canCreate() {
        TestTable test = new TestTable();
        test.setId(1L);
        test.setName("test");

        when(repository.save(any())).thenReturn(test);

        TestTable result = service.create("test");

        assertThat(result.getId()).isEqualTo(1L);
        verify(repository).save(any());
    }

    @Test
    void findOrThrow_notFoundException() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> service.findOrThrow(1L)).isInstanceOf(RuntimeException.class);
    }
}
