package org.gfa.dsn.convert;

import org.gfa.dsn.dto.PostDTO;
import org.gfa.dsn.model.Post;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class PostMapper {
    private final ModelMapper modelMapper;


    public PostMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public PostDTO convertPostToPostDTO(Post post) {
        return modelMapper.map(post, PostDTO.class);
    }

    public PostDTO convertPostDTOToPost(PostDTO postDTO) {
        return modelMapper.map(postDTO, PostDTO.class);
    }
}
