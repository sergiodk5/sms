<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Competition extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'date_start', 'date_end', 'location'];

    public function events(): BelongsToMany
    {
        return $this->belongsToMany(Event::class)->as('races')->withPivot('date');
    }

    public function participants(): HasManyThrough
    {
        return $this->hasManyThrough(Participant::class, Event::class);
    }
}
