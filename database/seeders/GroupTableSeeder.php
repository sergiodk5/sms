<?php

namespace Database\Seeders;

use App\Models\Group;
use Illuminate\Database\Seeder;

class GroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $groups = array(
            array(
                'name' => 'Level 1',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia.',
            ),
            array(
                'name' => 'Level 2',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, incidunt.',
            ),
            array(
                'name' => 'Level 3',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur.',
            ),
            array(
                'name' => 'Level 4',
                'description' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quisquam.',
            ),
            array(
                'name' => 'Level 5',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, facere.',
            ),
            array(
                'name' => 'Level 6',
                'description' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, adipisci?',
            ),
            array(
                'name' => 'Level 7',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nobis.',
            ),
            array(
                'name' => 'Level 8',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, commodi!',
            ),
            array(
                'name' => 'Level 9',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sequi!',
            ),
            array(
                'name' => 'Level 10',
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, velit.',
            )
        );

        foreach ($groups as $group) {
            Group::create([
                'name' => $group['name'],
                'description' => $group['description'],
            ]);
        }
    }
}
