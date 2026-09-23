<script setup>
import logo from "../assets/logo.png"
import iconDiscord from "../assets/iconDiscord.png"
import iconInstagram from "../assets/iconInstagram.png"

const links = [
    'Início',
    'Palestras',
    'Rodas de conversa',
    'Sobre',
    'Contato',
]

const socialLinks = [
    { img: iconDiscord, href: 'https://discord.com/invite/UsPyRXm4ax', label: 'Discord'},
    { img: iconInstagram, href: 'https://www.instagram.com/aprimore_qxd/', label: 'Instagram'},
]
</script>

<template>
    <v-footer app class="d-flex flex-column align-center justify-center py-3" color="surface-light">
        
        <div class="d-flex align-center justify-start ga-2 mb-3 w-100 header-container">
            <v-btn v-for="social in socialLinks" :key="social.label" :href="social.href" target="_blank"
                rel="noopener noreferrer" variant="text" icon size="large" class="rounded-circle, custom-v-icon"
                :aria-label="social.label">

                <img 
                    :src="social.img" 
                    :alt="social.label" 
                    class="custom-social-icon"
                >
            </v-btn>

                <img :src="logo" alt="Logo" class="footer-logo centered-logo">

        </div>

        <v-divider class="w-100 mb-3 mt-2 border-opacity-25"></v-divider>

        <div class="d-flex align-center justify-center ga-2 flex-wrap">
            <v-btn v-for="link in links" :key="link" :text="link" variant="text" rounded>
            </v-btn>
        </div>

        

        <div class="text-center mt-1 copyright-text">
            &copy
                <a href="https://github.com/kendriks" target="_blank" rel="noopener noreferrer" class="github-link">
                    Todos os direitos reservados
                </a>
        </div>
    </v-footer>
</template>

<style scoped>
.header-container {
  position: relative;
}

.centered-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0;
  padding: 5px;
}

.footer-logo {
    width: 80px;
    height: auto;
}

.custom-social-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    transform: scale(1.3);
}

.copyright-text {
  font-size: 0.75rem;
  opacity: 0.8;
}
</style>
