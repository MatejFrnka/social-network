package org.gfa.dsn.service;

import org.gfa.dsn.convert.UserMapper;
import org.gfa.dsn.dto.SignUpDTO;
import org.gfa.dsn.dto.UserDTO;
import org.gfa.dsn.exceptions.UserNotFoundException;
import org.gfa.dsn.model.User;
import org.gfa.dsn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Service class for managing user-related operations.
 */
@Service
public class UserService {
    private final UserMapper userMapper;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserMapper userMapper, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Retrieves all users in the system.
     *
     * @return A list of UserDTO objects representing all users.
     */
    public List<UserDTO> getAllUsers() {
        List<User> users = (List<User>) userRepository.findAll();
        return userMapper.convertManyUsersToUsersDTO(users);
    }

    /**
     * Retrieves a user by their ID.
     *
     * @param id The ID of the user to retrieve.
     * @return The UserDTO object representing the user with the specified ID.
     */
    public UserDTO getUser(Long id) {
        if (userRepository.findById(id).isEmpty()) {
            return null;
        } else {
            return userMapper.convertUserToUserDTO(userRepository.findById(id).get());
        }
    }

    /**
     * Retrieves the ID of a user by their username.
     *
     * @param username The username of the user.
     * @return The ID of the user.
     * @throws IllegalArgumentException if the user is not found.
     */
    public Long getUserIdByUsername(String username) throws UserNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        return user.getId();
    }

    /**
     * Creates and saves a new user.
     *
     * @param signUpDTO The SignUpDTO object containing user registration data.
     */
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