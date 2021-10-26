<?php

use App\Models\Event;
use App\Models\Swimmer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventSwimmerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_swimmer', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Swimmer::class)->onDelete('cascade');
            $table->foreignIdFor(Event::class)->onDelete('cascade');
            $table->string('rnk')->nullable();
            $table->string('total')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_swimmer');
    }
}
