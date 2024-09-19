public class Auto {
    private String brand;
    private Model[] models;

    public Auto(String brand, Model[] models) {
        this.brand = brand;
        this.models = models;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setModelName(int index, String newName) {
        if (index >= 0 && index < models.length) {
            models[index].setName(newName);
        } else {
            throw new IndexOutOfBoundsException("Invalid index: " + index);
        }
    }

    public String[] getModelNames() {
        String[] names = new String[models.length];
        for (int i = 0; i < models.length; i++) {
            names[i] = models[i].getName();
        }
        return names;
    }

    public static class Model {
        private String name;
        private double price;

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
        Auto.Model[] models = new Auto.Model[3];
        models[0] = new Auto.Model("ModelA", 25000.0);
        models[1] = new Auto.Model("ModelB", 30000.0);
        models[2] = new Auto.Model("ModelC", 35000.0);

        Auto auto = new Auto("Brand1", models);

        System.out.println("Initial brand: " + auto.getBrand());
        System.out.println("Initial model names: " + String.join(", ", auto.getModelNames()));

        auto.setBrand("NewBrand");
        auto.setModelName(1, "NewModelB");

        System.out.println("Modified brand: " + auto.getBrand());
        System.out.println("Modified model names: " + String.join(", ", auto.getModelNames()));
    }
}