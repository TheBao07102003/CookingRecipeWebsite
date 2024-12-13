package com.example.food.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.food.dto.Agenda;
import com.example.food.dto.AgendaRespond;
import com.example.food.dto.FoodDTO;
import com.example.food.dto.FoodRequest;
import com.example.food.entity.Food;
import com.example.food.repository.FoodRepository;
import com.example.food.utils.FoodUtils;

@Service
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodRepository foodRepository;

    /**
     * Retrieves all distinct countries, dietary options, and cooking methods
     * from the database.
     *
     * @return Agenda DTO containing the consolidated data.
     */
    @Override
    public Agenda getAgentDataToday() {
        // Retrieve distinct countries from Food table
        List<String> countries = foodRepository.findAll()
                .stream()
                .map(Food::getCountry)
                .distinct()
                .collect(Collectors.toList());

        // Retrieve distinct dietary options from Food table
        List<String> dietaryOptions = foodRepository.findAll()
                .stream()
                .map(Food::getDietary)
                .distinct()
                .collect(Collectors.toList());

        // Retrieve distinct cooking methods from CookingMethod table
        List<String> methods = foodRepository.findAll()
                .stream()
                .map(Food::getMethod)
                .distinct()
                .collect(Collectors.toList());

        // Create Agenda DTO
        return Agenda.builder()
                .country(String.join(", ", countries))
                .dieatry(String.join(", ", dietaryOptions))
                .method(String.join(", ", methods))
                .build();
    }

    @Override
    public List<FoodDTO> getFoodsByCountry(String country) {
        List<Food> foods = foodRepository.findByCountry(country);

        return foods.stream()
                .map(food -> FoodDTO.builder()
                .foodId(food.getFoodId())
                .name(food.getName())
                .description(food.getDescription())
                .image(food.getImage())
                .level(food.getLevel())
                .time(food.getTime())
                .dietary(food.getDietary())
                .country(food.getCountry())
                .ingredient(food.getIngredient())
                .build())
                .collect(Collectors.toList());
    }

    @Override
    public AgendaRespond addFood(FoodRequest foodRequest) {

        // Kiểm tra xem món ăn đã tồn tại chưa
        if (foodRepository.existsByName(foodRequest.getName())) {
            return AgendaRespond.builder()
                    .responeCode("FOOD_EXISTS")
                    .responeMessage("Food with this name already exists")
                    .FoodDTO(null)
                    .build();
        }

        // Map FoodDTO to Food entity
        @SuppressWarnings("unused")
        Food food = Food.builder()
                .foodId(foodRequest.getFoodId())
                .name(foodRequest.getName())
                .description(foodRequest.getDescription())
                .image(foodRequest.getImage())
                .level(foodRequest.getLevel())
                .time(foodRequest.getTime())
                .dietary(foodRequest.getDietary())
                .country(foodRequest.getCountry())
                .ingredient(foodRequest.getIngredient())
                .build();
        // Save to database
        Food savedFood = foodRepository.save(food);

        // Create FoodInfo response
        FoodDTO foodDTO = FoodDTO.builder()
                .foodId(savedFood.getFoodId())
                .name(savedFood.getName())
                .description(savedFood.getDescription())
                .image(savedFood.getImage())
                .level(savedFood.getLevel())
                .time(savedFood.getTime())
                .dietary(savedFood.getDietary())
                .country(savedFood.getCountry())
                .ingredient(savedFood.getIngredient())
                .build();
        // Save to database
        return AgendaRespond.builder()
                .responeCode(FoodUtils.FOOD_CREATION_SUCCESS_CODE)
                .responeMessage(FoodUtils.FOOD_CREATION_SUCCESS_MESSAGE)
                .FoodDTO(foodDTO)
                .build();
    }

    @Override
    public List<FoodDTO> getFoodsByDietary(String dietary) {
        List<Food> foods = foodRepository.findByDietary(dietary);
        return foods.stream()
                .map(food -> FoodDTO.builder()
                .name(food.getName())
                .foodId(food.getFoodId())
                .description(food.getDescription())
                .image(food.getImage())
                .level(food.getLevel())
                .time(food.getTime())
                .dietary(food.getDietary())
                .country(food.getCountry())
                .ingredient(food.getIngredient())
                .build())
                .collect(Collectors.toList());
    }

    @Override
    public List<FoodDTO> getFoodsByMethod(String method) {
        List<Food> foods = foodRepository.findByMethod(method);
        return foods.stream()
                .map(food -> FoodDTO.builder()
                .name(food.getName())
                .foodId(food.getFoodId())
                .description(food.getDescription())
                .image(food.getImage())
                .level(food.getLevel())
                .time(food.getTime())
                .dietary(food.getDietary())
                .country(food.getCountry())
                .ingredient(food.getIngredient())
                .build())
                .collect(Collectors.toList());
    }
}
