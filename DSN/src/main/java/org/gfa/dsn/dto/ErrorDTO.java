package org.gfa.dsn.dto;

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