package org.gfa.dsn.service;

import org.gfa.dsn.convert.UserMapper;
import org.gfa.dsn.dto.SignUpDTO;
import org.gfa.dsn.dto.UserDTO;
import org.gfa.dsn.model.User;
import org.gfa.dsn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<UserDTO> getAllUsers() {
        List<User> users = (List<User>) userRepository.findAll();
        return userMapper.convertManyUsersToUsersDTO(users);
    }

    public UserDTO getUser(Long id) {
        if (userRepository.findById(id).isEmpty()) {
            return null;
        } else {
            return userMapper.convertUserToUserDTO(userRepository.findById(id).get());
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