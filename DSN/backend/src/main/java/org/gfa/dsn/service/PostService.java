package org.gfa.dsn.service;

import org.gfa.dsn.convert.PostMapper;
import org.gfa.dsn.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    PostMapper postMapper;
    PostRepository postRepository;

    @Autowired
    public PostService(PostMapper postMapper, PostRepository postRepository) {
        this.postMapper = postMapper;
        this.postRepository = postRepository;
    }

}
