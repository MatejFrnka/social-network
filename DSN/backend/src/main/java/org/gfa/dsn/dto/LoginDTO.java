package org.gfa.dsn.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginDTO {
    private String username;
    private String password;
}
