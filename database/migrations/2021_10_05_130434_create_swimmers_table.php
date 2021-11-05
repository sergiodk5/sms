<?php

use App\Models\Group;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSwimmersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('swimmers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last')->nullable();
            $table->string('guardian')->nullable();
            $table->string('land')->nullable();
            $table->string('mobile')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->date('dob')->nullable();
            $table->boolean('gender');
            $table->string('photo')->nullable();
            $table->string('register_number')->unique()->nullable();
            $table->unsignedBigInteger('group_id')->nullable()->constrained();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('group_id')->references('id')->on('groups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('swimmers');
    }
}
