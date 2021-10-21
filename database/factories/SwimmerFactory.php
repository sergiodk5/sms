<?php

namespace Database\Factories;

use App\Models\Swimmer;
use Illuminate\Database\Eloquent\Factories\Factory;

class SwimmerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Swimmer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $genderVal = $this->faker->boolean(50);
        $gender = $genderVal ? 'male' : 'female';

        return [
            'name'     => $this->faker->firstName($gender),
            'last'     => $this->faker->lastName(),
            'guardian' => $this->faker->name(),
            'land'     => $this->faker->phoneNumber(),
            'mobile'   => $this->faker->phoneNumber(),
            'email'    => $this->faker->safeEmail(),
            'address'  => $this->faker->address(),
            'dob'      => $this->faker->dateTimeThisCentury->format('Y-m-d'),
            'gender'   => $genderVal,
            'group_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
