package org.gfa.dsn.repository;

import org.gfa.dsn.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsernameOrEmail(String username, String email);
}