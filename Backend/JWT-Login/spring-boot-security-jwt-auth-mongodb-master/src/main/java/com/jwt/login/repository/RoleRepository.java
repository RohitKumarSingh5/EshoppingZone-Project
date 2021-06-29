package com.jwt.login.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jwt.login.models.ERole;
import com.jwt.login.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
