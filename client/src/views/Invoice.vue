<script>
import { mapState, mapActions } from "pinia";
import { useClientStore } from "../stores/client";

export default {
  name: "invoice",
  methods: {
    ...mapActions(useClientStore, ["getInvoice", "checkSnap"]),
  },
  computed: {
    ...mapState(useClientStore, ["invoice"]),
  },
  created() {
    this.getInvoice();
  },
};
</script>

<template>
  <div class="flex justify-center mt-9">
    <div class="overflow-x-auto relative shadow-lg sm:rounded-lg mb-10 w-7/12">
      <table class="w-full text-sm bg-white text-left">
        <div
          v-if="invoice.Invoices[invoice.Invoices.length - 1].length !== 0"
          class="mx-auto p-16"
          style="max-width: 800px"
        >
          <div class="flex items-center justify-between mb-8 px-3">
            <div>
              <p class="text-red-500 font-bold">
                {{ invoice.Invoices[invoice.Invoices.length - 1].isPay }}
              </p>
              <span class="text-2xl">Invoice #</span>:
              {{ invoice.Invoices[invoice.Invoices.length - 1].token_payment
              }}<br />
              <span>Date</span>:
              {{
                invoice.Invoices[invoice.Invoices.length - 1].createdAt.slice(
                  0,
                  10
                )
              }}<br />
            </div>
            <div class="text-right">
              <img
                src="https://www.stenvdb.be/assets/img/email-signature.png"
              />
            </div>
          </div>

          <div class="flex justify-between mb-8 px-3">
            <div>
              Toko &amp; Shopii<br />
              Jln Raya Rengel Depan Pegadaian<br />
              REngel, Tuban, Jawa Timur<br />
              BrownCat@gmial.com<br />
              +62 89523652573
            </div>
            <div class="text-right">
              Company Name<br />
              Street <br />
              City<br />
              shopii@yoursite.com
            </div>
          </div>

          <div class="border border-t-2 border-gray-200 mb-8 px-3"></div>

          <div class="mb-8 px-3">
            <p>
              Tarimakasih telah melakukan pebelian di toko ini, untuk rincianya
              adalah sebagai berikut :
            </p>
          </div>

          <div
            v-for="product in invoice.Invoices[invoice.Invoices.length - 1]
              .information"
            class="flex justify-between mb-4 bg-gray-200 px-3 py-2"
          >
            <div>{{ product.productName }}</div>
            <div>{{ product.quantity }} x</div>
            <div class="text-right font-medium">Rp, {{ product.price }}</div>
          </div>
          <div class="flex justify-between mb-4 bg-gray-200 px-3 py-2">
            <div>Ongkir</div>
            <!-- <div>{{ product.quantity }} x</div> -->
            <div class="text-right font-medium">
              Rp, {{ invoice.Invoices[invoice.Invoices.length - 1].ongkir }}
            </div>
          </div>

          <div class="flex justify-between items-center mb-2 px-3">
            <div class="text-2xl leading-none">
              <span class="">Total</span>:
            </div>
            <div class="text-2xl text-right font-medium">
              Rp,
              {{
                invoice.Invoices[invoice.Invoices.length - 1].totalPrice +
                invoice.Invoices[invoice.Invoices.length - 1].ongkir
              }}
            </div>
          </div>

          <div class="flex mb-8 justify-end px-3">
            <div class="text-right w-1/2 px-0 leading-tight">
              <small class="text-xs"
                >Barang yang sudah di beli tidak boleh dikembalikan
              </small>
            </div>
          </div>
          <div class="flex justify-center m-4">
            <a
              @click.prevent="
                checkSnap(
                  invoice.Invoices[invoice.Invoices.length - 1].token_payment,
                  invoice.Invoices[invoice.Invoices.length - 1].id
                )
              "
              class="p-3 w-3/12 text-center border-none border-slate-300 rounded-sm mt-3 text-neutral-50 bg-orange-500 hover:bg-orange-600"
            >
              Your Link Payment
            </a>
          </div>

          <div class="mb-8 text-4xl text-center px-3">
            <span>Thank you!</span>
          </div>

          <div class="text-center text-sm px-3">
            BrownCat@gmail.com ∖ www.shopii.com
          </div>
        </div>
        <div
          v-if="invoice.Invoices[0].length === 0"
          class="p-8 text-center justify-center font-bold"
        >
          TIDAK ADA INVOICE
        </div>
      </table>
    </div>
  </div>
</template>
