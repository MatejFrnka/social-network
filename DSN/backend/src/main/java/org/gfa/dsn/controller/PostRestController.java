package org.gfa.dsn.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.gfa.dsn.dto.ErrorDTO;
import org.gfa.dsn.dto.NewPostDTO;
import org.gfa.dsn.dto.PostDTO;
import org.gfa.dsn.service.PostService;
import org.gfa.dsn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "Post controller")
public class PostRestController {
    private final PostService postService;
    private final UserService userService;

    @Autowired
    public PostRestController(PostService postService, UserService userService) {
        this.postService = postService;
        this.userService = userService;
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
     */
    @Operation(summary = "Get post by id")
    @SecurityRequirement(name = "Bearer Authentication")
    @GetMapping("/posts/{id}")
    public ResponseEntity<?> getPost(@PathVariable Long id) {
        try {
            PostDTO postDTO = postService.getPost(id);
            if (postDTO == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorDTO(HttpStatus.NOT_FOUND.value(), "Post not found", System.currentTimeMillis()));
            }
            return ResponseEntity.ok(postDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorDTO(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server Error", System.currentTimeMillis()));
        }
    }

    /**
     * Creates a new post.
     *
     * @param newPostDTO DTO containing information for the new post.
     * @return A response entity indicating success or failure of the operation.
     */
    @Operation(summary = "Create new post")
    @SecurityRequirement(name = "Bearer Authentication")
    @PostMapping("/posts/create")
    public ResponseEntity<?> createNewPost(@RequestBody NewPostDTO newPostDTO) {
        try {
            // Retrieve user ID from the token
            String authenticatedUserName = SecurityContextHolder.getContext().getAuthentication().getName();
            Long userId = userService.getUserIdByUsername(authenticatedUserName);

            // Create and save the new post using the post data and user ID
            postService.createAndSavePost(newPostDTO, userId);

            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorDTO(HttpStatus.BAD_REQUEST.value(), e.getMessage(), System.currentTimeMillis()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorDTO(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server Error", System.currentTimeMillis()));
        }
    }
}
