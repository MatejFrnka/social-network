package org.gfa.dsn.service;

import org.gfa.dsn.convert.PostMapper;
import org.gfa.dsn.dto.PostDTO;
import org.gfa.dsn.model.Post;
import org.gfa.dsn.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService {
    PostMapper postMapper;
    PostRepository postRepository;

    @Autowired
    public PostService(PostMapper postMapper, PostRepository postRepository) {
        this.postMapper = postMapper;
        this.postRepository = postRepository;
    }

    /**
     * Retrieves a PostDTO object corresponding to the given ID.
     *
     * @param id The ID of the post to retrieve.
     * @return An {@code Optional} containing the {@code PostDTO} if found, or an empty {@code Optional} if no post with the given ID exists.
     * If a post is found, it is converted to a {@code PostDTO} using the configured {@code PostMapper}.
     * Returns {@code null} if no post is found with the given ID.
     * @throws IllegalArgumentException if {@code id} is null.
     */
    public PostDTO getPost(Long id) {
        Optional<Post> postOptional = postRepository.findById(id);
        return postOptional.map(post -> postMapper.convertPostToPostDTO(post)).orElse(null);
    }


    /**
     * Retrieves all posts and converts them to a list of PostDTO objects.
     *
     * @return A list of {@code PostDTO} objects representing all posts.
     */
    public List<PostDTO> getAllPosts() {
        List<Post> posts = (List<Post>) postRepository.findAll();
        return posts.stream()
                .map(postMapper::convertPostToPostDTO)
                .collect(Collectors.toList());
    }


    /**
     * Creates a new post using the information provided in the given {@code PostDTO} object
     * and saves it to the database.
     *
     * @param postDTO The {@code PostDTO} object containing the information for the new post.
     * @throws IllegalArgumentException if {@code postDTO} is null.
     */
    public void createAndSaveUser(PostDTO postDTO) {
        Post post = new Post();

        post.setUserId(postDTO.getUserId());
        post.setTitle(postDTO.getTitle());
        post.setBody(postDTO.getBody());

        postRepository.save(post);
    }

}
