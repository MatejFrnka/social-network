package org.gfa.dsn.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.gfa.dsn.dto.*;
import org.gfa.dsn.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "Post controller")
public class PostRestController {
    private final PostService postService;

    @Autowired
    public PostRestController(PostService postService) {
        this.postService = postService;
    }


    /**
     * Retrieves all posts available in the system.
     *
     * @return A list of {@code PostDTO} objects representing all posts.
     */
    @Operation(summary = "Get all posts")
    @SecurityRequirement(name = "Bearer Authentication")
    @GetMapping("/posts")
    public List<PostDTO> getAllPosts() {
        return postService.getAllPosts();
    }


    /**
     * Retrieves a post by its unique identifier.
     *
     * @param id The unique identifier of the post.
     * @return The {@code PostDTO} object representing the post with the specified ID.
     * @throws IllegalArgumentException if no post exists with the given ID.
     */
    @Operation(summary = "Get post by id")
    @SecurityRequirement(name = "Bearer Authentication")
    @GetMapping("/posts/{id}")
    public PostDTO getPost(@PathVariable Long id) {
        return postService.getPost(id);
    }


    /**
     * Creates a new post using the provided post data.
     *
     * @param newPostDTO The data for the new post.
     * @return A response entity indicating success or failure of the operation.
     */
    @Operation(summary = "Create new post")
    @SecurityRequirement(name = "Bearer Authentication")
    @PostMapping("/posts/create")
    public ResponseEntity<?> createNewPost(@RequestBody NewPostDTO newPostDTO) {
        try {
            // Create and save the new post using the post data
            postService.createAndSavePost(newPostDTO);
            // Return success response with status code 201 (Created)
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            // Return error response with status code 500 (Internal Server Error)
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
