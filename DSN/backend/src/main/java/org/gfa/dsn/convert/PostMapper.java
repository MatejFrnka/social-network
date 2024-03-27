package org.gfa.dsn.convert;

import org.gfa.dsn.dto.NewPostDTO;
import org.gfa.dsn.dto.PostDTO;
import org.gfa.dsn.model.Post;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

/**
 * Mapper class responsible for converting between different representations of Post entities.
 */
@Component
public class PostMapper {
    private final ModelMapper modelMapper;


    public PostMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    /**
     * Converts a Post entity to a PostDTO.
     * @param post The Post entity to be converted.
     * @return The corresponding PostDTO.
     */
    public PostDTO convertPostToPostDTO(Post post) {
        return modelMapper.map(post, PostDTO.class);
    }

    /**
     * Converts a NewPostDTO to a Post entity.
     * @param newPostDTO The NewPostDTO to be converted.
     * @return The corresponding Post entity.
     */
    public Post convertNewPostDTOToPost(NewPostDTO newPostDTO) {
        return modelMapper.map(newPostDTO, Post.class);
    }
}
