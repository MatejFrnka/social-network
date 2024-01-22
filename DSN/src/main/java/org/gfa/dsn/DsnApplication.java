package org.gfa.dsn;

import org.gfa.dsn.model.User;
import org.gfa.dsn.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DsnApplication {

    public static void main(String[] args) {
        SpringApplication.run(DsnApplication.class, args);
    }
}
