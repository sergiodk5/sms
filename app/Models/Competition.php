<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Competition extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'date', 'duration'];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }

    public function participants(): HasManyThrough
    {
        return $this->hasManyThrough(Participant::class, Event::class);
    }
}
