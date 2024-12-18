package uniCircle.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uniCircle.backend.entity.AdmissionForm;
import uniCircle.backend.entity.Circle;
import uniCircle.backend.entity.User;
@Repository
public interface AdmissionFormRepository extends JpaRepository<AdmissionForm, Long> {
    List<AdmissionForm> findByUser(User user);
    List<AdmissionForm> findByCircle(Circle circle);
}