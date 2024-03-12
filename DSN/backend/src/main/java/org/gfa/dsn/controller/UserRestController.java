package org.gfa.dsn.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
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

/**
 * Controller class for managing user-related endpoints.
 */
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

    /**
     * Retrieves all users in the system.
     *
     * @return A list of UserDTO objects representing all users.
     */
    @Operation(summary = "Get all users")
    @SecurityRequirement(name = "Bearer Authentication")
    @GetMapping("/users")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    /**
     * Retrieves a user by their ID.
     *
     * @param id The ID of the user to retrieve.
     * @return The UserDTO object representing the user with the specified ID.
     */
    @Operation(summary = "Get user by id")
    @SecurityRequirement(name = "Bearer Authentication")
    @GetMapping("/users/{id}")
    public UserDTO getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    /**
     * Registers a new user.
     *
     * @param signUpDTO The SignUpDTO object containing user registration data.
     * @return A ResponseEntity indicating success or failure of the registration process.
     */
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

    /**
     * Authenticates a user and generates a JWT token.
     *
     * @param loginDTO The LoginDTO object containing user login credentials.
     * @return A JwtResponseDTO containing the JWT token.
     */
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
