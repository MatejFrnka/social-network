package org.gfa.dsn.service;

import org.gfa.dsn.convert.UserDTOConverter;
import org.gfa.dsn.dto.SignUpDTO;
import org.gfa.dsn.dto.UserDTO;
import org.gfa.dsn.model.User;
import org.gfa.dsn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserDTOConverter userDTOConverter;
    private final UserRepository userRepository;
    private AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public UserService(UserDTOConverter userDTOConverter, UserRepository userRepository, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder) {
        this.userDTOConverter = userDTOConverter;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    public List<UserDTO> getAllUsers() {
        List<User> users = (List<User>) userRepository.findAll();
        return userDTOConverter.convertManyUsersToUsersDTO(users);
    }

    public UserDTO getUser(Long id) {
        if (userRepository.findById(id).isEmpty()) {
            return null;
        } else {
            return userDTOConverter.convertUserToUserDTO(userRepository.findById(id).get());
        }
    }

    public void createAndSaveUser(SignUpDTO signUpDTO) {
        User user = new User();
        user.setFirstName(signUpDTO.getFirstName());
        user.setLastName(signUpDTO.getLastName());
        user.setFullName(signUpDTO.getFirstName() + " " + signUpDTO.getLastName());
        user.setUsername(signUpDTO.getUsername());
        user.setEmail(signUpDTO.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDTO.getPassword()));

        userRepository.save(user);
    }

}