package edu.lomkiry.Quest.users;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public record UpdateUserRequest(
            @NotBlank
            String username,
            @Email
            @NotBlank
            String email
    ) {}

    public record UpdateEmailRequest(
            @Email
            @NotBlank
            String email
    ) {}

    public record UpdateUsernameRequest(
            @NotBlank
            String username
    ) {}

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public User updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserRequest request
    ) {
        return userService.updateUser(
                id,
                request.username(),
                request.email()
        );
    }

    @PatchMapping("/{id}/email")
    public User updateEmail(
            @PathVariable Long id,
            @Valid @RequestBody UpdateEmailRequest request
    ) {
        return userService.changeEmail(id, request.email());
    }

    @PatchMapping("/{id}/username")
    public User updateUsername(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUsernameRequest request
    ) {
        return userService.changeUsername(id, request.username());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}