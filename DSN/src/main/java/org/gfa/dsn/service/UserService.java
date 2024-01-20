package org.gfa.dsn.service;

import org.gfa.dsn.convert.UserDTOConverter;
import org.gfa.dsn.dto.UserDTO;
import org.gfa.dsn.model.User;
import org.gfa.dsn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    UserDTOConverter userDTOConverter;
    UserRepository userRepository;

    @Autowired
    public UserService(UserDTOConverter userDTOConverter, UserRepository userRepository) {
        this.userDTOConverter = userDTOConverter;
        this.userRepository = userRepository;
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
}