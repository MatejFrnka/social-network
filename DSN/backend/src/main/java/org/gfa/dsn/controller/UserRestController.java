package org.gfa.dsn.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.gfa.dsn.dto.*;
import org.gfa.dsn.repository.UserRepository;
import org.gfa.dsn.service.JwtService;
import org.gfa.dsn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "User controller")
public class UserRestController {
    private final UserService userService;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Autowired
    public UserRestController(UserService userService, UserRepository userRepository, AuthenticationManager authenticationManager, JwtService jwtService) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @Operation(summary = "Get all users")
    @GetMapping("/users")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @Operation(summary = "Get user by id")
    @GetMapping("/users/{id}")
    public UserDTO getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @Operation(summary = "Sign up a user")
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDTO signUpDTO) {
        if (userRepository.existsByUsername(signUpDTO.getUsername())) {
            ErrorDTO errorDTO = new ErrorDTO(HttpStatus.BAD_REQUEST.value(), "Username already exists!", System.currentTimeMillis());
            return new ResponseEntity<>(errorDTO, HttpStatus.BAD_REQUEST);
        }
        if (userRepository.existsByEmail(signUpDTO.getEmail())) {
            ErrorDTO errorDTO = new ErrorDTO(HttpStatus.BAD_REQUEST.value(), "Email already exists!", System.currentTimeMillis());
            return new ResponseEntity<>(errorDTO, HttpStatus.BAD_REQUEST);
        }
        userService.createAndSaveUser(signUpDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Operation(summary = "Login a user")
    @PostMapping("/login")
    public JwtResponseDTO AuthenticateAndGetToken(@RequestBody LoginDTO loginDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword()));
        if (authentication.isAuthenticated()) {
            return JwtResponseDTO.builder()
                    .accessToken(jwtService.generateToken(loginDTO.getUsername())).build();
        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }
}
