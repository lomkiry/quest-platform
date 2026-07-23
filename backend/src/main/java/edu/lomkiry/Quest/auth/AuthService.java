package edu.lomkiry.Quest.auth;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import edu.lomkiry.Quest.users.User;
import edu.lomkiry.Quest.users.UserRepository;

@Service
public class AuthService {
        private final UserRepository userRepository;
        private final BCryptPasswordEncoder bCryptPasswordEncoder;

        AuthService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
            this.userRepository = userRepository;
            this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        }

        public void registerUser(String username, String email, String password) {
            User user = new User();
            user.setEmail(email);
            user.setUsername(username);
            user.setPassword(bCryptPasswordEncoder.encode(password));

            userRepository.save(user);
        }
}
