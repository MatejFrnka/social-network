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

    public PostDTO getPost(Long id) {
        Optional<Post> postOptional = postRepository.findById(id);
        return postOptional.map(postMapper::convertPostToPostDTO).orElse(null);
    }

    public List<PostDTO> getAllPosts() {
        List<Post> posts = (List<Post>) postRepository.findAll();
        return posts.stream()
                .map(postMapper::convertPostToPostDTO)
                .collect(Collectors.toList());
    }

    public void createAndSavePost(NewPostDTO newPostDTO) throws Exception {
        if (newPostDTO == null) {
            throw new IllegalArgumentException("NewPostDTO cannot be null");
        }

        Optional<User> user = userRepository.findById(newPostDTO.getUserId());
        if (user.isEmpty()) {
            throw new Exception("User not found.");
        }
        Post post = new Post();

        post.setUser(user.get());
        post.setTitle(newPostDTO.getTitle());
        post.setBody(newPostDTO.getBody());
        post.setCreatedAt(LocalDateTime.now());

        postRepository.save(post);
    }
}
