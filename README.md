# public class Auto {
    private String brand; // Поле типа String, хранящее марку автомобиля
    private Model[] models; // Массив моделей

    public Auto(String brand, Model[] models) {
        this.brand = brand;
        this.models = models;
    }

    // Метод для получения марки автомобиля
    public String getBrand() {
        return brand;
    }

    // Метод для модификации марки автомобиля
    public void setBrand(String brand) {
        this.brand = brand;
    }

    // Метод для модификации значения названия модели
    public void setModelName(int index, String newName) {
        if (index >= 0 && index < models.length) {
            models[index].setName(newName);
        } else {
            throw new IndexOutOfBoundsException("Invalid index: " + index);
        }
    }

    // Метод, возвращающий массив названий всех моделей
    public String[] getModelNames() {
        String[] names = new String[models.length];
        for (int i = 0; i < models.length; i++) {
            names[i] = models[i].getName();
        }
        return names;
    }

    // Внутренний класс Model
    public static class Model {
        private String name; // Название модели (уникальное)
        private double price; // Цена модели

        public Model(String name, double price) {
            this.name = name;
            this.price = price;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public double getPrice() {
            return price;
        }
    }
}




public class Main {
    public static void main(String[] args) {
        // Создаем массив моделей для автомобиля
        Auto.Model[] models = new Auto.Model[3];
        models[0] = new Auto.Model("ModelA", 25000.0);
        models[1] = new Auto.Model("ModelB", 30000.0);
        models[2] = new Auto.Model("ModelC", 35000.0);

        // Создаем объект Auto
        Auto auto = new Auto("Brand1", models);

        // Выводим начальные данные
        System.out.println("Initial brand: " + auto.getBrand());
        System.out.println("Initial model names: " + String.join(", ", auto.getModelNames()));

        // Модифицируем марку автомобиля
        auto.setBrand("NewBrand");

        // Модифицируем название модели
        auto.setModelName(1, "NewModelB");

        // Выводим модифицированные данные
        System.out.println("Modified brand: " + auto.getBrand());
        System.out.println("Modified model names: " + String.join(", ", auto.getModelNames()));
    }
}