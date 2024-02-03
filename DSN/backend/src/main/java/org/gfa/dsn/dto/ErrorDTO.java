package org.gfa.dsn.dto;

import lombok.Data;

@Data
public class ErrorDTO {
    private int status;
    private String message;
    private long timestamp;

    public ErrorDTO(int status, String message, long timestamp) {
        this.status = status;
        this.message = message;
        this.timestamp = timestamp;
    }
}