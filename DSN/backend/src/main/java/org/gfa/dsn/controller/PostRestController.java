package org.gfa.dsn.controller;

import org.gfa.dsn.repository.PostRepository;
import org.gfa.dsn.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostRestController {
    PostRepository postRepository;
    PostService postService;

    @Autowired
    public PostRestController(PostRepository postRepository, PostService postService) {
        this.postRepository = postRepository;
        this.postService = postService;
    }
}
