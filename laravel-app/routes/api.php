<?php

use App\Http\Controllers\ClientController;

// Déclare une ressource API pour le contrôleur ClientController
// Cela génère automatiquement les routes suivantes :
// GET /clients         => index()
// POST /clients        => store()
// GET /clients/{id}    => show()
// PUT|PATCH /clients/{id}    => update()
// DELETE /clients/{id} => destroy()
Route::apiResource('clients', ClientController::class);
