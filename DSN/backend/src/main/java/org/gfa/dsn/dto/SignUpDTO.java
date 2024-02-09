package org.gfa.dsn.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDTO {
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
}
