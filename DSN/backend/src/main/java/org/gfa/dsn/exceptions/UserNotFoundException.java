package org.gfa.dsn.exceptions;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserNotFoundException extends UsernameNotFoundException {
    public UserNotFoundException(String userName) {
        super("User not found: " + userName);
    }
}
