package org.gfa.dsn.service;

import org.gfa.dsn.convert.PostMapper;
import org.gfa.dsn.model.User;
import org.gfa.dsn.dto.NewPostDTO;
import org.gfa.dsn.dto.PostDTO;
import org.gfa.dsn.model.Post;
import org.gfa.dsn.repository.PostRepository;
import org.gfa.dsn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service class for managing posts.
 */
@Service
public class PostService {
    private final PostMapper postMapper;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Autowired
    public PostService(PostMapper postMapper, PostRepository postRepository, UserRepository userRepository) {
        this.postMapper = postMapper;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    /**
     * Retrieves a post by its ID.
     * @param id The ID of the post to retrieve.
     * @return The retrieved post, or null if not found.
     */
    public PostDTO getPost(Long id) {
        Optional<Post> postOptional = postRepository.findById(id);
        return postOptional.map(postMapper::convertPostToPostDTO).orElse(null);
    }

    /**
     * Retrieves all posts.
     * @return A list of all posts.
     */
    public List<PostDTO> getAllPosts() {
        List<Post> posts = (List<Post>) postRepository.findAll();
        return posts.stream()
                .map(postMapper::convertPostToPostDTO)
                .collect(Collectors.toList());
    }

    /**
     * Creates and saves a new post.
     * @param newPostDTO DTO containing information for the new post.
     * @param userId ID of the user creating the post.
     * @throws IllegalArgumentException if an error occurs during post creation and saving.
     */
    public void createAndSavePost(NewPostDTO newPostDTO, Long userId) throws IllegalArgumentException {
        if (newPostDTO == null) {
            throw new IllegalArgumentException("NewPostDTO cannot be null");
        }

        Post post = new Post();
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            post.setUser(userOptional.get());
        } else {
            throw new IllegalArgumentException("User not found");
        }

        post.setTitle(newPostDTO.getTitle());
        post.setBody(newPostDTO.getBody());
        post.setCreatedAt(LocalDateTime.now());

        postRepository.save(post);
    }
}

