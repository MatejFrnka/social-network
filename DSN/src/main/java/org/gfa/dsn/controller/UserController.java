package org.gfa.dsn.controller;

import org.gfa.dsn.dto.AuthRequestDTO;
import org.gfa.dsn.dto.JwtResponseDTO;
import org.gfa.dsn.dto.SignUpDTO;
import org.gfa.dsn.dto.UserDTO;
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
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Autowired
    public UserController(UserService userService, UserRepository userRepository, AuthenticationManager authenticationManager, JwtService jwtService) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @GetMapping("/users")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public UserDTO getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDTO signUpDTO) {
        if (userRepository.existsByUsername(signUpDTO.getUsername())) {
            return new ResponseEntity<>("Username is already exist!", HttpStatus.BAD_REQUEST);
        }
        if (userRepository.existsByEmail(signUpDTO.getEmail())) {
            return new ResponseEntity<>("Email is already exist!", HttpStatus.BAD_REQUEST);
        }
        userService.createAndSaveUser(signUpDTO);
        return new ResponseEntity<>("User is registered successfully!", HttpStatus.OK);
    }

    @PostMapping("/login")
    public JwtResponseDTO AuthenticateAndGetToken(@RequestBody AuthRequestDTO authRequestDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequestDTO.getUsername(), authRequestDTO.getPassword()));
        if (authentication.isAuthenticated()) {
            return JwtResponseDTO.builder()
                    .accessToken(jwtService.GenerateToken(authRequestDTO.getUsername()).build();
        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }
}
