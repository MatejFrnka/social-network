package org.gfa.dsn.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String fullName;
    private String username;
    private String email;
}
