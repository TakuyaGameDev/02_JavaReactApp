package com.example.app.repository;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import com.example.app.entity.TestTable;

@DataJpaTest
@ActiveProfiles("test")
public class TestRepositoryTest {

    @Autowired
    TestRepository repository;

    @Test
    void canSave() {
        TestTable test = new TestTable();
        test.setName("test");

        TestTable saved = repository.save(test);

        assertThat(saved.getId()).isNotNull();
    }
}
