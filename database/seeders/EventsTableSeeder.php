<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    // https://www.topendsports.com/events/summer/sports/swimming.htm

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $races = [
            ['title' => '50m Freestyle Men', 'gender' => 1],
            ['title' => '100m Freestyle Men', 'gender' => 1],
            ['title' => '200m Freestyle Men', 'gender' => 1],
            ['title' => '400m Freestyle Men', 'gender' => 1],
            ['title' => '800m Freestyle Men', 'gender' => 1],
            ['title' => '1500m Freestyle Men', 'gender' => 1],
            ['title' => '50m Freestyle Women', 'gender' => 2],
            ['title' => '100m Freestyle Women', 'gender' => 2],
            ['title' => '200m Freestyle Women', 'gender' => 2],
            ['title' => '400m Freestyle Women', 'gender' => 2],
            ['title' => '800m Freestyle Women', 'gender' => 2],
            ['title' => '1500m Freestyle Women', 'gender' => 2],
            ['title' => '100m Backstroke Men', 'gender' => 1],
            ['title' => '200m Backstroke Men', 'gender' => 1],
            ['title' => '100m Backstroke Women', 'gender' => 2],
            ['title' => '200m Backstroke Women', 'gender' => 2],
            ['title' => '100m Breaststroke Men', 'gender' => 1],
            ['title' => '200m Breaststroke Men', 'gender' => 1],
            ['title' => '100m Breaststroke Women', 'gender' => 2],
            ['title' => '200m Breaststroke Women', 'gender' => 2],
            ['title' => '100m Butterfly Men', 'gender' => 1],
            ['title' => '200m Butterfly Men', 'gender' => 1],
            ['title' => '100m Butterfly Women', 'gender' => 2],
            ['title' => '200m Butterfly Women', 'gender' => 2],
            ['title' => '200m Medley Men', 'gender' => 1],
            ['title' => '400m Medley Men', 'gender' => 1],
            ['title' => '200m Medley Women', 'gender' => 2],
            ['title' => '400m Medley Women', 'gender' => 2],
            ['title' => '4x100m Freestyle Relay Men', 'gender' => 1],
            ['title' => '4x200m Freestyle Relay Men', 'gender' => 1],
            ['title' => '4x100m Freestyle Relay Women', 'gender' => 2],
            ['title' => '4x200m Freestyle Relay Women', 'gender' => 2],
            ['title' => '4x100m Freestyle Relay Women', 'gender' => 2],
            ['title' => '4x100m Medley Relay Men', 'gender' => 1],
            ['title' => '4x100m Medley Relay Women', 'gender' => 2],
            ['title' => '4x100m Medley Relay Mixed', 'gender' => 3],
        ];

        foreach ($races as $race) {
            Event::create([
                'title' => $race['title'],
                'gender' => $race['gender'],
            ]);
        }
    }
}
