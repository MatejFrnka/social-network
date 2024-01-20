package org.gfa.dsn.convert;

import org.gfa.dsn.dto.LoginDTO;
import org.gfa.dsn.dto.SignUpDTO;
import org.gfa.dsn.dto.UserDTO;
import org.gfa.dsn.model.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserDTOConverter {
    private final ModelMapper modelMapper;

    @Autowired
    public UserDTOConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public UserDTO convertUserToUserDTO(User user) {
        return modelMapper.map(user, UserDTO.class);
    }

    public List<UserDTO> convertManyUsersToUsersDTO(List<User> userList) {
        List<UserDTO> userDTOList = new ArrayList<>();
        for (User user : userList) {
            UserDTO userDTO = convertUserToUserDTO(user);
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }

    public User convertUserDTOToUser(UserDTO userDTO) {
        return modelMapper.map(userDTO, User.class);
    }

    public User convertSignUpDTOToUser(SignUpDTO signUpDTO) {
        return modelMapper.map(signUpDTO, User.class);
    }

    public User convertLoginDTOToUser(LoginDTO loginDTO) {
        return modelMapper.map(loginDTO, User.class);
    }
}

