package com.example.foodorderback.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Make /uploads/** accessible from browser
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");
    }
}